import axios from 'axios';
import {
  getASRequest,
  getASSuccess,
  getASFailure,
  delASRequest,
  delASSuccess,
  delASFailure,
  modASRequest,
  modASSuccess,
  modASFailure,
  addASRequest,
  addASSuccess,
  addASFailure,
  checkASRequest,
  checkASSuccess,
  checkASFailure
} from '../../actions/Admin/AS';
import {
  BASE_URL,
  AS_INIT_URL,
  AS_DEL_URL,
  AS_UPDATE_URL,
  AS_SAVE_URL,
  CHECK_AS_URL
} from '../../constants/Url';


export function initAS(page, size = 15) {
  return function (dispatch) {
    dispatch(getASRequest());

    return axios.get(`${BASE_URL}${AS_INIT_URL[0]}${page || 1}${AS_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(getASSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getASFailure(error));
      });
  };
}

export function confirmDel(payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(delASRequest());

    return axios.delete(`${BASE_URL}${AS_DEL_URL}${payload.id}`)
      .then(() => {
        dispatch(delASSuccess());
        dispatch(initAS(curPage, size));
      })
      .catch((error) => {
        dispatch(delASFailure({ error }));
      });
  };
}

export function confirmUpd(mod, curPage, size = 15, fn) {
  return function (dispatch) {
    dispatch(modASRequest());
    return axios.put(`${BASE_URL}${AS_UPDATE_URL}`, mod)
      .then((res) => {
        dispatch(modASSuccess(mod, res.data));
        dispatch(initAS(curPage, size));
        if (res.data === 1 && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(modASFailure({ error }));
      });
  };
}

export function createItem(payload, curPage, size = 15, fn) {
  return function (dispatch) {
    dispatch(addASRequest());
    return axios.post(`${BASE_URL}${AS_SAVE_URL}`, payload)
      .then((res) => {
        dispatch(addASSuccess(res.data));
        dispatch(initAS(curPage, size));
        if (res.data === 1 && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(addASFailure({ error }));
      });
  };
}

export function checkAS(item, fn) {
  return function (dispatch) {
    dispatch(checkASRequest());
    return axios.get(`${BASE_URL}${CHECK_AS_URL[0]}${item.asNo}${CHECK_AS_URL[1]}${item.startIp}${CHECK_AS_URL[2]}${item.endIp}`)
      .then((res) => {
        dispatch(checkASSuccess(res.data));
        if (!res.data && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(checkASFailure({ error }));
      });
  };
}
