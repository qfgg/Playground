import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';


class FavList extends Component {
  renderItem(item, key) {
    const { favorOnly, onSelect, onFavor, selectedIsFavor } = this.props;
    if (selectedIsFavor) {
      item.favored = item.selected;
    }
    const className = classNames('list-group-item', {
      selected: item.selected,
      favored: item.favored,
    });

    return (
      <li key={key} className={className} >
        <a onClick={() => onSelect(item)} >
          {item.text}
        </a>
        {
          favorOnly || item.id === '*' ?
            '' : <span className="fa" onClick={() => onFavor(item)} />
        }
      </li>
    );
  }

  render() {
    const { list } = this.props;

    return (
      <ul className="list-group">
        {
          list.map((item, idx) =>
            this.renderItem(item, idx))
        }
      </ul>
    );
  }
}

FavList.propTypes = {
  favorOnly: PropTypes.bool,
  onSelect: PropTypes.func,
  onFavor: PropTypes.func,
  list: PropTypes.array,
  selectedIsFavor: PropTypes.bool,
};

export default class Popup extends Component {
  componentWillReceiveProps(nProps) {
    const {
      isOpen,
      type,
      domainType,
      searchListSuccess,
      initResList,
      initList,
      setSearchingFlag,
      initItem
    } = this.props;
    if (isOpen && !nProps.isOpen) {
      this.input.value = '';
      searchListSuccess({ type, res: [] });
      setSearchingFlag(false);
    }
    if (!isOpen && nProps.isOpen && (!initResList || !initResList.length)) {
      initList(type, domainType, 1);
      if (initItem) {
        initItem(domainType);
      }
    }
  }

  handleChange = (evt, type, domainType) => {
    const inputText = evt.target.value;
    const { searchList, searchListSuccess, setSearchingFlag } = this.props;

    if ((inputText && inputText.length > 1) || (inputText === '*')) {
      searchList(type, domainType, 1, inputText);
      setSearchingFlag(true);
    } else {
      searchListSuccess({ type, res: [] });
      setSearchingFlag(false);
    }
  };

  handleScroll = (evt, listLen, type, domainType, searchPage, initPage) => {
    const target = evt.target;
    const query = this.input.value;
    const { searchList, initList } = this.props;
    if ((target.offsetHeight + target.scrollTop === target.scrollHeight + 17) && listLen > 0) {
      if (query && query.length > 1) {
        searchList(type, domainType, searchPage + 1, query);
      } else {
        initList(type, domainType, initPage + 1);
      }
    }
  };

  render() {
    const {
      type,
      domainType,
      favorOnly,
      isOpen,
      list,
      toggleSelect,
      toggleFavor,
      onCancel,
      onClear,
      searchPage,
      loading,
      initPage,
      selectedIsFavor,
    } = this.props;
    const className = classNames('popup-wrap', {
      hide: !isOpen,
    });

    return (
      <div className={className}>
        <div className="input-wrap">
          <input
            type="text"
            ref={c => this.input = c}
            className="form-control"
            onChange={evt => this.handleChange(evt, type, domainType)}
          />
        </div>
        <Scrollbars
          style={{ height: 185 }}
          autoHide
          autoHideTimeout={400}
          onScroll={evt =>
            this.handleScroll(evt, list.length, type, domainType, searchPage, initPage)}
        >
          <FavList
            list={list}
            onSelect={toggleSelect}
            onFavor={toggleFavor}
            favorOnly={favorOnly}
            selectedIsFavor={selectedIsFavor}
          />
        </Scrollbars>
        {
          loading ? <div className="spinner"><i className="fa fa-spinner" /></div> : ''
        }
        <div className="btngrp">
          <button
            type="button"
            className="btn btn-info btn-xs btn-clear"
            onClick={onClear}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-info btn-xs btn-close"
            onClick={onCancel}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  favorOnly: PropTypes.bool,
  list: PropTypes.array,
  isOpen: PropTypes.bool,
  type: PropTypes.string,
  domainType: PropTypes.string,
  searchListSuccess: PropTypes.func,
  initResList: PropTypes.array,
  initList: PropTypes.func,
  setSearchingFlag: PropTypes.func,
  searchList: PropTypes.func,
  toggleFavor: PropTypes.func,
  toggleSelect: PropTypes.func,
  onCancel: PropTypes.func,
  searchPage: PropTypes.number,
  loading: PropTypes.bool,
  initPage: PropTypes.number,
  selectedIsFavor: PropTypes.bool,
};
