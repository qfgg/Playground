import * as types from '../../constants/Dashboard/Internal/ActionTypes';


const defaultState = {
  domain: {
    text: 'ESM',
    value: 'esm'
  },
  dataType: {
    text: 'Traffic',
    value: 'traffic'
  },
  top: 10,
  showingDomain: {},
  saveTmpFilterStatus: {}
};

export const internalDashboardReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_DOMAIN:
    return {
      ...state,
      domain: payload
    };

  case types.SET_DATATYPE:
    return {
      ...state,
      dataType: payload
    };

  case types.SET_TOP:
    return {
      ...state,
      top: payload
    };

  case types.SET_SHOWING_DOMAIN:
    return {
      ...state,
      showingDomain: payload
    };

  case types.SAVE_TMP_FILTER_REQUEST:
    return {
      ...state,
      saveTmpFilterStatus: {
        isSaving: true,
        error: ''
      }
    };

  case types.SAVE_TMP_FILTER_SUCCESS:
    return {
      ...state,
      saveTmpFilterStatus: {
        ...state.saveTmpFilterStatus,
        isSaving: false,
      }
    };

  case types.SAVE_TMP_FILTER_FAILURE:
    return {
      ...state,
      saveTmpFilterStatus: {
        ...state.saveTmpFilterStatus,
        isSaving: false,
        error: payload
      }
    };

  default: return state;
  }
};
