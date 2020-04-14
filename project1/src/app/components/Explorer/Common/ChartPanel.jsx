import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ChartOption from '../../Rechart/Common/ChartOption';
import CommonChart from '../../Rechart/Common/CommonChart';
import SplitPopup from '../../Rechart/Common/SplitPopup';
import SplitPanel from '../../Rechart/Common/SplitPanel';
import chartUtils from '../../../../lib/chartUtils';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';


export default class ChartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSplit: false,
      type: 'line',
      splitCharts: null,
      splitTable: null,
    };
    this.mainChart = {};
  }

  componentDidMount() {
    this.resizeMainChart();
    window.addEventListener('resize', this.resizeMainChart);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMainChart);
  }

  resizeMainChart = () => {
    const { title, setMainChartHeight } = this.props;
    if (title === 'In' || title === 'A->B') {
      setMainChartHeight(this.mainChart.offsetWidth * 3 / 7);
    }
  };

  closeSplitPanel = () => {
    if (this.state.renderSplit) {
      this.setState({
        renderSplit: false,
      });
    }
  };

  renderSplitChart = (split, direction, splitStatus) => {
    const { renderSplit, splitCharts, splitTable } = this.state;
    const { searchQuery } = this.props;
    return renderSplit && split ? (
      <SplitPanel
        data={splitCharts}
        tableData={splitTable}
        searchQuery={searchQuery}
        direction={direction}
        splitStatus={splitStatus}
      />
    ) : '';
  };

  handleSplit = (isSplit, splitStatus, charts, direction) => {
    this.setState({
      renderSplit: isSplit,
      splitCharts: null,
      splitTable: null,
    });
    if (direction === 'a->b') {
      direction = 'in';
    } else if (direction === 'b->a') {
      direction = 'out';
    }
    const chartsAll = chartUtils.chartGenerator(charts, 'split', splitStatus)[direction];
    const table = chartUtils.tableGenerator(charts, 'split', splitStatus)[direction];
    setTimeout(() => {
      this.setState({
        splitCharts: chartsAll,
        splitTable: table,
      });
    }, 0);
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
      let el;
      if (item.domain) {
        el = {};
        for (let i = 0, len = item.domain.length; i < len; i++) {
          el[item.domain[i].type] = item.domain[i].type === 'server_esm' ?
            item.domain[i].id : item.domain[i].name;
        }
        el = {
          ...el,
          Time: item.time,
          [valName]: item.value
        };
      } else {
        el = {
          Dimension: item.name,
          Time: item.time,
          [valName]: item.value,
        };
      }
      data.push(el);
    });
    JSONToCSVConvertor(data, title, true);
  };

  handleDownloadPNG = (title) => {
    downloadPNG(findDOMNode(this.mainChart), title, `${title}.png`);
  };

  render() {
    const {
      title,
      data,
      chartCnt,
      chartNm,
      stat,
      split,
      splitList,
      splitStatus,
      toggleSplit,
      charts,
      searchQuery,
      tableData,
      contentHeight
    } = this.props;
    const { type } = this.state;
    const direction = title.toLowerCase();
    const itemType = (searchQuery || {}).itemType;

    return (
      <div className="half-panel">
        <div className="ibox-title option-relative">
          <h3>{title}</h3>
          <ChartOption
            setType={this.handleSetType}
            downloadXls={() => this.handleDownloadXls(tableData, title, itemType)}
            downloadPNG={() => this.handleDownloadPNG(title)}
            direction={direction}
            itemType={(searchQuery || {}).itemType}
            reqType={(searchQuery || {}).requestType}
            periodParam={(searchQuery || {}).period}
            interval={(searchQuery || {}).interval}
            topParam={(searchQuery || {}).top}
            aggregation={(searchQuery || {}).aggregation}
            sideType={(searchQuery || {}).type}
            forbidToFlow={(searchQuery || {}).forbidToFlow}
            exploreParam={searchQuery}
          />
        </div>
        <div className="ibox-content no-padding withtop">
          <div className="main-chart" ref={c => this.mainChart = c}>
            {
              data ?
                (<CommonChart
                  data={data}
                  type={type}
                  chartCnt={chartCnt}
                  chartNm={chartNm}
                  stat={stat}
                />) :
                (<h2
                  className="noData"
                  style={{ height: contentHeight, lineHeight: `${contentHeight}px` }}
                >
                  No Chart Data!
                </h2>)
            }
            {
              split ? (
                <SplitPopup
                  handleCheck={toggleSplit}
                  handleSplit={() => this.handleSplit(true, splitStatus, charts, direction)}
                  splitList={splitList}
                  splitStatus={splitStatus}
                  closeSplitPanel={this.closeSplitPanel}
                >
                  <button type="button" className="btn btn-xs wide-btn-split">Split</button>
                </SplitPopup>
              ) : ''
            }
          </div>
          {this.renderSplitChart(split, direction, splitStatus)}
        </div>
      </div>
    );
  }
}
