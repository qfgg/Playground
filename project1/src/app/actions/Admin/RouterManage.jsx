import * as types from '../../constants/Admin/RouterManage/ActionTypes';


export const sort = item => ({
  type: types.ROUTER_SORT,
  payload: item,
});

export const sortIf = (routerNo, item) => ({
  type: types.IF_SORT,
  payload: { routerNo, item }
});

export const clearSortIf = () => ({
  type: types.CLEAR_IF_SORT,
});

export const setCurPage = target => ({
  type: types.SET_CUR_PAGE,
  payload: target,
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRY,
  payload: size
});

export const getRouterRequest = () => ({
  type: types.GET_ROUTER_REQUEST,
});

export const getRouterSuccess = page => ({
  type: types.GET_ROUTER_SUCCESS,
  payload: page,
});

export const getRouterFailure = page => ({
  type: types.GET_ROUTER_FAILURE,
  payload: page,
});

export const updateRoutersRequest = () => ({
  type: types.UPDATE_ROUTERS_REQUEST,
});

export const updateRoutersSuccess = () => ({
  type: types.UPDATE_ROUTERS_SUCCESS,
});

export const updateRoutersFailure = error => ({
  type: types.UPDATE_ROUTERS_FAILURE,
  payload: error,
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

export const updateIFsRequest = () => ({
  type: types.UPDATE_IFS_REQUEST,
});

export const updateIFssuccess = () => ({
  type: types.UPDATE_IFS_SUCCESS,
});

export const updateIFsFailure = error => ({
  type: types.UPDATE_IFS_FAILURE,
  payload: error,
});
