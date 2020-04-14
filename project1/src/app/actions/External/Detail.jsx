import * as types from '../../constants/Detail/External/ActionTypes';

export const setDetailType = detailType => ({
  type: types.SET_DETAIL_TYPE,
  payload: detailType
});

export const setRelationType = relationType => ({
  type: types.SET_RELATION_TYPE,
  payload: relationType
});

export const setSearchValue = val => ({
  type: types.SET_SEARCH_VALUE,
  payload: val
});

export const setRouterSearchValue = val => ({
  type: types.SET_ROUTER_SEARCH_VALUE,
  payload: val
});

export const setRouterSearchID = val => ({
  type: types.SET_ROUTER_SEARCH_ID,
  payload: val
});

export const getSuggestRequest = type => ({
  type: types.GET_SUGGEST_REQUEST,
  payload: type
});

export const getSuggestSuccess = (type, res) => ({
  type: types.GET_SUGGEST_SUCCESS,
  payload: { type, res }
});

export const getSuggestFailure = (type, error) => ({
  type: types.GET_SUGGEST_FAILURE,
  payload: { type, error }
});

export const clearSuggest = () => ({
  type: types.CLEAR_SUGGEST
});

export const searchDetailRequest = type => ({
  type: types.SEARCH_DETAIL_REQUEST,
  payload: type
});

export const searchDetailSuccess = (type, res) => ({
  type: types.SEARCH_DETAIL_SUCCESS,
  payload: { type, res }
});

export const searchDetailFailure = (type, error) => ({
  type: types.SEARCH_DETAIL_FAILURE,
  payload: { type, error }
});

export const downloadXlsRequest = type => ({
  type: types.DOWNLOAD_XLS_REQUEST,
  payload: type
});

export const downloadXlsSuccess = (type, res) => ({
  type: types.DOWNLOAD_XLS_SUCCESS,
  payload: { type, res }
});

export const downloadXlsFailure = (type, error) => ({
  type: types.DOWNLOAD_XLS_FAILURE,
  payload: { type, error }
});

export const getRelationNmListRequest = type => ({
  type: types.GET_RELATION_NAME_LIST_REQUEST,
  payload: { type }
});

export const getRelationNmListSuccess = (type, res) => ({
  type: types.GET_RELATION_NAME_LIST_SUCCESS,
  payload: { type, res }
});

export const getRelationNmListFailure = (type, error) => ({
  type: types.GET_RELATION_NAME_LIST_FAILURE,
  payload: { type, error }
});

export const setInputValue = res => ({
  type: types.SET_INPUT_VALUE,
  payload: res
});

export const getInterfaceByRouterRequest = type => ({
  type: types.GET_INTERFACE_BY_ROUTER_REQUEST,
  payload: { type }
});

export const getInterfaceByRouterSuccess = (type, res) => ({
  type: types.GET_INTERFACE_BY_ROUTER_SUCCESS,
  payload: { type, res }
});

export const getInterfaceByRouterFailure = (type, error) => ({
  type: types.GET_INTERFACE_BY_ROUTER_FAILURE,
  payload: { type, error }
});

export const saveTmpFilterRequest = () => ({
  type: types.SAVE_TMP_FILTER_REQUEST,
});

export const saveTmpFilterSuccess = () => ({
  type: types.SAVE_TMP_FILTER_SUCCESS,
});

export const saveTmpFilterFailure = error => ({
  type: types.SAVE_TMP_FILTER_FAILURE,
  payload: error
});

export const getLatencyDetailRequest = domain => ({
  type: types.GET_LATENCY_DETAIL_REQUEST,
  payload: domain
});

export const getLatencyDetailSuccess = ({ domain, res } = {}) => ({
  type: types.GET_LATENCY_DETAIL_SUCCESS,
  payload: { domain, res }
});

export const getLatencyDetailFailure = ({ domain, error } = {}) => ({
  type: types.GET_LATENCY_DETAIL_FAILURE,
  payload: { domain, error }
});

export const latencyChartRequest = ({ country, as } = {}) => ({
  type: types.LATENCY_CHART_REQUEST,
  payload: { country, as }
});

export const latencyChartSuccess = ({ country, as, res } = {}) => ({
  type: types.LATENCY_CHART_SUCCESS,
  payload: { country, as, res }
});

export const latencyChartFailure = ({ country, as, error } = {}) => ({
  type: types.LATENCY_CHART_FAILURE,
  payload: { country, as, error }
});
