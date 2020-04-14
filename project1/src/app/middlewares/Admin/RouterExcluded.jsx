import axios from 'axios';
import {
  getRouterExlRequest,
  getRouterExlSuccess,
  getRouterExlFailure,
  delRouterExlRequest,
  delRouterExlSuccess,
  delRouterExlFailure,
  modRouterExlRequest,
  modRouterExlSuccess,
  modRouterExlFailure,
  addRouterExlRequest,
  addRouterExlSuccess,
  addRouterExlFailure,
} from '../../actions/Admin/RouterExl';
import { BASE_URL, ROUTEREXL_INIT_URL, ROUTEREXL_DEL_URL, MY_ROUTEREXL_SETS } from '../../constants/Url';

export function initRouterExl(page, size = 15) {
  return function (dispatch) {
    dispatch(getRouterExlRequest());

    return axios.get(`${BASE_URL}${ROUTEREXL_INIT_URL[0]}${page || 1}${ROUTEREXL_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(getRouterExlSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getRouterExlFailure(error));
      });
  };
}

export function confirmDel(RouterExlNo, curPage, size = 15) {
  return function (dispatch) {
    dispatch(delRouterExlRequest());

    return axios.delete(`${BASE_URL}${ROUTEREXL_DEL_URL}/${RouterExlNo}`)
      .then(() => {
        dispatch(delRouterExlSuccess());
        dispatch(initRouterExl(curPage, size));
      })
      .catch((error) => {
        dispatch(delRouterExlFailure({ error }));
      });
  };
}

export function confirmUpd(RouterExlNo, payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(modRouterExlRequest());
    return axios.put(`${BASE_URL}${MY_ROUTEREXL_SETS}/${RouterExlNo}`, payload)
      .then(() => {
        dispatch(modRouterExlSuccess(payload));
        dispatch(initRouterExl(curPage, size));
      })
      .catch((error) => {
        dispatch(modRouterExlFailure({ error }));
      });
  };
}

export function createItem(payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(addRouterExlRequest());
    return axios.post(BASE_URL + MY_ROUTEREXL_SETS, { ...payload, cntryCd: payload.cntryCd && payload.cntryCd === '' ? null : payload.cntryCd })
      .then(() => {
        dispatch(addRouterExlSuccess());
        dispatch(initRouterExl(curPage, size));
      })
      .catch((error) => {
        dispatch(addRouterExlFailure({ error }));
      });
  };
}

