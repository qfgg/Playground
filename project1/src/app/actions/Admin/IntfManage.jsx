import * as types from '../../constants/Admin/IntfManage/ActionTypes';


export const sort = item => ({
  type: types.INTERFACE_SORT,
  payload: item,
});

export const updateItem = item => ({
  type: types.UPDATE_ITEM,
  payload: item,
});

export const confirmUpd = (intfNo, modItem) => ({
  type: types.CONFIRM_UPD,
  payload: { intfNo, modItem }
});

export const cancelUpd = item => ({
  type: types.CANCEL_UPD,
  payload: item,
});

export const setCurPage = target => ({
  type: types.SET_CUR_PAGE,
  payload: target,
});

export const getInterfaceRequest = () => ({
  type: types.GET_INTERFACE_REQUEST,
});

export const getInterfaceSuccess = page => ({
  type: types.GET_INTERFACE_SUCCESS,
  payload: page,
});

export const getInterfaceFailure = page => ({
  type: types.GET_INTERFACE_FAILURE,
  payload: page,
});
