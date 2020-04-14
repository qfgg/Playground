import * as types from '../../../lib/chartUtils/ChartRequestCommon/ActionTypes';
import chartUtils from '../../../lib/chartUtils';
import { extractObj } from '../../helper';


const defaultState = {
  fetchResultStatus: {},
};

const convertChartData = (payload) => {
  const shortType = payload.type.slice(2);
  let chartDataTmp = {};
  let tableDataTmp = {};
  let tempChartSum = {};
  let tempTableSum = {};
  let tempChartData = {};
  let tempTableData = {};
  let generateTp;
  if (shortType.substr(0, 9) === 'DetailRel' && shortType !== 'DetailRelAll') {
    const domainType = shortType.slice(9);
    if (domainType === 'Country') {
      generateTp = 'dtlctry';
    } else if (domainType === 'ESMPie') {
      generateTp = 'dtlesm';
    }

    if (domainType === 'ESMPie') {
      delete tempChartData.summary;
      delete tempTableData.summary;

      tempChartSum = chartUtils.chartGenerator(payload.res.data.charts, generateTp);
      tempTableSum = chartUtils.tableGenerator(payload.res.data.charts, generateTp);

      chartDataTmp.summary = generateTp ? tempChartSum : {};
      tableDataTmp.summary = generateTp ? tempTableSum : {};
    } else if (domainType === 'ESMInd') {
      tempChartData = chartUtils.chartGenerator(payload.res.data.charts, 'indv');
      tempTableData = chartUtils.tableGenerator(payload.res.data.charts, 'indv');

      chartDataTmp.individual = tempChartData;
      tableDataTmp.individual = tempTableData;
    } else {
      tempChartData = chartUtils.chartGenerator(payload.res.data.charts, 'indv');
      tempTableData = chartUtils.tableGenerator(payload.res.data.charts, 'indv');
      delete tempChartData.summary;
      delete tempTableData.summary;

      tempChartSum = chartUtils.chartGenerator(payload.res.data.charts, generateTp);
      tempTableSum = chartUtils.tableGenerator(payload.res.data.charts, generateTp);

      chartDataTmp = {
        summary: generateTp ? tempChartSum : {},
        individual: tempChartData
      };
      tableDataTmp = {
        summary: generateTp ? tempTableSum : {},
        individual: tempTableData
      };
      // chartDataTmp = extractObj(chartDataTmp);
      // tableDataTmp = extractObj(tableDataTmp);
    }
    return { chartDataTmp, tableDataTmp };
  } else if (shortType.indexOf('_') !== -1) {
    chartDataTmp = chartUtils.chartGenerator(payload.res.data.charts, 'dtlif');
    tableDataTmp = null;
    // chartDataTmp = extractObj(chartDataTmp);
    return { chartDataTmp, tableDataTmp };
  }
  if (shortType.substr(0, 7) === 'Compare') {
    generateTp = 'cmpr';
  } else if (shortType === 'Dashboard') {
    generateTp = 'dsh';
  } else if (shortType === 'DetailStatus' || shortType === 'LastStatus' ||
    shortType === 'MaxStatus' || shortType === 'Status') {
    generateTp = 'status';
  } else if (shortType === 'DetailRelAll') {
    generateTp = 'relAll';
  } else if (shortType === 'Aspath' || shortType === 'AspathSep') {
    generateTp = 'exp';
  }
  chartDataTmp = chartUtils.chartGenerator(payload.res.data.charts, generateTp,
    payload.compareTime);
  tableDataTmp = chartUtils.tableGenerator(payload.res.data.charts, generateTp,
    payload.compareTime);

  chartDataTmp = extractObj(chartDataTmp);
  tableDataTmp = extractObj(tableDataTmp);
  return { chartDataTmp, tableDataTmp };
};

export const chartRequestReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  let data = {};
  let ctData = {};
  let tbData = {};
  let domainType;
  let storeType;
  let isESMSum;

  switch (type) {

  case types.CHART_REQ_COMMON_REQUEST:
    domainType = payload.substr(11, 3);
    storeType = domainType !== 'ESM' ? payload : payload.slice(0, -3);
    isESMSum = payload.slice(11) === 'ESMPie';

    return {
      ...state,
      fetchResultStatus: {
        ...state.fetchResultStatus,
        [storeType]: {
          ...state.fetchResultStatus[storeType],
          isFetching: true,
          tableData: isESMSum ? null : (state.fetchResultStatus[storeType] || {}).tableData,
          chartData: isESMSum ? null : (state.fetchResultStatus[storeType] || {}).chartData,
          error: '',
          res: null
        }
      }
    };

  case types.CHART_REQ_COMMON_SUCCESS:
    data = convertChartData(payload);
    domainType = payload.type.substr(11, 3);
    storeType = domainType !== 'ESM' ? payload.type : payload.type.slice(0, -3);

    if (domainType !== 'ESM' ||
    (domainType === 'ESM' && data.chartDataTmp.summary && data.chartDataTmp.individual)) {
      tbData = data.tableDataTmp;
      ctData = data.chartDataTmp;
    } else {
      if (state.fetchResultStatus[storeType].chartData) {
        tbData = { ...state.fetchResultStatus[storeType].tableData };
        ctData = { ...state.fetchResultStatus[storeType].chartData };
      } else {
        tbData = {};
        ctData = {};
      }
      if (data.chartDataTmp.summary) {
        tbData.summary = data.tableDataTmp.summary;
        ctData.summary = data.chartDataTmp.summary;
      } else if (data.chartDataTmp.individual) {
        tbData.individual = data.tableDataTmp.individual;
        ctData.individual = data.chartDataTmp.individual;
      }
    }

    return {
      ...state,
      fetchResultStatus: {
        ...state.fetchResultStatus,
        [storeType]: {
          ...state.fetchResultStatus[storeType],
          isFetching: false,
          tableData: tbData,
          chartData: ctData,
          res: payload.res
        }
      }
    };

  // case types.CHART_REQ_COMMON_SUCCESS:
  //   return {
  //     ...state,
  //     fetchResultStatus: {
  //       ...state.fetchResultStatus,
  //       [payload.type]: {
  //         ...state.fetchResultStatus[payload.type],
  //         isFetching: false,
  //         res: payload.res
  //       }
  //     }
  //   };

  case types.CHART_REQ_COMMON_FAILURE:
    domainType = payload.type.substr(11, 3);
    storeType = domainType !== 'ESM' ? payload.type : payload.type.slice(0, -3);

    return {
      ...state,
      fetchResultStatus: {
        ...state.fetchResultStatus,
        [storeType]: {
          ...state.fetchResultStatus[storeType],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.CLEAR_CHART:
    return {
      ...state,
      fetchResultStatus: {}
    };

  default: return state;
  }
};
