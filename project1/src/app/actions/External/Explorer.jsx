import * as types from '../../constants/External/Explorer/ActionTypes';


export const addSelItem = ({ type, item } = {}) => ({
  type: types.ADD_SEL_ITEM,
  payload: { type, item },
});

export const removeSelItem = ({ type, item } = {}) => ({
  type: types.REMOVE_SEL_ITEM,
  payload: { type, item },
});

export const clearSel = type => ({
  type: types.CLEAR_SEL,
  payload: type
});

export const addSelIfrouter = item => ({
  type: types.ADD_SEL_IFROUTER,
  payload: item,
});

export const removeSelIfrouter = item => ({
  type: types.REMOVE_SEL_IFROUTER,
  payload: item,
});

export const addAllIF = () => ({
  type: types.ADD_ALL_IF
});

export const clearAllIF = () => ({
  type: types.CLEAR_ALL_IF
});

export const addRouterIF = routerNo => ({
  type: types.ADD_ROUTER_IF,
  payload: routerNo
});

export const removeRouterIF = routerNo => ({
  type: types.REMOVE_ROUTER_IF,
  payload: routerNo
});

export const clearRouterIF = () => ({
  type: types.CLEAR_ROUTER_IF
});

export const toggleSplit = ({ type, item } = {}) => ({
  type: types.TOGGLE_SPLIT,
  payload: { type, item }
});

export const searchListRequest = type => ({
  type: types.SEARCH_LIST_REQUEST,
  payload: type,
});

export const searchListSuccess = ({ type, res, page } = {}) => ({
  type: types.SEARCH_LIST_SUCCESS,
  payload: { type, res, page },
});

export const searchListFailure = ({ type, error } = {}) => ({
  type: types.SEARCH_LIST_FAILURE,
  payload: { type, error },
});

export const initListRequest = type => ({
  type: types.INIT_LIST_REQUEST,
  payload: type,
});

export const initListSuccess = ({ type, res, page } = {}) => ({
  type: types.INIT_LIST_SUCCESS,
  payload: { type, res, page },
});

export const initListFailure = ({ type, error } = {}) => ({
  type: types.INIT_LIST_FAILURE,
  payload: { type, error },
});

export const toggleSeparate = type => ({
  type: types.TOGGLE_SEPARATE,
  payload: type,
});

export const checkRadio = ({ type, item } = {}) => ({
  type: types.CHECK_RADIO,
  payload: { type, item },
});

export const select = ({ type, item } = {}) => ({
  type: types.SELECT,
  payload: { type, item },
});

export const setTop = ({ limit, order } = {}) => ({
  type: types.SET_TOP,
  payload: { limit, order },
});

export const setPeriod = ({ start, end } = {}) => ({
  type: types.SET_PERIOD,
  payload: { start, end },
});

export const initItemRequest = type => ({
  type: types.INIT_ITEM_REQUEST,
  payload: type,
});

export const initItemSuccess = ({ type, res }) => ({
  type: types.INIT_ITEM_SUCCESS,
  payload: { type, res },
});

export const initItemFailure = ({ type, error }) => ({
  type: types.INIT_ITEM_FAILURE,
  payload: { type, error },
});

export const saveItemRequest = () => ({
  type: types.SAVE_ITEM_REQUEST,
});

export const saveItemSuccess = ({ type, item, res }) => ({
  type: types.SAVE_ITEM_SUCCESS,
  payload: { type, item, res },
});

export const saveItemFailure = error => ({
  type: types.SAVE_ITEM_FAILURE,
  payload: error,
});

export const delItemRequest = () => ({
  type: types.DEL_ITEM_REQUEST,
});

export const delItemSuccess = ({ type, item }) => ({
  type: types.DEL_ITEM_SUCCESS,
  payload: { type, item },
});

export const delItemFailure = error => ({
  type: types.DEL_ITEM_FAILURE,
  payload: error,
});

export const checkSubmitNmRequest = () => ({
  type: types.CHECK_SUBMIT_REQUEST,
});

export const checkSubmitNmSuccess = res => ({
  type: types.CHECK_SUBMIT_SUCCESS,
  payload: res,
});

export const checkSubmitNmFailure = error => ({
  type: types.CHECK_SUBMIT_FAILURE,
  payload: error,
});

export const updateNameRequest = () => ({
  type: types.UPDATE_NAME_REQUEST,
});

export const updateNameSuccess = () => ({
  type: types.UPDATE_NAME_SUCCESS,
});

export const updateNameFailure = error => ({
  type: types.UPDATE_NAME_FAILURE,
  payload: error,
});

export const fetchResultRequest = () => ({
  type: types.FETCH_RESULT_REQUEST,
});

export const fetchResultSuccess = res => ({
  type: types.FETCH_RESULT_SUCCESS,
  payload: res,
});

export const fetchResultFailure = error => ({
  type: types.FETCH_RESULT_FAILURE,
  payload: error,
});

export const getJobRequest = () => ({
  type: types.GET_JOB_REQUEST,
});

export const getJobSuccess = res => ({
  type: types.GET_JOB_SUCCESS,
  payload: res,
});

export const getJobFailure = error => ({
  type: types.GET_JOB_FAILURE,
  payload: error,
});

export const setSearchQuery = query => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
});

export const getFilterRequest = () => ({
  type: types.GET_FILTER_REQUEST,
});

export const getFilterSuccess = res => ({
  type: types.GET_FILTER_SUCCESS,
  payload: res,
});

export const getFilterFailure = error => ({
  type: types.GET_FILTER_FAILURE,
  payload: error,
});

export const getFlowRequest = () => ({
  type: types.GET_FLOW_REQUEST,
});

export const getFlowSuccess = res => ({
  type: types.GET_FLOW_SUCCESS,
  payload: res,
});

export const getFlowFailure = error => ({
  type: types.GET_FLOW_FAILURE,
  payload: error,
});

export const restoreState = filter => ({
  type: types.RESTORE_STATE,
  payload: filter
});

export const getAnaRoutersRequest = () => ({
  type: types.GET_ANAROUTERS_REQUEST,
});

export const getAnaRoutersSuccess = res => ({
  type: types.GET_ANAROUTERS_SUCCESS,
  payload: res,
});

export const getAnaRoutersFailure = error => ({
  type: types.GET_ANAROUTERS_FAILURE,
  payload: error,
});

export const getAnaRequest = () => ({
  type: types.GET_ANA_REQUEST,
});

export const getAnaSuccess = res => ({
  type: types.GET_ANA_SUCCESS,
  payload: res,
});

export const getAnaFailure = error => ({
  type: types.GET_ANA_FAILURE,
  payload: error,
});
