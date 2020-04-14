import * as types from '../../constants/Admin/RouterManage/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  resList: [],
  defaultList: [],
  isEditing: [],
  initRouter: {},
  curPage: 1,
  totalCnt: 0,
  totalEntries: 0,
  entriesPerPage: 15,
  sortStatus: {},
  ifSortStatus: {},
  updateRouterStatus: {},
  updateIFStatus: {},
  ifList: {},
  defaultIfList: {}
};

export const adminRouterReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.ROUTER_SORT:
    return {
      ...state,
      sortStatus: {
        [payload]:
          state.sortStatus[payload] === undefined ? 1 :
          state.sortStatus[payload] === 1 ? -1 :
          state.sortStatus[payload] + 1,
      },
      resList: state.sortStatus[payload] === -1 ? state.defaultList :
        state.sortStatus[payload] === 1 ? [...state.resList].sort(sortDescBy(payload)) :
        [...state.resList].sort(sortAscBy(payload)),
    };

  case types.IF_SORT:
    return {
      ...state,
      ifSortStatus: {
        ...state.ifSortStatus,
        [payload.routerNo]:
          state.ifSortStatus[payload.routerNo] === undefined ? 1 :
          state.ifSortStatus[payload.routerNo] === 1 ? -1 :
          state.ifSortStatus[payload.routerNo] + 1,
      },
      ifList: {
        ...state.ifList,
        [payload.routerNo]: {
          ...state.ifList[payload.routerNo],
          res: state.ifSortStatus[payload.routerNo] === -1 ?
            state.defaultIfList[payload.routerNo].res :
            state.ifSortStatus[payload.routerNo] === 1 ?
            [...state.ifList[payload.routerNo].res].sort(sortDescBy(payload.item)) :
            [...state.ifList[payload.routerNo].res].sort(sortAscBy(payload.item)),
        }
      }
    };

  case types.CLEAR_IF_SORT:
    return {
      ...state,
      ifSortStatus: {}
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.SET_ENTRY:
    return {
      ...state,
      entriesPerPage: payload
    };

  case types.GET_ROUTER_REQUEST:
    return {
      ...state,
      initRouterStatus: {
        ...state.initRouterStatus,
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_ROUTER_SUCCESS:
    return {
      ...state,
      initRouterStatus: {
        ...state.initRouterStatus,
        isFetching: false
      },
      resList: payload ? payload.res.data : state.resList,
      defaultList: payload ? payload.res.data : state.resList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : state.totalCnt,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries,
      ifList: {}
    };

  case types.GET_ROUTER_FAILURE:
    return {
      ...state,
      initRouterStatus: {
        ...state.initRouterStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.UPDATE_ROUTERS_REQUEST:
    return {
      ...state,
      updateRouterStatus: {
        ...state.updateRouterStatus,
        isSaving: true,
        error: null
      }
    };

  case types.UPDATE_ROUTERS_SUCCESS:
    return {
      ...state,
      updateRouterStatus: {
        ...state.updateRouterStatus,
        isSaving: false
      }
    };

  case types.UPDATE_ROUTERS_FAILURE:
    return {
      ...state,
      updateRouterStatus: {
        ...state.updateRouterStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.GET_IF_REQUEST:
    return {
      ...state,
      ifList: {
        ...state.ifList,
        [payload]: {
          isFetching: true,
          error: ''
        }
      }
    };

  case types.GET_IF_SUCCESS:
    return {
      ...state,
      ifList: {
        ...state.ifList,
        [payload.routerNo]: {
          isFetching: false,
          res: payload.res,
          error: ''
        }
      },
      defaultIfList: {
        [payload.routerNo]: {
          res: payload.res
        }
      }
    };

  case types.GET_IF_FAILURE:
    return {
      ...state,
      ifList: {
        ...state.ifList,
        [payload.routerNo]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.UPDATE_IFS_REQUEST:
    return {
      ...state,
      updateIFStatus: {
        ...state.updateIFStatus,
        isSaving: true,
        error: null
      }
    };

  case types.UPDATE_IFS_SUCCESS:
    return {
      ...state,
      updateIFStatus: {
        ...state.updateIFStatus,
        isSaving: false
      }
    };

  case types.UPDATE_IFS_FAILURE:
    return {
      ...state,
      updateIFStatus: {
        ...state.updateIFStatus,
        isSaving: false,
        error: payload
      }
    };

  default: return state;
  }
};
