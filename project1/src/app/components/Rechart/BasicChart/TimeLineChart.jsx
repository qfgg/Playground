import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { CHART_COLORS } from '../../../constants/Chart/ChartTypes';
import { flowDataFormatter } from '../../../helper';
import AxisLabel from './AxisLabel';
import CustomLegend from '../Common/CustomLegend';

class CustomTooltip extends Component {
  trimName = str => str.slice(0, str.indexOf(' (Avg: '));
  componentWillReceiveProps() {
    this.scrollY = document.body.scrollTop;
  }
  componentDidMount() {
    this.scrollY = document.body.scrollTop;
  }
  componentDidUpdate() {
    if (document.body.scrollTop !== this.scrollY) document.body.scrollTop = this.scrollY;
  }
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <ul>
            {
              payload.map((item, idx) => (
                item.strokeOpacity === '0' ? null :
                <li
                  key={idx}
                  className="name-value"
                  style={{ color: CHART_COLORS[idx % CHART_COLORS.length] }}
                >
                  <i className="fa fa-circle" />
                  {` ${this.trimName(item.name)}: ${item.value !== null ? (flowDataFormatter(item.value >= 0 ? item.value : -item.value)) : 'No data'}`}
                </li>))
            }
          </ul>
        </div>
      );
    }
    return null;
  }
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

class CustomizedAxisTick extends Component {
  render() {
    const { x, y, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dx={-5} dy={4} textAnchor="end" fill="#666">
          {flowDataFormatter(payload.value)}
        </text>
      </g>
    );
  }
}

CustomizedAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};


export default class TimeLineChart extends Component {
  constructor() {
    super();
    this.state = {
      opacity: {}
    };
    this.mounted = false;
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnMount() {
    this.mounted = false;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props)
      || JSON.stringify(nextState.opacity) !== JSON.stringify(this.state.opacity);
  }
  componentWillReceiveProps(nextProp) {
    if (JSON.stringify(nextProp.data) !== JSON.stringify(this.props.data)) {
      this.setState({
        opacity: {}
      });
    }
  }
  renderLines = (chartNm, chartCnt, stat) => {
    const lineArr = [];
    for (let i = 0; i < chartCnt; i += 1) {
      lineArr.push(
        <Line
          key={i}
          name={stat ? `${chartNm[`v${i + 1}`]} (Avg: ${flowDataFormatter(stat[`v${i + 1}`].avg)}
          Min: ${flowDataFormatter(stat[`v${i + 1}`].min)}
          Max: ${flowDataFormatter(stat[`v${i + 1}`].max)}
          Last: ${flowDataFormatter(stat[`v${i + 1}`].last)})` : `${chartNm[`v${i + 1}`]}`}
          isAnimationActive={false}
          dataKey={`v${i + 1}`}
          stroke={this.state.opacity[`v${i + 1}`] === 0 ? '#cdcdcd' : CHART_COLORS[i % CHART_COLORS.length]}
          strokeOpacity={`${this.state.opacity[`v${i + 1}`]}`}
          dot={false}
          activeDot={this.state.opacity[`v${i + 1}`] === 0 ? { r: 0 } : {}}
        />);
    }
    return lineArr;
  };
  handleClick = (o) => {
    if (!this.mounted) return;
    const dataKey = o;
    const { opacity } = this.state;
    const op = opacity[dataKey] === 0 ? 1 : 0;
    this.setState({
      opacity: { ...opacity, [dataKey]: op },
    });
  }
  render() {
    const {
      chartNm,
      aspect,
      data,
      chartCnt,
      stat,
      xTick,
      ticks,
      baseline,
      tooltipWidth,
      shouldClose,
      getBlockXY,
      activeMethod
    } = this.props;
    let unit = '-';
    if (data && data[0] && data[0].unit) {
      unit = data[0].unit;
    }
    const tipMinWidth = chartCnt >= 20 ? 360 : 0;
    return (
      <div>
        <ResponsiveContainer aspect={aspect} debounce={1}>
          <LineChart data={data} margin={{ top: 20, right: 25, left: 5, bottom: 10 }}>
            <XAxis dataKey={xTick} ticks={ticks} />
            <YAxis
              label={unit === '-' ? null :
              <AxisLabel axisType="yAxis">
                {{ content: unit, props: { fontSize: 12, fontWeight: 100 } }}
              </AxisLabel>}
              tick={<CustomizedAxisTick />}
              domain={activeMethod && activeMethod.value === 'relative' ? [-100, 100] : [0, 'auto']}
              width={80}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                maxWidth: tooltipWidth,
                minWidth: tipMinWidth,
                zIndex: 999,
                // top: -120
              }}
            />
            {baseline ? <ReferenceLine y={0} stroke="#000" /> : ''}
            {this.renderLines(chartNm, chartCnt, stat)}
          </LineChart>
        </ResponsiveContainer>
        <CustomLegend
          chartNm={chartNm}
          stat={stat}
          opacity={this.state.opacity}
          clickHander={this.handleClick}
          tooltipWidth={tooltipWidth}
          shouldClose={shouldClose}
          getBlockXY={getBlockXY}
        />
      </div>
    );
  }
}

TimeLineChart.propTypes = {
  chartNm: PropTypes.object,
  aspect: PropTypes.number,
  data: PropTypes.array,
  chartCnt: PropTypes.number,
  // stat: PropTypes.object,
  xTick: PropTypes.string,
  baseline: PropTypes.bool,
  tooltipWidth: PropTypes.number,
};

