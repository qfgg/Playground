import React, { Component } from 'react';
import classNames from 'classnames';
import CommonChart from './CommonChart';
import ChartOption from './ChartOption';
import SplitPanel from './SplitPanel';
import SplitPopup from './SplitPopup';
import chartUtils from '../../../../lib/chartUtils';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';
import './index.less';


export default class CombineChartPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSplit: false,
      type: 'line',
      splitCharts: null,
      splitTable: null,
    };
    this.canvas = {};
  }

  closeSplitPanel = () => {
    if (this.state.renderSplit) {
      this.setState({
        renderSplit: false,
      });
    }
  };

  renderChart = (show, data, type, chartCnt, chartNm, stat) => {
    if (!show) {
      return '';
    }
    return (
      <CommonChart
        data={data}
        type={type}
        chartCnt={chartCnt}
        chartNm={chartNm}
        stat={stat}
      />
    );
  }

  handleSplit = (isSplit, splitStatus, charts, direction) => {
    this.setState({
      renderSplit: isSplit,
      splitCharts: null,
      tableData: null,
    });
    const chartsAll = chartUtils.chartGenerator(charts, 'split', splitStatus)[direction];
    const table = chartUtils.tableGenerator(charts, 'split', splitStatus)[direction];
    setTimeout(() => {
      this.setState({
        splitCharts: chartsAll,
        splitTable: table,
      });
    }, 0);
  };

  renderSplitBtn = (split, splitList, splitStatus, toggleSplit, charts, direction) =>
    (split ? (
      <SplitPopup
        handleSplit={() => this.handleSplit(true, splitStatus, charts, direction)}
        handleCheck={toggleSplit}
        splitList={splitList}
        splitStatus={splitStatus}
        closeSplitPanel={this.closeSplitPanel}
      >
        <button type="button" className="btn btn-xs wide-btn-split">Split</button>
      </SplitPopup>
    ) : '');

  renderSplitPanel = (show, split) => {
    const { renderSplit, splitCharts, splitTable } = this.state;
    const {
      name,
      searchQuery,
      splitStatus,
    } = this.props;
    if (!show || !split) {
      return '';
    }

    const direction = name.toLowerCase();

    return renderSplit ?
      <SplitPanel
        data={splitCharts}
        tableData={splitTable}
        direction={direction}
        splitStatus={splitStatus}
        searchQuery={searchQuery}
      /> : '';
  };

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

  handleDownloadPNG = (name) => {
    downloadPNG(this.canvas[name], name, `${name}.png`);
  };

  render() {
    const {
      name,
      data,
      chartCnt,
      chartNm,
      stat,
      show,
      split,
      splitList,
      splitStatus,
      toggleSplit,
      setClickChartFlag,
      setDownloadFlag,
      charts,
      searchQuery,
      tableData,
    } = this.props;
    const { type } = this.state;
    const popClass = classNames('pop-panel', { visible: show });
    const direction = name.toLowerCase();
    const itemType = (searchQuery || {}).itemType;

    return (
      <div className={popClass}>
        <div className="pop-chart" onClick={setClickChartFlag}>
          <div className="ibox-title">
            <h3>{name}</h3>
            <ChartOption
              setType={this.handleSetType}
              downloadXls={() => this.handleDownloadXls(tableData, name, itemType)}
              downloadPNG={() => this.handleDownloadPNG(name)}
              setDownloadFlag={setDownloadFlag}
              itemType={(searchQuery || {}).itemType}
              direction={direction}
              reqType={(searchQuery || {}).requestType}
              periodParam={(searchQuery || {}).period}
              interval={(searchQuery || {}).interval}
              aggregation={(searchQuery || {}).aggregation}
              sideType={(searchQuery || {}).type}
              topParam={(searchQuery || {}).top}
              forbidToFlow={(searchQuery || {}).forbidToFlow}
              exploreParam={searchQuery}
            />
          </div>
          <div className="ibox-content no-padding withtop">
            <div className="main-chart">
              <div className="canvas" ref={c => this.canvas[name] = c}>
                {this.renderChart(show, data, type, chartCnt, chartNm, stat)}
              </div>
              {this.renderSplitBtn(split, splitList, splitStatus, toggleSplit, charts, direction)}
            </div>
            {this.renderSplitPanel(show, split)}
          </div>
        </div>
      </div>
    );
  }
}
