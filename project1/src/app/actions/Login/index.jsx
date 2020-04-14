import * as types from '../../constants/Login/ActionTypes';

export const userLoginRequest = () => ({
  type: types.USER_LOGIN_REQUEST,
});

export const userLoginSuccess = res => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: res
});

export const userLoginFailure = error => ({
  type: types.USER_LOGIN_FAILURE,
  payload: error,
});
