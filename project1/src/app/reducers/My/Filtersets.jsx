import * as types from '../../constants/My/Filtersets/ActionTypes';

const defaultState = {
  saveStatus: {},
  delStatus: {},
  checkNmStatus: {},
  updateStatus: {},
  savedItemList: {},
  curPage: 1,
  totalCnt: 0,
  totalEntries: 0,
  entriesPerPage: 15,
  editFlag: {},
};

export const myFiltersetsReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.TOGGLE_EDIT_FLAG:
    return {
      ...state,
      editFlag: {
        ...state.editFlag,
        [payload]: !state.editFlag[payload]
      }
    };

  case types.GET_FILTER_SETS_REQUEST:
    return {
      ...state,
      savedItemList: {
        ...state.savedItemList,
        isFetching: true,
        error: '',
        res: state.savedItemList ? state.savedItemList.res : []
      }
    };

  case types.GET_FILTER_SETS_SUCCESS:
    return {
      ...state,
      savedItemList: {
        ...state.savedItemList,
        isFetching: false,
        res: payload ? payload.res.data : state.savedItemList.res,
      },
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : 0,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.GET_FILTER_SETS_FAILURE:
    return {
      ...state,
      savedItemList: {
        ...state.savedItemList,
        isFetching: false,
        error: payload.error,
      }
    };

  case types.SAVE_FILTER_SETS_REQUEST:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: true,
        error: ''
      }
    };

  case types.SAVE_FILTER_SETS_SUCCESS:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false
      }
    };

  case types.SAVE_FILTER_SETS_FAILURE:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.DEL_FILTER_SETS_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_FILTER_SETS_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
      }
    };

  case types.DEL_FILTER_SETS_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: ''
      }
    };

  case types.CHECK_FILTERS_NAME_REQUEST:
    return {
      ...state,
      checkNmStatus: {
        ...state.checkNmStatus,
        isChecking: true,
        isDup: false,
        fltrsetNo: -1,
        error: ''
      }
    };

  case types.CHECK_FILTERS_NAME_SUCCESS:
    return {
      ...state,
      checkNmStatus: {
        ...state.checkNmStatus,
        isChecking: false,
        isDup: payload.isDup,
        fltrsetNo: payload.fltrsetNo,
        error: ''
      }
    };

  case types.CHECK_FILTERS_NAME_FAILURE:
    return {
      ...state,
      checkNmStatus: {
        ...state.checkNmStatus,
        isChecking: false,
        error: payload
      }
    };

  case types.UPDATE_FILTER_SET_REQUEST:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.UPDATE_FILTER_SET_SUCCESS:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false,
      }
    };

  case types.UPDATE_FILTER_SET_FAILURE:
    return {
      ...state,
      updateStatus: {
        ...state.updateStatus,
        isUpdating: false,
        error: ''
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
