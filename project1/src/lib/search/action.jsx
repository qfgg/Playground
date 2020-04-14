import * as types from './ActionTypes';

export const searchRequest = ({ type, side } = {}) => ({
  type: types.SEARCH_REQUEST,
  payload: { type, side },
});

export const searchSuccess = ({ res, type, side } = {}) => ({
  type: types.SEARCH_SUCCESS,
  payload: { res, type, side },
});

export const searchFailure = ({ type, error, side } = {}) => ({
  type: types.SEARCH_FAILURE,
  payload: { type, error, side },
});

export const getTrfRequest = ({ side, type, id }) => ({
  type: types.GET_TRF_REQUEST,
  payload: { side, type, id }
});

export const getTrfSuccess = ({ res, side, type, id }) => ({
  type: types.GET_TRF_SUCCESS,
  payload: { res, side, type, id }
});

export const getTrfFailure = ({ error, side, type, id }) => ({
  type: types.GET_TRF_FAILURE,
  payload: { error, side, type, id }
});

export const setCurTab = ({ item, type }={}) => ({
  type: types.SET_CUR_TAB,
  payload: { item, type },
});

export const clearSearch = (side) => ({
  type: types.CLEAR_SEARCH,
  payload: side
});

export const setLastKeyword = (item) => ({
  type: types.SET_LAST_KEYWORD,
  payload: item
});