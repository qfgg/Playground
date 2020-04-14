import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import { ignoreSeconds, ignoreTime } from '../../../helper';


export default class Period extends Component {
  handleFromDatetimeChange = (moment) => {
    const { onChangePeriod, period } = this.props;
    const start = ignoreSeconds(moment);
    if (start < period.end) {
      onChangePeriod(start);
    }
  }

  handleToDatetimeChange = (moment) => {
    const { onChangePeriod, period } = this.props;
    const end = ignoreSeconds(moment);
    if (end > period.start) {
      onChangePeriod(undefined, end);
    }
  }

  handleLeftClick = () => {
    const { activebtn, period, onChangePeriod } = this.props;
    if (activebtn.value) {
      const start = moment.unix(period.start).subtract(activebtn.value, activebtn.unit);
      const end = moment.unix(period.end).subtract(activebtn.value, activebtn.unit);
      onChangePeriod(ignoreSeconds(start), ignoreSeconds(end));
    }
  }

  handleRightClick = () => {
    const { activebtn, period, onChangePeriod } = this.props;
    const start = moment.unix(period.start).add(activebtn.value, activebtn.unit);
    const end = moment.unix(period.end).add(activebtn.value, activebtn.unit);
    if (activebtn.value) {
      onChangePeriod(ignoreSeconds(start), ignoreSeconds(end));
    }
  }

  checkStartValid = (current) => {
    const { start, end } = this.props.period;
    const s = ignoreTime(current);
    const e = ignoreTime(moment.unix(end));
    const mStart = moment.unix(start);
    const mEnd = moment.unix(end);
    const timeStart = mStart.hour() * 60 + mStart.minute();
    const timeEnd = mEnd.hour() * 60 + mEnd.minute();
    return timeStart < timeEnd ? s <= e : s < e;
  };

  checkEndValid = (current) => {
    const { start, end } = this.props.period;
    const s = ignoreTime(moment.unix(start));
    const e = ignoreTime(current);
    const mStart = moment.unix(start);
    const mEnd = moment.unix(end);
    const timeStart = mStart.hour() * 60 + mStart.minute();
    const timeEnd = mEnd.hour() * 60 + mEnd.minute();
    return timeStart < timeEnd ? s <= e : s < e;
  };

  render() {
    const { start, end } = this.props.period;

    return (
      <div className="pull-left period">
        <button
          type="button"
          className="btn btn-xs btn-white pull-left"
          onClick={this.handleLeftClick}
        >
          <i className="fa fa-chevron-left" />
        </button>
        <div className="input-daterange input-group pull-left">
          <Datetime
            isValidDate={this.checkStartValid}
            inputProps={{ readOnly: true }}
            closeOnSelect
            timeFormat={'YYYY/MM/DD'}
            value={moment.unix(start).format('YYYY/MM/DD')}
            onChange={this.handleFromDatetimeChange}
          />
          <span className="input-group-addon">to</span>
          <Datetime
            isValidDate={this.checkEndValid}
            inputProps={{ readOnly: true }}
            closeOnSelect
            timeFormat={'YYYY/MM/DD'}
            value={moment.unix(end).format('YYYY/MM/DD')}
            onChange={this.handleToDatetimeChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-xs btn-white pull-left"
          onClick={this.handleRightClick}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    );
  }
}

Period.propTypes = {
  onChangePeriod: PropTypes.func,
  period: PropTypes.object,
  activebtn: PropTypes.object,
};
