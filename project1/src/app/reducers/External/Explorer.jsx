import moment from 'moment';
import blacklist from 'blacklist';
import * as types from '../../constants/External/Explorer/ActionTypes';
import { ignoreSeconds, isEmptyObj } from '../../helper';
import { EXFILTER_TYPES } from '../../constants/External/Explorer/FilterTypes';
import { DOMAIN_MAP } from '../../constants/My/Common/DomainTypes';
import chartUtils from '../../../lib/chartUtils';


const defaultState = {
  initResList: {},
  searchResList: {},
  favoredItemList: {},
  selectedItemList: {},
  initItemList: {},
  separateList: {},
  checkList: {
    protocol: ['all'],
    'tcp flag': ['all'],
    'packet size': ['all'],
  },
  radioList: {
    data: 'traffic',
    aggregation: 'avg',
    interval: '1m',
  },
  top: {
    limit: '10',
    order: 'bylast'
  },
  period: {
    start: ignoreSeconds(moment().subtract(6, 'hours')),
    end: ignoreSeconds(moment())
  },
  checkSubmitNmStatus: {},
  updateNmStatus: {},
  saveStatus: {},
  delStatus: {},
  fetchExplorerStatus: {},
  getJobStatus: {},
  getFilterStatus: {},
  getFlowStatus: {},
  splitStatus: {},
  searchQuery: {},
  hasChartData: false,
  chartsInit: null,
  data: null,
  table: null,
  isSplit: false,
  splitList: [],
  anaRouters: {},
  ana: {},
  allIF: false,
  routerIF: {}
};

const updateList = (list, item) => {
  let newList = [];
  if ((list[0] === 'all' && item !== 'all') ||
    (list.indexOf('all') === -1 && item === 'all')) {
    newList.push(item);
  } else {
    if (list.indexOf(item) !== -1) {
      if (list.length > 1) {
        newList = list.filter(i => i !== item);
      } else {
        newList = [...list];
      }
    } else {
      newList = [...list, item];
    }
  }
  return newList;
};

const setDefaultInterval = (payload) => {
  const start = moment.unix(payload.start);
  const end = moment.unix(payload.end);
  const diffY = end.diff(start, 'years');
  const diffM = end.diff(start, 'month');
  const diffD = end.diff(start, 'days');
  const diffH = end.diff(start, 'hours');
  const IntervalItems = EXFILTER_TYPES.filter(list => list.name.toLowerCase() === 'interval'.toLowerCase())[0].list;
  let defaultItem = IntervalItems[0];

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

  return defaultItem.value;
};

const getMainRenderData = (payload) => {
  let hasChartData = false;
  let chartTables = null;
  let tableData = null;
  let chartsInit = null;
  if (payload && payload.charts && payload.charts.length > 0) {
    hasChartData = true;
    chartTables = chartUtils.chartGenerator(payload.charts, 'exp');
    tableData = chartUtils.tableGenerator(payload.charts, 'exp');
    chartsInit = payload.charts;
  }
  let data = null;
  let table = null;
  let isSplit = false;
  const splitList = [];
  if (hasChartData) {
    data = {
      datain: chartTables.in,
      dataout: chartTables.out,
      dataall: chartTables.total,
    };

    table = {
      datain: tableData.in,
      dataout: tableData.out,
      dataall: tableData.total,
    };
    isSplit = !isEmptyObj(chartsInit[0].domain);
    if (isSplit) {
      for (let i = 0; i < chartsInit[0].domain.length; i += 1) {
        splitList.push(chartsInit[0].domain[i].type);
      }
    }
  }
  const res = {
    hasChartData,
    chartsInit,
    data,
    table,
    isSplit,
    splitList,
  };

  return res;
};

