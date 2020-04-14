import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import classNames from 'classnames';
import CommonChart from '../../Rechart/Common/CommonChart';


export default class LatencyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: {}
    };
  }

  componentDidMount() {
    const { tableList, field } = this.props;
    const keyField = field.find(col => col.isKey);
    if (tableList && tableList.res) {
      tableList.res.forEach((item) => {
        this.setState({
          isExpand: { ...this.state.isExpand, [item[keyField.name]]: false },
        });
      });
    }
  }

  toggleShow = (item) => {
    const { field, getLatencyChart, domainId, domainName } = this.props;
    const keyField = field.find(col => col.isKey);
    const curVal = this.state.isExpand[item[keyField.name]];
    if (!curVal) {
      if (domainName === 'as') {
        getLatencyChart(item.countryCd, domainId);
      } else {
        item.as.forEach(itm => getLatencyChart(item.countryCd || domainId, itm));
      }
    }
    this.setState({
      isExpand: { ...this.state.isExpand, [item[keyField.name]]: !curVal },
    });
  };

  toDetailCnty = (countryCd) => {
    const { displayType, clickSearchBtn } = this.props;

    browserHistory.push(`/${displayType}/detail/country/${countryCd}`);
    clickSearchBtn('Country', countryCd, displayType);
  };

  toDetailPoP = (id) => {
    const { displayType, clickSearchBtn } = this.props;

    browserHistory.push(`/${displayType}/detail/pop/${id}`);
    clickSearchBtn('PoP', id, displayType);
  };

  toDetailAS = (asNo) => {
    const { displayType, clickSearchBtn } = this.props;

    browserHistory.push(`/${displayType}/detail/as/${asNo}`);
    clickSearchBtn('AS', asNo, displayType);
  };

  renderRow = (item, n) => {
    const { field, latencyChart, domainId, domainName } = this.props;
    const { isExpand } = this.state;
    const keyField = field.find(col => col.isKey);
    const isShow = isExpand[item[keyField.name]];
    const btnClass = classNames('fa', {
      'la-down': isShow,
      'la-up': !isShow
    });
    const hiddenRowCounts = domainName !== 'asNo' ? item.asNo.length : 1;
    const shownRowCounts = domainName !== 'asNo' ? item.asNo.length * 2 : 2;
    const rows = [];

    // unfold all AS and show charts
    if (isShow) {
      for (let i = 0; i < shownRowCounts; i++) {
        const chartData = domainName === 'as' ?
          (latencyChart[`${item.countryCd}_${domainId}`] || {}) :
          (latencyChart[`${item.countryCd || domainId}_${item.asName[(i - 1) / 2]}`] || {});

        rows.push(
          <tr key={`${n}.${i}`}>
            {
              field.map((col, idx) => {
                if (col.isHidden) {
                  return null;
                }
                if (i === 0 && col.name === 'pop') {
                  return (
                    <td rowSpan={shownRowCounts} key={idx}>
                      {
                        col.isMult && item.popName ? item.popName.map((val, id) =>
                          (<p key={id}>
                            <a onClick={() => this.toDetailPoP(item.popNo[id])}>
                              {val}
                            </a>
                          </p>)) : item.popName ?
                          (<a onClick={() => this.toDetailPoP(item.popNo)}>
                            {item.popName}
                          </a>) : ''
                      }
                    </td>
                  );
                }
                if (i % 2 === 0 && col.name === 'as') {
                  return (
                    <td rowSpan={2} key={idx}>
                      <a onClick={() => this.toDetailAS(item.asNo[i / 2])}>
                        {`${item.asName[i / 2]} AS(${item.asNo[i / 2]})`}
                      </a>
                    </td>
                  );
                }
                if (i % 2 === 0 && (col.name === 'latency' ||
                  col.name === 'loss' || col.name === 'dev')) {
                  return (
                    <td key={idx}>{item[col.name][i / 2]}</td>
                  );
                }
                if (i % 2 === 1 && col.name === 'latency') {
                  return (
                    <td colSpan={3} key={idx}>
                      {
                        chartData.isFetching ?
                          (<div className="spinner">
                            <i className="fa fa-spinner" />
                          </div>) : chartData.res && chartData.res.timeValue &&
                          chartData.res.timeValue.length > 0 ?
                            this.renderChart(chartData.res) :
                            'No Chart Data!'
                      }
                    </td>
                  );
                }
                if (i === 0 && col.name === 'countryName') {
                  return (
                    <td rowSpan={shownRowCounts} key={idx}>
                      <a onClick={() => this.toDetailCnty(item.countryCd)}>
                        {item.countryName}
                      </a>
                    </td>
                  );
                }
                if (i === 0 && col.isBtn) {
                  return (
                    <td rowSpan={shownRowCounts} key={idx}>
                      <i
                        className={btnClass}
                        onClick={() => this.toggleShow(item)}
                      />
                    </td>
                  );
                }
              })
            }
          </tr>
        );
      }
      return rows;
    }
    // hide additional AS and charts
    const cnt = hiddenRowCounts < 3 ? hiddenRowCounts : 3;
    for (let i = 0; i < cnt; i++) {
      rows.push(
        <tr key={`${n}.${i}`}>
          {
            field.map((col, idx) => {
              if (col.isHidden) {
                return null;
              }
              if (i === 0 && col.name === 'pop') {
                return (
                  <td rowSpan={cnt} key={idx}>
                    {
                      col.isMult && item.popName ? item.popName.map((val, id) =>
                        (<p key={id}>
                          <a onClick={() => this.toDetailPoP(item.popNo[id])}>
                            {val}
                          </a>
                        </p>)) : item.popName ?
                        (<a onClick={() => this.toDetailPoP(item.popNo)}>
                          {item.popName}
                        </a>) : ''
                    }
                  </td>
                );
              }
              if (col.name === 'as') {
                return (
                  <td key={idx}>
                    <a onClick={() => this.toDetailAS(item.asNo[i])}>
                      {`${item.asName[i]} AS(${item.asNo[i]})`}
                    </a>
                  </td>
                );
              }
              if (col.name === 'latency' || col.name === 'loss' ||
                col.name === 'dev') {
                return (
                  <td key={idx}>{item[col.name][i]}</td>
                );
              }
              if (i === 0 && col.name === 'countryName') {
                return (
                  <td rowSpan={cnt} key={idx}>
                    <a onClick={() => this.toDetailCnty(item.countryCd)}>
                      {item.countryName}
                    </a>
                  </td>
                );
              }
              if (i === 0 && col.isBtn) {
                return (
                  <td rowSpan={cnt} key={idx}>
                    <i
                      className={btnClass}
                      onClick={() => this.toggleShow(item)}
                    />
                  </td>
                );
              }
            })
          }
        </tr>
      );
    }
    return rows;
  };

  renderChart = (data) => {
    const arr = data.timeValue;
    const chart = {
      data: []
    };

    for (let i = 0, len = arr.length; i < len; i += 1) {
      if (!chart.data[i]) {
        chart.data[i] = {};
      }
      chart.data[i].xTick = moment.unix(arr[i].time).format('HH:mm');
      chart.data[i].v1 = Math.round(arr[i].latency);
      chart.data[i].v2 = Math.round(arr[i].loss);
      chart.data[i].unit = '';
    }

    return (
      <CommonChart
        data={chart.data}
        type="line"
        chartCnt={2}
        chartNm={{ v1: 'latency', v2: 'loss' }}
      />
    );
  };

  render() {
    const { header, tableList } = this.props;

    return (
      <div className="ibox-content summary-wrap">
        <table className="table latency-table">
          <thead>
            <tr>
              {
                (header || []).map((item, idx) =>
                  <th key={idx} style={{ cursor: 'auto' }}>{item}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              ((tableList || {}).res || []).map((item, idx) =>
                this.renderRow(item, idx)
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
