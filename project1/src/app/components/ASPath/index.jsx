import React, { Component } from 'react';
import { Link } from 'react-router';
import SweetAlert from 'sweetalert-react';
import classNames from 'classnames';
import moment from 'moment';
import Radio from '../Common/Radio';
import MultiAutoSuggest from './MultiAutoSuggest';
import IPSearch from './IPSearch';
import SearchBar from './SearchBar';
import CommonChart from '../Rechart/Common/CommonChart';
import Pagination from '../Pagination';
import chartUtils from '../../../lib/chartUtils';
import SplitPanel from '../Rechart/Common/SplitPanel';
import Dropdown from '../Common/Dropdown';
import { ignoreSeconds, isValEqual, flowDataFormatter } from '../../helper';
import { INT_DROPDOWN_TYPES } from '../../constants/External/ASPath/ASPathTypes';
import { BASE_URL, CHARTS_URL } from '../../constants/Url';
import './index.less';


export default class ASPathComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
      interval: { text: '6H', value: '6h', data: 6, unit: 'hour' },
      radioChecked: -1,
      showAlert: false,
      dataOption: {
        text: 'Traffic',
        value: 'traffic'
      },
      period: {
        start: ignoreSeconds(moment().subtract(6, 'hour')),
        end: ignoreSeconds(moment())
      },
      int: {
        text: '1Min',
        value: '1m'
      },
      avg: {
        text: 'Avg',
        value: 'avg'
      },
      selectedRouters: [],
      curPage: 1,
      curPathList: [],
      sepQuery: null,
      isOpen: false,
      searchType: 'AS'
    };
  }

  componentWillReceiveProps(nProps) {
    const { searchPathStatus, clearRouterChart, clearChart } = this.props;
    if (!isValEqual(searchPathStatus.res, nProps.searchPathStatus.res)) {
      this.setState({
        curPage: 1,
        curPathList: (nProps.searchPathStatus.res || []).slice(0, 10),
        selectedRouters: [],
      });
      clearRouterChart();
      clearChart();
    }
  }

  componentDidUpdate(preProps, preState) {
    const { searchPathStatus } = this.props;
    const { curPage } = this.state;
    if (curPage !== preState.curPage) {
      this.setState({
        curPathList: (searchPathStatus.res || []).slice((curPage - 1) * 10, curPage * 10)
      });
    }
  }

  handleChangePeriod = (start, end) => {
    this.setState({
      period: {
        start: start || this.state.period.start,
        end: end || this.state.period.end
      }
    });
  };

  handleChangeInterval = (item) => {
    this.setState({ interval: item });

    const IntervalItems = INT_DROPDOWN_TYPES;
    let defaultItem = IntervalItems[0];
    const end = moment.unix(this.state.period.end);
    const start = moment(end).subtract(item.data, item.unit);
    const nStart = ignoreSeconds(start);
    const nEnd = this.state.period.end;
    const diffY = end.diff(start, 'years');
    const diffM = end.diff(start, 'month');
    const diffD = end.diff(start, 'days');
    const diffH = end.diff(start, 'hours');

    if (diffY >= 1) {
      defaultItem = IntervalItems[4];
    } else if (diffY < 1 && diffM >= 1) {
      defaultItem = IntervalItems[3];
    } else if (diffM < 1 && diffD >= 7) {
      defaultItem = IntervalItems[2];
    } else if (diffD < 7 && diffH >= 24) {
      defaultItem = IntervalItems[1];
    } else {
      defaultItem = IntervalItems[0];
    }
    this.setState({ int: defaultItem });

    this.setState({
      period: {
        start: nStart,
        end: nEnd
      }
    });
  };

  handleCurrent = () => {
    this.setState({
      period: {
        start: ignoreSeconds(moment().subtract(5, 'minutes')),
        end: ignoreSeconds(moment())
      }
    });
    this.setState({ interval: { text: '5m', value: '5m', data: 5, unit: 'minute' } });
  };

  handleSetData = (item) => {
    this.setState({ dataOption: item });
  };

  handleSetInt = (item) => {
    this.setState({ int: { text: item.text, value: item.value } });
  };

  handleSetAvg = (item) => {
    this.setState({ avg: { text: item.text, value: item.value } });
  };

  handleRadioCheck = (payload) => {
    const { getRouter } = this.props;
    getRouter(payload.item);
    this.setState({ radioChecked: payload.item, selectedRouters: [] });
  };

  handleRouterClick = (item) => {
    const { selectedRouters } = this.state;
    const arr = [...selectedRouters];
    let i;
    const len = selectedRouters.length;
    for (i = 0; i < len; i++) {
      if (selectedRouters[i].id === item.id) {
        break;
      }
    }
    if (i < len) {
      arr.splice(i, 1);
    } else {
      arr.push(item);
    }
    this.setState({ selectedRouters: arr });
  };

  handleClear = () => {
  };

  generateUploadQuery = (period, int, avg, dataOption, radioChecked,
    selectedRouters) => {
    const q = {
      type: 'external',
      requestType: 'explorer',
      server: {
        path: {
          value: [radioChecked],
        },
        router: {
          value: selectedRouters.map(item => item.id),
          separate: false
        }
      },
      fieldTopLimit: 0,
      directionType: 'all',
      aggregation: avg.value,
      itemType: dataOption.value,
      period: {
        start: period.start,
        end: period.end,
      },
      top: {
        limit: 10,
        order: 'bylast'
      },
      protocol: {
        value: ['all'],
        name: null,
        separate: false
      },
      interval: int.value,
      showDiff: false,
    };
    const sq = {
      type: 'external',
      requestType: 'explorer',
      server: {
        path: {
          value: [radioChecked],
        },
        router: {
          value: selectedRouters.map(item => item.id),
          separate: true
        }
      },
      fieldTopLimit: 0,
      directionType: 'all',
      aggregation: avg.value,
      itemType: dataOption.value,
      period: {
        start: period.start,
        end: period.end,
      },
      top: {
        limit: 10,
        order: 'bylast'
      },
      protocol: {
        value: ['all'],
        name: null,
        separate: false
      },
      interval: int.value,
      showDiff: false,
    };
    return { query: q, sepQuery: sq };
  };

  handleSearch = () => {
    const { storeChart } = this.props;
    const {
      selectedRouters,
      period,
      int,
      avg,
      dataOption,
      radioChecked
    } = this.state;

    if (selectedRouters.length === 0) {
      this.setState({ showAlert: true });
    } else {
      const query = this.generateUploadQuery(period, int, avg, dataOption,
        radioChecked, selectedRouters);
      this.setState({
        sepQuery: query.sepQuery
      });
      const url = `${BASE_URL}${CHARTS_URL}`;
      chartUtils.chartFetcher(query.query, url, 'exAspath');
      // clear split chart before the next request
      storeChart(null);
      chartUtils.chartFetcher(query.sepQuery, url, 'exAspathSep', (res) => {
        if (res && res.data && res.data.charts) {
          storeChart(res.data.charts);
        }
      });
    }
  };

  gen = (n) => {
    const arr = [];
    for (let i = 0; i < n; i += 1) {
      arr[i] = Math.floor(Math.random() * 1001);
    }

    return arr;
  };

  setCurPage = target => this.setState({ curPage: target });

  renderSplitChart = (direction, sepQuery, splitCharts, splitTables) =>
    splitCharts && splitTables ?
      (<SplitPanel
        data={splitCharts}
        tableData={splitTables}
        searchQuery={sepQuery}
        direction={direction}
        splitStatus={{ server_router: true }}
      />) : null;

  selSearchType = (type) => {
    this.setState({
      isOpen: false,
      searchType: type
    });
  };

  getPath = (path) => {
    const as = path.split(', ');
    const tags = as.map(item =>
      (<Link key={item} to={`/external/detail/as/${item.match(/^\d+/)}`}>{item}</Link>));
    let arr = [];
    tags.forEach((item, idx) => {
      arr = [...arr, item, <span key={`${as[idx]},`}>, </span>];
    });
    return arr;
  };

  render() {
    const {
      searchKW,
      suggestions,
      setSearchValue,
      getSuggest,
      searchPath,
      searchPathStatus,
      getRouterStatus,
      fetchResultStatus,
      chart,
      basicInfo,
      getBasic
    } = this.props;
    const {
      period,
      int,
      avg,
      dataOption,
      interval,
      radioChecked,
      selectedRouters,
      showAlert,
      type,
      curPage,
      curPathList,
      sepQuery,
      searchType
    } = this.state;
    let dataIn = {};
    let dataOut = {};
    let isLoading = false;
    const pathCnt = Math.ceil((searchPathStatus.res || []).length / 10);
    let splitCharts = {};
    let splitTables = {};
    if (fetchResultStatus && fetchResultStatus.exAspath) {
      if (fetchResultStatus.exAspath.chartData) {
        dataIn = fetchResultStatus.exAspath.chartData.in;
        dataOut = fetchResultStatus.exAspath.chartData.out;
      }
      isLoading = fetchResultStatus.exAspath.isFetching;
    }
    if (chart) {
      splitCharts = chartUtils.chartGenerator(chart, 'split', { server_router: true });
      splitTables = chartUtils.tableGenerator(chart, 'split', { server_router: true });
    }
    const ipBaseInfo = (basicInfo || {}).res || {};

    return (
      <div className="aspath">
        <Dropdown
          isOpen={this.state.isOpen}
          curSelect={searchType}
          clss={'combined-dropdown'}
        >
          {['AS', 'IP'].map((item, idx) =>
            (<li
              key={idx}
              className="option"
              onClick={() => this.selSearchType(item)}
            >
              <a>{item}</a>
            </li>)
          )}
        </Dropdown>
        {
          searchType === 'AS' ?
            (<MultiAutoSuggest
              searchKW={searchKW}
              suggestions={suggestions}
              setSearchValue={setSearchValue}
              getSuggest={getSuggest}
              searchPath={searchPath}
            />) :
            (<IPSearch
              searchPath={searchPath}
              getBasic={getBasic}
            />)
        }
        {
          searchType === 'IP' ?
            (<div>
              <div>
                <span className="bold-title">Base info</span>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="ip-as">AS</th>
                    <th className="ip-asnm">AS Name</th>
                    <th className="ip-prefix">Prefix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="center">{ipBaseInfo.as || '-'}</td>
                    <td className="center">{ipBaseInfo.asNm || '-'}</td>
                    <td className="center">{ipBaseInfo.fullName || '-'}</td>
                  </tr>
                </tbody>
              </table>
            </div>) : null
        }
        <div>
          <span className="bold-title">Path</span>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Path no.</th>
              <th>Path</th>
              <th>Average Traffic</th>
              <th>Flow</th>
            </tr>
          </thead>
          <tbody>
            {
              curPathList.map((item, key) =>
                (
                  <tr key={key}>
                    <td><span>{item.pathNo}</span></td>
                    <td><span>{this.getPath(item.pathName)}</span></td>
                    <td><span>{flowDataFormatter(item.averageTraffic)}</span></td>
                    <td>
                      <Radio
                        name="lalal"
                        className="radio-inline"
                        title={item.pathNo}
                        text="  "
                        value={item.pathNo}
                        checked={+radioChecked === +item.pathNo}
                        onChange={() => {}}
                        onCheck={this.handleRadioCheck}
                      />
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
        <Pagination
          totalCnt={pathCnt}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
        <div>
          <span className="bold-title">Router</span>
        </div>
        <div className="routers-wrap">
          {
            (getRouterStatus.res || []).map((item, key) => {
              const className = classNames('btn btn-xs btn-router', {
                unselect: !selectedRouters.some(i => i.id === item.id)
              });
              return (
                <button
                  className={className}
                  key={key}
                  onClick={this.handleRouterClick.bind(null, item)}
                >
                  {item.name}
                </button>
              );
            })
          }
        </div>
        <SearchBar
          period={period}
          int={int}
          avg={avg}
          dataOption={dataOption}
          activebtn={interval}
          onChangePeriod={(start, end) => this.handleChangePeriod(start, end)}
          onChangeInterval={item => this.handleChangeInterval(item)}
          onSetData={this.handleSetData}
          onSetInt={this.handleSetInt}
          onSetAvg={this.handleSetAvg}
          onCurrentClick={this.handleCurrent}
          onSubmitClick={this.handleSearch}
          clear={this.handleClear}
        />
        <div className="chart-panel">
          <div className="total-chart">
            <h3>In</h3>
            {
              isLoading ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) :
                (<CommonChart
                  data={dataIn.data}
                  type={type}
                  chartCnt={dataIn.chartCnt}
                  chartNm={dataIn.chartLineNm}
                  stat={dataIn.stat}
                />)
            }
          </div>
          {
            this.renderSplitChart('in', sepQuery, splitCharts.in, splitTables.in)
          }
        </div>
        <div className="chart-panel">
          <div className="total-chart">
            <h3>Out</h3>
            {
              isLoading ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) :
                (<CommonChart
                  data={dataOut.data}
                  type={type}
                  chartCnt={dataOut.chartCnt}
                  chartNm={dataOut.chartLineNm}
                  stat={dataOut.stat}
                />)
            }
          </div>
          {
            this.renderSplitChart('out', sepQuery, splitCharts.out, splitTables.out)
          }
        </div>
        <SweetAlert
          show={showAlert}
          title="No router data!"
          type="info"
          onConfirm={() => this.setState({ showAlert: false })}
        />
      </div>
    );
  }
}
