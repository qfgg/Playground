import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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


export default class HeaderSearch extends Component {
  handleSearch = (evt) => {
    const val = evt.target.value;
    if (val && val !== '' && evt.charCode === 13) {
      this.navToSearch(val);
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

  navToSearch = (val) => {
    const { setSearchKeyword, setLastKeyword, setCurTab } = this.props;

    if (val && val !== '') {
      browserHistory.push('/search');
      setSearchKeyword(val);
      setLastKeyword(val);
      axios.defaults.withCredentials = false;
      setCurTab({ item: 'All', type: 'External' });
      setCurTab({ item: 'All', type: 'Internal' });
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
    }
  };

  render() {
    return (
      <div className="search">
        <input
          type="search"
          className="form-control"
          ref={c => this.intsearch = c}
          onKeyPress={this.handleSearch}
        />
        <div className="search-btn">
          <i
            className="fa fa-search"
            onClick={() => this.navToSearch(this.intsearch.value)}
          />
        </div>
      </div>
    );
  }
}