function processResponse(filter) {
  const selectedItemList = {};
  const separateList = {};
  const top = filter.top ? {
    limit: filter.top.limit,
    order: filter.top.order
  } : {
    limit: '10',
    order: 'bylast'
  };
  const period = filter.period ? {
    start: filter.period.start,
    end: filter.period.end
  } : {
    start: ignoreSeconds(moment().subtract(6, 'hours')),
    end: ignoreSeconds(moment())
  };
  const radioList = {
    aggregation: filter.aggregation || 'avg',
    data: filter.itemType || 'traffic',
    interval: filter.interval || '1m',
  };
  const checkList = {
    'packet size': filter.packetSize ? filter.packetSize.value : ['all'],
    protocol: filter.protocol ? filter.protocol.value : ['all'],
  };
  separateList['packet size'] = filter.packetSize ? filter.packetSize.separate : false;
  separateList.protocol = filter.protocol ? filter.protocol.separate : false;
  checkList['tcp flag'] = filter.tcpFlag ? filter.tcpFlag.value : ['all'];
  separateList['tcp flag'] = filter.tcpFlag ? filter.tcpFlag.separate : false;
  let selectedItem = [];

  if (filter.server) {
    for (const key in filter.server) {
      if (key === 'prefix') {
      //   selectedItem = filter.server[key].name.map(item => ({
      //     id: item,
      //     text: item
      //   }));
      //   selectedItemList.Server_IP = selectedItemList.Server_IP ?
      //     [...selectedItemList.Server_IP, ...selectedItem] : selectedItem;
      //   separateList.Server_IP = filter.server[key].separate;
      // } else if (key === 'ip') {
        selectedItem = filter.server[key].value.map((item, idx) => ({
          id: item,
          text: filter.server[key].name[idx]
        }));
        selectedItemList.Server_Prefix = selectedItemList.Server_Prefix ?
          [...selectedItemList.Server_Prefix, ...selectedItem] : selectedItem;
        separateList.Server_Prefix = filter.server[key].separate;
      } else {
        selectedItem = filter.server[key].value.map((item, idx) => ({
          id: item,
          text: filter.server[key].name[idx]
        }));
        selectedItemList[`Server_${DOMAIN_MAP[key]}`] = selectedItem;
        separateList[`Server_${DOMAIN_MAP[key]}`] = filter.server[key].separate;
      }
    }
  }
  if (filter.user) {
    for (const key in filter.user) {
      if (key === 'prefix') {
      //   selectedItem = filter.user[key].name.map(item => ({
      //     id: item,
      //     text: item
      //   }));
      //   selectedItemList.User_IP = selectedItemList.User_IP ?
      //     [...selectedItemList.User_IP, ...selectedItem] : selectedItem;
      //   separateList.User_IP = filter.user[key].separate;
      // } else if (key === 'ip') {
        selectedItem = filter.user[key].value.map((item, idx) => ({
          id: item,
          text: filter.user[key].name[idx]
        }));
        selectedItemList.User_Prefix = selectedItemList.User_Prefix ?
          [...selectedItemList.User_Prefix, ...selectedItem] : selectedItem;
        separateList.User_Prefix = filter.user[key].separate;
      } else {
        selectedItem = filter.user[key].value.map((item, idx) => ({
          id: item,
          text: filter.user[key].name[idx]
        }));
        selectedItemList[`User_${DOMAIN_MAP[key]}`] = selectedItem;
        separateList[`User_${DOMAIN_MAP[key]}`] = filter.user[key].separate;
      }
    }
  }
  return { selectedItemList, separateList, radioList, checkList, top, period };
}

