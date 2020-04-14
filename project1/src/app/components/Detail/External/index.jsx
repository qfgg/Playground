import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import BaseInfo from '../Common/BaseInfo';
import Status from '../Common/Status';
import SearchBar from '../Common/SearchBar';
import DetailSelector from '../Common/DetailSelector';
import Relation from '../Common/Relation';
import { ignoreSeconds } from '../../../helper';
import * as exDetailTypes from '../../../constants/Detail/External/DetailTypes';
// import { DATA_MAP, INT_MAP, AVG_MAP, COMPARE_MAP } from '../../../constants/Detail/CommonTypes';
import { BASE_URL, CHARTS_URL } from '../../../constants/Url';
import { INTERVAL_DROPDOWN_TYPES } from '../../../constants/Detail/CommonTypes';
import chartUtils from '../../../../lib/chartUtils';
import '../Common/index.less';


export default class DetailBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickInterval: { text: '6H', value: 6, unit: 'hours' },
      dataOption: {
        text: 'Traffic',
        value: 'traffic'
      },
      period: {
        start: ignoreSeconds(moment().subtract(6, 'hours')),
        end: ignoreSeconds(moment())
      },
      interval: {
        text: '1Min',
        value: '1m',
        unit: 'min'
      },
      avg: {
        text: 'Avg',
        value: 'avg'
      },
      compare: {
        text: 'Compare',
        value: '1d',
        unit: ''
      },
      indView: 'Summary',
      statusQuery: null,
      searchQuery: null,
      realCnt: {}
    };
  }

  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query
    });
  };

  generateStatusQuery = (domainType, domainId) => {
    const domain = domainType === 'as' ? 'asn' : domainType === 'interface' ?
      'if' : domainType;
    const side = domain === 'asn' || domain === 'country' ? 'user' : 'server';

    const query = {
      type: 'external',
      requestType: 'detail_current',
      // domainType: domainType === 'interface' ? 'if' : domainType,
      // domainValue: domainId,
      [side]: {
        [domain]: {
          value: [domainId]
        }
      },
      directionType: 'all',
      itemType: 'all',
      period: {
        start: ignoreSeconds(moment().subtract(6, 'hours')),
        end: ignoreSeconds(moment()),
      },
      aggregation: 'avg',
      interval: '1m',
      showDiff: false,
    };
    return query;
  };

  generateRelAllQuery = (domainType, domainId, period, dataOption, avg, interval, compare) => {
    const domain = domainType === 'as' ? 'asn' : domainType === 'interface' ?
      'if' : domainType;
    const side = domain === 'asn' || domain === 'country' ? 'user' : 'server';

    const query = {
      type: 'external',
      requestType: 'detail_relation_all',
      // domainType: domainType === 'interface' ? 'if' : domainType,
      // domainValue: domainId,
      [side]: {
        [domain]: {
          value: [domainId]
        }
      },
      directionType: 'all',
      itemType: dataOption.value,
      period: {
        start: period.start,
        end: period.end,
      },
      aggregation: avg.value,
      interval: interval.value,
      compareTime: compare.value,
      showDiff: true,
    };
    return query;
  };

  clickSearchBtn = (type, domainId, displayType) => {
    const { searchDetail, getRelationNmList } = this.props;
    const {
      period,
      interval,
      compare,
      avg,
      dataOption
    } = this.state;
    const domainType = type.toLowerCase();

    this.handleSelect(type);
    searchDetail(type, domainId);

    const query =
      this.generateStatusQuery(domainType, domainId);
    this.setState({ statusQuery: query });
    const url = `${BASE_URL}${CHARTS_URL}`;
    chartUtils.chartFetcher(query, url, 'exDetailStatus');

    // get relation name list
    const domain = domainType === 'as' ? 'asn' : domainType === 'interface' ?
      'if' : domainType;
    const side = domain === 'asn' || domain === 'country' ? 'user' : 'server';

    const relationCntPayload = {
      type: displayType,
      period: {
        start: period.start.valueOf(),
        end: period.end.valueOf()
      },
      relationType: exDetailTypes.DETAIL_RELATIONS[type]
        .map(item => exDetailTypes.EX_RELATION_MAP[item]).filter(item => item),
      [side]: {
        [domain]: {
          value: [domainId],
        }
      }
    };
    getRelationNmList(type, relationCntPayload);
    this.setRealCnt();

    // get relation chart for all
    const allQuery =
      this.generateRelAllQuery(domainType, domainId, period, dataOption, avg, interval, compare);
    this.setSearchQuery(allQuery);
    const allUrl = `${BASE_URL}${CHARTS_URL}`;
    chartUtils.chartFetcher(allQuery, allUrl, 'exDetailRelAll');
  };

  componentDidMount() {
    const { domainName, domainId } = this.props;
    const displayType = 'external';
    if (domainId && domainName) {
      let type;
      if (domainName === 'pop') {
        type = 'PoP';
      } else if (domainName === 'as' || domainName === 'esm') {
        type = domainName.toUpperCase();
      } else {
        type = domainName.replace(/( |^)[a-z]/g, L => L.toUpperCase());
      }
      if (!exDetailTypes.DETAIL_RELATIONS[type]) {
        browserHistory.push('/external/detail');
        return;
      }
      this.clickSearchBtn(type, domainId, displayType);
      this.handleSetNavTab('All');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { domainId, domainName, clearChart, detailType } = this.props;
    // const displayType = 'external';
    if (detailType !== nextProps.detailType) {
      clearChart();
    }
    if (domainId !== nextProps.domainId || domainName !== nextProps.domainName) {
      // let type;
      // if (nextProps.domainName === 'pop') {
      //   type = 'PoP';
      // } else if (nextProps.domainName === 'as' || nextProps.domainName === 'esm') {
      //   type = nextProps.domainName.toUpperCase();
      // } else {
      //   if (!nextProps.domainName) {
      //     return;
      //   }
      //   type = nextProps.domainName.replace(/( |^)[a-z]/g, L => L.toUpperCase());
      // }
      // this.clickSearchBtn(type, nextProps.domainId, displayType);
      this.handleSetNavTab('All');
    }
    if (nextProps.relationType !== 'Country' && nextProps.relationType !== 'ESM'
      && nextProps.relationType !== 'Latency') {
      this.handleSetIndView('Individual');
    }
  }

  handleSelect = (detailType) => {
    this.props.setDetailType(detailType);
    this.props.setRelationType('All');
    this.handleSetIndView('Summary'); // after change detail type, should reset back to summary
  };

  setDefaultInterval = (payload) => {
    let defaultItem = INTERVAL_DROPDOWN_TYPES[0];
    const start = moment.unix(payload.start);
    const end = moment.unix(payload.end);
    const diffY = end.diff(start, 'years');
    const diffM = end.diff(start, 'month');
    const diffD = end.diff(start, 'days');
    const diffH = end.diff(start, 'hours');

    if (diffY >= 1) {
      defaultItem = INTERVAL_DROPDOWN_TYPES[4];
    } else if (diffY < 1 && diffM >= 1) {
      defaultItem = INTERVAL_DROPDOWN_TYPES[3];
    } else if (diffM < 1 && diffD >= 7) {
      defaultItem = INTERVAL_DROPDOWN_TYPES[2];
    } else if (diffD < 7 && diffH >= 24) {
      defaultItem = INTERVAL_DROPDOWN_TYPES[1];
    } else {
      defaultItem = INTERVAL_DROPDOWN_TYPES[0];
    }

    return defaultItem;
  };

  handleChangePeriod = ({ start, end }) => {
    this.setState({
      period: {
        start: start || this.state.period.start,
        end: end || this.state.period.end
      },
      interval: this.setDefaultInterval({
        start: start || this.state.period.start,
        end: end || this.state.period.end
      })
    });
  };

  handleChangeInterval = (item) => {
    const { period } = this.state;
    const end = moment.unix(period.end);
    this.setState({ quickInterval: item });
    this.handleChangePeriod({
      start: ignoreSeconds(end.subtract(item.value, item.unit))
    });
  };

  handleSetNavTab = (item) => {
    this.props.setRelationType(item);
  };

  handleCurrent = () => {
    this.setState({ quickInterval: { text: '6H', value: 6, unit: 'hours' } });
  };

  handleSetData = (item) => {
    this.setState({ dataOption: item });
  };

  handleSetInterval = (item) => {
    this.setState({ interval: item });
  };

  handleSetAvg = (item) => {
    this.setState({ avg: item });
  };

  handleSetCompare = (item) => {
    this.setState({ compare: item });
  };

  setRealCnt = (newCnt) => {
    this.setState({
      realCnt: newCnt || {}
    });
  };

  handleClear = () => {
    this.handleChangePeriod({
      start: moment().subtract(6, 'hours'),
      end: moment(),
    });
    this.handleSetInterval({
      text: '1Min',
      value: 1,
      unit: 'minutes',
    });
    this.handleSetAvg({
      text: 'Avg',
      value: 'avg',
    });
    this.handleSetCompare({
      text: 'Compare',
      value: '',
      unit: '',
    });
    this.handleSetData({
      text: 'Traffic',
      value: 'traffic'
    });
  };

  handleSetIndView = (item) => {
    if (item !== this.state.view) {
      this.setState({ indView: item });
    }
  };

  checkDetailSelectorHander = () => {
    const { detailType } = this.props;
    this.detailSelector.handleDetailSearch(detailType);
  };

  render() {
    const {
      detailType,
      relationType,
      searchKW,
      routerSearchKW,
      routerSearchID,
      suggestResList,
      setSearchValue,
      setRouterSearchValue,
      setRouterSearchID,
      getSuggest,
      getSuggestSuccess,
      searchDetail,
      searchResList,
      relationNmList,
      clearSuggest,
      downloadXls,
      getRelationNmList,
      domainName,
      domainId,
      fetchResultStatus,
      interfaceList,
      getInterfaceByRouter,
      saveTmpFilter,
      getLatencyDetail,
      latencyList,
      getLatencyChart,
      latencyChart
    } = this.props;
    const {
      period,
      interval,
      avg,
      compare,
      dataOption,
      indView,
      realCnt
    } = this.state;
    const displayType = 'external';
    const relationData = fetchResultStatus[`exDetailRel${relationType}`];
    const searchNm = searchResList[detailType] && searchResList[detailType].res ?
      searchResList[detailType].res.fullName : '';

    return (
      <div className="ex-detail">
        <div>
          <DetailSelector
            ref={c => this.detailSelector = c}
            detailType={detailType}
            onSelect={detailType => this.handleSelect(detailType)}
            onSetNavTab={this.handleSetNavTab}
            clickSearchBtn={this.clickSearchBtn}
            searchKW={searchKW}
            period={period}
            interval={interval}
            compare={compare}
            avg={avg}
            dataOption={dataOption}
            routerSearchKW={routerSearchKW}
            routerSearchID={routerSearchID}
            setSearchValue={setSearchValue}
            setRouterSearchValue={setRouterSearchValue}
            setRouterSearchID={setRouterSearchID}
            getSuggestSuccess={getSuggestSuccess}
            suggestResList={suggestResList}
            getSuggest={getSuggest}
            clearSuggest={clearSuggest}
            searchDetail={searchDetail}
            getRelationNmList={getRelationNmList}
            displayType={displayType}
            domainName={domainName}
            searchResList={searchResList}
          />
          <BaseInfo
            detailType={detailType}
            searchResList={searchResList}
          />
          <Status
            detailType={detailType}
            statusQuery={this.state.statusQuery}
            statusData={fetchResultStatus.exDetailStatus}
            displayType={displayType}
            searchNm={searchNm}
            saveTmpFilter={saveTmpFilter}
          />
          <SearchBar
            detailType={detailType}
            relationType={relationType}
            relationData={relationData}
            period={period}
            interval={interval}
            avg={avg}
            compare={compare}
            dataOption={dataOption}
            activebtn={this.state.quickInterval}
            displayType={displayType}
            searchResList={searchResList}
            onChangePeriod={(start, end) => this.handleChangePeriod({ start, end })}
            onChangeInterval={item => this.handleChangeInterval(item)}
            onSetInterval={this.handleSetInterval}
            onSetAvg={this.handleSetAvg}
            onSetCompare={this.handleSetCompare}
            onSetData={this.handleSetData}
            clear={this.handleClear}
            setIndView={this.handleSetIndView}
            getRelationNmList={getRelationNmList}
            domainName={domainName}
            domainId={domainId}
            setSearchQuery={this.setSearchQuery}
            checkDetailSelector={this.checkDetailSelectorHander}
            handleCurrent={this.handleCurrent}
            setRealCnt={this.setRealCnt}
          />
          <Relation
            searchResList={searchResList}
            searchRes={(searchResList[detailType] || {}).res}
            detailType={detailType}
            relationType={relationType}
            relationData={relationData}
            relationNmList={relationNmList}
            onSetNavTab={this.handleSetNavTab}
            displayType={displayType}
            downloadXls={downloadXls}
            period={period}
            interval={interval}
            avg={avg}
            compare={compare}
            dataOption={dataOption}
            indView={indView}
            setIndView={this.handleSetIndView}
            getRelationNmList={getRelationNmList}
            onIndNext30={this.handleIndNext30}
            domainName={domainName}
            domainId={domainId}
            searchQuery={this.state.searchQuery}
            setSearchQuery={this.setSearchQuery}
            getInterfaceByRouter={getInterfaceByRouter}
            interfaceList={interfaceList}
            fetchResultStatus={fetchResultStatus}
            realCnt={realCnt}
            setRealCnt={this.setRealCnt}
            saveTmpFilter={saveTmpFilter}
            searchNm={searchNm}
            clickSearchBtn={this.clickSearchBtn}
            getLatencyDetail={getLatencyDetail}
            latencyList={latencyList}
            getLatencyChart={getLatencyChart}
            latencyChart={latencyChart}
          />
        </div>
      </div>
    );
  }
}
