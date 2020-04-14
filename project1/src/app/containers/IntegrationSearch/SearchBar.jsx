import React, { Component } from 'react';
import axios from 'axios';
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
import { EX_DOMAIN, IN_DOMAIN, ID_MAP } from '../../constants/IntegrationSearch/SearchTypes';


export default class SearchBar extends Component {
  handleSearch = (evt) => {
    const val = evt.target.value;
    if (val && val !== '' && evt.charCode === 13) {
      this.search(val);
    }
  };

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

  search = (val) => {
    const { setCurTab, setLastKeyword } = this.props;
    setCurTab({ item: 'All', type: 'External' });
    setCurTab({ item: 'All', type: 'Internal' });
    setLastKeyword(val);
    axios.defaults.withCredentials = false;
    intSearchUtils.search('as', val, SEARCH_AS_URL, 5, undefined,
      res => this.getTraffic(res, 'as'));
    intSearchUtils.search('interface', val, SEARCH_IF_URL, 5, undefined,
        res => this.getTraffic(res, 'interface'));
    intSearchUtils.search('router', val, SEARCH_ROUTER_URL, 5, 'External',
        res => this.getTraffic(res, 'router', 'External'));
    intSearchUtils.search('carrier', val, SEARCH_CARRIER_URL, 5, undefined,
        res => this.getTraffic(res, 'carrier'));
    intSearchUtils.search('esm', val, SEARCH_ESM_URL, 5, undefined,
        res => this.getTraffic(res, 'esm'));
    intSearchUtils.search('line', val, SEARCH_LINE_URL, 5, undefined,
        res => this.getTraffic(res, 'line'));
    intSearchUtils.search('country', val, SEARCH_COUNTRY_URL, 5, undefined,
        res => this.getTraffic(res, 'country'));
    intSearchUtils.search('pop', val, SEARCH_POP_URL, 5, undefined,
        res => this.getTraffic(res, 'pop'));
    intSearchUtils.search('idc', val, SEARCH_IDC_URL, 5, undefined,
        res => this.getTraffic(res, 'idc'));
  };

  handleChange = (evt) => {
    const { setSearchKeyword } = this.props;
    setSearchKeyword(evt.target.value);
  };

  render() {
    const { keyword } = this.props;

    return (
      <div className="search-input">
        <input
          type="text"
          className="form-control search"
          ref={c => this.searchInput = c}
          value={keyword}
          onChange={this.handleChange}
          onKeyPress={evt => this.handleSearch(evt)}
        />
        <a>
          <i
            className="fa fa-search"
            onClick={() => this.search(this.searchInput.value)}
          />
        </a>
      </div>
    );
  }
}
