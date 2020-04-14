import * as types from '../../constants/CompareDashboard/Internal/ActionTypes';


const defaultState = {
  activeData: {
    text: 'Traffic',
    value: 'traffic'
  },
  activeInterval: {
    text: '1Day',
    value: '1d'
  },
  activeAvg: {
    text: 'Avg',
    value: 'avg'
  },
  activeMethod: {
    text: 'Absolute',
    value: 'absolute'
  },
  top: 10,
  searchQuery: {},
};

export const internalCompareReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_DATA:
    return {
      ...state,
      activeData: payload
    };

  case types.SET_INTERVAL:
    return {
      ...state,
      activeInterval: payload
    };

  case types.SET_AVG:
    return {
      ...state,
      activeAvg: payload
    };

  case types.SET_TOP:
    return {
      ...state,
      top: payload
    };

  case types.SET_METHOD:
    return {
      ...state,
      activeMethod: payload
    };

  default: return state;
  }
};
