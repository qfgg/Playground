import React, { Component } from 'react';
import classNames from 'classnames';
import blacklist from 'blacklist';
import Checkbox from '../../Common/Checkbox';
import FavPopup from '../../FavPopup';
import DualPopup from '../../DualPopup';
import IPPopup from '../../IPPopup';
import { ITEM_TYPE_MAP } from '../../../constants/My/Item/ItemTypes';


class ListItem extends Component {
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
    const { initItem, domainType } = this.props;
    initItem(domainType);
  }

  componentWillReceiveProps(nProps) {
    // after loading filter or job, set diable item
    const {
      type,
      selectedItemList,
      setARouterState,
      setBRouterState
    } = this.props;
    const arr = type.split('_');

    if (arr[1] === 'Router' && selectedItemList.length === 0
      && nProps.selectedItemList.length > 0) {
      if (arr[0] === 'A') {
        setARouterState(true);
        setBRouterState(false);
      } else if (arr[0] === 'B') {
        setBRouterState(true);
        setARouterState(false);
      }
    }
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
    if (item.favored) {
      delItem(type, item);
    } else {
      item = blacklist(item, 'selected', 'favored');
      saveItem(type, item, data);
    }
  };

  handleToggleSelect = (type, item) => {
    const {
      selectedItemList,
      addSelItem,
      removeSelItem,
      removeALLSelItem,
      setARouterState,
      setBRouterState,
      separateList,
      toggleSeparate
    } = this.props;
    const fn = item.selected ? removeSelItem : addSelItem;
    item = blacklist(item, 'selected', 'favored');
    fn({ type, item });

    // clear separateList if selection is cleared
    if (fn === removeSelItem && separateList[type] &&
      (selectedItemList.length === 2 && !selectedItemList.find(item => item.id === '*')
      || ((selectedItemList.length === 2 || selectedItemList.length === 1) &&
      item.id === '*'))) {
      toggleSeparate(type);
    }

    // if selecting Router:
    // 1. disable Router item on the opposite side
    // 2. remove selections of IDC on the same side
    const arr = type.split('_');
    if (arr[1] === 'Router' && fn === addSelItem && selectedItemList.length === 0) {
      if (arr[0] === 'A') {
        removeALLSelItem('A_IDC');
        if (separateList.A_IDC) {   // remove separated item as well as selected item
          toggleSeparate('A_IDC');
        }
        removeALLSelItem('B_Router');
        if (separateList.B_Router) {
          toggleSeparate('B_Router');
        }
        // setARouterState(true);
        // setBRouterState(false);
      } else if (arr[0] === 'B') {
        removeALLSelItem('B_IDC');
        if (separateList.B_IDC) {
          toggleSeparate('B_IDC');
        }
        removeALLSelItem('A_Router');
        if (separateList.A_Router) {
          toggleSeparate('A_Router');
        }
        // setBRouterState(true);
        // setARouterState(false);
      }
    } else if (arr[1] === 'Router' && fn === removeSelItem && selectedItemList.length === 1) {
    // if remove all selected Routers:
    // 1. show IDC on the same side;
    // 2. activate Router on the opposite side
      if (arr[0] === 'A') {
        setARouterState(false);
      } else if (arr[0] === 'B') {
        setBRouterState(false);
      }
    }
  };

  clearSelect = (type) => {
    const { selectedItemList, clearSel, separateList, toggleSeparate } = this.props;
    if (selectedItemList && selectedItemList.length > 0) {
      clearSel(type);
      if (separateList[type]) {
        toggleSeparate(type);
      }
    }
  };

  clearIF = (type) => {
    const {
      selectedItemList,
      selectedIfrouter,
      removeSelIfrouter,
      clearSel,
      separateList,
      toggleSeparate
    } = this.props;
    if (selectedItemList && selectedItemList.length > 0) {
      clearSel(type);
      if (separateList[type]) {
        toggleSeparate(type);
      }
    }
    if (selectedIfrouter) {
      removeSelIfrouter({ type });
    }
  };

  handleRouterSelect = (type, item) => {
    const { addSelIfrouter, removeSelIfrouter } = this.props;
    const fn = item.selected ? removeSelIfrouter : addSelIfrouter;
    item = blacklist(item, 'selected');
    fn({ type, ...item });
  };

  addSelect = (type, item) => {
    const { addSelItem } = this.props;
    item = blacklist(item, 'selected', 'favored');
    addSelItem({ type, item });
  };

  setInfo = (selectedItemList, domainType, allIF, routerIF) => {
    if (domainType === 'IF') {
      if (allIF) {
        return '*';
      }
      let arr = [];
      const ifRouters = Object.keys(routerIF).map(item => `${item}:*`);
      if (selectedItemList && Array.isArray(selectedItemList) && selectedItemList.length) {
        arr = selectedItemList.map(item => item.text);
      }
      arr = [...arr, ...ifRouters];
      if (arr.length === 0) {
        return '-';
      }
      if (arr.length > 1) {
        return `(${arr.length})`;
      }
      return `(${arr[0]})`;
    }
    return (selectedItemList.length ? selectedItemList.length > 1 ?
      `(${selectedItemList.length})`
      : `(${selectedItemList[0].text})`
      : '-');
  }

  // combine favored list, selected list, and search result list into one list.
  // return the integrated list for popup to display
  getList = (favoredItemList, selectedItemList, searchResList, initResList) => {
    const favList = [];
    let selList = [...selectedItemList];
    const hasStar = selList.find(item => item.id === '*');
    const favSelList = [];
    for (let i = 0, len = favoredItemList.length; i < len; i++) {
      // eslint-disable-next-line no-loop-func
      if (selectedItemList.find((item, idx) => {
        if (item.id === favoredItemList[i].id) {
          selList[idx] = null;
          return true;
        }
        return false;
      })) {
        favSelList.push(favoredItemList[i]);
      } else {
        favList.push(favoredItemList[i]);
      }
    }
    selList = selList.filter(item => item);
    const head = [
      ...favSelList.map(item => ({
        ...item,
        favored: true,
        selected: true
      })),
      ...favList.map(item => ({
        ...item,
        favored: true
      })),
      ...selList.map(item => ({
        ...item,
        selected: true
      }))];
    const normalList = this.state.isSearching && searchResList &&
      Array.isArray(searchResList) && searchResList.length ? searchResList :
      !this.state.isSearching && initResList && Array.isArray(initResList) &&
      initResList.length ? initResList : [];
    const tail = normalList.map(item => ({
      ...item,
      text: item.fullName || item.name || item.host_name || item.esmNm || item.text,
      id: item.asNo || item.intfNo || item.routerNo || item.popNo || item.idcCd ||
        item.cntryCd || item.esmCd || item.crctId || item.ispId || item.ip || item.id
    })).filter(item => head.every(i => i.id !== item.id));

    return hasStar || this.props.domainType === 'IF' ?
      [...head, ...tail] : [{ id: '*', text: '*' }, ...head, ...tail];
  };

  getRouterList = (selectedIfrouter, ifRouterResList, ifRouterInitResList) => {
    const normalList = this.state.isIFSearching && ifRouterResList &&
      Array.isArray(ifRouterResList) && ifRouterResList.length ? ifRouterResList :
      !this.state.isIFSearching && ifRouterInitResList &&
      Array.isArray(ifRouterInitResList) && ifRouterInitResList.length ? ifRouterInitResList : [];
    const list = normalList.map(item => ({
      ...item,
      text: item.fullName || item.name || item.host_name || item.esmNm || item.text,
      id: item.asNo || item.intfNo || item.routerNo || item.popNo || item.idcCd ||
        item.cntryCd || item.esmCd || item.crctId || item.ispId || item.ip || item.id
    }));
    if (!selectedIfrouter) {
      return list;
    }
    const node = list.find(item => item.id === selectedIfrouter.id);
    if (node) {
      node.selected = true;
      return list;
    }
    return [{ ...selectedIfrouter, selected: true }, ...list];
  };

  renderPopup = (type, domainType, list, initList, initListSuccess, searchList,
    searchListSuccess, routerList, selectedIfrouter, searchPage, ifSearchPage,
    loading, ifLoading, initResList, initPage, ifRouterInitResList, ifInitPage,
    selectedItemList, allIF, routerIF, addAllIF, clearAllIF, addRouterIF,
    removeRouterIF, clearRouterIF, initItem) =>
    (domainType === 'IF' ? (
      <DualPopup
        className="pull-right"
        type={type}
        toggleFavor={target => this.handleToggleFavor('IF', target)}
        toggleSelect={target => this.handleToggleSelect(type, target)}
        onClear={this.clearIF.bind(this, type)}
        handleRouterSelect={target => this.handleRouterSelect(type, target)}
        routerList={routerList}
        list={list}
        initList={initList}
        initListSuccess={initListSuccess}
        searchPage={searchPage}
        searchList={searchList}
        searchListSuccess={searchListSuccess}
        ifSearchPage={ifSearchPage}
        selectedIfrouter={selectedIfrouter}
        loading={loading}
        ifLoading={ifLoading}
        initResList={initResList}
        ifRouterInitResList={ifRouterInitResList}
        initPage={initPage}
        ifInitPage={ifInitPage}
        setSearchingFlag={this.setSearchingFlag}
        setIFSearchingFlag={this.setIFSearchingFlag}
        allIF={allIF}
        routerIF={routerIF}
        addAllIF={addAllIF}
        clearAllIF={clearAllIF}
        addRouterIF={addRouterIF}
        removeRouterIF={removeRouterIF}
        clearRouterIF={clearRouterIF}
        initItem={initItem}
      >
        <button
          type="button"
          className="icon-btn fa fa-plus-circle"
        />
      </DualPopup>
    ) : domainType === 'Prefix' ? (
      <IPPopup
        className="pull-right"
        list={list.map(item => ({ ...item, ip: item.text, id: item.text }))}
        toggleFavor={target => this.handleToggleFavor('Prefix', target)}
        toggleSelect={target => this.handleToggleSelect(type, target)}
        onClear={this.clearSelect.bind(this, type)}
        selectedItemList={selectedItemList}
        addSelect={target => this.addSelect(type, target)}
        initItem={initItem}
      >
        <button
          type="button"
          className="icon-btn fa fa-plus-circle"
        />
      </IPPopup>
    ) : (
      <FavPopup
        className="pull-right"
        type={type}
        domainType={domainType}
        toggleFavor={target => this.handleToggleFavor(domainType, target)}
        list={list}
        searchList={searchList}
        toggleSelect={target => this.handleToggleSelect(type, target)}
        onClear={this.clearSelect.bind(this, type)}
        searchListSuccess={searchListSuccess}
        searchPage={searchPage}
        loading={loading}
        initResList={initResList}
        initList={initList}
        initPage={initPage}
        setSearchingFlag={this.setSearchingFlag}
        selectedIsFavor={false}
        initItem={initItem}
      >
        <button
          type="button"
          className="icon-btn fa fa-plus-circle"
        />
      </FavPopup>
    ));

  render() {
    const {
      type,
      domainType,
      favoredItemList,
      selectedItemList,
      selectedIfrouter,
      searchResList,
      searchPage,
      ifSearchPage,
      ifRouterResList,
      toggleSeparate,
      searchList,
      loading,
      ifLoading,
      searchListSuccess,
      initList,
      initListSuccess,
      initResList,
      initPage,
      ifRouterInitResList,
      ifInitPage,
      realDomainType,
      separateList,
      disabled,
      allIF,
      routerIF,
      addAllIF,
      clearAllIF,
      addRouterIF,
      removeRouterIF,
      clearRouterIF,
      initItem
    } = this.props;
    const list = this.getList(favoredItemList, selectedItemList, searchResList, initResList);
    const routerList = this.getRouterList(selectedIfrouter, ifRouterResList, ifRouterInitResList);

    return (
      <li className="domainitem">
        <div className={disabled ? 'disable-cover' : 'transparent-cover'} />
        <span className="text">{realDomainType} </span>
        <span className="info"> {this.setInfo(selectedItemList, domainType, allIF, routerIF)}</span>
        {
          this.renderPopup(type, domainType, list, initList, initListSuccess,
            searchList, searchListSuccess, routerList, selectedIfrouter,
            searchPage, ifSearchPage, loading, ifLoading, initResList, initPage,
            ifRouterInitResList, ifInitPage, selectedItemList, allIF, routerIF,
            addAllIF, clearAllIF, addRouterIF, removeRouterIF, clearRouterIF, initItem)
        }
        <Checkbox
          checkFor={realDomainType}
          checked={separateList[type]}
          className="checkbox-inline pull-right"
          onCheck={() => toggleSeparate(type)}
          disabled={domainType === 'IF' ? selectedItemList.length < 2 && (!allIF
            && (!routerIF || (Object.keys(routerIF) && Object.keys(routerIF).length === 0))) :
            (!selectedItemList.find(item => item.id === '*') ?
              selectedItemList.length < 2 : false)}
        />
      </li>
    );
  }
}

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      isShowAdvanced: false
    };
  }

  toggleAdVancedList = () => {
    this.setState({
      isShowAdvanced: !this.state.isShowAdvanced
    });
  };

  render() {
    const {
      title,
      list,
      favoredItemList,
      selectedItemList,
      searchResList,
      addFavItem,
      removeFavItem,
      addSelItem,
      removeSelItem,
      clearSel,
      addSelIfrouter,
      removeSelIfrouter,
      initResList,
      initList,
      initListSuccess,
      searchList,
      searchListSuccess,
      saveItem,
      delItem,
      initItem,
      toggleSeparate,
      separateList,
      listClass,
      removeALLSelItem,
      isARouterSelected,
      isBRouterSelected,
      setARouterState,
      setBRouterState,
      allIF,
      routerIF,
      addAllIF,
      clearAllIF,
      addRouterIF,
      removeRouterIF,
      clearRouterIF
    } = this.props;
    const { isShowAdvanced } = this.state;
    const hasAdvance = (selectedItemList[`${title}_Line`] &&
      selectedItemList[`${title}_Line`].length) ||
      (selectedItemList[`${title}_Carrier`] &&
      selectedItemList[`${title}_Carrier`].length) ||
      (selectedItemList[`${title}_IF`] &&
      selectedItemList[`${title}_IF`].length) ||
      (selectedItemList[`${title}_Prefix`] &&
      selectedItemList[`${title}_Prefix`].length) || allIF ||
      (routerIF && Object.keys(routerIF).length);
    const className = classNames('filter-list', listClass, {
      open: hasAdvance || isShowAdvanced
    });
    const toggleBtnClss = classNames('toggle-btn', {
      hide: hasAdvance
    });
    let type;
    let domainType;

    return (
      <div className={className}>
        <h3 className="caption">
          <span className="caption-fontsize">{title}</span>
          <span className="caption-right">Separate</span>
        </h3>
        <ul className="todo-list list">
          {list.list.map((item, idx) => {
            type = `${title}_${item.name}`;
            domainType = item.name;
            return (isARouterSelected && type === 'A_IDC') || (isBRouterSelected && type === 'B_IDC') ? '' : (
              <ListItem
                key={idx}
                type={type}
                domainType={domainType}
                favoredItemList={favoredItemList[domainType] || []}
                selectedItemList={selectedItemList[type] || []}
                searchResList={searchResList[type] ? searchResList[type].res : []}
                addFavItem={addFavItem}
                removeFavItem={removeFavItem}
                addSelItem={addSelItem}
                initItem={initItem}
                removeSelItem={removeSelItem}
                clearSel={clearSel}
                searchList={searchList}
                searchListSuccess={searchListSuccess}
                searchPage={searchResList[type] ? searchResList[type].page : undefined}
                loading={(searchResList[type] && searchResList[type].isFetching) ||
                  (initResList[type] && initResList[type].isFetching)}
                realDomainType={item.name}
                saveItem={saveItem}
                delItem={delItem}
                initResList={initResList[type] ? initResList[type].res : []}
                initList={initList}
                initPage={initResList[type] ? initResList[type].page : undefined}
                toggleSeparate={toggleSeparate}
                separateList={separateList}
                removeALLSelItem={removeALLSelItem}
                setARouterState={setARouterState}
                setBRouterState={setBRouterState}
                disabled={(isARouterSelected && type === 'B_Router') ||
                  (isBRouterSelected && type === 'A_Router')}
              />
            );
          })}
        </ul>
        <div className="advanced-list">
          <ul className="todo-list list">
            {list.advancedList.map((item, idx) => {
              type = `${title}_${item.name}`;
              domainType = item.name;
              return (
                <ListItem
                  key={idx}
                  type={type}
                  domainType={domainType}
                  favoredItemList={favoredItemList[domainType] || []}
                  selectedIfrouter={(selectedItemList[`${type}_Router`] || [])[0]}
                  selectedItemList={selectedItemList[type] || []}
                  searchResList={searchResList[type] ? searchResList[type].res : []}
                  initListSuccess={initListSuccess}
                  initItem={initItem}
                  initList={initList}
                  searchListSuccess={searchListSuccess}
                  ifRouterResList={searchResList[`${type}_Router`] ? searchResList[`${type}_Router`].res : []}
                  ifSearchPage={searchResList[`${type}_Router`] ? searchResList[`${type}_Router`].page : undefined}
                  searchPage={searchResList[type] ? searchResList[type].page : undefined}
                  addSelItem={addSelItem}
                  removeSelItem={removeSelItem}
                  clearSel={clearSel}
                  addSelIfrouter={addSelIfrouter}
                  removeSelIfrouter={removeSelIfrouter}
                  searchList={searchList}
                  loading={(searchResList[type] && searchResList[type].isFetching) ||
                    (initResList[type] && initResList[type].isFetching)}
                  addFavItem={addFavItem}
                  removeFavItem={removeFavItem}
                  initResList={initResList[type] ? initResList[type].res : []}
                  ifRouterInitResList={initResList[`${type}_Router`] ? initResList[`${type}_Router`].res : []}
                  ifLoading={(searchResList[`${type}_Router`] && searchResList[`${type}_Router`].isFetching) ||
                    (initResList[`${type}_Router`] && initResList[`${type}_Router`].isFetching)}
                  ifInitPage={initResList[`${type}_Router`] ? initResList[`${type}_Router`].page : undefined}
                  realDomainType={item.name}
                  saveItem={saveItem}
                  delItem={delItem}
                  initPage={initResList[type] ? initResList[type].page : undefined}
                  toggleSeparate={toggleSeparate}
                  separateList={separateList}
                  allIF={allIF}
                  routerIF={routerIF}
                  addAllIF={addAllIF}
                  clearAllIF={clearAllIF}
                  addRouterIF={addRouterIF}
                  removeRouterIF={removeRouterIF}
                  clearRouterIF={clearRouterIF}
                />
              );
            })}
          </ul>
        </div>
        <a
          className={toggleBtnClss}
          onClick={this.toggleAdVancedList}
        >
          <i className="fa" />
        </a>
      </div>
    );
  }
}
