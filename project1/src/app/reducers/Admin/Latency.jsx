import * as types from '../../constants/Admin/Latency/ActionTypes';


const defaultState = {
  idcList: [],
  initIdcStatus: {},
  regionTree: {},
  regionTreeStatus: {},
  selLatencies: {},
  popList: [],
  initPopStatus: {},
  saveLatencyStatus: {},
};

export const latencyReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.GET_IDC_REQUEST:
    return {
      ...state,
      initIdcStatus: {
        ...state.initIdcStatus,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_IDC_SUCCESS:
    return {
      ...state,
      initIdcStatus: {
        ...state.initIdcStatus,
        isFetching: false,
        error: ''
      },
      idcList: payload ? payload.res.data : state.idcList,
    };

  case types.GET_IDC_FAILURE:
    return {
      ...state,
      initIdcStatus: {
        ...state.initIdcStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_REGION_TREE_REQUEST:
    return {
      ...state,
      regionTreeStatus: {
        ...state.regionTreeStatus,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_REGION_TREE_SUCCESS:
    return {
      ...state,
      regionTreeStatus: {
        ...state.regionTree,
        isFetching: false,
        error: ''
      },
      regionTree: payload || state.regionTree,
    };

  case types.GET_REGION_TREE_FAILURE:
    return {
      ...state,
      regionTreeStatus: {
        ...state.regionTreeStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_LATENCY_REQUEST:
    return {
      ...state,
      selLatencies: {
        ...state.selLatencies,
        [payload]: {
          isFetching: true,
          res: null,
          error: null
        }
      }
    };

  case types.GET_LATENCY_SUCCESS:
    return {
      ...state,
      selLatencies: {
        ...state.selLatencies,
        [payload.idcCode]: {
          isFetching: false,
          res: payload.res
        }
      }
    };

  case types.GET_LATENCY_FAILURE:
    return {
      ...state,
      selLatencies: {
        ...state.selLatencies,
        [payload.idcCode]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.GET_POP_REQUEST:
    return {
      ...state,
      initPopStatus: {
        ...state.initPopStatus,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_POP_SUCCESS:
    return {
      ...state,
      initPopStatus: {
        ...state.initPopStatus,
        isFetching: false
      },
      popList: payload ? payload.res.data : state.popList,
    };

  case types.GET_POP_FAILURE:
    return {
      ...state,
      initPopStatus: {
        ...state.initPopStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.SAVE_LATENCY_REQUEST:
    return {
      ...state,
      saveLatencyStatus: {
        ...state.saveLatencyStatus,
        isSaving: true,
        error: null
      }
    };

  case types.SAVE_LATENCY_SUCCESS:
    return {
      ...state,
      saveLatencyStatus: {
        ...state.saveLatencyStatus,
        isSaving: false,
        error: null
      }
    };

  case types.SAVE_LATENCY_FAILURE:
    return {
      ...state,
      saveLatencyStatus: {
        ...state.saveLatencyStatus,
        isSaving: false,
        error: payload
      }
    };

  default: return state;
  }
};
