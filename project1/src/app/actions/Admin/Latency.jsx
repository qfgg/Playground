import * as types from '../../constants/Admin/Latency/ActionTypes';


export const getIdcRequest = () => ({
  type: types.GET_IDC_REQUEST,
});

export const getIdcSuccess = page => ({
  type: types.GET_IDC_SUCCESS,
  payload: page,
});

export const getIdcFailure = page => ({
  type: types.GET_IDC_FAILURE,
  payload: page,
});

export const getRegionTreeRequest = () => ({
  type: types.GET_REGION_TREE_REQUEST,
});

export const getRegionTreeSuccess = res => ({
  type: types.GET_REGION_TREE_SUCCESS,
  payload: res,
});

export const getRegionTreeFailure = error => ({
  type: types.GET_REGION_TREE_FAILURE,
  payload: error,
});

export const getLatencyRequest = idcCode => ({
  type: types.GET_LATENCY_REQUEST,
  payload: idcCode,
});

export const getLatencySuccess = ({ idcCode, res } = {}) => ({
  type: types.GET_LATENCY_SUCCESS,
  payload: { idcCode, res },
});

export const getLatencyFailure = ({ idcCode, error } = {}) => ({
  type: types.GET_LATENCY_FAILURE,
  payload: { idcCode, error },
});

export const getPopRequest = () => ({
  type: types.GET_POP_REQUEST,
});

export const getPopSuccess = res => ({
  type: types.GET_POP_SUCCESS,
  payload: res,
});

export const getPopFailure = error => ({
  type: types.GET_POP_FAILURE,
  payload: error,
});

export const saveLatencyRequest = () => ({
  type: types.SAVE_LATENCY_REQUEST,
});

export const saveLatencySuccess = () => ({
  type: types.SAVE_LATENCY_SUCCESS,
});

export const saveLatencyFailure = error => ({
  type: types.SAVE_LATENCY_FAILURE,
  payload: error,
});
