import React, { Component } from 'react';
import { Link } from 'react-router';
import ReportHeader from '../Common/ReportHeader';
import OptionBtn from '../Common/OptionBtn';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import Dropdown from '../../Common/Dropdown';
import {
  ROUTINGASY_PERIOD,
  OPTION_TYPES,
  HEADER,
  FIELD,
} from '../../../constants/Reports/RoutingAsymmetryPrefix/RoutingAsyPrfxTypes';
import './index.less';


export default class RoutingAsyPrfx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePeriod: 'Today',
      activeBtn: 'Last',
      isOpen: false,
      subNav: 'Prefix',
    };
  }

  setActivePeriod = (period) => {
    if (period !== this.state.activePeriod) {
      const newState = {
        activePeriod: period,
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

  handleClick(subNav) {
    if (subNav !== this.state.subNav) {
      this.setState({
        subNav,
        isOpen: false,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  }

  render() {
    const { activePeriod, activeBtn, isOpen, subNav } = this.state;
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;

    return (
      <div className="routingasy">
        <div className="routing-wrap">
          <ReportHeader
            headerList={ROUTINGASY_PERIOD}
            activePeriod={activePeriod}
            setActivePeriod={this.setActivePeriod}
          />
          <Dropdown isOpen={isOpen} curSelect={subNav}>
            <li className="option" onClick={() => this.handleClick('Prefix')}>
              <a>Prefix</a>
            </li>
            <li className="option" onClick={() => this.handleClick('ASN')}>
              <Link to="/reports/routingAsymmetryAS">ASN</Link>
            </li>
          </Dropdown>
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
