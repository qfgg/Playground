import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';
import FavList from './FavList';


export default class Popup extends Component {
  componentWillReceiveProps(nProps) {
    const {
      isOpen,
      type,
      initList,
      initListSuccess,
      searchListSuccess,
      selectedIfrouter,
      ifRouterInitResList,
      setSearchingFlag,
      setIFSearchingFlag,
      initItem
    } = this.props;
    // when closing popup, clear input field and set list empty
    if (isOpen && !nProps.isOpen) {
      this.routerInput.value = '';
      this.ifInput.value = '';
      searchListSuccess({ type: `${type}_Router`, res: [] });
      searchListSuccess({ type, res: [] });
      setSearchingFlag(false);
      setIFSearchingFlag(false);
    }
    if (!isOpen && nProps.isOpen && (!ifRouterInitResList || !ifRouterInitResList.length)) {
      initList(`${type}_Router`, 'Router', 1);
      initItem('IF');
    }
    // IF dual popup: if selecting a new router,
    // clear interface input field and set interface search list empty.
    // meanwhile, set all interface belongs to the selected router as initial list
    if ((!selectedIfrouter && nProps.selectedIfrouter) ||
    (selectedIfrouter && nProps.selectedIfrouter &&
    selectedIfrouter.routerNo !== nProps.selectedIfrouter.routerNo)) {
      this.ifInput.value = '';
      searchListSuccess({ type, res: [] });
      initList(type, 'IF', 1, nProps.selectedIfrouter.routerNo);
      setSearchingFlag(false);
    } else if (selectedIfrouter && !nProps.selectedIfrouter) {
    // if canceling selecting router, clear interface input field and interface initial&search list
      this.ifInput.value = '';
      searchListSuccess({ type, res: [] });
      initListSuccess({ type, res: [] });
      setSearchingFlag(false);
    }
  }

  // when typing more than 1 letter, request search API and get first 10 results
  handleChange = (evt, type, domainType, subquery) => {
    const inputText = evt.target.value;
    const {
      searchList,
      searchListSuccess,
      setSearchingFlag,
      setIFSearchingFlag,
    } = this.props;
    const fn = domainType === 'Router' ? setIFSearchingFlag : setSearchingFlag;

    if (inputText && inputText.length > 1) {
      searchList(type, domainType, 1, inputText, subquery);
      fn(true);
    } else {
      searchListSuccess({ type, res: [] });
      fn(false);
    }
  };

  // when scrolling to bottom, get another page 10 results and add to current displaying list
  handleScroll = (evt, listLen, type, domainType, searchPage, initPage, subquery) => {
    const target = evt.target;
    const query = domainType === 'Router' ? this.routerInput.value : this.ifInput.value;
    const { searchList, initList } = this.props;
    if ((target.offsetHeight + target.scrollTop === target.scrollHeight + 17) && listLen > 0) {
      if ((domainType === 'Router' && query) || (domainType === 'IF' && this.ifInput.value)) {
        searchList(type, domainType, searchPage + 1, query, subquery);
      } else if (domainType === 'Router' && !query) {
        initList(type, domainType, initPage + 1, query);
      }
    }
  }

  render() {
    const {
      type,
      isOpen,
      list,
      routerList,
      searchPage,
      ifSearchPage,
      toggleSelect,
      toggleFavor,
      handleRouterSelect,
      onCancel,
      onClear,
      selectedIfrouter,
      loading,
      ifLoading,
      initPage,
      ifInitPage,
      favorOnly,
      allIF,
      routerIF,
      addAllIF,
      clearAllIF,
      addRouterIF,
      removeRouterIF,
      clearRouterIF,
      initItem
    } = this.props;
    const popupClass = classNames({
      hide: !isOpen,
    });

    return (
      <div className={popupClass}>
        <div className="popup-wrap">
          <div className="content">
            <div className="left-half-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  ref={c => this.routerInput = c}
                  className="form-control"
                  onChange={evt => this.handleChange(evt, `${type}_Router`, 'Router')}
                  placeholder="Router"
                />
              </div>
              <Scrollbars
                style={{ height: 185 }}
                autoHide
                autoHideTimeout={400}
                onScroll={evt => this.handleScroll(evt, routerList.length, `${type}_Router`, 'Router', ifSearchPage, ifInitPage)}
              >
                <FavList
                  list={routerList}
                  onSelect={handleRouterSelect}
                  favorOnly
                  arrow
                  allIF={allIF}
                  addAllIF={addAllIF}
                  clearAllIF={clearAllIF}
                  clearRouterIF={clearRouterIF}
                />
              </Scrollbars>
              {
                ifLoading ?
                  <div className="spinner">
                    <i className="fa fa-spinner" />
                  </div> : ''
              }
            </div>
            <div className="split" />
            <div className="right-half-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  ref={c => this.ifInput = c}
                  className="form-control"
                  onChange={evt => this.handleChange(evt, type, 'IF', selectedIfrouter ? selectedIfrouter.routerNo : '')}
                  placeholder="Interface"
                  disabled={!selectedIfrouter}
                />
              </div>
              <Scrollbars
                style={{ height: 185 }}
                autoHide
                autoHideTimeout={400}
                onScroll={evt => this.handleScroll(evt, list.length, type, 'IF', searchPage, initPage, selectedIfrouter ? selectedIfrouter.routerNo : '')}
              >
                <FavList
                  list={list}
                  onSelect={toggleSelect}
                  onFavor={toggleFavor}
                  favorOnly={favorOnly}
                  routerNo={(selectedIfrouter || {}).routerNo}
                  routerIF={routerIF}
                  addRouterIF={addRouterIF}
                  removeRouterIF={removeRouterIF}
                  clearRouterIF={clearRouterIF}
                  initItem={initItem}
                />
              </Scrollbars>
              {
                loading ?
                  <div className="spinner">
                    <i className="fa fa-spinner" />
                  </div> : ''
              }
            </div>
          </div>
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
      </div>
    );
  }
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  type: PropTypes.string,
  initList: PropTypes.func,
  initListSuccess: PropTypes.func,
  searchListSuccess: PropTypes.func,
  selectedIfrouter: PropTypes.object,
  ifRouterInitResList: PropTypes.array,
  setSearchingFlag: PropTypes.func,
  setIFSearchingFlag: PropTypes.func,
  searchList: PropTypes.func,
  list: PropTypes.array,
  routerList: PropTypes.array,
  searchPage: PropTypes.number,
  ifSearchPage: PropTypes.number,
  toggleSelect: PropTypes.func,
  toggleFavor: PropTypes.func,
  handleRouterSelect: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
  ifLoading: PropTypes.bool,
  favorOnly: PropTypes.bool,
  initPage: PropTypes.number,
  ifInitPage: PropTypes.number,
};
