import blacklist from 'blacklist';
import * as types from '../../constants/Admin/Menu/ActionTypes';


const defaultState = {
  menuList: {},
  addMnStatus: {},
  delMnStatus: {},
  getMnStatus: {},
  updateMnStatus: {},
  getGrpStatus: {},
  updateGrpStatus: {}
};

export const adminMenuReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.FIND_MENU_REQUEST:
    return {
      ...state,
      menuList: {
        ...state.menuList,
        [payload]: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.FIND_MENU_SUCCESS:
    return {
      ...state,
      menuList: {
        ...state.menuList,
        [payload.mnNo]: {
          isFetching: false,
          res: payload.res
        }
      }
    };

  case types.FIND_MENU_FAILURE:
    return {
      ...state,
      menuList: {
        ...state.menuList,
        [payload.mnNo]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.ADD_MENU_REQUEST:
    return {
      ...state,
      addMnStatus: {
        ...state.addMnStatus,
        isAdding: true,
        error: null
      }
    };

  case types.ADD_MENU_SUCCESS:
    return {
      ...state,
      addMnStatus: {
        ...state.addMnStatus,
        isAdding: false
      }
    };

  case types.ADD_MENU_FAILURE:
    return {
      ...state,
      addMnStatus: {
        ...state.addMnStatus,
        isAdding: false,
        error: payload
      }
    };

  case types.GET_MENU_REQUEST:
    return {
      ...state,
      getMnStatus: {
        ...state.getMnStatus,
        [payload]: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.GET_MENU_SUCCESS:
    return {
      ...state,
      getMnStatus: {
        ...state.getMnStatus,
        [payload.mnNo]: {
          isFetching: false,
          res: payload.res
        }
      }
    };

  case types.GET_MENU_FAILURE:
    return {
      ...state,
      getMnStatus: {
        ...state.getMnStatus,
        [payload.mnNo]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.DEL_GET_MENU:
    return {
      ...state,
      getMnStatus: blacklist(state.getMnStatus, payload.toString())
    };

  case types.DEL_MENU_REQUEST:
    return {
      ...state,
      delMnStatus: {
        ...state.delMnStatus,
        [payload]: {
          isDeleting: true,
          error: null
        }
      }
    };

  case types.DEL_MENU_SUCCESS:
    return {
      ...state,
      delMnStatus: {
        ...state.delMnStatus,
        [payload]: {
          isDeleting: false,
        }
      }
    };

  case types.DEL_MENU_FAILURE:
    return {
      ...state,
      delMnStatus: {
        ...state.delMnStatus,
        [payload.mnNo]: {
          isDeleting: false,
          error: payload.error
        }
      }
    };

  case types.UPDATE_MENU_REQUEST:
    return {
      ...state,
      updateMnStatus: {
        ...state.updateMnStatus,
        isUpdating: true,
        error: null
      }
    };

  case types.UPDATE_MENU_SUCCESS:
    return {
      ...state,
      updateMnStatus: {
        ...state.updateMnStatus,
        isUpdating: false,
      }
    };

  case types.UPDATE_MENU_FAILURE:
    return {
      ...state,
      updateMnStatus: {
        ...state.updateMnStatus,
        isUpdating: false,
        error: payload
      }
    };

  case types.GET_GRP_REQUEST:
    return {
      ...state,
      getGrpStatus: {
        ...state.getGrpStatus,
        [payload]: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.GET_GRP_SUCCESS:
    return {
      ...state,
      getGrpStatus: {
        ...state.getGrpStatus,
        [payload.mnNo]: {
          isFetching: false,
          res: payload.res
        }
      }
    };

  case types.GET_GRP_FAILURE:
    return {
      ...state,
      getGrpStatus: {
        ...state.getGrpStatus,
        [payload.mnNo]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.UPDATE_GRP_REQUEST:
    return {
      ...state,
      updateGrpStatus: {
        ...state.updateGrpStatus,
        isUpdating: true,
        error: null
      }
    };

  case types.UPDATE_GRP_SUCCESS:
    return {
      ...state,
      updateGrpStatus: {
        ...state.updateGrpStatus,
        isUpdating: false,
      }
    };

  case types.UPDATE_GRP_FAILURE:
    return {
      ...state,
      updateGrpStatus: {
        ...state.updateGrpStatus,
        isUpdating: false,
        error: payload
      }
    };

  default: return state;
  }
};
