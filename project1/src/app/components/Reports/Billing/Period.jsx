import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';
import { ignoreDate } from '../../../helper';


export default class Period extends Component {
  handleFromDatetimeChange = (m) => {
    const { onChangePeriod } = this.props;
    onChangePeriod(ignoreDate(m));
  };

  handleToDatetimeChange = (m) => {
    const { onChangePeriod } = this.props;
    onChangePeriod(undefined, ignoreDate(m));
  };

  checkStartValid = (current) => {
    const { end } = this.props.period;
    const start = ignoreDate(current);
    return start < end;
  };

  checkEndValid = (current) => {
    const { start } = this.props.period;
    const end = ignoreDate(current);
    return start < end;
  };

  render() {
    const { start, end } = this.props.period;

    return (
      <div className="pull-left period">
        <div className="input-daterange input-group pull-left">
          <Datetime
            inputProps={{ readOnly: true }}
            isValidDate={this.checkStartValid}
            closeOnSelect
            viewMode="months"
            dateFormat="YYYY/MM"
            value={moment.unix(start)}
            onChange={this.handleFromDatetimeChange}
          />
          <span className="input-group-addon">to</span>
          <Datetime
            inputProps={{ readOnly: true }}
            isValidDate={this.checkEndValid}
            closeOnSelect
            viewMode="months"
            dateFormat="YYYY/MM"
            value={moment.unix(end)}
            onChange={this.handleToDatetimeChange}
          />
        </div>
      </div>
    );
  }
}

Period.propTypes = {
  onChangePeriod: PropTypes.func,
  period: PropTypes.object,
};
