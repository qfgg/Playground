import axios from 'axios';
import {
  getIspRequest,
  getIspSuccess,
  getIspFailure,
  modIspRequest,
  modIspSuccess,
  modIspFailure,
  delIspRequest,
  delIspSuccess,
  delIspFailure,
} from '../../actions/Admin/IspManage';
import { BASE_URL, ISP_INIT_URL, ISP_DEL_URL, MY_ISP_SETS } from '../../constants/Url';


export function initIsp(page, size = 15) {
  return function (dispatch) {
    dispatch(getIspRequest());

    return axios.get(`${BASE_URL}${ISP_INIT_URL[0]}${page || 1}${ISP_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(getIspSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getIspFailure(error));
      });
  };
}

export function confirmUpd(ispId, payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(modIspRequest());

    return axios.put(`${BASE_URL}${MY_ISP_SETS}/${ispId}`, payload)
      .then(() => {
        dispatch(modIspSuccess(payload));
        dispatch(initIsp(curPage, size));
      })
      .catch((error) => {
        dispatch(modIspFailure({ error }));
      });
  };
}

export function confirmDel(ispId, curPage, size = 15) {
  return function (dispatch) {
    dispatch(delIspRequest());

    return axios.delete(`${BASE_URL}${ISP_DEL_URL}/${ispId}`)
      .then(() => {
        dispatch(delIspSuccess());
        dispatch(initIsp(curPage, size));
      })
      .catch((error) => {
        dispatch(delIspFailure({ error }));
      });
  };
}
