import * as types from '../../constants/Dashboard/Internal/ActionTypes';


export const setDomain = item => ({
  type: types.SET_DOMAIN,
  payload: item
});

export const setDataType = item => ({
  type: types.SET_DATATYPE,
  payload: item
});

export const setTop = top => ({
  type: types.SET_TOP,
  payload: top
});

export const setShowingDomain = res => ({
  type: types.SET_SHOWING_DOMAIN,
  payload: res
});

export const saveTmpFilterRequest = () => ({
  type: types.SAVE_TMP_FILTER_REQUEST,
});

export const saveTmpFilterSuccess = () => ({
  type: types.SAVE_TMP_FILTER_SUCCESS,
});

export const saveTmpFilterFailure = error => ({
  type: types.SAVE_TMP_FILTER_FAILURE,
  payload: error
});
