import React, { Component } from 'react';
import RelationNavTab from './RelationNavTab';
import RelationHeadBar from '../Common/RelationHeadBar';
import IndividualList from './IndividualList';
import ChartWrap from './ChartWrap';
import LatencyTable from './LatencyTable';
import LatencyMap from './LatencyMap';
import * as exDetailTypes from '../../../constants/Detail/External/DetailTypes';
import * as inDetailTypes from '../../../constants/Detail/Internal/DetailTypes';
import { BASE_URL, CHARTS_URL, CHARTS_ESM_URL } from '../../../constants/Url';
import chartUtils from '../../../../lib/chartUtils';
import {
  EX_FIELD_TYPE_MAP,
  IN_FIELD_TYPE_MAP
} from '../../../constants/Dashboard/DashboardTypes';


export default class Relation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideChart: true
    };
    this.RELATION_MAP = props.displayType === 'external' ?
    exDetailTypes.EX_RELATION_MAP :
    exDetailTypes.IN_RELATION_MAP;
  }

  generateRelAllQuery = (displayType, domainName, domainId, period, dataOption,
    avg, interval, compare) => {
    const domain = domainName === 'as' ? 'asn' : domainName === 'interface' ?
      'if' : domainName;
    const side = domain === 'asn' || domain === 'country' ? 'user' :
      displayType === 'internal' ? 'dst' : 'server';

    const query = {
      type: displayType,
      requestType: 'detail_relation_all',
      // domainType: domainName === 'interface' ? 'if' : domainName,
      // domainValue: domainId,
      [side]: {
        [domain]: {
          value: [domainId],
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

  generateRelQuery = (displayType, item, domainName, domainId, period,
    dataOption, avg, interval) => {
    const domain = domainName === 'as' ? 'asn' : domainName === 'interface' ?
      'if' : domainName;
    const side = domain === 'asn' || domain === 'country' ? 'user' :
      displayType === 'internal' ? 'dst' : 'server';

    const fieldType = item.toLowerCase();

    const query = {
      type: displayType,
      requestType: 'detail_relation',
      // fieldType: fieldType === 'interface' ? 'if' : fieldType,
      fieldType: displayType === 'external' ? EX_FIELD_TYPE_MAP[fieldType] :
        IN_FIELD_TYPE_MAP[fieldType],
      // domainType: domainName === 'interface' ? 'if' : domainName,
      // domainValue: domainId,
      [side]: {
        [domain]: {
          value: [domainId],
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
      showDiff: false,
      top: {
        limit: '500',
        order: 'bylast'
      }
    };
    return query;
  };

  handleNavClick = (evt, item) => {
    evt.preventDefault();
    const {
      onSetNavTab,
      // relationData,
      relationType,
      detailType,
      displayType,
      dataOption,
      avg,
      period,
      interval,
      compare,
      searchResList,
      // getRelationNmList,
      domainName,
      domainId,
      setSearchQuery,
      setRealCnt
    } = this.props;
    if (item === 'Country' || item === 'ESM') {
      this.props.setIndView('Summary');
    }
    if (relationType !== item) {
      onSetNavTab(item);
      // const NO_QUERY_FIELD = displayType === 'external' ?
      // exDetailTypes.NO_QUERY_FIELD :
      // inDetailTypes.NO_QUERY_FIELD;

      // const DETAIL_RELATIONS = displayType === 'external' ?
      // exDetailTypes.DETAIL_RELATIONS :
      // inDetailTypes.DETAIL_RELATIONS;

      // const RELATION_MAP = exDetailTypes.RELATION_MAP;

      if (!searchResList) { return; }
      if (!searchResList[detailType]) { return; }

      // const query = searchResList[detailType].res[NO_QUERY_FIELD[detailType]];

      if (item === 'All') { // get relation chart for all
        // get relation chart for all
        const allQuery =
          this.generateRelAllQuery(displayType, domainName, domainId, period,
            dataOption, avg, interval, compare);
        setSearchQuery(allQuery);
        const allUrl = `${BASE_URL}${CHARTS_URL}`;
        chartUtils.chartFetcher(allQuery, allUrl, `${displayType.slice(0, 2)}DetailRelAll`);
      } else { // get relation chart for other subtypes
        const otherQuery =
          this.generateRelQuery(displayType, item, domainName, domainId, period,
            dataOption, avg, interval);
        setSearchQuery(otherQuery);
        const otherUrl = item === 'ESM' ? `${BASE_URL}${CHARTS_ESM_URL}` : `${BASE_URL}${CHARTS_URL}`;
        const otherType = item === 'ESM' ? `${displayType.slice(0, 2)}DetailRel${item}Pie` :
          `${displayType.slice(0, 2)}DetailRel${item}`;
        chartUtils.chartFetcher(otherQuery, otherUrl, otherType,
          () => {
            if (item !== 'ESM' && this.props.relationData && this.props.relationData.chartData &&
              this.props.relationData.chartData.individual) {
              setRealCnt({
                [this.props.relationType]:
                  Object.keys(this.props.relationData.chartData.individual).length
              });
            }
          });
        /*
        */
        // get relation name list
        // const relationCntPayload = {
        //   type: displayType,
        //   domainType: domainName === 'interface' ? 'if' : domainName,
        //   domainValue: domainId,
        //   period: {
        //     start: period.start.valueOf(),
        //     end: period.end.valueOf()
        //   },
        //   relationType: DETAIL_RELATIONS[detailType].map(item => RELATION_MAP[item])
        // };
        // getRelationNmList(detailType, query, relationCntPayload);
      }
    }
  };

  handleLatency = (item) => {
    const { relationType, onSetNavTab, setIndView, getLatencyDetail,
      detailType, domainId, searchResList } = this.props;

    setIndView('Summary');
    if (relationType !== item) {
      onSetNavTab('Latency');
      if (Object.keys(searchResList).length !== 0) {
        getLatencyDetail(detailType, domainId);
      }
    }
  };

  toggleHideChart = () => {
    this.setState({
      hideChart: !this.state.hideChart
    });
  };

  // toHideChart = () => {
  //   this.setState({
  //     hideChart: true
  //   });
  // };

  renderContent = (indView, chartData, chartType, indData, hideChart,
    isFetchingChart, tableData, indTableData) => {
    const {
      displayType,
      relationType,
      detailType,
      onIndNext30,
      searchQuery,
      fetchResultStatus,
      interfaceList,
      getInterfaceByRouter,
      saveTmpFilter,
      searchNm,
      clickSearchBtn
    } = this.props;
    // const domainNo = searchRes ? searchRes[NO_QUERY_FIELD[detailType]] + '' : '';

    return (indView === 'Summary' || relationType === 'All') ?
      <ChartWrap
        detailType={detailType}
        relationType={relationType}
        chartData={chartData}
        tableData={tableData}
        chartType={chartType}
        isFetchingChart={isFetchingChart}
        searchQuery={searchQuery}
        saveTmpFilter={saveTmpFilter}
        searchNm={searchNm}
      /> : indView === 'Individual' ?
        <IndividualList
          indData={indData}
          indTableData={indTableData}
          hideChart={hideChart}
          onIndNext30={onIndNext30}
          relationType={relationType}
          displayType={displayType}
          isFetchingInds={isFetchingChart}
          isRouter={relationType === 'Router'}
          getInterfaceByRouter={getInterfaceByRouter}
          interfaceList={interfaceList}
          fetchResultStatus={fetchResultStatus}
          searchQuery={searchQuery}
          // toHideChart={this.toHideChart}
          clickSearchBtn={clickSearchBtn}
        /> : <div className="rel-no-data">No Chart Data!</div>;
  };

  renderLatency = (detailType, indView) => {
    const {
      latencyList,
      latencyChart,
      getLatencyChart,
      domainId,
      domainName,
      displayType,
      relationType,
      clickSearchBtn
    } = this.props;

    return (indView === 'Summary' ?
      <LatencyMap data={latencyList[detailType]} /> :
      <LatencyTable
        detailType={detailType}
        header={exDetailTypes.HEADER[detailType]}
        field={exDetailTypes.FIELD[detailType]}
        tableList={latencyList[detailType]}
        getLatencyChart={getLatencyChart}
        latencyChart={latencyChart}
        domainId={domainId}
        domainName={domainName}
        displayType={displayType}
        relationType={relationType}
        clickSearchBtn={clickSearchBtn}
      />);
  };

  componentWillReceiveProps(nProps) {
    const {
      displayType,
      domainName,
      domainId,
      period,
      dataOption,
      avg,
      interval,
      relationType,
      indView,
      relationData,
      setRealCnt
    } = this.props;

    if (relationType === 'ESM' && nProps.indView === 'Individual' &&
    indView === 'Summary' && relationData && relationData.chartData
    && !relationData.chartData.individual) {
      const otherQuery =
          this.generateRelQuery(displayType, relationType, domainName, domainId, period,
            dataOption, avg, interval);
      chartUtils.chartFetcher(otherQuery, `${BASE_URL}${CHARTS_URL}`,
        `${displayType.slice(0, 2)}DetailRel${relationType}Ind`,
        () => {
          if (this.props.relationData && this.props.relationData.chartData &&
            this.props.relationData.chartData.individual) {
            setRealCnt({
              [this.props.relationType]:
                Object.keys(this.props.relationData.chartData.individual).length
            });
          }
        });
    }
  }

  render() {
    const {
      detailType,
      setIndView,
      indView,
      displayType,
      relationType,
      relationNmList,
      relationData,
      realCnt,
      latencyList,
    } = this.props;
    const { hideChart } = this.state;
    const tablist = displayType === 'external' ?
    exDetailTypes.DETAIL_RELATIONS[detailType].slice() || [] :
    inDetailTypes.DETAIL_RELATIONS[detailType].slice() || [];

    tablist.unshift('All');
    let chartData = null;
    let tableData = null;
    let chartType = null;
    let indData = null;
    let indTableData = null;

    if (relationData) {
      // const relationDataCharts = relationData.res ? relationData.res.data.charts : {};
      if (relationType === 'All') {
        chartData = (relationData || {}).chartData;
        tableData = (relationData || {}).tableData;
      } else {
        indData = (relationData.chartData || {}).individual;
        indTableData = (relationData.tableData || {}).individual;
        chartData = (relationData.chartData || {}).summary;
        tableData = (relationData.tableData || {}).summary;
        if (relationType === 'Country') {
          chartType = 'geomap';
        } else if (relationType === 'ESM') {
          chartType = 'pie';
        }
      }
    }
    const isFetchingChart = relationData ? relationData.isFetching : false;

    return (
      <div className="chart-panel">
        <div className="tabs-container">
          <RelationNavTab
            tablist={tablist}
            selectedItem={relationType}
            handleClick={(evt, item) => {
              if (item === 'Latency') {
                this.handleLatency(item);
              } else {
                this.handleNavClick(evt, item);
              }
            }}
            subRelation={relationNmList[detailType]}
            realCnt={realCnt}
            displayType={displayType}
          />
          {
            relationType !== 'All' && (
              <RelationHeadBar
                detailType={detailType}
                relationType={relationType}
                indView={indView}
                setIndView={item => setIndView(item)}
                hideChart={hideChart}
                toggleHideChart={this.toggleHideChart}
                indData={indData}
                latencyList={latencyList}
                field={exDetailTypes.FIELD[detailType]}
              />
            )
          }
          {relationType === 'Latency' ? this.renderLatency(detailType, indView) :
            this.renderContent(indView, chartData, chartType, indData, hideChart,
            isFetchingChart, tableData, indTableData)}
        </div>
      </div>
    );
  }
}

