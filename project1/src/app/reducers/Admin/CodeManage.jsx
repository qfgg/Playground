import * as types from '../../constants/Admin/CodeManage/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  isEditing: [],
  isEditingCd: [],
  selectedGrp: '',
  initGrpStatus: {},
  initCdStatus: {},
  sortStatusGrp: {},
  sortStatusCd: {},
  defaultGrpList: [],
  defaultCdList: [],
  resListGrp: [],
  resListCd: [],
  delStatusGrp: {},
  delStatusCd: {},
  updateStatusGrp: {},
  updateStatusCd: {},
  curPageGrp: 1,
  curPageCd: 1,
  totalCntGrp: 0,
  totalCntCd: 0,
  totalEntriesGrp: 0,
  totalEntriesCd: 0,
  entriesPerPageGrp: 15,
  entriesPerPageCd: 15,
  checkGrpStatus: {},
  checkCdStatus: {}
};

export const adminCodeReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {

  case types.SET_CUR_PAGE_GROUP:
    return {
      ...state,
      curPageGrp: payload
    };

  case types.SET_CUR_PAGE_CODE:
    return {
      ...state,
      curPageCd: payload
    };

  case types.SELECT_GROUP:
    return {
      ...state,
      selectedGrp: payload
    };

  case types.INIT_GRP_CODE_REQUEST:
    return {
      ...state,
      initGrpStatus: {
        ...state.initGrpStatus,
        isFetching: true,
        error: ''
      },
      defaultGrpList: [],
      curPageGrp: 1,
      totalCntGrp: 0
    };

  case types.INIT_GRP_CODE_SUCCESS:
    return {
      ...state,
      initGrpStatus: {
        ...state.initGrpStatus,
        isFetching: false
      },
      resListGrp: payload ? payload.res.data : state.resListGrp,
      defaultGrpList: payload ? payload.res.data : state.resListGrp,
      curPageGrp: payload ? payload.page : state.curPageGrp,
      totalCntGrp: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPageGrp) :
        state.totalCntGrp,
      totalEntriesGrp: payload ? payload.res.headers['x-total-count'] : state.totalEntriesGrp
    };

  case types.INIT_GRP_CODE_FAILURE:
    return {
      ...state,
      initGrpStatus: {
        ...state.initGrpStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.INIT_CHILD_CODE_REQUEST:
    return {
      ...state,
      initCdStatus: {
        ...state.initCdStatus,
        [payload]: {
          ...state.initCdStatus[payload],
          isFetching: true,
          error: ''
        }
      },
      defaultCdList: [],
      curPageCd: 1,
      totalCntCd: 0
    };

  case types.INIT_CHILD_CODE_SUCCESS:
    return {
      ...state,
      initCdStatus: {
        ...state.initCdStatus,
        isFetching: false
      },
      resListCd: payload ? payload.res.data : state.resListCd,
      defaultCdList: payload ? payload.res.data : state.resListCd,
      curPageCd: payload ? payload.page : state.curPageCd,
      totalCntCd: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPageCd) :
        state.totalCntCd,
      totalEntriesCd: payload ? payload.res.headers['x-total-count'] : state.totalEntriesCd
    };

  case types.INIT_CHILD_CODE_FAILURE:
    return {
      ...state,
      initCdStatus: {
        ...state.initCdStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.SORT_GRP:
    return {
      ...state,
      sortStatusGrp: {
        [payload]:
        state.sortStatusGrp[payload] === undefined ? 1 :
          state.sortStatusGrp[payload] === 1 ? -1 :
            state.sortStatusGrp[payload] + 1,
      },
      resListGrp: state.sortStatusGrp[payload] === -1 ? state.defaultGrpList :
        state.sortStatusGrp[payload] === 1 ? [...state.resListGrp].sort(sortDescBy(payload)) :
          [...state.resListGrp].sort(sortAscBy(payload)),
    };

  case types.SORT_CODE:
    return {
      ...state,
      sortStatusCd: {
        [payload]: state.sortStatusCd[payload] === undefined ? 1 :
        state.sortStatusCd[payload] === 1 ? -1 :
          state.sortStatusCd[payload] + 1,
      },
      resListCd: state.sortStatusCd[payload] === -1 ? state.defaultCdList :
        state.sortStatusCd[payload] === 1 ? [...state.resListCd].sort(sortDescBy(payload)) :
          [...state.resListCd].sort(sortAscBy(payload)),
    };

  case types.CONFIRM_DEL_GRP_CODE_REQUEST:
    return {
      ...state,
      delStatusGrp: {
        ...state.delStatusGrp,
        isDeleting: true,
        error: ''
      }
    };

  case types.CONFIRM_DEL_GRP_CODE_SUCCESS:
    return {
      ...state,
      delStatusGrp: {
        ...state.delStatusGrp,
        isDeleting: false
      }
    };

  case types.CONFIRM_DEL_GRP_CODE_FAILURE:
    return {
      ...state,
      delStatusGrp: {
        ...state.delStatusGrp,
        isDeleting: false,
        error: payload
      }
    };

  case types.CONFIRM_DEL_CHILD_CODE_REQUEST:
    return {
      ...state,
      delStatusCd: {
        ...state.delStatusCd,
        isDeleting: true,
        error: ''
      }
    };

  case types.CONFIRM_DEL_CHILD_CODE_SUCCESS:
    return {
      ...state,
      delStatusCd: {
        ...state.delStatusCd,
        isDeleting: false
      }
    };

  case types.CONFIRM_DEL_CHILD_CODE_FAILURE:
    return {
      ...state,
      delStatusCd: {
        ...state.delStatusCd,
        isDeleting: false,
        error: payload
      }
    };

  case types.CONFIRM_UPD_GRP_CODE_REQUEST:
    return {
      ...state,
      updateStatusGrp: {
        ...state.updateStatusGrp,
        isUpdatingGrp: true,
        error: ''
      }
    };

  case types.CONFIRM_UPD_GRP_CODE_SUCCESS:
    return {
      ...state,
      updateStatusGrp: {
        ...state.updateStatusGrp,
        isUpdatingGrp: false
      },
      isEditing: [...state.isEditing].filter(item => item !== payload.grpCd)
    };

  case types.CONFIRM_UPD_GRP_CODE_FAILURE:
    return {
      ...state,
      updateStatusGrp: {
        ...state.updateStatusGrp,
        isUpdatingGrp: false,
        error: payload
      }
    };

  case types.CONFIRM_UPD_CHILD_CODE_REQUEST:
    return {
      ...state,
      updateStatusCd: {
        ...state.updateStatusCd,
        isUpdatingCd: true,
        error: ''
      }
    };

  case types.CONFIRM_UPD_CHILD_CODE_SUCCESS:
    return {
      ...state,
      updateStatusCd: {
        ...state.updateStatusCd,
        isUpdatingCd: false
      },
      isEditingCd: [...state.isEditingCd].filter(item => item !== payload.cd)
    };

  case types.CONFIRM_UPD_CHILD_CODE_FAILURE:
    return {
      ...state,
      updateStatusCd: {
        ...state.updateStatusCd,
        isUpdatingCd: false,
        error: payload
      }
    };

  case types.UPDATE_GROUP_CODE:
    return {
      ...state,
      isEditing: [...state.isEditing, payload.grpCd]
    };

  case types.UPDATE_CODE:
    return {
      ...state,
      isEditingCd: [...state.isEditingCd, payload.cd]
    };

  case types.CANCEL_UPD_GROUP:
    return {
      ...state,
      isEditing: [...state.isEditing].filter(item => item !== payload.grpCd)
    };

  case types.CANCEL_UPD_CODE:
    return {
      ...state,
      isEditingCd: [...state.isEditingCd].filter(item => item !== payload.cd)
    };

  case types.ADD_GRP_CODE_REQUEST:
    return {
      ...state,
      saveStatusGrp: {
        ...state.saveStatusGrp,
        isSaving: true,
        error: ''
      }
    };

  case types.ADD_GRP_CODE_SUCCESS:
    return {
      ...state,
      saveStatusGrp: {
        ...state.saveStatusGrp,
        isSaving: false
      },
    };

  case types.ADD_GRP_CODE_FAILURE:
    return {
      ...state,
      saveStatusGrp: {
        ...state.saveStatusGrp,
        isSaving: false,
        error: payload
      }
    };

  case types.ADD_CHILD_CODE_REQUEST:
    return {
      ...state,
      saveStatusCd: {
        ...state.saveStatusCd,
        isSaving: true,
        error: ''
      }
    };

  case types.ADD_CHILD_CODE_SUCCESS:
    return {
      ...state,
      saveStatusCd: {
        ...state.saveStatusCd,
        isSaving: false
      },
    };

  case types.ADD_CHILD_CODE_FAILURE:
    return {
      ...state,
      saveStatusCd: {
        ...state.saveStatusCd,
        isSaving: false,
        error: payload
      }
    };

  case types.SET_GRP_ENTRIES_PERPAGE:
    return {
      ...state,
      entriesPerPageGrp: payload
    };

  case types.SET_CHILD_ENTRIES_PERPAGE:
    return {
      ...state,
      entriesPerPageCd: payload
    };

  case types.CHECK_GRP_CODE_REQUEST:
    return {
      ...state,
      checkGrpStatus: {
        ...state.checkGrpStatus,
        isChecking: true,
        isDup: false,
        error: ''
      }
    };

  case types.CHECK_GRP_CODE_SUCCESS:
    return {
      ...state,
      checkGrpStatus: {
        ...state.checkGrpStatus,
        isChecking: false,
        isDup: payload,
      }
    };

  case types.CHECK_GRP_CODE_FAILURE:
    return {
      ...state,
      checkGrpStatus: {
        ...state.checkGrpStatus,
        isChecking: false,
        error: payload
      }
    };

  case types.CHECK_CHILD_CODE_REQUEST:
    return {
      ...state,
      checkCdStatus: {
        ...state.checkCdStatus,
        isChecking: true,
        isDup: false,
        error: ''
      }
    };

  case types.CHECK_CHILD_CODE_SUCCESS:
    return {
      ...state,
      checkCdStatus: {
        ...state.checkCdStatus,
        isChecking: false,
        isDup: payload,
      }
    };

  case types.CHECK_CHILD_CODE_FAILURE:
    return {
      ...state,
      checkCdStatus: {
        ...state.checkCdStatus,
        isChecking: false,
        error: payload
      }
    };

  default:
    return state;
  }
};
