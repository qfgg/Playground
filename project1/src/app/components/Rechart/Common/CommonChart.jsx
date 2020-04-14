import React, { Component } from 'react';
import TimeLineChart from '../BasicChart/TimeLineChart';
import BasicAreaChart from '../BasicChart/BasicAreaChart';
import TreemapChart from '../BasicChart/TreemapChart';
import GeomapChart from '../BasicChart/GeomapChart';
import TinyLineChart from '../BasicChart/TinyLineChart';
import BasicPieChart from '../BasicChart/BasicPieChart';


export default class CommonChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resizeFlag: false,
      containerWidth: -1,
      containerHeight: -1,
    };
    this.timing = null;
  }

  getContainerSize = () => {
    if (!this.container) { return null; }

    return {
      containerWidth: this.container.clientWidth,
      containerHeight: this.container.clientHeight,
    };
  };

  setResize = () => {
    if (!this.mounted) { return; }

    const newSize = this.getContainerSize();

    if (newSize) {
      const { containerWidth: oldWidth, containerHeight: oldHeight } = this.state;
      const { containerWidth, containerHeight } = newSize;

      if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
        this.setState({ containerWidth, containerHeight });
      }
    }

    // this must put after other setState in this function, only this one can invoke render()
    this.setState({ resizeFlag: !this.state.resizeFlag });
  };

  handleResize = () => {
    if (this.timing === null) {
      this.timing = setTimeout(() => {
        this.setResize();
      }, 100);
    } else {
      clearTimeout(this.timing);
      this.timing = setTimeout(() => {
        this.setResize();
      }, 100);
    }
  };

  // this is for relative/absolute
  shouldComponentUpdate(nextProps, nextState) {
    // return nextProps.type !== this.props.type ||
    // (nextProps.activeMethod || {}).value !== (this.props.activeMethod || {}).value ||
    // nextState.resizeFlag !== this.state.resizeFlag || nextState ||
    // ((nextProps.flNo && this.props.flNo) ? nextProps.flNo !== this.props.flNo : false);
    return (nextState.resizeFlag !== this.state.resizeFlag) ||
    (JSON.stringify(nextProps) !== JSON.stringify(this.props));
  }

  componentDidMount() {
    const { type } = this.props;
    this.mounted = true;

    if (type === 'line' || type === 'area' || type === 'stack') {
      window.addEventListener('resize', this.handleResize);
    }

    // resize after componentDidMout, cause only this time we can get container's actual size
    this.setResize();
  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.col !== this.props.col) {
      this.handleResize();
    }
  }
  componentWillUnmount() {
    const { type } = this.props;
    this.mounted = false;

    if (type === 'line' || type === 'area' || type === 'stack') {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  getTicks = (data) => {
    const tickArr = [];
    const start = data[0].xTick;
    if (/^\d{2}:\d{2}$/.test(start)) {
      for (let i = 0; i < data.length; i += 1) {
        const xTick = data[i].xTick;
        if (/^\d{2}:00$/.test(xTick)) {
          tickArr.push(xTick);
        }
      }
    } else if (/^\d{2} \d{2}:\d{2}$/.test(start)) {
      for (let i = 0; i < data.length; i += 1) {
        const xTick = data[i].xTick;
        if (/^\d{2} (00|06|12|18):00$/.test(xTick)) {
          tickArr.push(xTick);
        }
      }
    } else if (/^\d{2}\/\d{2} \d{2}:\d{2}$/.test(start)) {
      for (let i = 0; i < data.length; i += 1) {
        const xTick = data[i].xTick;
        if (/^\d{2}\/\d{2} (00|12):00$/.test(xTick)) {
          tickArr.push(xTick);
        }
      }
    } else if (/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/.test(start)) {
      for (let i = 0; i < data.length; i += 1) {
        const xTick = data[i].xTick;
        if (/^\d{4}\/\d{2}\/\d{2} 00:00$/.test(xTick)) {
          tickArr.push(xTick);
        }
      }
    } else {
      for (let i = 0; i < data.length; i += 1) {
        const xTick = data[i].xTick;
        if (/:00$/.test(xTick)) {
          tickArr.push(xTick);
        }
      }
    }
    return tickArr;
  };

  render() {
    const {
      chartNm,
      aspect,
      type,
      data,
      chartCnt,
      stat,
      baseline,
      dataKey,
      chartHeight,
      shouldClose,
      getBlockXY,
      activeMethod
    } = this.props;

    let ticks = [];
    if (data && data.length > 0) {
      ticks = this.getTicks(data);
    }

    let chartComponent = '';

    switch (type) {
    case 'line':
      chartComponent = (
        <TimeLineChart
          chartNm={chartNm}
          aspect={aspect || 7 / 3}
          data={data}
          chartCnt={chartCnt}
          stat={stat}
          xTick="xTick"
          ticks={ticks}
          activeMethod={activeMethod}
          baseline={baseline}
          getBlockXY={getBlockXY}
          shouldClose={shouldClose}
          tooltipWidth={this.state.containerWidth / 3 * 2 - 50}
        />
      );
      break;
    case 'area':
      chartComponent = (
        <BasicAreaChart
          chartNm={chartNm}
          aspect={aspect || 7 / 3}
          data={data}
          chartCnt={chartCnt}
          stat={stat}
          xTick="xTick"
          ticks={ticks}
          activeMethod={activeMethod}
          baseline={baseline}
          getBlockXY={getBlockXY}
          shouldClose={shouldClose}
          tooltipWidth={this.state.containerWidth / 3 * 2 - 50}
        />
      );
      break;
    case 'stack':
      chartComponent = (
        <BasicAreaChart
          chartNm={chartNm}
          aspect={aspect || 7 / 3}
          data={data}
          chartCnt={chartCnt}
          stat={stat}
          xTick="xTick"
          ticks={ticks}
          stack
          baseline={baseline}
          getBlockXY={getBlockXY}
          shouldClose={shouldClose}
          tooltipWidth={this.state.containerWidth / 3 * 2 - 50}
        />
      );
      break;
    case 'treemap':
      chartComponent = (
        <TreemapChart data={data} aspect={aspect || 3 / 2} />
      );
      break;
    case 'geomap':
      chartComponent = (
        <GeomapChart data={data} />
      );
      break;
    case 'tinyline':
      chartComponent = (
        <TinyLineChart data={data} dataKey={dataKey} chartHeight={chartHeight} />
      );
      break;
    case 'pie':
      chartComponent = (
        <BasicPieChart data={data} aspect={aspect || 7 / 3} />
      );
      break;
    default:
      chartComponent = (
        <TimeLineChart
          chartNm={chartNm}
          aspect={aspect || 7 / 3}
          data={data}
          chartCnt={chartCnt}
          stat={stat}
          xTick="xTick"
          ticks={ticks}
          tooltipWidth={this.state.containerWidth / 2 - 50}
        />
      );
      break;
    }

    return <div ref={node => this.container = node}>{chartComponent}</div>;
  }
}
