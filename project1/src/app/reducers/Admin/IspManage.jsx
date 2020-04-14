import * as types from '../../constants/Admin/IspManage/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  resList: [
    {
      ispId: 1,
      cmntTxt: 'Comment1',
      pyscBw: '30Gbps',
      cntrctBw: '50Gbps',
      intfCnt: 9,
      asNo: 2316,
      creYmdt: '2016-07-22 20:00:00',
      modYmdt: '2016-07-22 20:00:00'
    }, {
      ispId: 2,
      cmntTxt: 'Comment2',
      pyscBw: '1Gbps',
      cntrctBw: '2Gbps',
      intfCnt: 5,
      asNo: 2333,
      creYmdt: '2016-07-22 20:00:00',
      modYmdt: '2016-07-22 20:00:00'
    }, {
      ispId: 3,
      cmntTxt: 'Comment3',
      pyscBw: '45Gbps',
      cntrctBw: '50Gbps',
      intfCnt: 6,
      asNo: 2317,
      creYmdt: '2016-07-22 20:00:00',
      modYmdt: '2016-07-22 20:00:00'
    }, {
      ispId: 4,
      cmntTxt: 'Comment4',
      pyscBw: '15Gbps',
      cntrctBw: '20Gbps',
      intfCnt: 4,
      asNo: 2310,
      creYmdt: '2016-07-22 20:00:00',
      modYmdt: '2016-07-22 20:00:00'
    }, {
      ispId: 5,
      cmntTxt: 'Comment5',
      pyscBw: '15Gbps',
      cntrctBw: '20Gbps',
      intfCnt: 3,
      asNo: 2315,
      creYmdt: '2016-07-22 20:00:00',
      modYmdt: '2016-07-22 20:00:00'
    }, {
      ispId: 6,
      cmntTxt: 'Comment6',
      pyscBw: '20Gbps',
      cntrctBw: '30Gbps',
      intfCnt: 7,
      asNo: 2314,
      creYmdt: '2016-07-22 20:00:00',
      modYmdt: '2016-07-22 20:00:00'
    }
  ],
  isEditing: [],
  curPage: 1,
  totalCnt: 0,
  sortStatus: {},
  defaultList: [],
  initIspStatus: {},
  delStatus: {},
  updateStatus: {},
  totalEntries: 0,
  entriesPerPage: 15,
};

export const adminIspManage = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.ISP_SORT:
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
      isEditing: [...state.isEditing, payload.ispId]
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.GET_ISP_REQUEST:
    return {
      ...state,
      initIspStatus: {
        ...state.initIspStatus,
        defaultList: [],
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_ISP_SUCCESS:
    return {
      ...state,
      initIspStatus: {
        ...state.initIspStatus,
        isFetching: false
      },
      resList: payload ? payload.res.data : state.resList,
      defaultList: payload ? payload.res.data : state.resList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : 0,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.DEL_ISP_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_ISP_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
      },
    };

  case types.DEL_ISP_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: ''
      }
    };

  case types.GET_ISP_FAILURE:
    return {
      ...state,
      initIspStatus: {
        ...state.initIspStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.MOD_ISP_REQUEST:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.MOD_ISP_SUCCESS:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false
      },
      isEditing: [...state.isEditing].filter(item => item !== payload.ispId)
    };

  case types.MOD_ISP_FAILURE:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false,
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
