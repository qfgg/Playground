import * as types from '../../constants/Admin/RouterExcluded/ActionTypes';

export const sort = item => ({
  type: types.ROUTEREXL_SORT,
  payload: item,
});

export const updateItem = item => ({
  type: types.UPDATE_ITEM,
  payload: item,
});

export const cancelUpd = item => ({
  type: types.CANCEL_UPD,
  payload: item,
});

export const setCurPage = target => ({
  type: types.SET_CUR_PAGE,
  payload: target,
});

export const getRouterExlRequest = () => ({
  type: types.GET_ROUTEREXL_REQUEST,
});

export const getRouterExlSuccess = page => ({
  type: types.GET_ROUTEREXL_SUCCESS,
  payload: page,
});

export const getRouterExlFailure = page => ({
  type: types.GET_ROUTEREXL_FAILURE,
  payload: page,
});

export const delRouterExlRequest = () => ({
  type: types.DEL_ROUTEREXL_REQUEST,
});

export const delRouterExlSuccess = () => ({
  type: types.DEL_ROUTEREXL_SUCCESS,
});

export const delRouterExlFailure = ({ error } = {}) => ({
  type: types.DEL_ROUTEREXL_FAILURE,
  payload: { error }
});

export const modRouterExlRequest = () => ({
  type: types.MOD_ROUTEREXL_REQUEST,
});

export const modRouterExlSuccess = item => ({
  type: types.MOD_ROUTEREXL_SUCCESS,
  payload: item,
});

export const modRouterExlFailure = ({ error } = {}) => ({
  type: types.MOD_ROUTEREXL_FAILURE,
  payload: { error }
});

export const addRouterExlRequest = () => ({
  type: types.ADD_ROUTEREXL_REQUEST,
});

export const addRouterExlSuccess = item => ({
  type: types.ADD_ROUTEREXL_SUCCESS,
  payload: item,
});

export const addRouterExlFailure = ({ error } = {}) => ({
  type: types.ADD_ROUTEREXL_FAILURE,
  payload: { error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});

