import * as types from '../../constants/CompareDashboard/External/ActionTypes';

export const setData = item => ({
  type: types.SET_DATA,
  payload: item,
});

export const setInterval = item => ({
  type: types.SET_INTERVAL,
  payload: item,
});

export const setAvg = item => ({
  type: types.SET_AVG,
  payload: item,
});

export const setTop = item => ({
  type: types.SET_TOP,
  payload: item,
});

export const setMethod = item => ({
  type: types.SET_METHOD,
  payload: item,
});

