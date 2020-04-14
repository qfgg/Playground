import React, { Component } from 'react';
import classNames from 'classnames';
import blacklist from 'blacklist';
import { ITEM_TYPES, ITEM_TYPE_MAP } from '../../../constants/My/Item/ItemTypes';
import FavPopup from '../../FavPopup';
import DualPopup from '../../DualPopup';
import IPPopup from '../../IPPopup';
import FavoredItemList from './FavoredItemList';
import './index.less';


class Item extends Component {
  constructor(props) {
    super(props);
    // isSearching flag records if user is typing in more than 1 letter to search
    // used for determine whether to display whole list
    this.state = {
      isSearching: false,
      isIFSearching: false
    };
  }

  componentDidMount() {
    const { type, initItem } = this.props;
    initItem(type);
  }

  setSearchingFlag = (isSearching) => {
    this.setState({ isSearching });
  };

  setIFSearchingFlag = (isSearching) => {
    this.setState({
      isIFSearching: isSearching
    });
  };

  handleToggleFavor = (type, item) => {
    const { saveItem, delItem } = this.props;
    const data = {
      itmVal: item.id,
      itmTp: ITEM_TYPE_MAP[type]
    };
    if (item.selected) {
      delItem(type, item);
    } else {
      item = blacklist(item, 'selected', 'favored');
      item.favored = true;
      saveItem(type, item, data);
    }
  };

  addFavor = (type, item) => {
    const { saveItem } = this.props;
    const data = {
      itmVal: item.id,
      itmTp: ITEM_TYPE_MAP[type]
    };
    item = blacklist(item, 'selected', 'favored');
    saveItem(type, item, data);
  };

  removeFavor = (type, item) => {
    const { delItem } = this.props;
    delItem(type, item);
  };

  handleRouterSelect = (item) => {
    const { addSelIfrouter, removeSelIfrouter } = this.props;
    const fn = item.selected ? removeSelIfrouter : addSelIfrouter;
    item = blacklist(item, 'selected');
    fn(item);
  };

  getList = (favoredItemList, searchResList, initResList) => {
    const head = favoredItemList.map(item => ({
      ...item,
      selected: true
    }));
    const normalList = this.state.isSearching &&
      searchResList &&
      Array.isArray(searchResList) &&
      searchResList.length ? searchResList :
      !this.state.isSearching &&
      initResList &&
      Array.isArray(initResList) &&
      initResList.length ? initResList : [];
    const tail = normalList.map(item => ({
      ...item,
      text: item.fullName || item.name || item.host_name || item.esmNm,
      id: item.asNo ||
        item.intfNo ||
        item.routerNo ||
        item.popNo ||
        item.idcCd ||
        item.cntryCd ||
        item.esmCd ||
        item.crctId ||
        item.ispId ||
        item.prefix
    })).filter(item => head.every(i => i.id !== item.id));
    return [...head, ...tail];
  };

  getRouterList = (selectedIfrouter, ifRouterResList, ifRouterInitResList) => {
    const normalList = this.state.isIFSearching &&
      ifRouterResList &&
      Array.isArray(ifRouterResList) &&
      ifRouterResList.length ? ifRouterResList :
      !this.state.isIFSearching &&
      ifRouterInitResList &&
      Array.isArray(ifRouterInitResList) &&
      ifRouterInitResList.length ? ifRouterInitResList : [];
    const list = normalList.map(item => ({
      ...item,
      text: item.fullName || item.name || item.host_name || item.esmNm,
      id: item.asNo ||
        item.intfNo ||
        item.routerNo ||
        item.popNo ||
        item.idcCd ||
        item.cntryCd ||
        item.esmCd ||
        item.crctId ||
        item.ispId ||
        item.prefix
    }));
    if (!selectedIfrouter) {
      return list;
    }
    const node = list.find(item => item.text === selectedIfrouter.text);
    if (node) {
      node.selected = true;
      return list;
    }
    return [{ ...selectedIfrouter, selected: true }, ...list];
  };

