import * as types from '../../constants/Reports/Country/ActionTypes';


export const initCountryRequest = page => ({
  type: types.INIT_COUNTRY_REQUEST,
  payload: page
});

export const initCountrySuccess = ({ res, page } = {}) => ({
  type: types.INIT_COUNTRY_SUCCESS,
  payload: { res, page }
});

export const initCountryFailure = ({ error, page } = {}) => ({
  type: types.INIT_COUNTRY_FAILURE,
  payload: { error, page }
});

export const initMonthRequest = () => ({
  type: types.INIT_MONTH_REQUEST,
});

export const initMonthSuccess = res => ({
  type: types.INIT_MONTH_SUCCESS,
  payload: res
});

export const initMonthFailure = error => ({
  type: types.INIT_MONTH_FAILURE,
  payload: error
});

export const getCountryRequest = () => ({
  type: types.GET_COUNTRY_REQUEST
});

export const getCountrySuccess = res => ({
  type: types.GET_COUNTRY_SUCCESS,
  payload: res
});

export const getCountryFailure = error => ({
  type: types.GET_COUNTRY_FAILURE,
  payload: error
});
