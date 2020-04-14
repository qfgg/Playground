import * as types from '../../constants/App/ActionTypes';


export const setSearchKeyword = word => ({
  type: types.SET_SEARCH_KEYWORD,
  payload: word,
});

export const showSubMenu = idx => ({
  type: types.SHOW_SUBMENU,
  payload: idx,
});

export const setUserInfo = user => ({
  type: types.SET_USER_INFO,
  payload: user,
});

export const getMyMenuRequest = () => ({
  type: types.GET_MYMENU_REQUEST
});

export const getMyMenuSuccess = res => ({
  type: types.GET_MYMENU_SUCCESS,
  payload: res
});

export const getMyMenuFailure = error => ({
  type: types.GET_MYMENU_FAILURE,
  payload: error
});
