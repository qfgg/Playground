import * as types from '../../constants/Admin/AS/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  resList: [],
  defaultList: [],
  initASStatus: {},
  delStatus: {},
  saveStatus: {},
  updateStatus: {},
  isEditing: [],
  curPage: 1,
  totalCnt: 0,
  totalEntries: 0,
  entriesPerPage: 15,
  suggestResList: {},
  sortStatus: {},
  checkStatus: {}
};

export const adminAS = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
  case types.AS_SORT:
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
      isEditing: [...state.isEditing, `${payload.id}`]
    };

  case types.CANCEL_UPD:
    return {
      ...state,
      isEditing: [...state.isEditing].filter(item => item !== `${payload.id}`)
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.GET_AS_REQUEST:
    return {
      ...state,
      initASStatus: {
        ...state.initASStatus,
        defaultList: [],
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_AS_SUCCESS:
    return {
      ...state,
      initASStatus: {
        ...state.initASStatus,
        isFetching: false
      },
      resList: payload ? payload.res.data : state.resList,
      defaultList: payload ? payload.res.data : state.resList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : state.totalCnt,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.GET_AS_FAILURE:
    return {
      ...state,
      initASStatus: {
        ...state.initASStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.DEL_AS_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_AS_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
      },
    };

  case types.DEL_AS_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: ''
      }
    };

  case types.MOD_AS_REQUEST:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.MOD_AS_SUCCESS:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false
      },
      isEditing: [...state.isEditing].filter(item => item !== `${payload.item.id}`)
    };

  case types.MOD_AS_FAILURE:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false,
        error: payload
      }
    };

  case types.ADD_AS_REQUEST:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: true,
        error: ''
      }
    };

  case types.ADD_AS_SUCCESS:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false
      }
    };

  case types.ADD_AS_FAILURE:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.CHECK_AS_REQUEST:
    return {
      ...state,
      checkStatus: {
        isChecking: true,
        isDup: false
      }
    };

  case types.CHECK_AS_SUCCESS:
    return {
      ...state,
      checkStatus: {
        isChecking: false,
        isDup: payload
      }
    };

  case types.CHECK_AS_FAILURE:
    return {
      ...state,
      checkStatus: {
        isChecking: false,
        error: payload
      }
    };

  case types.CLEAR_AS_CHECK:
    return {
      ...state,
      checkStatus: {
        isDup: false
      },
    };

  case types.SET_ENTRIES_PERPAGE:
    return {
      ...state,
      entriesPerPage: payload
    };
  default: return state;
  }
};
