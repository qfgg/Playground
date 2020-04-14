import * as types from '../../constants/Reports/Misconfiguration/ActionTypes';


export const initRouterRequest = page => ({
  type: types.INIT_ROUTER_REQUEST,
  payload: page
});

export const initRouterSuccess = ({ res, page } = {}) => ({
  type: types.INIT_ROUTER_SUCCESS,
  payload: { res, page }
});

export const initRouterFailure = ({ error, page } = {}) => ({
  type: types.INIT_ROUTER_FAILURE,
  payload: { error, page }
});

export const getIFRequest = routerNo => ({
  type: types.GET_IF_REQUEST,
  payload: routerNo
});

export const getIFSuccess = ({ routerNo, res } = {}) => ({
  type: types.GET_IF_SUCCESS,
  payload: { routerNo, res }
});

export const getIFFailure = ({ routerNo, error } = {}) => ({
  type: types.GET_IF_FAILURE,
  payload: { routerNo, error }
});