export const externalExplorerReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.ADD_SEL_ITEM:
    return {
      ...state,
      selectedItemList: {
        ...state.selectedItemList,
        [payload.type]: [...(state.selectedItemList[payload.type] || []), payload.item]
      }
    };

  case types.REMOVE_SEL_ITEM:
    return {
      ...state,
      selectedItemList: {
        ...state.selectedItemList,
        [payload.type]: state.selectedItemList[payload.type].filter(item =>
          item.id !== payload.item.id)
      }
    };

  case types.CLEAR_SEL:
    return {
      ...state,
      selectedItemList: {
        ...state.selectedItemList,
        [payload]: []
      }
    };

  case types.ADD_SEL_IFROUTER:
    return {
      ...state,
      selectedItemList: {
        ...state.selectedItemList,
        [`${payload.type}_Router`]: [payload]
      }
    };

  case types.REMOVE_SEL_IFROUTER:
    return {
      ...state,
      selectedItemList: {
        ...state.selectedItemList,
        [`${payload.type}_Router`]: []
      }
    };

  case types.TOGGLE_SPLIT:
    return {
      ...state,
      splitStatus: {
        ...state.splitStatus,
        [payload.type]: {
          ...state.splitStatus[payload.type],
          [payload.item]: (state.splitStatus[payload.type] || {})[payload.item] === undefined ?
            true : !state.splitStatus[payload.type][payload.item]
        }
      }
    };

  case types.INIT_LIST_REQUEST:
    return {
      ...state,
      initResList: {
        ...state.initResList,
        [payload]: {
          ...state.initResList[payload],
          isFetching: true,
          error: '',
        }
      }
    };

  case types.INIT_LIST_SUCCESS:
    return {
      ...state,
      initResList: {
        ...state.initResList,
        [payload.type]: {
          ...state.initResList[payload.type],
          isFetching: false,
          res: payload.page > 1 && payload.page > (state.initResList[payload.type] || {}).page ?
            [...(state.initResList[payload.type] || {}).res, ...payload.res] : payload.res,
          page: payload.res.length > 0 ? payload.page :
            (state.initResList[payload.type] || {}).page
        }
      }
    };

  case types.INIT_LIST_FAILURE:
    return {
      ...state,
      initResList: {
        ...state.initResList,
        [payload.type]: {
          ...state.initResList[payload.type],
          isFetching: false,
          error: payload.error,
        }
      }
    };

  case types.SEARCH_LIST_REQUEST:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload]: {
          ...state.searchResList[payload],
          isFetching: true,
          error: '',
        }
      }
    };

  case types.SEARCH_LIST_SUCCESS:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload.type]: {
          ...state.searchResList[payload.type],
          isFetching: false,
          res: payload.page > 1 && payload.page > (state.searchResList[payload.type] || {}).page ?
            [...(state.searchResList[payload.type] || {}).res, ...payload.res] : payload.res,
          page: payload.res.length > 0 ? payload.page :
            (state.searchResList[payload.type] || {}).page
        }
      }
    };

  case types.SEARCH_LIST_FAILURE:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload.type]: {
          ...state.searchResList[payload.type],
          isFetching: false,
          error: payload.error,
        }
      }
    };

  case types.TOGGLE_SEPARATE:
    return {
      ...state,
      separateList: {
        ...state.separateList,
        [payload]: state.separateList[payload] === undefined ? true :
          !state.separateList[payload]
      }
    };

  case types.CHECK_RADIO:
    return {
      ...state,
      radioList: {
        ...state.radioList,
        [payload.type]: payload.item
      }
    };

  case types.SELECT:
    return {
      ...state,
      checkList: {
        ...state.checkList,
        [payload.type]: updateList(state.checkList[payload.type], payload.item)
      }
    };

  case types.SET_TOP:
    return {
      ...state,
      top: {
        limit: payload.limit !== undefined ? payload.limit : state.top.limit,
        order: payload.order !== undefined ? payload.order : state.top.order
      }
    };

  case types.SET_PERIOD:
    return {
      ...state,
      period: {
        start: payload.start ? payload.start : state.period.start,
        end: payload.end ? payload.end : state.period.end
      },
      radioList: {
        ...state.radioList,
        interval: setDefaultInterval({
          start: payload.start ? payload.start : state.period.start,
          end: payload.end ? payload.end : state.period.end
        })
      }
    };

  case types.CHECK_SUBMIT_REQUEST:
    return {
      ...state,
      checkSubmitNmStatus: {
        ...state.checkSubmitNmStatus,
        isChecking: true,
        isDup: false,
        error: ''
      }
    };

  case types.CHECK_SUBMIT_SUCCESS:
    return {
      ...state,
      checkSubmitNmStatus: {
        ...state.checkSubmitNmStatus,
        isChecking: false,
        isDup: payload,
      }
    };

  case types.CHECK_SUBMIT_FAILURE:
    return {
      ...state,
      checkSubmitNmStatus: {
        ...state.checkSubmitNmStatus,
        isChecking: false,
        error: payload
      }
    };

  case types.UPDATE_NAME_REQUEST:
    return {
      ...state,
      updateNmStatus: {
        ...state.updateNmStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.UPDATE_NAME_SUCCESS:
    return {
      ...state,
      updateNmStatus: {
        ...state.updateNmStatus,
        isUpdating: false,
      }
    };

  case types.UPDATE_NAME_FAILURE:
    return {
      ...state,
      updateNmStatus: {
        ...state.updateNmStatus,
        isUpdating: false,
        error: payload
      }
    };

  case types.SAVE_ITEM_REQUEST:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: true,
        error: ''
      }
    };

  case types.SAVE_ITEM_SUCCESS:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false
      },
      favoredItemList: {
        ...state.favoredItemList,
        [payload.type]:
        [...(state.favoredItemList[payload.type] || []),
        { ...payload.item, itmNo: payload.res }]
      }
    };

  case types.SAVE_ITEM_FAILURE:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.DEL_ITEM_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_ITEM_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false
      },
      favoredItemList: {
        ...state.favoredItemList,
        [payload.type]: state.favoredItemList[payload.type].filter(item =>
          item.id !== payload.item.id)
      }
    };

  case types.DEL_ITEM_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: payload
      }
    };

  case types.INIT_ITEM_REQUEST:
    return {
      ...state,
      initItemList: {
        ...state.initItemList,
        [payload]: {
          ...state.initItemList[payload],
          isFetching: true,
          error: ''
        }
      }
    };

  case types.INIT_ITEM_SUCCESS:
    return {
      ...state,
      initItemList: {
        ...state.initItemList,
        [payload.type]: {
          ...state.initItemList[payload.type],
          isFetching: false
        }
      },
      favoredItemList: {
        ...state.favoredItemList,
        [payload.type]: payload.res.map(item => ({
          ...item,
          text: item.fullName || item.name || item.host_name || item.esmNm ||
            item.itmVal,
          id: item.asNo || item.intfNo || item.routerNo || item.popNo ||
            item.idcCd || item.cntryCd || item.esmCd || item.crctId || item.ispId
            || item.itmVal
        }))
      }
    };

  case types.INIT_ITEM_FAILURE:
    return {
      ...state,
      initItemList: {
        ...state.initItemList,
        [payload.type]: {
          ...state.initItemList[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.FETCH_RESULT_REQUEST:
    return {
      ...state,
      fetchExplorerStatus: {
        isFetching: true,
        res: null,
        error: ''
      },
      splitStatus: {}
    };

  case types.FETCH_RESULT_SUCCESS: {
    const renderData = getMainRenderData(payload);
    return {
      ...state,
      fetchExplorerStatus: {
        ...state.fetchExplorerStatus,
        isFetching: false,
        res: payload
      },
      hasChartData: renderData.hasChartData,
      chartsInit: renderData.chartsInit,
      data: renderData.data,
      table: renderData.table,
      isSplit: renderData.isSplit,
      splitList: renderData.splitList,
    };
  }

  case types.FETCH_RESULT_FAILURE:
    return {
      ...state,
      fetchExplorerStatus: {
        ...state.fetchExplorerStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_JOB_REQUEST:
    return {
      ...state,
      getJobStatus: {
        res: null,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_JOB_SUCCESS:
    return {
      ...state,
      getJobStatus: {
        ...state.getJobStatus,
        res: payload,
        isFetching: false,
      },
      selectedItemList: payload && payload.filter ? payload.filter.selectedItemList : {},
      separateList: payload && payload.filter ? payload.filter.separateList : {},
      radioList: payload && payload.filter ? payload.filter.radioList : {},
      checkList: payload && payload.filter ? payload.filter.checkList : {},
      top: payload && payload.filter ? payload.filter.top : {},
      period: payload && payload.filter ? payload.filter.period : {},
      allIF: payload && payload.filter ? payload.filter.allIF : false,
      routerIF: payload && payload.filter ? payload.filter.routerIF : {}
    };

  case types.GET_JOB_FAILURE:
    return {
      ...state,
      getJobStatus: {
        ...state.getJobStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_FILTER_REQUEST:
    return {
      ...state,
      getFilterStatus: {
        res: null,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_FILTER_SUCCESS:
    return {
      ...state,
      getFilterStatus: {
        ...state.getFilterStatus,
        res: payload,
        isFetching: false,
      },
      selectedItemList: payload && payload.filter ? payload.filter.selectedItemList : {},
      separateList: payload && payload.filter ? payload.filter.separateList : {},
      radioList: payload && payload.filter ? payload.filter.radioList : {},
      checkList: payload && payload.filter ? payload.filter.checkList : {},
      top: payload && payload.filter ? payload.filter.top : {},
      period: payload && payload.filter ? payload.filter.period : {},
      allIF: payload && payload.filter ? payload.filter.allIF : false,
      routerIF: payload && payload.filter ? payload.filter.routerIF : {}
    };

  case types.GET_FILTER_FAILURE:
    return {
      ...state,
      getFilterStatus: {
        ...state.getFilterStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_FLOW_REQUEST:
    return {
      ...state,
      getFlowStatus: {
        res: null,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_FLOW_SUCCESS:
    const current = ignoreSeconds(moment());
    return {
      ...state,
      getFlowStatus: {
        ...state.getFlowStatus,
        res: payload,
        isFetching: false,
      },
      selectedItemList: payload ? payload.selectedItemList : state.selectedItemList,
      separateList: payload ? payload.separateList : state.separateList,
      radioList: payload ? payload.radioList : state.radioList,
      checkList: payload ? payload.checkList : state.checkList,
      top: payload ? payload.top : state.top,
      period: payload ? {
        start: current - (payload.period.end - payload.period.start),
        end: current
      } : state.period,
      allIF: payload ? payload.allIF : state.allIF,
      routerIF: payload ? payload.routerIF : state.routerIF
    };

  case types.GET_FLOW_FAILURE:
    return {
      ...state,
      getFlowStatus: {
        ...state.getFlowStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.SET_SEARCH_QUERY:
    return {
      ...state,
      searchQuery: payload
    };

  case types.RESTORE_STATE:
    const f = processResponse(payload);
    return {
      ...state,
      selectedItemList: f ? f.selectedItemList : state.selectedItemList,
      separateList: f ? f.separateList : state.separateList,
      radioList: f ? f.radioList : state.radioList,
      checkList: f ? f.checkList : state.checkList,
      top: f ? f.top : state.top,
      period: f ? f.period : state.period
    };

  case types.GET_ANAROUTERS_REQUEST:
    return {
      ...state,
      anaRouters: {
        res: null,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_ANAROUTERS_SUCCESS:
    return {
      ...state,
      anaRouters: {
        ...state.anaRouters,
        res: payload,
        isFetching: false,
      }
    };

  case types.GET_ANAROUTERS_FAILURE:
    return {
      ...state,
      anaRouters: {
        ...state.anaRouters,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_ANA_REQUEST:
    return {
      ...state,
      ana: {
        res: null,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_ANA_SUCCESS:
    return {
      ...state,
      ana: {
        ...state.ana,
        res: payload,
        isFetching: false,
      }
    };

  case types.GET_ANA_FAILURE:
    return {
      ...state,
      ana: {
        ...state.ana,
        isFetching: false,
        error: payload
      }
    };

  case types.ADD_ALL_IF:
    return {
      ...state,
      allIF: true,
      selectedItemList: blacklist(state.selectedItemList, 'Server_IF_Router', 'Server_IF')
    };

  case types.CLEAR_ALL_IF:
    return {
      ...state,
      allIF: false
    };

  case types.ADD_ROUTER_IF:
    return {
      ...state,
      routerIF: {
        ...state.routerIF,
        [payload]: true
      }
    };

  case types.REMOVE_ROUTER_IF:
    return {
      ...state,
      routerIF: blacklist(state.routerIF, payload.toString())
    };

  case types.CLEAR_ROUTER_IF:
    return {
      ...state,
      routerIF: {}
    };

  default: return state;
  }
};
