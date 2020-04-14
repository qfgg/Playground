import * as types from '../../constants/Admin/IspManage/ActionTypes';


export const sort = item => ({
  type: types.ISP_SORT,
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

export const getIspRequest = () => ({
  type: types.GET_ISP_REQUEST,
});

export const getIspSuccess = page => ({
  type: types.GET_ISP_SUCCESS,
  payload: page,
});

export const getIspFailure = page => ({
  type: types.GET_ISP_FAILURE,
  payload: page,
});

export const delIspRequest = () => ({
  type: types.DEL_ISP_REQUEST,
});

export const delIspSuccess = () => ({
  type: types.DEL_ISP_SUCCESS,
});

export const delIspFailure = ({ error } = {}) => ({
  type: types.DEL_ISP_FAILURE,
  payload: { error }
});

export const modIspRequest = () => ({
  type: types.MOD_ISP_REQUEST,
});

export const modIspSuccess = item => ({
  type: types.MOD_ISP_SUCCESS,
  payload: item,
});

export const modIspFailure = ({ error } = {}) => ({
  type: types.MOD_ISP_FAILURE,
  payload: { error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});
