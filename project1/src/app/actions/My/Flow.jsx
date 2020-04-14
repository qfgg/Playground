import * as types from '../../constants/My/Flow/ActionTypes';


export const addFlowGrpRequest = () => ({
  type: types.ADD_FLOW_GROUP_REQUEST,
});

export const addFlowGrpSuccess = res => ({
  type: types.ADD_FLOW_GROUP_SUCCESS,
  payload: res,
});

export const addFlowGrpFailure = error => ({
  type: types.ADD_FLOW_GROUP_FAILURE,
  payload: error
});

export const delFlowGrpRequest = () => ({
  type: types.DEL_FLOW_GROUP_REQUEST,
});

export const delFlowGrpSuccess = flGrpNo => ({
  type: types.DEL_FLOW_GROUP_SUCCESS,
  payload: flGrpNo,
});

export const delFlowGrpFailure = error => ({
  type: types.DEL_FLOW_GROUP_FAILURE,
  payload: error,
});

export const updFlowGrpRequest = () => ({
  type: types.UPDATE_FLOW_GROUP_REQUEST,
});

export const updFlowGrpSuccess = res => ({
  type: types.UPDATE_FLOW_GROUP_SUCCESS,
  payload: res,
});

export const updFlowGrpFailure = error => ({
  type: types.UPDATE_FLOW_GROUP_FAILURE,
  payload: error,
});

export const shareFlowGrpRequest = () => ({
  type: types.SHARE_FLOW_GROUP_REQUEST
});

export const shareFlowGrpSuccess = res => ({
  type: types.SHARE_FLOW_GROUP_SUCCESS,
  payload: res,
});

export const shareFlowGrpFailure = error => ({
  type: types.SHARE_FLOW_GROUP_FAILURE,
  payload: error,
});

export const setCurGroup = flGrpNo => ({
  type: types.SET_CUR_GROUP,
  payload: flGrpNo,
});

export const moveFlowRequest = () => ({
  type: types.MOVE_FLOW_REQUEST
});

export const moveFlowSuccess = res => ({
  type: types.MOVE_FLOW_SUCCESS,
  payload: res
});

export const moveFlowFailure = error => ({
  type: types.MOVE_FLOW_FAILURE,
  payload: error
});

export const setSelectedItem = (flGrpNo, item, showFlag) => ({
  type: types.SET_SELECTED_ITEM,
  payload: { flGrpNo, item, showFlag },
});

export const setDragFlag = (isDragging, dragIdx) => ({
  type: types.SET_DRAG_FLAG,
  payload: { isDragging, dragIdx },
});

export const setCurIdx = curIdx => ({
  type: types.SET_CUR_IDX,
  payload: curIdx,
});

export const initFlowRequest = () => ({
  type: types.INIT_FLOW_REQUEST,
});

export const initFlowSuccess = ({ res, flGrpNo } = {}) => ({
  type: types.INIT_FLOW_SUCCESS,
  payload: { res, flGrpNo },
});

export const initFlowFailure = error => ({
  type: types.INIT_FLOW_FAILURE,
  payload: error,
});

export const initFlowGroupRequest = () => ({
  type: types.INIT_FLOW_GROUP_REQUEST,
});

export const initFlowGroupSuccess = res => ({
  type: types.INIT_FLOW_GROUP_SUCCESS,
  payload: res,
});

export const initFlowGroupFailure = error => ({
  type: types.INIT_FLOW_GROUP_FAILURE,
  payload: error,
});

export const initSharedFlGrpRequest = () => ({
  type: types.INIT_SHARED_FLOW_GROUP_REQUEST,
});

export const initSharedFlGrpSuccess = res => ({
  type: types.INIT_SHARED_FLOW_GROUP_SUCCESS,
  payload: res,
});

export const initSharedFlGrpFailure = error => ({
  type: types.INIT_SHARED_FLOW_GROUP_FAILURE,
  payload: error,
});

export const initUnnamedFlGrpRequest = () => ({
  type: types.INIT_UNNAMED_FLOW_GROUP_REQUEST
});

export const initUnnamedFlGrpSuccess = res => ({
  type: types.INIT_UNNAMED_FLOW_GROUP_SUCCESS,
  payload: res,
});

