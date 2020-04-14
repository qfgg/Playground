import * as types from '../../constants/Admin/Menu/ActionTypes';


export const findMenuRequest = mnNo => ({
  type: types.FIND_MENU_REQUEST,
  payload: mnNo,
});

export const findMenuSuccess = ({ mnNo, res } = {}) => ({
  type: types.FIND_MENU_SUCCESS,
  payload: { mnNo, res }
});

export const findMenuFailure = ({ mnNo, error } = {}) => ({
  type: types.FIND_MENU_FAILURE,
  payload: { mnNo, error }
});

export const addMenuRequest = () => ({
  type: types.ADD_MENU_REQUEST
});

export const addMenuSuccess = () => ({
  type: types.ADD_MENU_SUCCESS
});

export const addMenuFailure = error => ({
  type: types.ADD_MENU_FAILURE,
  payload: error
});

export const getMenuRequest = mnNo => ({
  type: types.GET_MENU_REQUEST,
  payload: mnNo
});

export const getMenuSuccess = ({ mnNo, res } = {}) => ({
  type: types.GET_MENU_SUCCESS,
  payload: { mnNo, res }
});

export const getMenuFailure = ({ mnNo, error } = {}) => ({
  type: types.GET_MENU_FAILURE,
  payload: { mnNo, error }
});

export const delGetMenu = mnNo => ({
  type: types.DEL_GET_MENU,
  payload: mnNo
});

export const delMenuRequest = mnNo => ({
  type: types.DEL_MENU_REQUEST,
  payload: mnNo
});

export const delMenuSuccess = mnNo => ({
  type: types.DEL_MENU_SUCCESS,
  payload: mnNo
});

export const delMenuFailure = ({ mnNo, error } = {}) => ({
  type: types.DEL_MENU_FAILURE,
  payload: { mnNo, error }
});

export const updateMenuRequest = () => ({
  type: types.UPDATE_MENU_REQUEST,
});

export const updateMenuSuccess = () => ({
  type: types.UPDATE_MENU_SUCCESS,
});

export const updateMenuFailure = error => ({
  type: types.UPDATE_MENU_FAILURE,
  payload: error
});

export const getGrpRequest = mnNo => ({
  type: types.GET_GRP_REQUEST,
  payload: mnNo
});

export const getGrpSuccess = ({ mnNo, res } = {}) => ({
  type: types.GET_GRP_SUCCESS,
  payload: { mnNo, res }
});

export const getGrpFailure = ({ mnNo, error } = {}) => ({
  type: types.GET_GRP_FAILURE,
  payload: { mnNo, error }
});

export const updateGrpRequest = () => ({
  type: types.UPDATE_GRP_REQUEST,
});

export const updateGrpSuccess = () => ({
  type: types.UPDATE_GRP_SUCCESS,
});

export const updateGrpFailure = error => ({
  type: types.UPDATE_GRP_FAILURE,
  payload: error
});
