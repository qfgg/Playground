import * as types from '../../constants/Detail/External/ActionTypes';


const defaultState = {
  detailType: 'AS',
  relationType: 'All',
  searchKW: '',
  routerSearchKW: '',
  routerSearchID: '',
  suggestResList: {},
  searchResList: {},
  relationNmList: {
    AS: {},
    Interface: {},
    Router: {},
    Carrier: {},
    ESM: {},
    Line: {},
    Country: {},
    PoP: {}
  },
  searchQuery: {},
  interfaceList: {},
  saveTmpFilterStatus: {},
  latencyList: {},
  latencyChart: {}
};

export const externalDetailReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_DETAIL_TYPE:
    return {
      ...state,
      detailType: payload,
      relationType: 'All',
      searchKW: '',
      routerSearchKW: '',
      suggestResList: {},
      searchResList: {},
      relationNmList: {
        AS: {},
        Interface: {},
        Router: {},
        Carrier: {},
        ESM: {},
        Line: {},
        Country: {},
        PoP: {}
      },
      searchQuery: {},
      interfaceList: {},
    };

  case types.SET_RELATION_TYPE:
    return {
      ...state,
      relationType: payload
    };

  case types.SET_SEARCH_VALUE:
    return {
      ...state,
      searchKW: payload
    };

  case types.SET_ROUTER_SEARCH_VALUE:
    return {
      ...state,
      routerSearchKW: payload
    };

  case types.SET_ROUTER_SEARCH_ID:
    return {
      ...state,
      routerSearchID: payload
    };

  case types.GET_SUGGEST_REQUEST:
    return {
      ...state,
      suggestResList: {
        ...state.suggestResList,
        [payload]: {
          ...state.suggestResList[payload],
          isFetching: true,
          suggestions: [],
          error: ''
        }
      }
    };

  case types.GET_SUGGEST_SUCCESS:
    return {
      ...state,
      suggestResList: {
        ...state.suggestResList,
        [payload.type]: {
          ...state.suggestResList[payload.type],
          isFetching: false,
          suggestions: payload.res
        }
      }
    };

  case types.GET_SUGGEST_FAILURE:
    return {
      ...state,
      suggestResList: {
        ...state.suggestResList,
        [payload.type]: {
          ...state.suggestResList[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.CLEAR_SUGGEST:
    return {
      ...state,
      suggestResList: {}
    };

  case types.SEARCH_DETAIL_REQUEST:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload]: {
          ...state.searchResList[payload],
          isFetching: true,
          res: {},
          error: ''
        }
      }
    };

  case types.SEARCH_DETAIL_SUCCESS:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload.type]: {
          ...state.searchResList[payload.type],
          isFetching: false,
          res: payload.res
        }
      }
    };

  case types.SEARCH_DETAIL_FAILURE:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload.type]: {
          ...state.searchResList[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.GET_RELATION_NAME_LIST_REQUEST:
    return {
      ...state,
      relationNmList: {
        ...state.relationNmList,
        [payload.type]: {
          ...state.relationNmList[payload.type],
          isGettingNmList: true,
          error: ''
        }
      }
    };

  case types.GET_RELATION_NAME_LIST_SUCCESS:
    return {
      ...state,
      relationNmList: {
        ...state.relationNmList,
        [payload.type]: {
          ...state.relationNmList[payload.type],
          isGettingNmList: false,
          arrOfField: payload.res
        }
      }
    };

  case types.GET_RELATION_NAME_LIST_FAILURE:
    return {
      ...state,
      relationNmList: {
        ...state.relationNmList,
        [payload.type]: {
          ...state.relationNmList[payload.type],
          isGettingNmList: false,
          error: payload.error
        }
      }
    };

  case types.SET_INPUT_VALUE:
    return {
      ...state,
      searchKW: payload ? payload.fullName : '',
      routerSearchKW: payload ? payload.hostNm : '',
      routerSearchID: payload ? payload.routerNo : '',
    };

  case types.GET_INTERFACE_BY_ROUTER_REQUEST:
    return {
      ...state,
      interfaceList: {
        ...state.interfaceList,
        [payload.type]: {
          ...state.interfaceList[payload.type],
          isFetching: true,
          error: '',
        }
      }
    };

  case types.GET_INTERFACE_BY_ROUTER_SUCCESS:
    return {
      ...state,
      interfaceList: {
        ...state.interfaceList,
        [payload.type]: {
          ...state.interfaceList[payload.type],
          isFetching: false,
          res: payload.res,
          error: '',
        }
      }
    };

  case types.GET_INTERFACE_BY_ROUTER_FAILURE:
    return {
      ...state,
      interfaceList: {
        ...state.interfaceList,
        [payload.type]: {
          ...state.interfaceList[payload.type],
          isFetching: false,
          error: payload.error,
        }
      }
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

  case types.GET_LATENCY_DETAIL_REQUEST:
    return {
      ...state,
      latencyList: {
        [payload]: {
          isFetching: true,
          error: ''
        }
      }
    };

  case types.GET_LATENCY_DETAIL_SUCCESS:
    return {
      ...state,
      latencyList: {
        ...state.latencyList,
        [payload.domain]: {
          res: payload.res,
          isFetching: false,
        }
      }
    };

  case types.GET_LATENCY_DETAIL_FAILURE:
    return {
      ...state,
      latencyList: {
        ...state.latencyList,
        [payload.domain]: {
          isFetching: false,
          error: payload
        }
      }
    };

  case types.LATENCY_CHART_REQUEST:
    return {
      ...state,
      latencyChart: {
        ...state.latencyChart,
        [`${payload.country}_${payload.as}`]: {
          isFetching: true,
          error: ''
        }
      }
    };

  case types.LATENCY_CHART_SUCCESS:
    return {
      ...state,
      latencyChart: {
        ...state.latencyChart,
        [`${payload.country}_${payload.as}`]: {
          res: payload.res,
          isFetching: false,
        }
      }
    };

  case types.LATENCY_CHART_FAILURE:
    return {
      ...state,
      latencyChart: {
        ...state.latencyChart,
        [`${payload.country}_${payload.as}`]: {
          isFetching: false,
          error: payload.error
        }
      }
    };

  default: return state;
  }
};
