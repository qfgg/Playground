import React, { Component } from 'react';
import moment from 'moment';
import DataBtn from './DataBtn';
import QuickIntervalBtn from './QuickIntervalBtn';
import Period from './Period';
import Dropdown from '../Common/Dropdown';
import {
  AVG_DROPDOWN_TYPES,
  INT_DROPDOWN_TYPES
} from '../../constants/External/ASPath/ASPathTypes';


export default class SearchBar extends Component {
  renderInterval = () => {
    const { period, int, onSetInt } = this.props;
    const intervalList = INT_DROPDOWN_TYPES;
    let list = intervalList;
    const start = moment.unix(period.start);
    const end = moment.unix(period.end);
    const diffY = end.diff(start, 'years');
    const diffM = end.diff(start, 'month');
    const diffD = end.diff(start, 'days');
    const diffH = end.diff(start, 'hours');

    if (diffY >= 1) {
      list = intervalList.slice(3);
    } else if (diffY < 1 && diffM >= 1) {
      list = intervalList.slice(2);
    } else if (diffM < 1 && diffD >= 7) {
      list = intervalList.slice(1);
    } else if (diffD < 7 && diffH >= 24) {
      list = intervalList;
    } else {
      list = intervalList.slice(0, 3);
    }

    return (
      <Dropdown curSelect={int.text}>
        {
          list.map((item, idx) =>
            (<li
              key={idx}
              className="option"
              onClick={() => onSetInt(item)}
            >
              <a>{item.text}</a>
            </li>))
        }
      </Dropdown>
    );
  };

  render() {
    const {
      period,
      avg,
      dataOption,
      activebtn,
      onSetAvg,
      onSetData,
      onCurrentClick,
      onSubmitClick,
      onChangeInterval,
      onChangePeriod
    } = this.props;

    return (
      <div className="compare-bar clearfix">
        <DataBtn
          dataOption={dataOption}
          onChangeData={onSetData}
        />
        <button
          className="btn btn-xs pull-left btn-current"
          onClick={onCurrentClick}
        >
          Current
        </button>
        <QuickIntervalBtn
          activebtn={activebtn}
          onChangeInterval={onChangeInterval}
        />
        <Period
          period={period}
          activebtn={activebtn}
          onChangePeriod={onChangePeriod}
        />
        { this.renderInterval() }
        <Dropdown curSelect={avg.text}>
          {
            AVG_DROPDOWN_TYPES.map((item, idx) =>
              (<li
                key={idx}
                className="option"
                onClick={() => onSetAvg(item)}
              >
                <a>{item.text}</a>
              </li>))
          }
        </Dropdown>
        <button
          className="btn btn-xs pull-right btn-search"
          onClick={onSubmitClick}
        >
          Submit
        </button>
        <div className="clear-both" />
      </div>
    );
  }
}