export const initUnnamedFlGrpFailure = error => ({
  type: types.INIT_UNNAMED_FLOW_GROUP_FAILURE,
  payload: error,
});

export const delFlowRequest = () => ({
  type: types.DEL_FLOW_REQUEST
});

export const delFlowSuccess = newListDel => ({
  type: types.DEL_FLOW_SUCCESS,
  payload: newListDel,
});

export const delFlowFailure = error => ({
  type: types.DEL_FLOW_FAILURE,
  payload: error,
});

export const updFlowRequest = () => ({
  type: types.UPDATE_FLOW_REQUEST,

});

export const updFlowSuccess = res => ({
  type: types.UPDATE_FLOW_SUCCESS,
  payload: res,
});

export const updFlowFailure = error => ({
  type: types.UPDATE_FLOW_FAILURE,
  payload: error,
});

export const copyFlowRequest = () => ({
  type: types.COPY_FLOW_REQUEST
});

export const copyFlowSuccess = res => ({
  type: types.COPY_FLOW_SUCCESS,
  payload: res,
});

export const copyFlowFailure = error => ({
  type: types.COPY_FLOW_FAILURE,
  payload: error,
});

export const fetchChartRequest = flNo => ({
  type: types.FETCH_CHART_REQUEST,
  payload: flNo,
});

export const fetchChartSuccess = (res, flNo) => ({
  type: types.FETCH_CHART_SUCCESS,
  payload: { res, flNo },
});

export const fetchChartFailure = (error, flNo) => ({
  type: types.FETCH_CHART_FAILURE,
  payload: { error, flNo },
});

export const clearChart = () => ({
  type: types.CLEAR_CHART,
});

export const orderFlowRequest = () => ({
  type: types.ORDER_FLOW_REQUEST,
});

export const orderFlowSuccess = res => ({
  type: types.ORDER_FLOW_SUCCESS,
  payload: res
});

export const orderFlowFailure = error => ({
  type: types.ORDER_FLOW_FAILURE,
  payload: error
});

export const orderPageFlow = (flGrpNo, newListMove) => ({
  type: types.ORDER_PAGE_FLOW,
  payload: { flGrpNo, newListMove }
});

export const setSearchValue = val => ({
  type: types.SET_SEARCH_VALUE,
  payload: val
});

export const getSuggestRequest = type => ({
  type: types.GET_SUGGEST_REQUEST,
  payload: type
});

export const getSuggestSuccess = (type, res, flGrpNo) => ({
  type: types.GET_SUGGEST_SUCCESS,
  payload: { type, res, flGrpNo }
});

export const getSuggestFailure = (type, error) => ({
  type: types.GET_SUGGEST_FAILURE,
  payload: { type, error }
});

export const clearSuggest = () => ({
  type: types.CLEAR_SUGGEST
});

export const setCurType = curType => ({
  type: types.SET_CUR_TYPE,
  payload: curType
});

export const initGrpSharedListRequest = flGrpNo => ({
  type: types.INIT_GROUP_SHARED_LIST_REQUEST,
  payload: flGrpNo
});

export const initGrpSharedListSuccess = (flGrpNo, res) => ({
  type: types.INIT_GROUP_SHARED_LIST_SUCCESS,
  payload: { flGrpNo, res }
});

export const initGrpSharedListFailure = (flGrpNo, error) => ({
  type: types.INIT_GROUP_SHARED_LIST_FAILURE,
  payload: { flGrpNo, error }
});

export const delGrpSharedListRequest = () => ({
  type: types.DEL_GROUP_SHARED_LIST_REQUEST
});

export const delGrpSharedListSuccess = flGrpNo => ({
  type: types.DEL_GROUP_SHARED_LIST_SUCCESS,
  payload: flGrpNo
});

export const delGrpSharedListFailure = error => ({
  type: types.DEL_GROUP_SHARED_LIST_FAILURE,
  payload: error
});

export const checkGrpNameRequest = () => ({
  type: types.CHECK_FLOWGRP_NAME_REQUEST
});

export const checkGrpNameSuccess = res => ({
  type: types.CHECK_FLOWGRP_NAME_SUCCESS,
  payload: res
});

export const checkGrpNameFailure = error => ({
  type: types.CHECK_FLOWGRP_NAME_FAILURE,
  payload: error
});
