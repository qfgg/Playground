import React, { Component } from 'react';
import PropTypes from 'prop-types';
import blacklist from 'blacklist';
import FavPopup from '../../FavPopup';
import { ITEM_TYPE_MAP } from '../../../constants/My/Item/ItemTypes';


export default class DomainInput extends Component {
  handleToggleSelect = (type, item) => {
    const { addSelItem, removeSelItem } = this.props;
    const fn = item.selected ? removeSelItem : addSelItem;
    const newItem = blacklist(item, 'selected', 'favored');
    fn({ type, item: newItem });
  };

  handleToggleFavor = (type, item) => {
    const { saveItem, delItem } = this.props;
    const data = {
      itmVal: item.id,
      itmTp: ITEM_TYPE_MAP[type],
    };
    if (item.favored) {
      delItem(type, item);
    } else {
      const newItem = blacklist(item, 'selected', 'favored');
      saveItem(type, newItem, data);
    }
  };

  clearSelect = (type) => {
    const { selectedItemList, clearSel } = this.props;
    if (selectedItemList && selectedItemList.length > 0) {
      clearSel(type);
    }
  };

  render() {
    const {
      type,
      list,
      initResList,
      searchPage,
      loading,
      initPage,
      searchListSuccess,
      initList,
      searchList,
      setSearchingFlag,
      selectedItemList,
    } = this.props;

    return (
      <div className="domain-input">
        <input
          type="text"
          className="form-control"
          readOnly
          value={selectedItemList.map(item => item.text).join(', ')}
        />
        <FavPopup
          className="fav-popup"
          type={type}
          domainType={type}
          toggleFavor={target => this.handleToggleFavor(type, target)}
          list={list}
          searchList={searchList}
          toggleSelect={target => this.handleToggleSelect(type, target)}
          searchListSuccess={searchListSuccess}
          searchPage={searchPage}
          loading={loading}
          initResList={initResList}
          initList={initList}
          initPage={initPage}
          setSearchingFlag={setSearchingFlag}
          favorOnly={type === 'PoP'}
          onClear={this.clearSelect.bind(this, type)}
        >
          <button type="button" className="icon-btn fa fa-plus-circle" />
        </FavPopup>
      </div>
    );
  }
}

DomainInput.propTypes = {
  addSelItem: PropTypes.func,
  removeSelItem: PropTypes.func,
  saveItem: PropTypes.func,
  delItem: PropTypes.func,
  type: PropTypes.string,
  list: PropTypes.array,
  initResList: PropTypes.array,
  searchPage: PropTypes.number,
  loading: PropTypes.bool,
  initPage: PropTypes.number,
  searchListSuccess: PropTypes.func,
  initList: PropTypes.func,
  searchList: PropTypes.func,
  setSearchingFlag: PropTypes.func,
  selectedItemList: PropTypes.array,
};
