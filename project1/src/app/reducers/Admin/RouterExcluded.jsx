import * as types from '../../constants/Admin/RouterExcluded/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  resList: [
    {
      routerNo: 1,
      hostNm: 'cs1.mx960.kr.lgg',
      ciNo: 'Cl_20140409000154',
      cdate: '2016-07-22 20:00:00',
      mdate: '2016-07-23 20:00:00',
    }, {
      routerNo: 2,
      hostNm: 'cs2.mx960.kr.lgg',
      ciNo: 'Cl_20140409000154',
      cdate: '2016-07-22 20:00:00',
      mdate: '2016-07-23 20:00:00',
    }, {
      routerNo: 3,
      hostNm: 'cs3.mx960.kr.lgg',
      ciNo: 'Cl_20140409000154',
      cdate: '2016-07-22 20:00:00',
      mdate: '2016-07-23 20:00:00',
    }, {
      routerNo: 4,
      hostNm: 'cs4.mx960.kr.lgg',
      ciNo: 'Cl_20140409000154',
      cdate: '2016-07-22 20:00:00',
      mdate: '2016-07-23 20:00:00',
    }, {
      routerNo: 5,
      hostNm: 'cs5.mx960.kr.lgg',
      ciNo: 'Cl_20140409000154',
      cdate: '2016-07-22 20:00:00',
      mdate: '2016-07-23 20:00:00',
    }, {
      routerNo: 6,
      hostNm: 'cs6.mx960.kr.lgg',
      ciNo: 'Cl_20140409000154',
      cdate: '2016-07-22 20:00:00',
      mdate: '2016-07-23 20:00:00',
    }],
  isEditing: [],
  curPage: 1,
  totalCnt: 0,
  sortStatus: {},
  defaultList: [],
  initRouterExlStatus: {},
  delStatus: {},
  saveStatus: {},
  updateStatus: {},
  initPop: {},
  totalEntries: 0,
  entriesPerPage: 15,
};

export const adminRouterExcluded = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.ROUTEREXL_SORT:
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

  case types.UPDATE_ITEM:
    return {
      ...state,
      isEditing: [...state.isEditing, payload.routerNo]
    };

  case types.CANCEL_UPD:
    return {
      ...state,
      isEditing: [...state.isEditing].filter(item => item !== payload.routerNo)
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.GET_ROUTEREXL_REQUEST:
    return {
      ...state,
      initRouterExlStatus: {
        ...state.initRouterExlStatus,
        defaultList: [],
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_ROUTEREXL_SUCCESS:
    return {
      ...state,
      initRouterExlStatus: {
        ...state.initRouterExlStatus,
        isFetching: false
      },
      resList: payload ? payload.res.data : state.resList,
      defaultList: payload ? payload.res.data : state.resList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : state.totalCnt,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.GET_ROUTEREXL_FAILURE:
    return {
      ...state,
      initRouterExlStatus: {
        ...state.initRouterExlStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.DEL_ROUTEREXL_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_ROUTEREXL_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
      },
    };

  case types.DEL_ROUTEREXL_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: ''
      }
    };

  case types.MOD_ROUTEREXL_REQUEST:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.MOD_ROUTEREXL_SUCCESS:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false
      },
      isEditing: [...state.isEditing].filter(item => item !== payload.routerNo)
    };

  case types.MOD_ROUTEREXL_FAILURE:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false,
        error: payload
      }
    };

  case types.ADD_ROUTEREXL_REQUEST:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: true,
        error: ''
      }
    };

  case types.ADD_ROUTEREXL_SUCCESS:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false
      },
    };

  case types.ADD_ROUTEREXL_FAILURE:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.SET_ENTRIES_PERPAGE:
    return {
      ...state,
      entriesPerPage: payload
    };

  default: return state;
  }
};
