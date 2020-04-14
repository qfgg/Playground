import React, { Component } from 'react';
import axios from 'axios';
import NavTab from '../../components/NavTab';
import SearchTableList from './SearchTableList';
import {
  EX_TAB_LIST,
  IN_TAB_LIST,
  ID_MAP,
  NAME_MAP,
  URL_MAP,
  EX_DOMAIN,
  IN_DOMAIN
} from '../../constants/IntegrationSearch/SearchTypes';
import intSearchUtils from '../../../lib/search';
import {
  SEARCH_AS_URL,
  SEARCH_IF_URL,
  SEARCH_ROUTER_URL,
  SEARCH_CARRIER_URL,
  SEARCH_ESM_URL,
  SEARCH_LINE_URL,
  SEARCH_COUNTRY_URL,
  SEARCH_POP_URL,
  SEARCH_IDC_URL,
} from '../../constants/Url';


export default class SearchResultPanel extends Component {
  getTraffic = (res, type, side) => {
    axios.defaults.withCredentials = true;
    let arr = [];
    if (res.data && res.data.hits.hits.length > 0) {
      arr = res.data.hits.hits.map(item =>
        item._source[ID_MAP[type]]);
      if (side) {
        arr.forEach(id => intSearchUtils.fetchTraffic(type, id, side));
      } else {
        const isEx = EX_DOMAIN.indexOf(type) !== -1;
        const isIn = IN_DOMAIN.indexOf(type) !== -1;
        arr.forEach((id) => {
          if (isEx) {
            intSearchUtils.fetchTraffic(type, id, 'External');
          }
          if (isIn) {
            intSearchUtils.fetchTraffic(type, id, 'Internal');
          }
        });
      }
    }
  };

  handleClick = (item, tablist, cntlist) => {
    const { lastKeyword, title, curTab, setCurTab, clearSearch } = this.props;
    if (curTab !== item) {
      setCurTab({ item, type: title });
      clearSearch(title);
      axios.defaults.withCredentials = false;
      if (item === 'All') {
        if (title.toLowerCase() === 'external') {
          intSearchUtils.search('as', lastKeyword, SEARCH_AS_URL, 5, title,
            res => this.getTraffic(res, 'as', title));
          intSearchUtils.search('router', lastKeyword, SEARCH_ROUTER_URL, 5, title,
            res => this.getTraffic(res, 'router', title));
        }
        intSearchUtils.search('interface', lastKeyword, SEARCH_IF_URL, 5, title,
          res => this.getTraffic(res, 'interface'));
        intSearchUtils.search('carrier', lastKeyword, SEARCH_CARRIER_URL, 5, title,
          res => this.getTraffic(res, 'carrier', title));
        intSearchUtils.search('esm', lastKeyword, SEARCH_ESM_URL, 5, title,
          res => this.getTraffic(res, 'esm', title));
        intSearchUtils.search('line', lastKeyword, SEARCH_LINE_URL, 5, title,
          res => this.getTraffic(res, 'line', title));
        intSearchUtils.search('country', lastKeyword, SEARCH_COUNTRY_URL, 5, title,
          res => this.getTraffic(res, 'country', title));
        intSearchUtils.search('pop', lastKeyword, SEARCH_POP_URL, 5, title,
          res => this.getTraffic(res, 'pop', title));
        intSearchUtils.search('idc', lastKeyword, SEARCH_IDC_URL, 5, title,
          res => this.getTraffic(res, 'idc', title));
      } else {
        const hitsCnt = cntlist[tablist.indexOf(item)];
        const type = item.toLowerCase();
        intSearchUtils.search(type, lastKeyword, URL_MAP[type], hitsCnt, title,
          res => this.getTraffic(res, type, title));
      }
    }
  };

  getTab = (title, result) => {
    const list = title === 'External' ? EX_TAB_LIST : IN_TAB_LIST;
    const typeList = title === 'External' ? EX_DOMAIN : IN_DOMAIN;
    const textArr = [];
    const countArr = [];
    // if (curTab === 'All') {
    textArr[0] = 'All';
    countArr[0] = 0;
    // }
    let total = 0;
    for (let i = 0, len = typeList.length; i < len; i++) {
      if (result[typeList[i]] && result[typeList[i]].res &&
        result[typeList[i]].res.hits.total > 0) {
        textArr.push(list[i]);
        countArr.push(result[typeList[i]].res.hits.total);
        total += result[typeList[i]].res.hits.total;
      }
    }
    // if (curTab === 'All') {
    countArr[0] = total;
    // }
    return { tablist: textArr, cntlist: countArr };
  };

  getTables = (title, result) => {
    const typeList = title === 'External' ? EX_DOMAIN : IN_DOMAIN;
    const tables = [];
    let arr;
    for (let i = 0, len = typeList.length; i < len; i++) {
      if (result[typeList[i]] && result[typeList[i]].res &&
        result[typeList[i]].res.hits.hits.length > 0) {
        arr = result[typeList[i]].res.hits.hits.map(item => ({
          id: item._source[ID_MAP[typeList[i]]],
          name: item._source[NAME_MAP[typeList[i]]]
        }));
        tables.push({
          [typeList[i]]: arr
        });
      }
    }
    return tables;
  }

  render() {
    const { title, result, curTab, trfStatus } = this.props;
    const tab = this.getTab(title, result, curTab);
    const tables = this.getTables(title, result);

    return (
      <div className="result-panel">
        <div className="ibox-title bold-title">{title}</div>
        <div className="ibox-content">
          <NavTab
            tablist={tab.tablist}
            cntlist={tab.cntlist}
            selectedItem={curTab}
            handleClick={(evt, item) =>
              this.handleClick(item, tab.tablist, tab.cntlist)}
          />
          <SearchTableList
            tables={tables}
            trfStatus={trfStatus}
            tablist={tab.tablist.slice(1)}
            cntlist={tab.cntlist.slice(1)}
            curTab={curTab}
            result={result}
            getMore={item =>
              this.handleClick(item, tab.tablist, tab.cntlist)}
          />
        </div>
      </div>
    );
  }
}
