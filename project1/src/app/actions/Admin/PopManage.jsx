import * as types from '../../constants/Admin/PopManage/ActionTypes';

export const sort = item => ({
  type: types.POP_SORT,
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

export const getPopRequest = () => ({
  type: types.GET_POP_REQUEST,
});

export const getPopSuccess = page => ({
  type: types.GET_POP_SUCCESS,
  payload: page,
});

export const getPopFailure = page => ({
  type: types.GET_POP_FAILURE,
  payload: page,
});

export const delPopRequest = () => ({
  type: types.DEL_POP_REQUEST,
});

export const delPopSuccess = () => ({
  type: types.DEL_POP_SUCCESS,
});

export const delPopFailure = ({ error } = {}) => ({
  type: types.DEL_POP_FAILURE,
  payload: { error }
});

export const modPopRequest = () => ({
  type: types.MOD_POP_REQUEST,
});

export const modPopSuccess = item => ({
  type: types.MOD_POP_SUCCESS,
  payload: item,
});

export const modPopFailure = ({ error } = {}) => ({
  type: types.MOD_POP_FAILURE,
  payload: { error }
});

export const addPopRequest = () => ({
  type: types.ADD_POP_REQUEST,
});

export const addPopSuccess = item => ({
  type: types.ADD_POP_SUCCESS,
  payload: item,
});

export const addPopFailure = ({ error } = {}) => ({
  type: types.ADD_POP_FAILURE,
  payload: { error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});
