import * as types from './ActionTypes';

export const chartReqCommonRequest = (type) => ({
  type: types.CHART_REQ_COMMON_REQUEST,
  payload: type,
});

export const chartReqCommonSuccess = ({ res, type, compareTime } = {}) => ({
  type: types.CHART_REQ_COMMON_SUCCESS,
  payload: { res, type, compareTime },
});

export const chartReqCommonFailure = ({ type, error } = {}) => ({
  type: types.CHART_REQ_COMMON_FAILURE,
  payload: { type, error },
});

export const clearChart = () => ({
  type: types.CLEAR_CHART
});
