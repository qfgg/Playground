import * as types from '../../constants/My/Flow/ActionTypes';
import chartUtils from '../../../lib/chartUtils';
import CHART_TYPE_MAP from '../../constants/My/Flow/Flows';
import { extractObj } from '../../helper';


const defaultState = {
  flow: {},
  flowGroup: [],
  dragFlag: {
    isDragging: false,
    dragIdx: -1
  },
  curIdx: -1,
  curGrp: 'unnamed',
  toCurGrp: {},
  selectedItem: {},
  initFlowGrpStatus: {},
  initFlowStatus: {},
  addGrpStatus: {},
  delGrpStatus: {},
  updGrpStatus: {},
  delFlowStatus: {},
  updFlowStatus: {},
  copyFlowStatus: {},
  shareGrpStatus: {},
  initSharedStatus: {},
  initUnamedStatus: {},
  sharedFlGrp: [],
  fetchChartStatus: {},
  moveStatus: {},
  suggestResList: {},
  searchKW: '',
  curType: 'Employee',
  grpSharedList: {},
  delSharedStatus: {},
  chartDataStatus: null,
  flGrpObj: {},
  checkGrpNmStatus: {}
};

// analyze split status
const getSplitStatus = (charts) => {
  const count = {};
  const status = {};
  for (let i = 0, len = charts.length; i < len; i += 1) {
    for (let j = 0, l = charts[i].domain.length; j < l; j += 1) {
      if (count[charts[i].domain[j].type] === undefined) {
        count[charts[i].domain[j].type] = charts[i].domain[j].id;
      } else if (count[charts[i].domain[j].type] !== false &&
        count[charts[i].domain[j].type] !== charts[i].domain[j].id) {
        count[charts[i].domain[j].type] = false;
      }
    }
  }
  for (const key in count) {
    if (typeof count[key] === 'string') {
      status[key] = true;
    }
  }
  return status;
};
export const myFlowReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {

  case types.INIT_FLOW_GROUP_REQUEST:
    return {
      ...state,
      initFlowGrpStatus: {
        ...state.initFlowGrpStatus,
        isFetching: true,
        error: ''
      },
      flowGroup: []
    };

  case types.INIT_FLOW_GROUP_SUCCESS:
    return {
      ...state,
      initFlowGrpStatus: {
        ...state.initFlowGrpStatus,
        isFetching: false
      },
      flowGroup: [...state.flowGroup, ...payload.data],
      curGrp: state.curGrp ? state.curGrp : payload.data[0].flGrpNo,
      toCurGrp: payload.data[0] || {}
    };

  case types.INIT_FLOW_GROUP_FAILURE:
    return {
      ...state,
      initFlowGrpStatus: {
        ...state.initFlowGrpStatus,
        isFetching: false,
        error: payload
      },
    };

  case types.INIT_FLOW_REQUEST:
    return {
      ...state,
      initFlowStatus: {
        ...state.initFlowStatus,
        isFetching: true,
        error: ''
      },
      flow: { ...state.flow },
    };

  case types.INIT_FLOW_SUCCESS:
    return {
      ...state,
      initFlowStatus: {
        ...state.initFlowStatus,
        isFetching: false,
      },
      flow: {
        ...state.flow,
        [payload.flGrpNo]: payload.res.data
      }
    };

  case types.INIT_FLOW_FAILURE:
    return {
      ...state,
      initFlowStatus: {
        ...state.initFlowStatus,
        isFetching: false,
        error: payload.error
      }
    };

  case types.ADD_FLOW_GROUP_REQUEST:
    return {
      ...state,
      addGrpStatus: {
        ...state.addGrpStatus,
        isFetching: true,
        res: null,
        error: ''
      }
    };
  case types.ADD_FLOW_GROUP_SUCCESS:
    return {
      ...state,
      addGrpStatus: {
        ...state.addGrpStatus,
        isFetching: false,
        res: payload
      }
    };
  case types.ADD_FLOW_GROUP_FAILURE:
    return {
      ...state,
      addGrpStatus: {
        ...state.addGrpStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.DEL_FLOW_GROUP_REQUEST:
    return {
      ...state,
      delGrpStatus: {
        ...state.delGrpStatus,
        isFetching: true,
        error: ''
      }
    };
  case types.DEL_FLOW_GROUP_SUCCESS:
    return {
      ...state,
      delGrpStatus: {
        ...state.delGrpStatus,
        isFetching: false
      }
    };
  case types.DEL_FLOW_GROUP_FAILURE:
    return {
      ...state,
      delGrpStatus: {
        ...state.delGrpStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.UPDATE_FLOW_GROUP_REQUEST:
    return {
      ...state,
      updGrpStatus: {
        ...state.updGrpStatus,
        isFetching: true,
        res: null,
        error: ''
      }
    };
  case types.UPDATE_FLOW_GROUP_SUCCESS:
    return {
      ...state,
      updGrpStatus: {
        ...state.updGrpStatus,
        isFetching: false,
        res: payload
      }
    };
  case types.UPDATE_FLOW_GROUP_FAILURE:
    return {
      ...state,
      updGrpStatus: {
        ...state.updGrpStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.DEL_FLOW_REQUEST:
    return {
      ...state,
      delFlowStatus: {
        ...state.delFlowStatus,
        isFetching: true,
        error: ''
      }
    };
  case types.DEL_FLOW_SUCCESS:
    return {
      ...state,
      delFlowStatus: {
        ...state.delFlowStatus,
        isFetching: false
      }
    };
  case types.DEL_FLOW_FAILURE:
    return {
      ...state,
      delFlowStatus: {
        ...state.delFlowStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.UPDATE_FLOW_REQUEST:
    return {
      ...state,
      updFlowStatus: {
        ...state.updFlowStatus,
        isFetching: true,
        res: null,
        error: ''
      }
    };
  case types.UPDATE_FLOW_SUCCESS:
    return {
      ...state,
      updFlowStatus: {
        ...state.updFlowStatus,
        isFetching: false,
        res: payload
      }
    };
  case types.UPDATE_FLOW_FAILURE:
    return {
      ...state,
      updFlowStatus: {
        ...state.updFlowStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.COPY_FLOW_REQUEST:
    return {
      ...state,
      copyFlowStatus: {
        ...state.copyFlowStatus,
        isFetching: true,
        res: null,
        error: ''
      }
    };
  case types.COPY_FLOW_SUCCESS:
    return {
      ...state,
      copyFlowStatus: {
        ...state.copyFlowStatus,
        isFetching: false,
        res: payload
      }
    };
  case types.COPY_FLOW_FAILURE:
    return {
      ...state,
      copyFlowStatus: {
        ...state.copyFlowStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.INIT_SHARED_FLOW_GROUP_REQUEST:
    return {
      ...state,
      initShareStatus: {
        ...state.initSharedStatus,
        isFetching: true,
        res: null,
        error: ''
      },
      sharedFlGrp: [],
      // flowGroup: [...state.flowGroup],
      flGrpObj: {}
    };
  case types.INIT_SHARED_FLOW_GROUP_SUCCESS: {
    let flGrpObjTmp = {};
    for (let i = 0, len = payload.data.length; i < len; i += 1) {
      flGrpObjTmp = { ...flGrpObjTmp, [payload.data[i].flGrpNo]: payload.data[i].flShrNo };
    }
    return {
      ...state,
      initShareStatus: {
        ...state.initSharedStatus,
        isFetching: false,
        res: payload
      },
      sharedFlGrp: payload.data,
      // flowGroup: [...state.flowGroup, ...payload.data],
      flGrpObj: { ...state.flGrpObj, ...flGrpObjTmp },
    };
  }
  case types.INIT_SHARED_FLOW_GROUP_FAILURE:
    return {
      ...state,
      initShareStatus: {
        ...state.initSharedStatus,
        isFetching: false,
        error: payload,
        flGrpObj: {}
      }
    };
  case types.INIT_UNNAMED_FLOW_GROUP_REQUEST:
    return {
      ...state,
      initUnnamedStatus: {
        ...state.initUnnameStatus,
        isFetching: true,
        res: null,
        error: ''
      },
      flow: { ...state.flow },
    };
  case types.INIT_UNNAMED_FLOW_GROUP_SUCCESS:
    return {
      ...state,
      initUnnamedStatus: {
        ...state.initUnnameStatus,
        isFetching: false,
        res: payload
      },
      flow: {
        ...state.flow,
        unnamed: payload.data
      }
    };
  case types.INIT_UNNAMED_FLOW_GROUP_FAILURE:
    return {
      ...state,
      initUnnamedStatus: {
        ...state.initUnnameStatus,
        isFetching: false,
        error: payload
      }
    };
  case types.SHARE_FLOW_GROUP_REQUEST:
    return {
      ...state,
      shareGrpStatus: {
        ...state.shareGrpStatus,
        isFetching: true,
        res: null,
        error: ''
      }
    };
  case types.SHARE_FLOW_GROUP_SUCCESS:
    return {
      ...state,
      shareGrpStatus: {
        ...state.shareGrpStatus,
        isFetching: false,
        res: payload
      }
    };
  case types.SHARE_FLOW_GROUP_FAILURE:
    return {
      ...state,
      shareGrpStatus: {
        ...state.shareGrpStatus,
        isFetching: false,
        error: payload.error
      }
    };
  case types.SET_CUR_GROUP:
    return {
      ...state,
      curGrp: payload
    };
  case types.SET_SELECTED_ITEM:
    return {
      ...state,
      selectedItem: payload
    };

  case types.MOVE_FLOW_REQUEST:
    return {
      ...state,
      moveStatus: {
        ...state.moveStatus,
        isFetching: true,
        res: null,
        error: ''
      },
    };

  case types.MOVE_FLOW_SUCCESS:
    return {
      ...state,
      moveStatus: {
        ...state.moveStatus,
        isFetching: false,
        res: payload,
      },
    };

  case types.MOVE_FLOW_FAILURE:
    return {
      ...state,
      moveStatus: {
        ...state.moveStatus,
        isFetching: false,
        error: payload,
      }
    };

  case types.SET_DRAG_FLAG:
    return {
      ...state,
      dragFlag: { ...state.dragFlag, ...payload }
    };
  case types.SET_CUR_IDX:
    return {
      ...state,
      curIdx: payload
    };

  case types.TO_SET_CUR_GROUP:
    return {
      ...state,
      toCurGrp: payload
    };

  case types.FLOW_SAVE_REQUEST:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: true,
        error: ''
      }
    };
  case types.FLOW_SAVE_SUCCESS:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        isSaved: payload
      }
    };
  case types.FLOW_SAVE_FAILURE:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.FETCH_CHART_REQUEST:
    return {
      ...state,
      fetchChartStatus: {
        ...state.fetchChartStatus,
        [payload]: {
          isFetching: true,
          res: null,
          error: '',
          tableData: null,
          chartData: null
        }
      }
    };
  case types.FETCH_CHART_SUCCESS: {
    let rqType = payload.res.requestType;
    let option;
    let chartDataTmp = null;
    let tableDataTmp = null;
    if (rqType.indexOf('&') !== -1) {
      // compare_dashboard gets extra params-period, eg: compare_dashboard^1m
      // detail_relation_all also
      const arr = rqType.split('&');
      rqType = arr[0];
      option = arr[1];
    } else if (rqType === 'explorer_split') {
      // explorer_split needs split status
      option = getSplitStatus(payload.res.charts);
    }
    chartDataTmp = chartUtils.chartGenerator(payload.res.charts,
      CHART_TYPE_MAP[rqType], option);
    tableDataTmp = chartUtils.tableGenerator(payload.res.charts,
      CHART_TYPE_MAP[rqType], option);
    // pull out chart data to top level
    chartDataTmp = extractObj(chartDataTmp);
    tableDataTmp = extractObj(tableDataTmp);
    // chartDataStatus
    return {
      ...state,
      fetchChartStatus: {
        ...state.fetchChartStatus,
        [payload.flNo]: {
          isFetching: false,
          tableData: tableDataTmp,
          chartData: chartDataTmp,
        }
      }
    };
  }
  case types.FETCH_CHART_FAILURE:
    return {
      ...state,
      fetchChartStatus: {
        ...state.fetchChartStatus,
        [payload.flNo]: {
          isFetching: false,
          error: payload.error,
          tableData: null,
          chartData: null
        }
      }
    };
  case types.CLEAR_CHART:
    return {
      ...state,
      fetchChartStatus: {},
    };

  case types.ORDER_PAGE_FLOW:
    return {
      ...state,
      flow: {
        ...state.flow,
        [payload.flGrpNo]: payload.newListMove
      }
    };

  case types.SET_SEARCH_VALUE:
    return {
      ...state,
      searchKW: payload
    };

  case types.GET_SUGGEST_REQUEST:
    return {
      ...state,
      suggestResList: {
        ...state.suggestResList,
        [payload]: {
          ...state.suggestResList[payload],
          isFetching: true,
          suggestions: [],
          error: ''
        }
      }
    };

  case types.GET_SUGGEST_SUCCESS: {
    const currentUser = localStorage.getItem('loginUser') || ''.split('_')[0].toUpperCase();
    const _suggestions = payload.res.map(item => ({
      ...item,
    })).filter(item =>
    state.grpSharedList[payload.flGrpNo].sharedList.every(i => i.rcpntNo !== item.employeeNo)
    && item.employeeNo !== currentUser);
    return {
      ...state,
      suggestResList: {
        ...state.suggestResList,
        [payload.type]: {
          ...state.suggestResList[payload.type],
          isFetching: false,
          suggestions: _suggestions
        }
      }
    };
  }

  case types.GET_SUGGEST_FAILURE:
    return {
      ...state,
      suggestResList: {
        ...state.suggestResList,
        [payload.type]: {
          ...state.suggestResList[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.CLEAR_SUGGEST:
    return {
      ...state,
      suggestResList: {}
    };

  case types.SET_CUR_TYPE:
    return {
      ...state,
      curType: payload
    };

  case types.INIT_GROUP_SHARED_LIST_REQUEST:
    return {
      ...state,
      grpSharedList: {
        ...state.grpSharedList,
        [payload]: {
          isFetching: true,
          sharedList: [],
          error: ''
        }
      }
    };

  case types.INIT_GROUP_SHARED_LIST_SUCCESS:
    return {
      ...state,
      grpSharedList: {
        ...state.grpSharedList,
        [payload.flGrpNo]: {
          isFetching: false,
          sharedList: payload.res.data,
          error: ''
        }
      }
    };

  case types.INIT_GROUP_SHARED_LIST_FAILURE:
    return {
      ...state,
      grpSharedList: {
        ...state.grpSharedList,
        [payload.flGrpNo]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.DEL_GROUP_SHARED_LIST_REQUEST:
    return {
      ...state,
      delSharedStatus: {
        ...state.delSharedStatus,
        isFetching: true,
        error: ''
      }
    };

  case types.DEL_GROUP_SHARED_LIST_SUCCESS:
    return {
      ...state,
      delSharedStatus: {
        ...state.delSharedStatus,
        isFetching: false
      }
    };

  case types.DEL_GROUP_SHARED_LIST_FAILURE:
    return {
      ...state,
      delSharedStatus: {
        ...state.delSharedStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.CHECK_FLOWGRP_NAME_REQUEST:
    return {
      ...state,
      checkGrpNmStatus: {
        ...state.checkGrpNmStatus,
        isFetching: true,
        res: null,
        error: ''
      }
    };

  case types.CHECK_FLOWGRP_NAME_SUCCESS:
    return {
      ...state,
      checkGrpNmStatus: {
        ...state.checkGrpNmStatus,
        res: payload,
        isFetching: false
      }
    };

  case types.CHECK_FLOWGRP_NAME_FAILURE:
    return {
      ...state,
      checkGrpNmStatus: {
        ...state.checkGrpNmStatus,
        isFetching: false,
        error: payload
      }
    };

  default:
    return state;
  }
};
