import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import CommonChart from '../../Rechart/Common/CommonChart';
import ChartOption from '../../Rechart/Common/ChartOption';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';
import { scaleChart } from '../../../helper';
import Tooltips from '../../Common/ToolTip';
import { COMPARE_DASHBOARD_DESP } from '../../../constants/helpDesp';

export default class CompareChartPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
    };
    this.chart = {};
  }

  setChartType = (type) => {
    this.setState({ type });
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
    downloadPNG(findDOMNode(this.chart[title]), title, `${title}.png`);
  };

  render() {
    const { type } = this.state;
    const {
      chartData,
      tableData,
      isLoading,
      col,
      activeMethod,
      searchQuery,
    } = this.props;

    const data = (activeMethod.value === 'relative' ? (chartData ? scaleChart(chartData) : '') : chartData);
    const chartWrapClass = classNames('block', {
      col1: col === 1,
      col2: col === 2,
      col3: col === 3
    });
    const itemType = (searchQuery || {}).itemType;
    return isLoading ? (
      <div className="spinner">
        <i className="fa fa-spinner" />
      </div>
    ) : data ? (
      <div className={chartWrapClass}>
        <div className="chartpane">
          <div className="ibox-title block-title">
            <h4 className="pull-left">{data.chartTitle}
              <Tooltips type="R" desp={COMPARE_DASHBOARD_DESP[0][data.chartTitle]} />
            </h4>
            <ChartOption
              setType={this.setChartType}
              downloadXls={() => this.handleDownloadXls(tableData, data.chartTitle, itemType)}
              downloadPNG={() => this.handleDownloadPNG(data.chartTitle)}
              itemType={searchQuery ? searchQuery.itemType : ''}
              sideType={searchQuery ? searchQuery.type : ''}
              reqType={searchQuery ? `${searchQuery.requestType}&${searchQuery.compareTime}` : ''}
              direction={searchQuery ? searchQuery.directionType : ''}
              aggregation={searchQuery ? searchQuery.aggregation : ''}
              interval={searchQuery ? searchQuery.interval : ''}
              periodParam={searchQuery ? searchQuery.period : null}
              fieldType={chartData && chartData.domainArr && chartData.domainArr[0] ?
                (chartData.domainArr[0].type === 'router' ?
                'server_router' : chartData.domainArr[0].type) : ''}
              // fieldValue={data ? data.domainArr[0].id : ''}
              fieldTopLimit={searchQuery ? searchQuery.fieldTopLimit : 10}
              compareTime={searchQuery ? searchQuery.compareTime : ''}
              diff={searchQuery ? searchQuery.showDiff : true}
            />
          </div>
          <div className="block-chart" ref={c => this.chart[data.chartTitle] = c}>
            <CommonChart
              data={data.data}
              type={type}
              chartCnt={data.chartCnt}
              chartNm={data.chartLineNm}
              stat={data.stat}
              activeMethod={activeMethod}
              col={col}
              baseline
            />
          </div>
        </div>
      </div>
    ) : <div />;
  }
}
