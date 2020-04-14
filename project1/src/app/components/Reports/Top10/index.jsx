import React, { Component } from 'react';
import ReportHeader from '../Common/ReportHeader';
import NavTab from '../../NavTab';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import {
  TOP10_PERIOD,
  DOMAIN_TYPES,
  HEADER_MAP,
  FIELD,
} from '../../../constants/Reports/Top10/Top10Types';
import './index.less';


export default class Top10Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePeriod: 'Yesterday',
      activeDomain: 'AS',
    };
    this.isClickCell = false;
  }

  setActivePeriod = (period) => {
    if (period !== this.state.activePeriod) {
      this.setState({
        activePeriod: period,
      });
    }
  };

  setActiveDomain = (evt, item) => {
    if (item !== this.state.activeDomain) {
      this.setState({
        activeDomain: item,
      });
    }
  };

  render() {
    const { activePeriod, activeDomain } = this.state;
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;
    const header = [
      'No',
      'Code',
      'AS Name',
      HEADER_MAP[activePeriod][0],
      HEADER_MAP[activePeriod][1],
    ];

    return (
      <div className="uv">
        <div className="uv-wrap">
          <ReportHeader
            headerList={TOP10_PERIOD}
            activePeriod={activePeriod}
            setActivePeriod={this.setActivePeriod}
          />
          <NavTab
            tablist={DOMAIN_TYPES}
            selectedItem={activeDomain}
            handleClick={this.setActiveDomain}
            noCnt
          />
          <SetEntries
            totalEntries={6}
            setEntriesPerPage={() => {}}
            refreshList={() => {}}
            setCurPage={() => {}}
            curPage={1}
          />
          <Grid
            header={header}
            list={list}
            field={FIELD}
            sortStatus={sortStatus}
            side="top10"
            {...actions}
          />
          <Pagination
            totalCnt={totalCnt}
            curPage={curPage}
            setCurPage={() => {}}
          />
        </div>
      </div>
    );
  }
}
