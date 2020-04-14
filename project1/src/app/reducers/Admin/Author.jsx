import * as types from '../../constants/Admin/Author/ActionTypes';


const defaultState = {
  userGrpList: {},
  addGrpStatus: {},
  delGrpStatus: {},
  updateGrpStatus: {},
  userList: {},
  addUserStatus: {},
  delUserStatus: {},
  empList: {},
  deptList: {},
  searchEmpStatus: {},
  searchDeptStatus: {},
  menuList: {},
  flatMenu: {},
  saveMnStatus: {}
};

export const adminAuthorReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.INIT_GRP_REQUEST:
    return {
      ...state,
      userGrpList: {
        ...state.userGrpList,
        isFetching: true,
        error: null
      }
    };

  case types.INIT_GRP_SUCCESS:
    return {
      ...state,
      userGrpList: {
        ...state.userGrpList,
        isFetching: false,
        res: payload && payload.data ? payload.data : null
      }
    };

  case types.INIT_GRP_FAILURE:
    return {
      ...state,
      userGrpList: {
        ...state.userGrpList,
        isFetching: false,
        error: payload
      }
    };

  case types.ADD_GRP_REQUEST:
    return {
      ...state,
      addGrpStatus: {
        isSaving: true,
        error: null
      }
    };

  case types.ADD_GRP_SUCCESS:
    return {
      ...state,
      addGrpStatus: {
        ...state.addGrpStatus,
        isSaving: false,
      }
    };

  case types.ADD_GRP_FAILURE:
    return {
      ...state,
      addGrpStatus: {
        ...state.addGrpStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.DEL_GRP_REQUEST:
    return {
      ...state,
      delGrpStatus: {
        isDeleting: true,
        res: null,
        error: null
      }
    };

  case types.DEL_GRP_SUCCESS:
    return {
      ...state,
      delGrpStatus: {
        ...state.delGrpStatus,
        isDeleting: false,
      }
    };

  case types.DEL_GRP_FAILURE:
    return {
      ...state,
      delGrpStatus: {
        ...state.delGrpStatus,
        isDeleting: false,
        error: payload
      }
    };

  case types.UPDATE_GRP_REQUEST:
    return {
      ...state,
      updateGrpStatus: {
        isUpdating: true,
        res: null,
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

  case types.GET_GRPEMP_REQUEST:
    return {
      ...state,
      userList: {
        ...state.userList,
        isFetching: true,
        error: null
      }
    };

  case types.GET_GRPEMP_SUCCESS:
    return {
      ...state,
      userList: {
        ...state.userList,
        isFetching: false,
        res: payload && payload.data ? payload.data : null
      }
    };

  case types.GET_GRPEMP_FAILURE:
    return {
      ...state,
      userList: {
        ...state.userList,
        isFetching: false,
        error: payload
      }
    };

  case types.ADD_USER_REQUEST:
    return {
      ...state,
      addUserStatus: {
        isSaving: true,
        error: null
      }
    };

  case types.ADD_USER_SUCCESS:
    return {
      ...state,
      addUserStatus: {
        ...state.addUserStatus,
        isSaving: false,
      }
    };

  case types.ADD_USER_FAILURE:
    return {
      ...state,
      addUserStatus: {
        ...state.addUserStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.DEL_USER_REQUEST:
    return {
      ...state,
      delUserStatus: {
        isDeleting: true,
        res: null,
        error: null
      }
    };

  case types.DEL_USER_SUCCESS:
    return {
      ...state,
      delUserStatus: {
        ...state.delUserStatus,
        isDeleting: false,
      }
    };

  case types.DEL_USER_FAILURE:
    return {
      ...state,
      delUserStatus: {
        ...state.delUserStatus,
        isDeleting: false,
        error: payload
      }
    };

  case types.INIT_DEPT_REQUEST:
    return {
      ...state,
      deptList: {
        ...state.deptList,
        0: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.INIT_DEPT_SUCCESS:
    return {
      ...state,
      deptList: {
        ...state.deptList,
        0: {
          isFetching: false,
          res: payload && payload.data ? payload.data : null
        }
      }
    };

  case types.INIT_DEPT_FAILURE:
    return {
      ...state,
      deptList: {
        ...state.deptList,
        0: {
          isFetching: false,
          error: payload
        }
      }
    };

  case types.FETCH_EMP_REQUEST:
    return {
      ...state,
      empList: {
        ...state.empList,
        [payload]: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.FETCH_EMP_SUCCESS:
    return {
      ...state,
      empList: {
        ...state.empList,
        [payload.deptCode]: {
          isFetching: false,
          res: payload && payload.res && payload.res.data ? payload.res.data : null
        }
      }
    };

  case types.FETCH_EMP_FAILURE:
    return {
      ...state,
      empList: {
        ...state.empList,
        [payload.deptCode]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.FETCH_DEPT_REQUEST:
    return {
      ...state,
      deptList: {
        ...state.deptList,
        [payload]: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.FETCH_DEPT_SUCCESS:
    return {
      ...state,
      deptList: {
        ...state.deptList,
        [payload.deptCode]: {
          isFetching: false,
          res: payload && payload.res && payload.res.data ? payload.res.data : null
        }
      }
    };

  case types.FETCH_DEPT_FAILURE:
    return {
      ...state,
      deptList: {
        ...state.deptList,
        [payload.deptCode]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.SEARCH_EMP_REQUEST:
    return {
      ...state,
      searchEmpStatus: {
        ...state.searchEmpStatus,
        isFetching: true,
        res: null,
        error: null
      },
      searchDeptStatus: {}
    };

  case types.SEARCH_EMP_SUCCESS:
    return {
      ...state,
      searchEmpStatus: {
        ...state.searchEmpStatus,
        isFetching: false,
        res: payload && payload.data ? payload.data : null
      }
    };

  case types.SEARCH_EMP_FAILURE:
    return {
      ...state,
      searchEmpStatus: {
        ...state.searchEmpStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.SEARCH_DEPT_REQUEST:
    return {
      ...state,
      searchDeptStatus: {
        ...state.searchDeptStatus,
        isFetching: true,
        res: null,
        error: null
      },
      searchEmpStatus: {}
    };

  case types.SEARCH_DEPT_SUCCESS:
    return {
      ...state,
      searchDeptStatus: {
        ...state.searchDeptStatus,
        isFetching: false,
        res: payload && payload.data ? payload.data : null
      }
    };

  case types.SEARCH_DEPT_FAILURE:
    return {
      ...state,
      searchDeptStatus: {
        ...state.searchDeptStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.CLEAR_SEARCH:
    return {
      ...state,
      searchDeptStatus: {},
      searchEmpStatus: {}
    };

  case types.FIND_MENU_REQUEST:
    return {
      ...state,
      menuList: {
        isFetching: true,
        res: null,
        error: ''
      }
    };

  case types.FIND_MENU_SUCCESS:
    return {
      ...state,
      menuList: {
        ...state.menuList,
        isFetching: false,
        res: payload.res
      },
      flatMenu: payload.flatMenu
    };

  case types.FIND_MENU_FAILURE:
    return {
      ...state,
      menuList: {
        ...state.menuList,
        isFetching: false,
        error: payload
      }
    };

  case types.SAVE_MENU_ATHOR_REQUEST:
    return {
      ...state,
      saveMnStatus: {
        ...state.saveMnStatus,
        isSaving: true,
        error: null
      }
    };

  case types.SAVE_MENU_ATHOR_SUCCESS:
    return {
      ...state,
      saveMnStatus: {
        ...state.saveMnStatus,
        isSaving: false,
      }
    };

  case types.SAVE_MENU_ATHOR_FAILURE:
    return {
      ...state,
      saveMnStatus: {
        ...state.saveMnStatus,
        isSaving: false,
        error: payload
      }
    };

  default: return state;
  }
};
