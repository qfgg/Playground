import React, { Component } from 'react';
import ReportHeader from '../Common/ReportHeader';
import OptionBtn from '../Common/OptionBtn';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import {
  PEEREVAL_PERIOD,
  OPTION_TYPES,
  HEADER,
  FIELD
} from '../../../constants/Reports/PeerEvaluation/PeerEvalTypes';
import './index.less';


export default class PeerEval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePeriod: 'Today',
      activeBtn: 'Last'
    };
  }

  setActivePeriod = (period) => {
    if (period !== this.state.activePeriod) {
      const newState = {
        activePeriod: period
      };
      if (period === 'Today') {
        newState.activeBtn = 'Last';
      } else if (this.state.activePeriod === 'Today') {
        newState.activeBtn = 'Avg';
      }
      this.setState(newState);
    }
  }

  setActiveBtn = (item) => {
    if (item !== this.state.activeBtn) {
      this.setState({
        activeBtn: item,
      });
    }
  }

  render() {
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;
    const { activePeriod, activeBtn } = this.state;

    return (
      <div className="peereval">
        <div className="peer-wrap">
          <ReportHeader
            headerList={PEEREVAL_PERIOD}
            activePeriod={activePeriod}
            setActivePeriod={this.setActivePeriod}
          />
          <OptionBtn
            btnList={OPTION_TYPES}
            activePeriod={activePeriod}
            activeBtn={activeBtn}
            setActiveBtn={this.setActiveBtn}
          />
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
