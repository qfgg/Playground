import * as types from '../../constants/My/Filtersets/ActionTypes';

export const setCurPage = target => ({
  type: types.SET_CUR_PAGE,
  payload: target
});

export const toggleEditFlag = fltrsetNo => ({
  type: types.TOGGLE_EDIT_FLAG,
  payload: fltrsetNo
});

export const getFiltersetsRequest = () => ({
  type: types.GET_FILTER_SETS_REQUEST,
});

export const getFiltersetsSuccess = res => ({
  type: types.GET_FILTER_SETS_SUCCESS,
  payload: res
});

export const getFiltersetsFailure = ({ error } = {}) => ({
  type: types.GET_FILTER_SETS_FAILURE,
  payload: { error }
});

export const saveFiltersetsRequest = () => ({
  type: types.SAVE_FILTER_SETS_REQUEST,
});

export const saveFiltersetsSuccess = () => ({
  type: types.SAVE_FILTER_SETS_SUCCESS
});

export const saveFiltersetsFailure = ({ error } = {}) => ({
  type: types.SAVE_FILTER_SETS_FAILURE,
  payload: { error }
});

export const deleteFiltersetsRequest = () => ({
  type: types.DEL_FILTER_SETS_REQUEST,
});

export const deleteFiltersetsSuccess = () => ({
  type: types.DEL_FILTER_SETS_SUCCESS
});

export const deleteFiltersetsFailure = ({ error } = {}) => ({
  type: types.DEL_FILTER_SETS_FAILURE,
  payload: { error }
});

export const checkFiltersNameRequest = () => ({
  type: types.CHECK_FILTERS_NAME_REQUEST,
});

export const checkFiltersNameSuccess = payload => ({
  type: types.CHECK_FILTERS_NAME_SUCCESS,
  payload
});

export const checkFiltersNameFailure = ({ error } = {}) => ({
  type: types.CHECK_FILTERS_NAME_FAILURE,
  payload: { error }
});

export const updateFiltersetRequest = () => ({
  type: types.UPDATE_FILTER_SET_REQUEST,
});

export const updateFiltersetSuccess = res => ({
  type: types.UPDATE_FILTER_SET_SUCCESS,
  payload: res
});

export const updateFiltersetFailure = ({ error } = {}) => ({
  type: types.UPDATE_FILTER_SET_FAILURE,
  payload: { error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});
