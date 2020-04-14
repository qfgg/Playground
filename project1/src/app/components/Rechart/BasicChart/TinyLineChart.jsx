import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

export default class TinyLineChart extends Component {
  render() {
    const { data, dataKey, chartHeight } = this.props;
    return (
      <ResponsiveContainer height={chartHeight} debounce={1}>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <Tooltip />
          <Line dataKey={dataKey} stroke="#82ca9d" strokeWidth={1} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

TinyLineChart.propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
  chartHeight: PropTypes.number,
};

