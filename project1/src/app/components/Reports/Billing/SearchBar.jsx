import React, { Component } from 'react';
import Period from './Period';
import ButtonGroup from './ButtonGroup';
import DomainInput from './DomainInput';
import { DOMAIN_TYPES } from '../../../constants/Reports/Billing/BillingTypes';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    // isSearching flag records if user is typing in more than 1 letter to search
    // used for determine whether to display whole list
    this.state = {
      isSearching: false
    };
  }

  setSearchingFlag = (isSearching) => {
    this.setState({ isSearching });
  };

  handleChangePeriod = (start, end) => {
    const { setPeriod } = this.props;
    setPeriod({ start, end });
  };

  handleSearch = () => {
    const { findBilling, period, area, selectedItemList } = this.props;
    const query = {
      startDate: period.start,
      endDate: period.end,
      type: area.value
    };
    if (selectedItemList.PoP && Array.isArray(selectedItemList.PoP) &&
      selectedItemList.PoP.length > 0) {
      query.pops = selectedItemList.PoP.map(item => item.id);
    }
    if (selectedItemList.ESM && Array.isArray(selectedItemList.ESM) &&
      selectedItemList.ESM.length > 0) {
      query.serverEsms = selectedItemList.ESM.map(item => item.id);
    }

    findBilling(query);
  };

  // combine favored list, selected list, and search result list into one list.
  // return the integrated list for popup to display
  getList = (favoredItemList, selectedItemList, searchResList, initResList) => {
    const favList = [];
    let selList = [...selectedItemList];
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
      ...favList.map(item => ({
        ...item,
        favored: true
      })),
      ...favSelList.map(item => ({
        ...item,
        favored: true,
        selected: true
      })),
      ...selList.map(item => ({
        ...item,
        selected: true
      }))];
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
      id: item.asNo || item.intfNo || item.routerNo || item.popNo || item.idcCd ||
        item.cntryCd || item.esmCd || item.crctId || item.ispId || item.prefix
    })).filter(item => head.every(i => i.id !== item.id));
    return [...head, ...tail];
  }

  getPoPList = (selectedItemList, searchResList, initResList) => {
    const head = [
      ...selectedItemList.map(item => ({
        ...item,
        selected: true
      }))];
    const normalList = this.state.isSearching &&
      searchResList &&
      Array.isArray(searchResList) &&
      searchResList.length ? searchResList :
      !this.state.isSearching &&
      initResList &&
      Array.isArray(initResList) &&
      initResList.length ? initResList : [];
    const tail = normalList.map(item => ({
      text: item,
      id: item
    })).filter(item => head.every(i => i.id !== item.id));
    return [...head, ...tail];
  }

  render() {
    const {
      period,
      area,
      selectedItemList,
      favoredItemList,
      initResList,
      searchResList,
      addSelItem,
      removeSelItem,
      initList,
      searchList,
      searchListSuccess,
      saveItem,
      delItem,
      setArea,
      clearSel
    } = this.props;
    const List = {
      PoP: this.getPoPList(selectedItemList.PoP || [], searchResList.PoP ?
        searchResList.PoP.res : [], initResList.PoP ? initResList.PoP.res : []),
      ESM: this.getList(favoredItemList.ESM || [], selectedItemList.ESM || [],
        searchResList.ESM ? searchResList.ESM.res : [], initResList.ESM ?
        initResList.ESM.res : [])
    };

    return (
      <div className="search-bar clearfix">
        <Period period={period} onChangePeriod={this.handleChangePeriod} />
        <ButtonGroup area={area} setArea={setArea} />
        {
          DOMAIN_TYPES.map((item, idx) =>
            (<DomainInput
              key={idx}
              type={item}
              list={List[item]}
              addSelItem={addSelItem}
              removeSelItem={removeSelItem}
              initList={initList}
              searchListSuccess={searchListSuccess}
              initResList={initResList[item] ? initResList[item].res : []}
              searchPage={searchResList[item] ? searchResList[item].page : undefined}
              saveItem={saveItem}
              loading={(searchResList[item] && searchResList[item].isFetching) ||
                (initResList[item] && initResList[item].isFetching)}
              delItem={delItem}
              searchList={searchList}
              initPage={initResList[item] ? initResList[item].page : undefined}
              setSearchingFlag={this.setSearchingFlag}
              selectedItemList={selectedItemList[item] || []}
              clearSel={clearSel}
            />))
        }
        <button className="btn btn-xs pull-right btn-search" onClick={this.handleSearch}>Go</button>
      </div>
    );
  }
}
