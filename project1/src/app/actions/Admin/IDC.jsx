import * as types from '../../constants/Admin/IDC/ActionTypes';


export const sort = item => ({
  type: types.IDC_SORT,
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

export const getIdcRequest = () => ({
  type: types.GET_IDC_REQUEST,
});

export const getIdcSuccess = page => ({
  type: types.GET_IDC_SUCCESS,
  payload: page,
});

export const getIdcFailure = page => ({
  type: types.GET_IDC_FAILURE,
  payload: page,
});

export const delIdcRequest = () => ({
  type: types.DEL_IDC_REQUEST,
});

export const delIdcSuccess = () => ({
  type: types.DEL_IDC_SUCCESS,
});

export const delIdcFailure = ({ error } = {}) => ({
  type: types.DEL_IDC_FAILURE,
  payload: { error }
});

export const modIdcRequest = () => ({
  type: types.MOD_IDC_REQUEST,
});

export const modIdcSuccess = item => ({
  type: types.MOD_IDC_SUCCESS,
  payload: item,
});

export const modIdcFailure = ({ error } = {}) => ({
  type: types.MOD_IDC_FAILURE,
  payload: { error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});
