import axios from 'axios';
import {
  getIdcRequest,
  getIdcSuccess,
  getIdcFailure,
  getRegionTreeRequest,
  getRegionTreeSuccess,
  getRegionTreeFailure,
  getLatencyRequest,
  getLatencySuccess,
  getLatencyFailure,
  getPopRequest,
  getPopSuccess,
  getPopFailure,
  saveLatencyRequest,
  saveLatencySuccess,
  saveLatencyFailure,
} from '../../actions/Admin/Latency';
import {
  BASE_URL,
  IDC_INIT_URL,
  REGION_TREE_URL,
  GET_LATENCY_URL,
  POP_INIT_URL,
} from '../../constants/Url';


export function initIdc(page = 1, size = 1000) {
  return function (dispatch) {
    dispatch(getIdcRequest());

    return axios.get(`${BASE_URL}${IDC_INIT_URL[0]}${page}${IDC_INIT_URL[1]}${size}`)
      .then((res) => {
        dispatch(getIdcSuccess({ res, page }));
        dispatch(getRegionTree());
        dispatch(initPop());
        if (res && res.data && res.data.length !== 0) {
          res.data.forEach((item) => {
            dispatch(getLatency(item.idcCd));
          });
        }
      })
      .catch((error) => {
        dispatch(getIdcFailure(error));
      });
  };
}

export function getRegionTree() {
  return function (dispatch) {
    dispatch(getRegionTreeRequest());

    return axios.get(`${BASE_URL}${REGION_TREE_URL}`)
      .then((res) => {
        dispatch(getRegionTreeSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getRegionTreeFailure(error));
      });
  };
}

export function getLatency(idcCode) {
  return function (dispatch) {
    dispatch(getLatencyRequest(idcCode));

    return axios.get(`${BASE_URL}${GET_LATENCY_URL}${idcCode}`)
      .then((res) => {
        dispatch(getLatencySuccess({ idcCode, res: res.data }));
      })
      .catch((error) => {
        dispatch(getLatencyFailure({ idcCode, error }));
      });
  };
}

export function saveLatency(payload, keyName, fn) {
  return function (dispatch) {
    dispatch(saveLatencyRequest());

    return axios.post(`${BASE_URL}${GET_LATENCY_URL}`, payload)
      .then(() => {
        dispatch(saveLatencySuccess());
        if (fn && fn instanceof Function) {
          fn(payload.idcCd, payload[keyName] ? payload[keyName].split(',') : []);
        }
      })
      .catch((error) => {
        dispatch(saveLatencyFailure(error));
      });
  };
}

export function initPop(page = 1, size = 1000) {
  return function (dispatch) {
    dispatch(getPopRequest());

    return axios.get(`${BASE_URL}${POP_INIT_URL[0]}${page}${POP_INIT_URL[1]}${size}`)
      .then((res) => {
        dispatch(getPopSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getPopFailure(error));
      });
  };
}