  renderPopup = (type, list, routerList, initList, initListSuccess, searchList,
    searchListSuccess, selectedIfrouter, searchPage, ifSearchPage, loading, ifLoading,
    initResList, initPage, ifRouterInitResList, ifInitPage, favoredItemList, initItem) =>
    (type === 'IF' ? (
      <DualPopup
        className="inline lr-space"
        type={type}
        routerList={routerList}
        list={list}
        toggleSelect={target => this.handleToggleFavor(type, target)}
        searchPage={searchPage}
        handleRouterSelect={this.handleRouterSelect}
        initList={initList}
        initListSuccess={initListSuccess}
        searchList={searchList}
        initPage={initPage}
        ifSearchPage={ifSearchPage}
        searchListSuccess={searchListSuccess}
        selectedIfrouter={selectedIfrouter}
        loading={loading}
        ifLoading={ifLoading}
        initResList={initResList}
        ifInitPage={ifInitPage}
        ifRouterInitResList={ifRouterInitResList}
        setSearchingFlag={this.setSearchingFlag}
        setIFSearchingFlag={this.setIFSearchingFlag}
        favorOnly
        initItem={initItem}
      >
        <button type="button" className="icon-btn fa fa-plus-circle" />
      </DualPopup>
    ) : type === 'Prefix' ? (
      <IPPopup
        className="inline lr-space"
        selectedItemList={favoredItemList}
        addSelect={target => this.addFavor(type, target)}
        removeSelect={target => this.removeFavor(type, target)}
        list={list.map(item => ({ ...item, prefix: item.text }))}
        favorOnly
      >
        <button type="button" className="icon-btn fa fa-plus-circle" />
      </IPPopup>
    ) : (
      <FavPopup
        className="inline lr-space"
        type={type}
        domainType={type}
        toggleSelect={target => this.handleToggleFavor(type, target)}
        toggleFavor={target => this.handleToggleFavor(type, target)}
        list={list}
        searchList={searchList}
        searchListSuccess={searchListSuccess}
        searchPage={searchPage}
        loading={loading}
        initResList={initResList}
        initList={initList}
        initPage={initPage}
        setSearchingFlag={this.setSearchingFlag}
        selectedIsFavor
      >
        <button type="button" className="icon-btn fa fa-plus-circle" />
      </FavPopup>
    ));

  render() {
    const {
      type,
      favoredItemList,
      initResList,
      searchResList,
      selectedIfrouter,
      ifRouterResList,
      ifRouterInitResList,
      initList,
      initListSuccess,
      searchList,
      searchListSuccess,
      searchPage,
      ifSearchPage,
      loading,
      ifLoading,
      initPage,
      ifInitPage,
      ItemLoading,
      initItem
    } = this.props;
    const hintClass = classNames('hint', {
      show: !favoredItemList || favoredItemList.length === 0
    });
    const list = this.getList(favoredItemList, searchResList, initResList);
    const routerList = this.getRouterList(selectedIfrouter, ifRouterResList, ifRouterInitResList);

    return (
      <li className="li-custom">
        <div className="hr-line-dashed line-custom" />
        <div className="title-custom">
          <span className="filter-item-text">{type}</span>
          {this.renderPopup(type, list, routerList, initList, initListSuccess,
            searchList, searchListSuccess, selectedIfrouter, searchPage,
            ifSearchPage, loading, ifLoading, initResList, initPage,
            ifRouterInitResList, ifInitPage, favoredItemList, initItem)}
        </div>
        {
          ItemLoading ? (
            <div className="spinner fav">
              <i className="fa fa-spinner" />
            </div>
          ) : <div className={hintClass}>Click "+" button to add items here.</div>
        }
        <FavoredItemList
          list={favoredItemList || []}
          onRemove={target => this.removeFavor(type, target)}
        />
      </li>
    );
  }
}

export default class ItemList extends Component {
  render() {
    const itemList = ITEM_TYPES;
    const {
      initItemList,
      favoredItemList,
      initResList,
      searchResList,
      selectedIfrouter,
      initList,
      initListSuccess,
      searchList,
      searchListSuccess,
      addFavItem,
      removeFavItem,
      addSelIfrouter,
      removeSelIfrouter,
      initItem,
      saveItem,
      delItem,
    } = this.props;

    return (
      <div>
        <div className="item">
          <ul className="category-list filter-item-list">
            {itemList.map((item, idx) =>
              (
                <Item
                  key={idx}
                  type={item}
                  favoredItemList={favoredItemList[item] || []}
                  initResList={initResList[item] ? initResList[item].res : []}
                  initItem={initItem}
                  ifRouterResList={searchResList.IF_Router ? searchResList.IF_Router.res : []}
                  selectedIfrouter={selectedIfrouter}
                  initListSuccess={initListSuccess}
                  initList={initList}
                  searchListSuccess={searchListSuccess}
                  ifRouterInitResList={initResList.IF_Router ? initResList.IF_Router.res : []}
                  ifSearchPage={searchResList.IF_Router ? searchResList.IF_Router.page : undefined}
                  searchPage={searchResList[item] ? searchResList[item].page : undefined}
                  addSelIfrouter={addSelIfrouter}
                  removeSelIfrouter={removeSelIfrouter}
                  searchList={searchList}
                  initPage={initResList[item] ? initResList[item].page : undefined}
                  loading={(searchResList[item] && searchResList[item].isFetching) ||
                    (initResList[item] && initResList[item].isFetching)}
                  addFavItem={addFavItem}
                  removeFavItem={removeFavItem}
                  ifLoading={(searchResList.IF_Router && searchResList.IF_Router.isFetching) ||
                    (initResList.IF_Router && initResList.IF_Router.isFetching)}
                  ifInitPage={initResList.IF_Router ? initResList.IF_Router.page : undefined}
                  searchResList={searchResList[item] ? searchResList[item].res : []}
                  ItemLoading={initItemList[item] && initItemList[item].isFetching}
                  saveItem={saveItem}
                  delItem={delItem}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
