import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import DownloadPane from './DownloadPane';
import { HEADER, FIELD } from '../../../constants/Reports/Country/CountryTypes';
import { flowDataFormatter } from '../../../helper';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';
import './index.less';


export default class CountryReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 1,
      totalCnt: 1,
      size: 15,
      check: []
    };
  }

  componentDidMount() {
    const { initCountry, initMonth } = this.props;
    const { curPage, size } = this.state;

    initCountry(curPage, size, {}, count => this.setState({ totalCnt: count }));
    initMonth();
  }

  setCurPage = (page) => {
    const { initCountry } = this.props;
    const { size, check } = this.state;

    initCountry(page, size, check.length === 0 ? {} : {
      months: check
    }, count => this.setState({ totalCnt: count }));
    this.setState({
      curPage: page
    });
  };

  setSize = (size) => {
    const { initCountry } = this.props;
    const { check } = this.state;

    this.setState({
      curPage: 1,
      size
    });
    initCountry(1, size, check.length === 0 ? {} : {
      months: check
    }, count => this.setState({ totalCnt: count }));
  };

  handleCheck = (item) => {
    const { initCountry } = this.props;
    const { check, size } = this.state;
    let newCheck;

    if (check.indexOf(item) !== -1) {
      newCheck = check.filter(itm => itm !== item);
    } else {
      newCheck = [...check, item];
    }
    this.setState({
      check: newCheck
    });
    initCountry(1, size, newCheck.length === 0 ? {} : {
      months: newCheck
    }, count => this.setState({ totalCnt: count }));
  };

  handleDownload = () => {
    const { getCountry } = this.props;
    const { check } = this.state;

    getCountry(check.length === 0 ? {} : {
      months: check
    }, (list) => {
      this.downloadCSV(list);
    });
  };

  downloadCSV = (list) => {
    if (!list) {
      return;
    }
    const d = [];

    list.forEach((item, idx) => {
      d.push({
        No: idx + 1,
        Month: item.month,
        PoP: item.pop,
        Country: item.country,
        Traffic: flowDataFormatter(item.avgMaxBps),
      });
    });
    JSONToCSVConvertor(d, 'country', true);
  };

  render() {
    const { list, listStatus, month } = this.props;
    const { curPage, totalCnt, size, check } = this.state;

    return (
      <div>
        <SetEntries
          curPage={curPage}
          totalEntries={totalCnt}
          size={size}
          setEntriesPerPage={this.setSize}
        />
        <Grid
          header={HEADER}
          list={list[curPage] || []}
          field={FIELD}
          isLoading={listStatus.isFetching}
          curPage={curPage}
          size={size}
        />
        <Pagination
          totalCnt={Math.ceil(totalCnt / size)}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
        <DownloadPane
          list={month}
          handleCheck={this.handleCheck}
          check={check}
          handleDownload={this.handleDownload}
        />
      </div>
    );
  }
}
