import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
                item.fillOpacity === '0' ? null :
                <li
                  key={idx}
                  className="name-value"
                  style={{ color: CHART_COLORS[idx % CHART_COLORS.length] }}
                >
                  <i className="fa fa-circle" />
                  {` ${this.trimName(item.name)} : ${item.value !== null ? (flowDataFormatter(item.value >= 0 ? item.value : -item.value)) : 'No data'}`}
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

export default class BasicAreaChart extends Component {
  constructor() {
    super();
    this.state = {
      opacity: {}
    };
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const { chartNm } = this.props;
    const opacityJson = {};
    for (const key in chartNm) {
      opacityJson[key] = 0.5;
    }
    this.state.opacity = opacityJson;
    this.setState({
      opacity: this.state.opacity
    });
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.stack !== this.props.stack) {
      this.setState({
        opacity: {}
      });
    }
  }

  componentWillUnMount() {
    this.mounted = false;
  }
  renderAreas = (chartNm, chartCnt, stack, stat) => {
    const areaArr = [];
    const stackId = stack ? { stackId: '1' } : {};
    for (let i = 0; i < chartCnt; i += 1) {
      areaArr.push(
        <Area
          key={i}
          name={`${chartNm[`v${i + 1}`]} (Avg: ${stat ? flowDataFormatter(stat[`v${i + 1}`].avg) : 0}
          Min: ${stat ? flowDataFormatter(stat[`v${i + 1}`].min) : 0}
          Max: ${stat ? flowDataFormatter(stat[`v${i + 1}`].max) : 0}
          Last: ${stat ? flowDataFormatter(stat[`v${i + 1}`].last) : 0})`}
          {...stackId}
          isAnimationActive={false}
          dataKey={`v${i + 1}`}
          stroke={this.state.opacity[`v${i + 1}`] === 0 ? '#cdcdcd' : CHART_COLORS[i % CHART_COLORS.length]}
          strokeOpacity={`${this.state.opacity[`v${i + 1}`]}`}
          fill={CHART_COLORS[i % CHART_COLORS.length]}
          fillOpacity={`${this.state.opacity[`v${i + 1}`]}`}
          dot={false}
          activeDot={this.state.opacity[`v${i + 1}`] === 0 ? { r: 0 } : {}}
        />);
    }
    return areaArr;
  };

  handleClick = (o) => {
    if (!this.mounted) return;
    const dataKey = o;
    const { opacity } = this.state;
    const op = opacity[dataKey] === 0 ? 0.5 : 0;
    this.state.opacity = { ...opacity, [dataKey]: op };
    this.setState({
      opacity: this.state.opacity,
    });
  }

  render() {
    const {
      chartNm,
      aspect,
      data,
      chartCnt,
      xTick,
      ticks,
      stack,
      stat,
      baseline,
      tooltipWidth,
      shouldClose,
      getBlockXY,
      activeMethod
    } = this.props;
    const _data = stack ? [] : data;
    if (stack) {
      const { opacity } = this.state;
      data.map((item) => {
        const tmpItem = Object.assign({}, item);
        for (const key in opacity) {
          if (opacity[key] === 0) {
            delete tmpItem[key];
          }
        }
        _data.push(tmpItem);
      });
    }

    let unit = '';
    if (data && data[0] && data[0].unit) {
      unit = data[0].unit;
    }
    const tipMinWidth = chartCnt >= 20 ? 360 : 0;
    return (
      <div>
        <ResponsiveContainer aspect={aspect} debounce={1}>
          <AreaChart data={_data} margin={{ top: 20, right: 25, left: 5, bottom: 10 }}>
            <XAxis dataKey={xTick} ticks={ticks} />
            <YAxis
              label={
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
              wrapperStyle={{ maxWidth: tooltipWidth, minWidth: tipMinWidth, zIndex: 999 }}
            />
            {baseline ? <ReferenceLine y={0} stroke="#000" /> : ''}
            {this.renderAreas(chartNm, chartCnt, stack, stat)}
          </AreaChart>
        </ResponsiveContainer>
        <CustomLegend
          chartNm={chartNm}
          stat={stat}
          opacity={this.state.opacity}
          clickHander={this.handleClick}
          shouldClose={shouldClose}
          getBlockXY={getBlockXY}
          type={stack}
        />
      </div>
    );
  }
}

BasicAreaChart.propTypes = {
  chartNm: PropTypes.object,
  aspect: PropTypes.number,
  data: PropTypes.array,
  chartCnt: PropTypes.number,
  xTick: PropTypes.string,
  stack: PropTypes.bool,
  stat: PropTypes.object,
  baseline: PropTypes.bool,
  tooltipWidth: PropTypes.number,
};

