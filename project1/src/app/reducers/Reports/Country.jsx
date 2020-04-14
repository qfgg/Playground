import * as types from '../../constants/Reports/Country/ActionTypes';


const defaultState = {
  list: {},
  listStatus: {},
  month: [],
  monthStatus: {},
  wholeList: []
};


export const reportsCountryReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.INIT_COUNTRY_REQUEST:
    return {
      ...state,
      listStatus: {
        isFetching: true,
        error: ''
      }
    };

  case types.INIT_COUNTRY_SUCCESS:
    return {
      ...state,
      list: {
        ...state.list,
        [payload.page]: payload && payload.res ? payload.res.data || [] : [],
      },
      listStatus: {
        isFetching: false,
        total: payload && payload.res && payload.res.headers ?
          payload.res.headers['x-total-count'] : 0,
      }
    };

  case types.INIT_COUNTRY_FAILURE:
    return {
      ...state,
      listStatus: {
        isFetching: false,
        error: payload.error
      }
    };

  case types.INIT_MONTH_REQUEST:
    return {
      ...state,
      monthStatus: {
        isFetching: true,
        error: ''
      }
    };

  case types.INIT_MONTH_SUCCESS:
    return {
      ...state,
      month: payload,
      monthStatus: {
        isFetching: false
      }
    };

  case types.INIT_MONTH_FAILURE:
    return {
      ...state,
      monthStatus: {
        isFetching: false,
        error: payload
      }
    };

  case types.GET_COUNTRY_SUCCESS:
    return {
      ...state,
      wholeList: payload
    };

  default: return state;
  }
};
