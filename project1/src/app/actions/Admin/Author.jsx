import * as types from '../../constants/Admin/Author/ActionTypes';


export const initUserGrpRequest = () => ({
  type: types.INIT_GRP_REQUEST,
});

export const initUserGrpSuccess = res => ({
  type: types.INIT_GRP_SUCCESS,
  payload: res
});

export const initUserGrpFailure = error => ({
  type: types.INIT_GRP_FAILURE,
  payload: error
});

export const addUserGrpRequest = () => ({
  type: types.ADD_GRP_REQUEST,
});

export const addUserGrpSuccess = () => ({
  type: types.ADD_GRP_SUCCESS,
});

export const addUserGrpFailure = error => ({
  type: types.ADD_GRP_FAILURE,
  payload: error
});

export const delUserGrpRequest = () => ({
  type: types.DEL_GRP_REQUEST,
});

export const delUserGrpSuccess = () => ({
  type: types.DEL_GRP_SUCCESS,
});

export const delUserGrpFailure = error => ({
  type: types.DEL_GRP_FAILURE,
  payload: error
});

export const updateUserGrpRequest = () => ({
  type: types.UPDATE_GRP_REQUEST,
});

export const updateUserGrpSuccess = () => ({
  type: types.UPDATE_GRP_SUCCESS,
});

export const updateUserGrpFailure = error => ({
  type: types.UPDATE_GRP_FAILURE,
  payload: error
});

export const getGrpEmpRequest = () => ({
  type: types.GET_GRPEMP_REQUEST
});

export const getGrpEmpSuccess = res => ({
  type: types.GET_GRPEMP_SUCCESS,
  payload: res
});

export const getGrpEmpFailure = error => ({
  type: types.GET_GRPEMP_FAILURE,
  payload: error
});

export const addUserRequest = () => ({
  type: types.ADD_USER_REQUEST,
});

export const addUserSuccess = () => ({
  type: types.ADD_USER_SUCCESS,
});

export const addUserFailure = error => ({
  type: types.ADD_USER_FAILURE,
  payload: error
});

export const delUserRequest = () => ({
  type: types.DEL_USER_REQUEST,
});

export const delUserSuccess = () => ({
  type: types.DEL_USER_SUCCESS,
});

export const delUserFailure = error => ({
  type: types.DEL_USER_FAILURE,
  payload: error
});

export const initDeptRequest = () => ({
  type: types.INIT_DEPT_REQUEST,
});

export const initDeptSuccess = res => ({
  type: types.INIT_DEPT_SUCCESS,
  payload: res
});

export const initDeptFailure = error => ({
  type: types.INIT_DEPT_FAILURE,
  payload: error
});

export const fetchEmpRequest = deptCode => ({
  type: types.FETCH_EMP_REQUEST,
  payload: deptCode
});

export const fetchEmpSuccess = ({ deptCode, res } = {}) => ({
  type: types.FETCH_EMP_SUCCESS,
  payload: { deptCode, res }
});

export const fetchEmpFailure = ({ deptCode, error } = {}) => ({
  type: types.FETCH_EMP_FAILURE,
  payload: { deptCode, error }
});

export const fetchDeptRequest = deptCode => ({
  type: types.FETCH_DEPT_REQUEST,
  payload: deptCode
});

export const fetchDeptSuccess = ({ deptCode, res } = {}) => ({
  type: types.FETCH_DEPT_SUCCESS,
  payload: { deptCode, res }
});

export const fetchDeptFailure = ({ deptCode, error } = {}) => ({
  type: types.FETCH_DEPT_FAILURE,
  payload: { deptCode, error }
});

export const searchEmpRequest = () => ({
  type: types.SEARCH_EMP_REQUEST,
});

export const searchEmpSuccess = res => ({
  type: types.SEARCH_EMP_SUCCESS,
  payload: res
});

export const searchEmpFailure = error => ({
  type: types.SEARCH_EMP_FAILURE,
  payload: error
});

export const searchDeptRequest = () => ({
  type: types.SEARCH_DEPT_REQUEST,
});

export const searchDeptSuccess = res => ({
  type: types.SEARCH_DEPT_SUCCESS,
  payload: res
});

export const searchDeptFailure = error => ({
  type: types.SEARCH_DEPT_FAILURE,
  payload: error
});

export const clearSearch = () => ({
  type: types.CLEAR_SEARCH
});

export const findMenuRequest = () => ({
  type: types.FIND_MENU_REQUEST,
});

export const findMenuSuccess = ({ res, flatMenu } = {}) => ({
  type: types.FIND_MENU_SUCCESS,
  payload: { res, flatMenu }
});

export const findMenuFailure = error => ({
  type: types.FIND_MENU_FAILURE,
  payload: error
});

export const saveMenuAthorRequest = () => ({
  type: types.SAVE_MENU_ATHOR_REQUEST,
});

export const saveMenuAthorSuccess = () => ({
  type: types.SAVE_MENU_ATHOR_SUCCESS,
});

export const saveMenuAthorFailure = error => ({
  type: types.SAVE_MENU_ATHOR_FAILURE,
  payload: error
});
