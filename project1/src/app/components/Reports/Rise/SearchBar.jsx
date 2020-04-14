import React, { Component } from 'react';
import classNames from 'classnames';
import Dropdown from '../../Common/Dropdown';
import QuickIntervalBtn from './QuickIntervalBtn';
import Period from './Period';
import { RISE_DOMAIN_TYPES } from '../../../constants/Reports/Rise/RiseTypes';


export default class SearchBar extends Component {
  handleSearch = () => {};
  // handleSearch = (domain, side, dataType, getChart)=>{
  //   getChart({
  //     domainName: domain.value,
  //     type: side,
  //     data: dataType.value
  //   });
  // };

  handleChangePeriod = (start, end) => {
    const { setPeriod } = this.props;
    setPeriod({ start, end });
  };

  render() {
    const {
      period,
      domain,
      setDomain,
      activebtn,
      isLoading
    } = this.props;
    const searchBtnClass = classNames(
      'btn',
      'btn-xs',
      'pull-right',
      'btn-search',
      { 'disabled-btn': isLoading }
    );

    return (
      <div className="search-bar clearfix">
        <Dropdown curSelect={domain.text}>
          {
            RISE_DOMAIN_TYPES.map((item, idx) =>
              (<li
                key={idx}
                className="option"
                onClick={() => setDomain(item)}
              >
                <a>{item.text}</a>
              </li>))
          }
        </Dropdown>
        <QuickIntervalBtn
          activebtn={activebtn}
          onChangeInterval={this.props.onChangeInterval}
        />
        <Period period={period} activebtn={activebtn} onChangePeriod={this.handleChangePeriod} />
        <button
          className={searchBtnClass}
          onClick={() => this.handleSearch(domain)}
          disabled={isLoading}
        >
          Search
        </button>
      </div>
    );
  }
}
