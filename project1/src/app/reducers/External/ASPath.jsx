import * as types from '../../constants/External/ASPath/ActionTypes';


const defaultState = {
  suggestions: [],
  getSuggestStatus: {},
  searchPathStatus: {},
  getRouterStatus: {},
  chart: null,
  basicInfo: null
};

export const externalASPathReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.GET_SUGGEST_REQUEST:
    return {
      ...state,
      getSuggestStatus: {
        ...state.getSuggestStatus,
        isFetching: true,
        error: ''
      },
      suggestions: []
    };

  case types.GET_SUGGEST_SUCCESS:
    return {
      ...state,
      getSuggestStatus: {
        ...state.getSuggestStatus,
        isFetching: false,
      },
      suggestions: payload
    };

  case types.GET_SUGGEST_FAILURE:
    return {
      ...state,
      getSuggestStatus: {
        ...state.getSuggestStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.SEARCH_PATH_REQUEST:
    return {
      ...state,
      searchPathStatus: {
        ...state.searchPathStatus,
        isFetching: true,
        error: '',
        res: null
      }
    };

  case types.SEARCH_PATH_SUCCESS:
    return {
      ...state,
      searchPathStatus: {
        ...state.searchPathStatus,
        isFetching: false,
        res: payload
      },
    };

  case types.SEARCH_PATH_FAILURE:
    return {
      ...state,
      searchPathStatus: {
        ...state.searchPathStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_ROUTER_REQUEST:
    return {
      ...state,
      getRouterStatus: {
        ...state.getRouterStatus,
        isFetching: true,
        error: '',
        res: null
      }
    };

  case types.GET_ROUTER_SUCCESS:
    return {
      ...state,
      getRouterStatus: {
        ...state.getRouterStatus,
        isFetching: false,
        res: payload ? payload.filter(item => item.name.toLowerCase() !== 'unknown') : []
      },
    };

  case types.GET_ROUTER_FAILURE:
    return {
      ...state,
      getRouterStatus: {
        ...state.getRouterStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.GET_BASIC_REQUEST:
    return {
      ...state,
      basicInfo: {
        isFetching: true,
        error: '',
        res: null
      }
    };

  case types.GET_BASIC_SUCCESS:
    return {
      ...state,
      basicInfo: {
        ...state.basicInfo,
        isFetching: false,
        res: payload
      },
    };

  case types.GET_BASIC_FAILURE:
    return {
      ...state,
      basicInfo: {
        ...state.basicInfo,
        isFetching: false,
        error: payload
      }
    };

  case types.STORE_CHART:
    return {
      ...state,
      chart: payload
    };

  case types.CLEAR_ROUTER_CHART:
    return {
      ...state,
      chart: null,
      getRouterStatus: {
        res: null
      }
    };

  default: return state;
  }
};
