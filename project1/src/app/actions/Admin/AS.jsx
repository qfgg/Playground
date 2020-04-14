import * as types from '../../constants/Admin/AS/ActionTypes';

export const sort = item => ({
  type: types.AS_SORT,
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

export const getASRequest = () => ({
  type: types.GET_AS_REQUEST,
});

export const getASSuccess = page => ({
  type: types.GET_AS_SUCCESS,
  payload: page,
});

export const getASFailure = page => ({
  type: types.GET_AS_FAILURE,
  payload: page,
});

export const delASRequest = () => ({
  type: types.DEL_AS_REQUEST,
});

export const delASSuccess = () => ({
  type: types.DEL_AS_SUCCESS,
});

export const delASFailure = ({ error } = {}) => ({
  type: types.DEL_AS_FAILURE,
  payload: { error }
});

export const modASRequest = () => ({
  type: types.MOD_AS_REQUEST,
});

export const modASSuccess = (item, flag) => ({
  type: types.MOD_AS_SUCCESS,
  payload: { item, flag },
});

export const modASFailure = ({ error } = {}) => ({
  type: types.MOD_AS_FAILURE,
  payload: { error }
});

export const addASRequest = () => ({
  type: types.ADD_AS_REQUEST,
});

export const addASSuccess = flag => ({
  type: types.ADD_AS_SUCCESS,
  payload: flag,
});

export const addASFailure = ({ error } = {}) => ({
  type: types.ADD_AS_FAILURE,
  payload: { error }
});

export const checkASRequest = () => ({
  type: types.CHECK_AS_REQUEST,
});

export const checkASSuccess = isDup => ({
  type: types.CHECK_AS_SUCCESS,
  payload: isDup,
});

export const checkASFailure = ({ error } = {}) => ({
  type: types.CHECK_AS_FAILURE,
  payload: { error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});

export const clearASCheck = () => ({
  type: types.CLEAR_AS_CHECK,
});
