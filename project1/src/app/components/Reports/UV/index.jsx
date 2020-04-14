import React, { Component } from 'react';
import ReportHeader from '../Common/ReportHeader';
import NavTab from '../../NavTab';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import {
  UV_PERIOD,
  DOMAIN_TYPES,
  HEADER,
  FIELD,
} from '../../../constants/Reports/UV/UVTypes';
import './index.less';


export default class UVReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePeriod: 'Last week',
      activeDomain: 'Line',
    };
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

    return (
      <div className="uv">
        <div className="uv-wrap">
          <ReportHeader
            headerList={UV_PERIOD}
            activePeriod={activePeriod}
            setActivePeriod={this.setActivePeriod}
          />
          <NavTab
            tablist={DOMAIN_TYPES}
            selectedItem={activeDomain}
            handleClick={this.setActiveDomain}
            noCnt
          />
          <div className="time">30 min</div>
          <SetEntries
            totalEntries={6}
            setEntriesPerPage={() => {}}
            refreshList={() => {}}
            setCurPage={() => {}}
            curPage={1}
          />
          <Grid
            header={HEADER}
            list={list}
            field={FIELD}
            sortStatus={sortStatus}
            side="uv"
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
