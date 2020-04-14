import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import CommonChart from '../../Rechart/Common/CommonChart';
import { flowDataFormatter, cloneObj, sortAscBy, sortDescBy } from '../../../helper';


export default class IndividualList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      ShowIf: {},
      sortStatus: {},
      sortedList: [],
    };
  }

  componentWillReceiveProps(nProps) {
    const { hideChart, relationType } = this.props;
    if (!hideChart && nProps.hideChart) {
      this.setState({
        ShowIf: {},
      });
    }
    if (relationType !== nProps.relationType) {
      this.setState({
        page: 1
      });
    }
  }

  showMore = (listLen) => {
    const { page } = this.state;

    if (page * 30 < listLen) {
      this.setState({
        page: page + 1
      });
    }
  }

  toggleShowIfChart = (obj) => {
    const { getInterfaceByRouter, searchQuery, interfaceList } = this.props;

    if (!this.state.ShowIf[obj]) {
      if (!interfaceList[obj]) {
        const query = cloneObj(searchQuery);
        getInterfaceByRouter(obj, query);
      }
      this.setState({
        ShowIf: { ...this.state.ShowIf, [obj]: true },
      });
    } else {
      this.setState({
        ShowIf: { ...this.state.ShowIf, [obj]: false },
      });
    }
  };

  renderTableChart = (data, hideChart) => (
    hideChart ? '' : (
      data ?
        <CommonChart
          data={data.data}
          chartCnt={data.chartCnt}
          chartNm={data.chartLineNm}
          stat={data.stat}
          chartType="line"
        /> :
        <div className="indiv-no-data">No Chart Data!</div>
    )
  );

  sendtoIfDetail = (chartId) => {
    const { displayType, clickSearchBtn } = this.props;

    browserHistory.push(`/${displayType}/detail/interface/${chartId}`);
    clickSearchBtn('Interface', chartId, displayType);
  };

  renderIfChart = data =>
    (<div>
      <div style={{ textAlign: 'left' }}>
        <a onClick={this.sendtoIfDetail.bind(this, data.domainArr[0].id)}>
          {data.chartTitle}
        </a>
      </div>
      <CommonChart
        data={data.data}
        chartCnt={data.chartCnt}
        chartNm={data.chartLineNm}
        stat={data.stat}
        type="line"
      />
    </div>);

  toDetail = (chartId, chartTitle) => {
    if (chartTitle !== 'UNKNOWN') {
      const { displayType, relationType, clickSearchBtn } = this.props;

      browserHistory.push(`/${displayType}/detail/${relationType.toLowerCase()}/${chartId}`);
      clickSearchBtn(relationType, chartId, displayType);
    }
  };

  getIfChartList = (ifData, fetchResultStatus, routerNo) => {
    const ifChartList = [];
    if (ifData && ifData.res) {
      ifData.res.map((item) => {
        if (fetchResultStatus[`${routerNo}_${item}`]) {
          const ifChart = fetchResultStatus[`${routerNo}_${item}`].chartData;
          if (ifChart && ifChart.data && ifChart.data.length !== 0) {
            ifChartList.push(ifChart);
          }
        }
      });
    }
    return ifChartList;
  };

  checkIsLoading = (ifData, fetchResultStatus, routerNo) => {
    let isLoading = true;
    if (ifData && ifData.res) {
      if (ifData.res.length > 0) {
        ifData.res.map((item) => {
          if (fetchResultStatus[`${routerNo}_${item}`]) {
            isLoading = fetchResultStatus[`${routerNo}_${item}`].isFetching;
          }
        });
      } else {
        isLoading = false;
      }
    }
    return isLoading;
  };

  getTRList = (indDataArr, chartClass, hideChart) => {
    const {
      isRouter,
      interfaceList,
      fetchResultStatus,
      relationType
    } = this.props;
    const arr = [];

    for (let i = 0, len = indDataArr.length; i < len; i++) {
      const dataIn = indDataArr[i].in;
      const dataOut = indDataArr[i].out;
      const dataTotal = indDataArr[i].total;
      const dataNo = indDataArr[i].no;
      let dataName = indDataArr[i].name;
      if (relationType === 'AS') {
        dataName = `${dataName} (AS${indDataArr[i].in.domainArr[0].id})`;
      }
      const inLast = indDataArr[i].inLast;
      const outLast = indDataArr[i].outLast;
      const totalLast = indDataArr[i].totalLast;
      const dataId = (dataIn || dataOut).domainArr[0].id;
      let isLoading;
      let ifCmp;
      if (isRouter) {
        let charts = [];
        isLoading = true;
        if (interfaceList) {
          charts = this.getIfChartList(interfaceList[dataId], fetchResultStatus, dataId);
          isLoading = this.checkIsLoading(interfaceList[dataId], fetchResultStatus, dataId);
        }
        ifCmp = this.state.ShowIf[dataId] ?
          (<tr key={`${i + 1}if`}>
            <td colSpan="5" style={{ textAlign: isLoading ? 'center' : 'left' }}>
              {
                isLoading ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) : (charts.length !== 0 ?
                charts.map((item, idx) =>
                  (<div key={idx} className="col3">
                    {this.renderIfChart(item)}
                  </div>)) :
                <div style={{ textAlign: 'center' }}>No Chart Data!</div>)
              }
            </td>
          </tr>) : <tr />;
      }
      const cursorClass = classNames({ cursor: dataName !== 'UNKNOWN' });

      arr.push((
        <tbody key={i}>
          <tr>
            <td>
              <span>{dataNo}</span>
            </td>
            <td
              onClick={() => this.toDetail(dataId, dataName)}
              className={cursorClass}
            >
              <span>{dataName}</span>
            </td>
            <td rowSpan={isRouter ? '2' : '1'}>
              <span>{inLast !== '-' ? flowDataFormatter(inLast) : '-'}</span>
              <div className={chartClass}>
                {this.renderTableChart(dataIn, hideChart)}
              </div>
            </td>
            <td rowSpan={isRouter ? '2' : '1'}>
              <span>{outLast !== '-' ? flowDataFormatter(outLast) : '-'}</span>
              <div className={chartClass}>
                {this.renderTableChart(dataOut, hideChart)}
              </div>
            </td>
            <td rowSpan={isRouter ? '2' : '1'}>
              <span>{totalLast !== '-' ? flowDataFormatter(totalLast) : '-'}</span>
              <div className={chartClass}>
                {this.renderTableChart(dataTotal, hideChart)}
              </div>
            </td>
          </tr>
          {
            isRouter && !hideChart ?
              <tr>
                {
                  <td className="show-ifbtn" colSpan="2">
                    <button
                      className="btn-ok btn-xs btn-white"
                      type="button"
                      onClick={this.toggleShowIfChart.bind(this, dataId)}
                    >
                      Show IF
                    </button>
                  </td>
                }
              </tr> : <tr />
          }
          { isRouter ? ifCmp : <tr /> }
        </tbody>
      ));
    }
    return arr;
  };

  sortList = (item, sortingList, indDataArr) => {
    // const { toHideChart } = this.props;
    this.setState({
      sortStatus: {
        [item]:
          this.state.sortStatus[item] === undefined ? 1 :
          this.state.sortStatus[item] === 1 ? -1 :
          this.state.sortStatus[item] + 1,
      },
      sortedList: this.state.sortStatus[item] === 1 ?
        sortingList.sort(sortDescBy(item)) : this.state.sortStatus[item] === -1 ?
        indDataArr : sortingList.sort(sortAscBy(item)),
      ShowIf: {},
    });
    // toHideChart();
  };

  sortListData = (item, sortingList, indDataArr) => {
    // const { toHideChart } = this.props;
    this.setState({
      sortStatus: {
        [item]:
          this.state.sortStatus[item] === undefined ? -1 :
          this.state.sortStatus[item] === -1 ? 1 :
          this.state.sortStatus[item] - 1,
      },
      sortedList: this.state.sortStatus[item] === -1 ?
        sortingList.sort(sortAscBy(item)) : this.state.sortStatus[item] === 1 ?
        indDataArr : sortingList.sort(sortDescBy(item)),
      ShowIf: {},
    });
    // toHideChart();
  };

  render() {
    const { hideChart, indData, isFetchingInds } = this.props;
    const { sortStatus, sortedList, page } = this.state;
    // console.log(indData);
    const chartClass = classNames({ hide: hideChart });

    const indDataArr = [];
    let j = 0;
    for (const obj in indData) {
      j += 1;
      indDataArr.push({ ...indData[obj],
        no: j,
        name: (indData[obj].in || indData[obj].out).chartTitle,
        inLast: indData[obj].in ? indData[obj].in.stat.v1.last : '-',
        outLast: indData[obj].out ? indData[obj].out.stat.v1.last : '-',
        totalLast: indData[obj].total ? indData[obj].total.stat.v1.last : '-',
      });
    }
    const sortingList = indDataArr.slice(0);
    const listLen = sortedList.length > 0 ? sortedList.length : indDataArr ?
      indDataArr.length : 0;
    const showListLen = 30 * page;
    const nameClass = classNames('normalWidth', { smWidth: !hideChart });

    return (
      <div className="ibox-content summary-wrap">
        {
          isFetchingInds ?
            (<div className="ibox-content withtop">
              <div className="spinner">
                <i className="fa fa-spinner" />
              </div>
            </div>) :
            (<table className="table normal-table">
              <thead>
                <tr>
                  <th
                    className="xsWidth"
                    onClick={evt => this.sortList('no', sortingList, indDataArr, evt)}
                  >
                    No
                    <Sort
                      sortedValue="no"
                      sortStatus={sortStatus}
                    />
                  </th>
                  <th
                    className={nameClass}
                    onClick={evt => this.sortList('name', sortingList, indDataArr, evt)}
                  >
                    Name
                    <Sort
                      sortedValue="name"
                      sortStatus={sortStatus}
                    />
                  </th>
                  <th
                    onClick={evt => this.sortListData('inLast', sortingList, indDataArr, evt)}
                  >
                    In[bps]
                    <Sort
                      sortedValue="inLast"
                      sortStatus={sortStatus}
                    />
                  </th>
                  <th
                    onClick={evt => this.sortListData('outLast', sortingList, indDataArr, evt)}
                  >
                    Out[bps]
                    <Sort
                      sortedValue={'outLast'}
                      sortStatus={sortStatus}
                    />
                  </th>
                  <th
                    onClick={evt => this.sortListData('totalLast', sortingList, indDataArr, evt)}
                  >
                    Total[bps]
                    <Sort
                      sortedValue="totalLast"
                      sortStatus={sortStatus}
                    />
                  </th>
                </tr>
              </thead>
              {
                indDataArr ? (sortedList.length !== 0 ?
                  this.getTRList(showListLen < listLen ?
                    sortedList.slice(0, showListLen) : sortedList, chartClass, hideChart) :
                  this.getTRList(showListLen < listLen ?
                    indDataArr.slice(0, showListLen) : indDataArr, chartClass, hideChart)) :
                  <tr><td>-</td></tr>
              }
            </table>)
        }
        {
          showListLen < listLen ?
            <button
              type="button"
              className="btn btn-xs wide-btn"
              onClick={this.showMore.bind(this, listLen)}
            >
              30 more
            </button> : ''
        }
      </div>
    );
  }
}

class Sort extends Component {
  render() {
    const { sortedValue, sortStatus } = this.props;
    return (
      <span className="activeSort">
        <i
          className={classNames('fa', {
            'fa-unsorted': !sortStatus[sortedValue],
            'fa-caret-down': sortStatus[sortedValue] === -1,
            'fa-caret-up': sortStatus[sortedValue] === 1,
          })}
        />
      </span>
    );
  }
}

IndividualList.propTypes = {
  hideChart: PropTypes.bool,
  indData: PropTypes.object,
};
