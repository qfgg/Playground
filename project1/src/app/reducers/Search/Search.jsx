import * as types from '../../../lib/search/ActionTypes';


const defaultState = {
  searchResultStatus: {},
  trfStatus: {},
  curTab: {
    External: 'All',
    Internal: 'All'
  },
  lastKeyword: ''
};

const getInit = (state, payload) => {
  if (payload.side) {
    return {
      [payload.side]: {
        ...state.searchResultStatus[payload.side],
        [payload.type]: {
          isFetching: true,
          error: '',
          res: null
        }
      }
    };
  }
  return {
    External: {
      ...state.searchResultStatus.External,
      [payload.type]: {
        isFetching: true,
        error: '',
        res: null
      }
    },
    Internal: {
      ...state.searchResultStatus.Internal,
      [payload.type]: {
        isFetching: true,
        error: '',
        res: null
      }
    }
  };
};

const getSucc = (state, payload) => {
  if (payload.side) {
    return {
      [payload.side]: {
        ...state.searchResultStatus[payload.side],
        [payload.type]: {
          ...state.searchResultStatus[payload.side][payload.type],
          isFetching: false,
          res: payload.res.data
        }
      }
    };
  }
  return {
    External: {
      ...state.searchResultStatus.External,
      [payload.type]: {
        ...state.searchResultStatus.External[payload.type],
        isFetching: false,
        res: payload.res.data
      }
    },
    Internal: {
      ...state.searchResultStatus.Internal,
      [payload.type]: {
        ...state.searchResultStatus.Internal[payload.type],
        isFetching: false,
        res: payload.res.data
      }
    }
  };
};

const getFail = (state, payload) => {
  if (payload.side) {
    return {
      [payload.side]: {
        ...state.searchResultStatus[payload.side],
        [payload.type]: {
          ...state.searchResultStatus[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };
  }
  return {
    External: {
      ...state.searchResultStatus.External,
      [payload.type]: {
        ...state.searchResultStatus.External[payload.type],
        isFetching: false,
        error: payload.error
      }
    },
    Internal: {
      ...state.searchResultStatus.Internal,
      [payload.type]: {
        ...state.searchResultStatus.Internal[payload.type],
        isFetching: false,
        error: payload.error
      }
    }
  };
};

const clearStatus = (state, payload) => {
  if (payload) {
    return {
      ...state.searchResultStatus,
      [payload]: {}
    };
  }
  return {
    External: {},
    Internal: {}
  };
};

export const searchReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SEARCH_REQUEST:
    return {
      ...state,
      searchResultStatus: {
        ...state.searchResultStatus,
        ...getInit(state, payload)
      }
    };

  case types.SEARCH_SUCCESS:
    return {
      ...state,
      searchResultStatus: {
        ...state.searchResultStatus,
        ...getSucc(state, payload)
      }
    };

  case types.SEARCH_FAILURE:
    return {
      ...state,
      searchResultStatus: {
        ...state.searchResultStatus,
        ...getFail(state, payload)
      }
    };

  case types.CLEAR_SEARCH:
    return {
      ...state,
      searchResultStatus: clearStatus(state, payload),
    };

  case types.GET_TRF_REQUEST:
    return {
      ...state,
      trfStatus: {
        ...state.trfStatus,
        [payload.side]: {
          ...state.trfStatus[payload.side],
          [payload.type]: state.trfStatus[payload.side] ? {
            ...state.trfStatus[payload.side][payload.type],
            [payload.id]: {
              isFetching: true,
              error: '',
              res: null
            }
          } : {
            [payload.id]: {
              isFetching: true,
              error: '',
              res: null
            }
          }
        }
      }
    };

  case types.GET_TRF_SUCCESS:
    return {
      ...state,
      trfStatus: {
        ...state.trfStatus,
        [payload.side]: {
          ...state.trfStatus[payload.side],
          [payload.type]: {
            ...state.trfStatus[payload.side][payload.type],
            [payload.id]: {
              isFetching: false,
              res: payload.res
            }
          }
        }
      }
    };

  case types.GET_TRF_FAILURE:
    return {
      ...state,
      trfStatus: {
        ...state.trfStatus,
        [payload.side]: {
          ...state.trfStatus[payload.side],
          [payload.type]: {
            ...state.trfStatus[payload.side][payload.type],
            [payload.id]: {
              isFetching: false,
              error: payload.error,
            }
          }
        }
      }
    };

  case types.SET_CUR_TAB:
    return {
      ...state,
      curTab: {
        ...state.curTab,
        [payload.type]: payload.item
      }
    };

  case types.SET_LAST_KEYWORD:
    return {
      ...state,
      lastKeyword: payload
    };

  default: return state;
  }
};
