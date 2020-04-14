import * as types from '../../constants/External/ASPath/ActionTypes';


export const getSuggestRequest = () => ({
  type: types.GET_SUGGEST_REQUEST,
});

export const getSuggestSuccess = res => ({
  type: types.GET_SUGGEST_SUCCESS,
  payload: res,
});

export const getSuggestFailure = error => ({
  type: types.GET_SUGGEST_FAILURE,
  payload: error,
});

export const searchPathRequest = () => ({
  type: types.SEARCH_PATH_REQUEST,
});

export const searchPathSuccess = res => ({
  type: types.SEARCH_PATH_SUCCESS,
  payload: res,
});

export const searchPathFailure = error => ({
  type: types.SEARCH_PATH_FAILURE,
  payload: error,
});

export const getRouterRequest = () => ({
  type: types.GET_ROUTER_REQUEST,
});

export const getRouterSuccess = res => ({
  type: types.GET_ROUTER_SUCCESS,
  payload: res,
});

export const getRouterFailure = error => ({
  type: types.GET_ROUTER_FAILURE,
  payload: error,
});

export const getBasicRequest = () => ({
  type: types.GET_BASIC_REQUEST,
});

export const getBasicSuccess = res => ({
  type: types.GET_BASIC_SUCCESS,
  payload: res,
});

export const getBasicFailure = error => ({
  type: types.GET_BASIC_FAILURE,
  payload: error,
});

export const storeChart = chart => ({
  type: types.STORE_CHART,
  payload: chart
});

export const clearRouterChart = () => ({
  type: types.CLEAR_ROUTER_CHART,
});
