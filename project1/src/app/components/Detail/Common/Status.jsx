import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import CommonChart from '../../Rechart/Common/CommonChart';
import ChartOption from '../../Rechart/Common/ChartOption';
import { flowDataFormatter } from '../../../helper';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';


export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideChart: true,
    };
  }

  handleClick = () => {
    this.setState({
      hideChart: !this.state.hideChart
    });
  };

  handleSetChartType = (type) => {
    this.setState({
      chartType: type
    });
  };

  renderTableTitle = text =>
    (this.state.hideChart ?
      <td><span className="bold">{text}</span></td>
      : <td rowSpan="2"><span className="bold">{text}</span></td>);

  renderTableChart = (data, table, itemType) => {
    const { statusQuery, displayType, searchNm, saveTmpFilter } = this.props;

    if (this.state.hideChart) {
      return '';
    }
    if (!data) {
      return (
        <div className="status-no-data">
          No Chart Data!
        </div>
      );
    }
    return (
      <ChartPanel
        title={data.chartLineNm.v1}
        data={data.data}
        chartCnt={data.chartCnt}
        chartNm={data.chartLineNm}
        stat={data.stat}
        cvsData={table}
        statusQuery={statusQuery}
        itemType={itemType}
        displayType={displayType}
        searchNm={searchNm}
        saveTmpFilter={saveTmpFilter}
      />
    );
  }

  render() {
    const chartClass = classNames('chart-row', { hide: this.state.hideChart });

    const { statusData } = this.props;
    const tableData = (statusData || {}).chartData;
    const cvsData = (statusData || {}).tableData;
    const dataExisted = tableData && tableData.flow && tableData.traffic && tableData.packet;

    return (
      <div className="status">
        <span className="bold-title">Current Status</span>
        <a
          className="link-color pull-right bold"
          onClick={this.handleClick}
        >
          {this.state.hideChart ? 'View Graph' : 'Hide Graph'}
        </a>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="first-td" />
              <th>In</th>
              <th>Out</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.renderTableTitle('Traffic')}
              <td><span>{dataExisted ? (tableData.traffic.in ? `${flowDataFormatter(tableData.traffic.in.stat.v1.last)}bps` : '-') : (tableData ? '0' : '-')}</span></td>
              <td><span>{dataExisted ? (tableData.traffic.out ? `${flowDataFormatter(tableData.traffic.out.stat.v1.last)}bps` : '-') : (tableData ? '0' : '-')}</span></td>
              <td><span>{dataExisted ? (tableData.traffic.total ? `${flowDataFormatter(tableData.traffic.total.stat.v1.last)}bps` : '-') : (tableData ? '0' : '-')}</span></td>
            </tr>
            <tr className={chartClass}>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.traffic.in, cvsData.traffic.in, 'traffic')}
              </td>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.traffic.out, cvsData.traffic.out, 'traffic')}
              </td>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.traffic.total, cvsData.traffic.total, 'traffic')}
              </td>
            </tr>
            <tr>
              {this.renderTableTitle('Flow')}
              <td><span>{dataExisted ? (tableData.flow.in ? `${flowDataFormatter(tableData.flow.in.stat.v1.last)}Flow/s` : '-') : (tableData ? '0' : '-')}</span></td>
              <td><span>{dataExisted ? (tableData.flow.out ? `${flowDataFormatter(tableData.flow.out.stat.v1.last)}Flow/s` : '-') : (tableData ? '0' : '-')}</span></td>
              <td><span>{dataExisted ? (tableData.flow.total ? `${flowDataFormatter(tableData.flow.total.stat.v1.last)}Flow/s` : '-') : (tableData ? '0' : '-')}</span></td>
            </tr>
            <tr className={chartClass}>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.flow.in, cvsData.flow.in, 'flow')}
              </td>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.flow.out, cvsData.flow.out, 'flow')}
              </td>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.flow.total, cvsData.flow.total, 'flow')}
              </td>
            </tr>
            <tr>
              {this.renderTableTitle('Packet')}
              <td><span>{dataExisted ? (tableData.packet.in ? `${flowDataFormatter(tableData.packet.in.stat.v1.last)}pps` : '-') : (tableData ? '0' : '-')}</span></td>
              <td><span>{dataExisted ? (tableData.packet.out ? `${flowDataFormatter(tableData.packet.out.stat.v1.last)}pps` : '-') : (tableData ? '0' : '-')}</span></td>
              <td><span>{dataExisted ? (tableData.packet.total ? `${flowDataFormatter(tableData.packet.total.stat.v1.last)}pps` : '-') : (tableData ? '0' : '-')}</span></td>
            </tr>
            <tr className={chartClass}>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.packet.in, cvsData.packet.in, 'packet')}
              </td>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.packet.out, cvsData.packet.out, 'packet')}
              </td>
              <td>
                {dataExisted &&
                  this.renderTableChart(tableData.packet.total, cvsData.packet.total, 'packet')}
              </td>
            </tr>
            {/* <tr>
              {this._renderTableTitle('UV')}
              <td><span>100</span></td>
              <td><span>5000</span></td>
              <td><span>5100</span></td>
            </tr
            <tr className={chartClass}>
              <td>{this._renderTableChart(data[9])}</td>
              <td>{this._renderTableChart(data[10])}</td>
              <td>{this._renderTableChart(data[11])}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

class ChartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
    };
    this.charts = {};
  }

  setChartType = (type) => {
    this.setState({ type });
  };

  handleDownloadPNG = (title) => {
    downloadPNG(this.charts[title], title, `${title}.png`);
  };

  handleDownloadXls = (cvsData, title, itemType) => {
    const data = [];
    const valName = itemType === 'traffic' ? 'Traffic(bps)' :
      itemType === 'flow' ? 'Flow(Flow/s)' :
      itemType === 'packet' ? 'Packet(pps)' : '';
    cvsData.forEach((item) => {
      data.push({
        Dimension: item.name,
        Time: item.time,
        [valName]: item.value,
      });
    });
    JSONToCSVConvertor(data, title, true);
  };

  sendToExplorer = () => {
    const {
      statusQuery,
      itemType,
      displayType,
      searchNm,
      saveTmpFilter
    } = this.props;
    const filter = {
      type: displayType,
      requestType: 'detail_current',
      directionType: 'all',
      itemType,
      period: statusQuery.period,
      aggregation: statusQuery.aggregation,
      interval: statusQuery.interval,
      showDiff: false
    };
    const side = statusQuery.server ? 'server' : statusQuery.user ? 'user' : 'dst';
    const domain = Object.keys(statusQuery[side])[0];
    filter[side] = {
      ...statusQuery[side],
      [domain]: {
        ...statusQuery[side][domain],
        name: [searchNm]
      }
    };
    const payload = {
      fltrsetNm: new Date().getTime().toString(),
      fltrsetTp: displayType,
      fltrset: JSON.stringify(filter),
      tempYn: 'Y',
      creEmpNo: null,
      creYmdt: null,
      modYmdt: null
    };
    saveTmpFilter(payload, (id) => {
      browserHistory.push(`/${displayType}/explorer/filter/${id}`);
    });
  };

  render() {
    const { type } = this.state;
    const {
      data,
      chartCnt,
      chartNm,
      stat,
      title,
      cvsData,
      statusQuery,
      searchNm
    } = this.props;

    const itemType = title.split('-')[0];
    const direction = title.split('-')[1];

    return (
      <div ref={c => this.charts[title] = c}>
        <ChartOption
          setType={this.setChartType}
          downloadPNG={() => this.handleDownloadPNG(title)}
          downloadXls={() => this.handleDownloadXls(cvsData, title, itemType)}
          sideType={statusQuery ? statusQuery.type : ''}
          reqType={statusQuery ? statusQuery.requestType : ''}
          domainNm={statusQuery ? statusQuery.domainType : ''}
          domainNo={statusQuery ? statusQuery.domainValue : ''}
          periodParam={statusQuery ? statusQuery.period : null}
          aggregation={statusQuery ? statusQuery.aggregation : ''}
          interval={statusQuery ? statusQuery.interval : ''}
          diff={statusQuery ? statusQuery.showDiff : false}
          direction={direction}
          itemType={itemType}
          sendToExplorer={this.sendToExplorer}
          searchNm={searchNm}
        />
        <CommonChart
          data={data}
          type={type}
          chartCnt={chartCnt}
          chartNm={chartNm}
          stat={stat}
        />
      </div>
    );
  }
}
