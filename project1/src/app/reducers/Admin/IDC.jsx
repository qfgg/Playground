import * as types from '../../constants/Admin/IDC/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  resList: [],
  defaultList: [],
  initIdcStatus: {},
  delStatus: {},
  updateStatus: {},
  isEditing: [],
  curPage: 1,
  totalCnt: 0,
  totalEntries: 0,
  entriesPerPage: 15,
  sortStatus: {}
};

export const adminIDC = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.IDC_SORT:
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
      isEditing: [...state.isEditing, payload.idcCd]
    };

  case types.CONFIRM_UPD:
    return {
      ...state,
      resList: [...state.resList].map((item) => {
        if (payload.modItem.lsrLocCd !== '' && item.idcCd === payload.modItem.idcCd) {
          return {
            ...item,
            lsrLocCd: payload.modItem.lsrLocCd,
          };
        }
        return item;
      }),
      isEditing: [...state.isEditing].filter(item => item !== payload.idcCd)
    };

  case types.CANCEL_UPD:
    return {
      ...state,
      isEditing: [...state.isEditing].filter(item => item !== payload.idcCd)
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.GET_IDC_REQUEST:
    return {
      ...state,
      initIdcStatus: {
        ...state.initIdcStatus,
        defaultList: [],
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_IDC_SUCCESS:
    return {
      ...state,
      initIdcStatus: {
        ...state.initIdcStatus,
        isFetching: false
      },
      resList: payload ? payload.res.data : state.resList,
      defaultList: payload ? payload.res.data : state.resList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : 0,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.DEL_IDC_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_IDC_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
      },
    };

  case types.DEL_IDC_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: ''
      }
    };

  case types.GET_IDC_FAILURE:
    return {
      ...state,
      initIdcStatus: {
        ...state.initIdcStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.MOD_IDC_REQUEST:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.MOD_IDC_SUCCESS:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false
      },
      isEditing: [...state.isEditing].filter(item => item !== payload.idcCd)
    };

  case types.MOD_IDC_FAILURE:
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
