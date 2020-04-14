import React, { Component } from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import BtnGrp from './BtnGrp';
import { ignoreSeconds, ignoreTime } from '../../../helper';


export default class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periodText: 'Choose a period',
      activeItem: {
        text: '6H',
        value: 6,
        unit: 'hours',
      },
    };
  }

  componentDidMount() {
    // update current time when entering
    const { onPeriod } = this.props;
    onPeriod(ignoreSeconds(moment().subtract(6, 'hours')), ignoreSeconds(moment()));
  }

  handleChangeInterval = (item) => {
    const { period, onPeriod } = this.props;

    this.setState({
      activeItem: item,
    });
    const end = moment.unix(period.end);
    onPeriod(ignoreSeconds(end.subtract(item.value, item.unit)));
  };

  handleLeftClick = () => {
    const { period, onPeriod } = this.props;
    const { activeItem } = this.state;

    if (activeItem.value) {
      const start = moment.unix(period.start).subtract(activeItem.value, activeItem.unit);
      const end = moment.unix(period.end).subtract(activeItem.value, activeItem.unit);
      onPeriod(ignoreSeconds(start), ignoreSeconds(end));
    }
  };

  handleRightClick = () => {
    const { period, onPeriod } = this.props;
    const { activeItem } = this.state;

    if (activeItem.value) {
      const start = moment.unix(period.start).add(activeItem.value, activeItem.unit);
      const end = moment.unix(period.end).add(activeItem.value, activeItem.unit);
      const now = ignoreSeconds(moment());
      const sSec = ignoreSeconds(start);
      const eSec = ignoreSeconds(end);
      if (eSec <= now) {
        onPeriod(sSec, eSec);
      } else {
        onPeriod(sSec + now - eSec, now);
      }
    }
  };

  handleFromDatetimeChange = (m) => {
    const { period, onPeriod } = this.props;
    const start = ignoreSeconds(m);
    if (start < period.end) {
      onPeriod(start);
    }
  };

  handleToDatetimeChange = (m) => {
    const { period, onPeriod } = this.props;
    const end = ignoreSeconds(m);
    const now = ignoreSeconds(moment());
    if (end > period.start && end <= now) {
      onPeriod(undefined, end);
    }
  };

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
    const now = ignoreTime(moment());
    const mStart = moment.unix(start);
    const mEnd = moment.unix(end);
    const timeStart = mStart.hour() * 60 + mStart.minute();
    const timeEnd = mEnd.hour() * 60 + mEnd.minute();
    return now < e ? false : timeStart < timeEnd ? s <= e : s < e;
  };

  handleCurrent = () => {
    const { onPeriod } = this.props;
    const end = moment();
    const start = moment().subtract(6, 'hours');
    this.setState({
      activeItem: {
        text: '6H',
        value: 6,
        unit: 'hours',
      }
    });
    onPeriod(ignoreSeconds(start), ignoreSeconds(end));
  };

  render() {
    const { period } = this.props;
    const { activeItem } = this.state;

    return (
      <div className="period">
        <h3 className="caption-fontsize">Period</h3>
        <button
          className="btn btn-xs pull-left btn-current"
          onClick={this.handleCurrent}
        >
          Current
        </button>
        <BtnGrp activeItem={activeItem} onChangeInterval={this.handleChangeInterval} />
        <div className="input-daterange input-group">
          <button
            type="button"
            className="btn btn-xs btn-white"
            onClick={this.handleLeftClick}
          >
            <i className="fa fa-chevron-left" />
          </button>
          <Datetime
            isValidDate={this.checkStartValid}
            inputProps={{ readOnly: true }}
            closeOnSelect
            timeFormat="HH:mm"
            value={moment.unix(period.start)}
            onChange={this.handleFromDatetimeChange}
          />
          <span className="input-group-addon">to</span>
          <Datetime
            isValidDate={this.checkEndValid}
            inputProps={{ readOnly: true }}
            closeOnSelect
            timeFormat="HH:mm"
            value={moment.unix(period.end)}
            onChange={this.handleToDatetimeChange}
          />
          <button
            type="button"
            className="btn btn-xs btn-white"
            onClick={this.handleRightClick}
          >
            <i className="fa fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}
