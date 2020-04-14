import React, { Component } from 'react';
import moment from 'moment';
import DataBtn from './DataBtn';
import QuickIntervalBtn from './QuickIntervalBtn';
import Period from './Period';
import Dropdown from '../../Common/Dropdown';
import { INTERVAL_DROPDOWN_TYPES, AVG_DROPDOWN_TYPES, COMPARE_DROPDOWN_TYPES } from '../../../constants/Detail/CommonTypes';
import * as exDetailTypes from '../../../constants/Detail/External/DetailTypes';
import * as inDetailTypes from '../../../constants/Detail/Internal/DetailTypes';
import { ignoreSeconds } from '../../../helper';
import { BASE_URL, CHARTS_URL } from '../../../constants/Url';
import chartUtils from '../../../../lib/chartUtils';
import {
  EX_FIELD_TYPE_MAP,
  IN_FIELD_TYPE_MAP
} from '../../../constants/Dashboard/DashboardTypes';


export default class SearchBar extends Component {
  componentWillReceiveProps(nextProp) {
    if (nextProp.type !== this.props.type) {
      this.props.clear();
    }
  }

  handleCurrent = () => {
    const end = moment();
    const start = moment().subtract(6, 'hours');
    this.props.handleCurrent();
    this.props.onChangePeriod(ignoreSeconds(start), ignoreSeconds(end));
  };

  handleIntervalClick = (item) => {
    this.props.onSetInterval(item);
  };

  handleAvgClick = (item) => {
    this.props.onSetAvg(item);
  };

  handleCompareClick = (item) => {
    this.props.onSetCompare(item);
  };

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
      // fieldType,
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
      showDiff: false
    };
    return query;
  };

  handleSearch = () => {
    const {
      detailType,
      relationType,
      displayType,
      dataOption,
      avg,
      period,
      interval,
      compare,
      searchResList,
      setIndView,
      getRelationNmList,
      domainName,
      domainId,
      setSearchQuery,
      checkDetailSelector,
      setRealCnt
    } = this.props;

    if (!searchResList[detailType]) {
      checkDetailSelector();
      return;
    }
    const NO_QUERY_FIELD = this.props.displayType === 'external' ?
      exDetailTypes.NO_QUERY_FIELD : inDetailTypes.NO_QUERY_FIELD;

    const DETAIL_RELATIONS = displayType === 'external' ?
      exDetailTypes.DETAIL_RELATIONS : inDetailTypes.DETAIL_RELATIONS;

    const RELATION_MAP = displayType === 'external' ?
      exDetailTypes.EX_RELATION_MAP : exDetailTypes.IN_RELATION_MAP;

    const query = searchResList[detailType].res[NO_QUERY_FIELD[detailType]];

    // get relation name list
    const dType = (domainName || detailType.toLowerCase());
    const domain = dType === 'as' ? 'asn' : dType === 'interface' ?
      'if' : dType;
    const side = domain === 'asn' || domain === 'country' ? 'user' :
      displayType === 'internal' ? 'dst' : 'server';

    const relationCntPayload = {
      type: displayType,
      period: {
        start: period.start.valueOf(),
        end: period.end.valueOf(),
      },
      relationType: DETAIL_RELATIONS[detailType]
        .map(item => RELATION_MAP[item]).filter(item => item),
      [side]: {
        [domain]: {
          value: [domainId || query.toString()],
        }
      }
    };
    getRelationNmList(detailType, relationCntPayload);
    setRealCnt();

    if (relationType === 'All') { // get relation chart for all
      const allQuery =
        this.generateRelAllQuery(displayType, (domainName || detailType.toLowerCase()),
        (domainId || query.toString()), period, dataOption, avg, interval, compare);
      setSearchQuery(allQuery);
      const allUrl = `${BASE_URL}${CHARTS_URL}`;
      chartUtils.chartFetcher(allQuery, allUrl, `${displayType.slice(0, 2)}DetailRelAll`);
    } else { // get relation chart for other subtypes
      const otherQuery =
        this.generateRelQuery(displayType, relationType, (domainName || detailType.toLowerCase()),
        (domainId || query.toString()), period, dataOption, avg, interval);
      setSearchQuery(otherQuery);
      const otherUrl = `${BASE_URL}${CHARTS_URL}`;
      chartUtils.chartFetcher(otherQuery, otherUrl, `${displayType.slice(0, 2)}DetailRel${relationType}`,
        () => {
          if (this.props.relationData && this.props.relationData.chartData &&
            this.props.relationData.chartData.individual) {
            setRealCnt({
              [this.props.relationType]:
                Object.keys(this.props.relationData.chartData.individual).length
            });
          }
        });
      setIndView('Summary');
    }
  };

  renderInterval = () => {
    const { period, interval } = this.props;
    let dropdownTypes = INTERVAL_DROPDOWN_TYPES;
    const start = moment.unix(period.start);
    const end = moment.unix(period.end);
    const diffY = end.diff(start, 'years');
    const diffM = end.diff(start, 'month');
    const diffD = end.diff(start, 'days');
    const diffH = end.diff(start, 'hours');

    if (diffY >= 1) {
      dropdownTypes = INTERVAL_DROPDOWN_TYPES.slice(3);
    } else if (diffY < 1 && diffM >= 1) {
      dropdownTypes = INTERVAL_DROPDOWN_TYPES.slice(2);
    } else if (diffM < 1 && diffD >= 7) {
      dropdownTypes = INTERVAL_DROPDOWN_TYPES.slice(1);
    } else if (diffD < 7 && diffH >= 24) {
      dropdownTypes = INTERVAL_DROPDOWN_TYPES;
    } else {
      dropdownTypes = INTERVAL_DROPDOWN_TYPES.slice(0, 3);
    }

    return (
      <Dropdown curSelect={interval.text}>
        {
          dropdownTypes.map((item, idx) =>
            (<li
              key={idx}
              className="option"
              onClick={() => this.handleIntervalClick(item)}
            >
              <a>{item.text}</a>
            </li>))
        }
      </Dropdown>
    );
  }

  render() {
    const {
      period,
      avg,
      compare,
      dataOption,
      activebtn,
      onSetData,
      displayType,
      relationType,
    } = this.props;
    return (
      <div className="compare-bar clearfix">
        <DataBtn
          dataOption={dataOption}
          onChangeData={onSetData}
          displayType={displayType}
        />
        <button
          className="btn btn-xs pull-left btn-current"
          onClick={this.handleCurrent}
        >
          Current
        </button>
        <QuickIntervalBtn
          activebtn={activebtn}
          onChangeInterval={this.props.onChangeInterval}
        />
        <Period
          period={period}
          activebtn={activebtn}
          onChangePeriod={this.props.onChangePeriod}
        />
        {this.renderInterval()}
        <Dropdown curSelect={avg.text}>
          {
            AVG_DROPDOWN_TYPES.map((item, idx) =>
              (<li
                key={idx}
                className="option"
                onClick={() => this.handleAvgClick(item)}
              >
                <a>{item.text}</a>
              </li>))
          }
        </Dropdown>
        {
          relationType === 'All' && (
            <Dropdown curSelect={compare.text}>
              {
                COMPARE_DROPDOWN_TYPES.map((item, idx) =>
                  (<li
                    key={idx}
                    className="option"
                    onClick={() => this.handleCompareClick(item)}
                  >
                    <a>{item.text}</a>
                  </li>))
              }
            </Dropdown>
          )
        }
        <button
          className="btn btn-xs pull-right btn-search"
          onClick={this.handleSearch}
          disabled={relationType === 'Latency'}
        >
          Search
        </button>
      </div>
    );
  }
}
