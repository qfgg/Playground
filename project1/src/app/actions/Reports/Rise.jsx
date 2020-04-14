import * as types from '../../constants/Reports/Rise/ActionTypes';


export const setDomain = item => ({
  type: types.SET_DOMAIN,
  payload: item
});

export const setPeriod = ({ start, end } = {}) => ({
  type: types.SET_PERIOD,
  payload: { start, end }
});

export const setCurPage = target => ({
  type: types.SET_CUR_PAGE,
  payload: target
});

export const initRise = page => ({
  type: types.INIT_RISE,
  payload: page
});
