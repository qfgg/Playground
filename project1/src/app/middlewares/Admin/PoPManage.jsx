import axios from 'axios';
import {
  getPopRequest,
  getPopSuccess,
  getPopFailure,
  delPopRequest,
  delPopSuccess,
  delPopFailure,
  modPopRequest,
  modPopSuccess,
  modPopFailure,
  addPopRequest,
  addPopSuccess,
  addPopFailure,
} from '../../actions/Admin/PopManage';
import { BASE_URL, POP_INIT_URL, POP_DEL_URL, MY_POP_SETS } from '../../constants/Url';


export function initPop(page, size = 15) {
  return function (dispatch) {
    dispatch(getPopRequest());

    return axios.get(`${BASE_URL}${POP_INIT_URL[0]}${page || 1}${POP_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(getPopSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getPopFailure(error));
      });
  };
}

export function confirmDel(PopNo, curPage, size = 15) {
  return function (dispatch) {
    dispatch(delPopRequest());

    return axios.delete(`${BASE_URL}${POP_DEL_URL}/${PopNo}`)
      .then(() => {
        dispatch(delPopSuccess());
        dispatch(initPop(curPage, size));
      })
      .catch((error) => {
        dispatch(delPopFailure({ error }));
      });
  };
}

export function confirmUpd(popNo, payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(modPopRequest());
    return axios.put(`${BASE_URL}${MY_POP_SETS}/${popNo}`, payload)
      .then(() => {
        dispatch(modPopSuccess(payload));
        dispatch(initPop(curPage, size));
      })
      .catch((error) => {
        dispatch(modPopFailure({ error }));
      });
  };
}

export function createItem(payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(addPopRequest());
    return axios.post(BASE_URL + MY_POP_SETS, { ...payload, cntryCd: payload.cntryCd && payload.cntryCd === '' ? null : payload.cntryCd })
      .then(() => {
        dispatch(addPopSuccess());
        dispatch(initPop(curPage, size));
      })
      .catch((error) => {
        dispatch(addPopFailure({ error }));
      });
  };
}
