import moment from 'moment';
import * as types from '../../constants/Reports/Rise/ActionTypes';
import { ignoreTime } from '../../helper';


const defaultState = {
  domain: {
    text: 'All',
    value: 'all'
  },
  period: {
    start: ignoreTime(moment().subtract(1, 'day')),
    end: ignoreTime(moment())
  },
  initRise: {},
  curPage: 1,
  totalCnt: 0,
  fetchResultStatus: {},
};


export const reportsRiseReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_DOMAIN:
    return {
      ...state,
      domain: payload
    };

  case types.SET_PERIOD:
    return {
      ...state,
      period: {
        start: payload.start ? payload.start : state.period.start,
        end: payload.end ? payload.end : state.period.end
      }
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.INIT_RISE:
    return {
      ...state,
      totalCnt: 3,
      curPage: 1,
    };

  default: return state;
  }
};
