import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommonChart from './CommonChart';
import ChartOption from './ChartOption';
import { isEmptyObj, cloneObj } from '../../../helper';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';


class SplitChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
    };
    this.panes = [];
  }

  handleSetType = (type) => {
    if (type !== this.state.type) {
      this.setState({ type });
    }
  };

  handleDownloadXls = (tableData, title, itemType) => {
    const data = [];
    const valName = itemType === 'traffic' ? 'Traffic(bps)' :
      itemType === 'flow' ? 'Flow(Flow/s)' :
      itemType === 'packet' ? 'Packet(pps)' : '';
    tableData.forEach((item) => {
      data.push({
        Dimension: item.name,
        Time: item.time,
        [valName]: item.value,
      });
    });
    JSONToCSVConvertor(data, title, true);
  };

  handleDownloadPNG = (title) => {
    downloadPNG(this.panes[title], title, `${title}.png`);
  };

  render() {
    const {
      item,
      tableData,
      searchQuery,
      direction,
      splitStatus,
    } = this.props;
    const { type } = this.state;
    const exploreParam = cloneObj(searchQuery);
    item.domainArr.map((domain) => {
      if (domain.type === 'tcp_flags' && exploreParam.tcpFlag) {
        exploreParam.tcpFlag.value = [domain.name];
      } else if (domain.type === 'protocol' && exploreParam.protocol) {
        exploreParam.protocol.value = [domain.name];
      } else if (domain.type === 'packet_size' && exploreParam.packetSize) {
        exploreParam.packetSize.value = [domain.name];
      } else if (splitStatus[domain.type]) {
        const field = domain.type.split('_')[0];
        const subField = domain.type.split('_')[1];
        exploreParam[field][subField].value = [domain.id];
      }
    });

    const reqType = `${searchQuery.requestType}_split`;
    const itemType = (searchQuery || {}).itemType;

    return (
      <div className="chart-pane">
        <div className="ibox-title">
          <h4>{item.chartTitle}</h4>
          <ChartOption
            setType={this.handleSetType}
            downloadXls={() => this.handleDownloadXls(tableData, item.chartTitle, itemType)}
            downloadPNG={() => this.handleDownloadPNG(item.chartTitle)}
            itemType={searchQuery.itemType}
            sideType={searchQuery.type}
            direction={direction}
            reqType={reqType}
            periodParam={searchQuery.period}
            interval={searchQuery.interval}
            topParam={searchQuery.top}
            aggregation={searchQuery.aggregation}
            forbidToFlow={(searchQuery || {}).forbidToFlow}
            exploreParam={exploreParam}
          />
        </div>
        <div className="ibox-content no-padding withtop" ref={c => this.panes[item.chartTitle] = c}>
          <CommonChart
            data={item.data}
            type={type}
            chartCnt={item.chartCnt}
            chartNm={item.chartLineNm}
            stat={item.stat}
          />
        </div>
      </div>
    );
  }
}

SplitChart.propTypes = {
  direction: PropTypes.string,
  item: PropTypes.object,
  searchQuery: PropTypes.object,
  splitStatus: PropTypes.object,
};

export default class SplitPanel extends Component {
  render() {
    const {
      data,
      tableData,
      searchQuery,
      direction,
      splitStatus,
    } = this.props;
    const charts = [];
    const table = [];
    const groups = [];
    if (data && !isEmptyObj(data)) {
      const groups = [];
      const tableGrps = [];
      const keys = Object.keys(data);
      for (let i = 0, len = keys.length; i < len; i += 1) {
        groups.push(data[keys[i]]);
        tableGrps.push(tableData[keys[i]]);
      }
      for (let j = 0, len = groups.length; j < len; j += 1) {
        charts[j] = groups[j];
        table[j] = tableGrps[j];
      }
    }

    return (
      <div className="split-panel">
        {
          charts.map((item, idx) => (
            <SplitChart
              key={idx}
              item={item}
              tableData={table[idx]}
              chart={groups[idx]}
              searchQuery={searchQuery}
              direction={direction}
              splitStatus={splitStatus}
            />
          ))
        }
      </div>
    );
  }
}

SplitPanel.propTypes = {
  direction: PropTypes.string,
  data: PropTypes.object,
  searchQuery: PropTypes.object,
  splitStatus: PropTypes.object,
};
