import * as types from '../../constants/Reports/Billing/ActionTypes';


export const setPeriod = ({ start, end } = {}) => ({
  type: types.SET_PERIOD,
  payload: { start, end }
});

export const setArea = item => ({
  type: types.SET_AREA,
  payload: item
});

export const addSelItem = ({ type, item } = {}) => ({
  type: types.ADD_SEL_ITEM,
  payload: { type, item }
});

export const removeSelItem = ({ type, item } = {}) => ({
  type: types.REMOVE_SEL_ITEM,
  payload: { type, item }
});

export const clearSel = type => ({
  type: types.CLEAR_SEL,
  payload: type
});

export const initListRequest = type => ({
  type: types.INIT_LIST_REQUEST,
  payload: type
});

export const initListSuccess = ({ type, res, page } = {}) => ({
  type: types.INIT_LIST_SUCCESS,
  payload: { type, res, page }
});

export const initListFailure = ({ type, error } = {}) => ({
  type: types.INIT_LIST_FAILURE,
  payload: { type, error }
});

export const searchListRequest = type => ({
  type: types.SEARCH_LIST_REQUEST,
  payload: type
});

export const searchListSuccess = ({ type, res, page } = {}) => ({
  type: types.SEARCH_LIST_SUCCESS,
  payload: { type, res, page }
});

export const searchListFailure = ({ type, error } = {}) => ({
  type: types.SEARCH_LIST_FAILURE,
  payload: { type, error }
});

export const initItemRequest = type => ({
  type: types.INIT_ITEM_REQUEST,
  payload: type
});

export const initItemSuccess = ({ type, res }) => ({
  type: types.INIT_ITEM_SUCCESS,
  payload: { type, res }
});

export const initItemFailure = ({ type, error }) => ({
  type: types.INIT_ITEM_FAILURE,
  payload: { type, error }
});

export const saveItemRequest = () => ({
  type: types.SAVE_ITEM_REQUEST
});

export const saveItemSuccess = ({ type, item, res }) => ({
  type: types.SAVE_ITEM_SUCCESS,
  payload: { type, item, res }
});

export const saveItemFailure = error => ({
  type: types.SAVE_ITEM_FAILURE,
  payload: error
});

export const delItemRequest = () => ({
  type: types.DEL_ITEM_REQUEST
});

export const delItemSuccess = ({ type, item }) => ({
  type: types.DEL_ITEM_SUCCESS,
  payload: { type, item }
});

export const delItemFailure = error => ({
  type: types.DEL_ITEM_FAILURE,
  payload: error
});

export const findBillingRequest = () => ({
  type: types.FIND_BILLING_REQUEST
});

export const findBillingSuccess = res => ({
  type: types.FIND_BILLING_SUCCESS,
  payload: res
});

export const findBillingFailure = error => ({
  type: types.FIND_BILLING_FAILURE,
  payload: error
});
