import * as types from '../../constants/Reports/Misconfiguration/ActionTypes';


const defaultState = {
  routerList: {},
  ifList: {}
};


export const reportsMisconfigReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.INIT_ROUTER_REQUEST:
    return {
      ...state,
      routerList: {
        ...state.routerList,
        [payload]: {
          ...state.routerList[payload],
          isFetching: true,
          error: ''
        }
      }
    };

  case types.INIT_ROUTER_SUCCESS:
    return {
      ...state,
      routerList: {
        ...state.routerList,
        [payload.page]: {
          ...state.routerList[payload.page],
          res: payload && payload.res ? payload.res.data || [] : [],
          isFetching: false,
        },
        total: payload && payload.res && payload.res.headers ?
            payload.res.headers['x-total-count'] : 0,
      }
    };

  case types.INIT_ROUTER_FAILURE:
    return {
      ...state,
      routerList: {
        ...state.routerList,
        [payload.page]: {
          ...state.routerList[payload.page],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.GET_IF_REQUEST:
    return {
      ...state,
      ifList: {
        ...state.ifList,
        [payload]: {
          res: null,
          error: ''
        },
        isFetching: true,
      }
    };

  case types.GET_IF_SUCCESS:
    return {
      ...state,
      ifList: {
        ...state.ifList,
        [payload.routerNo]: {
          ...state.ifList[payload.routerNo],
          res: payload.res || [],
        },
        isFetching: false,
      }
    };

  case types.GET_IF_FAILURE:
    return {
      ...state,
      ifList: {
        ...state.ifList,
        [payload.routerNo]: {
          ...state.ifList[payload.routerNo],
          error: payload.error
        },
        isFetching: false,
      }
    };

  default: return state;
  }
};
