import axios from 'axios';
import {
  getIdcRequest,
  getIdcSuccess,
  getIdcFailure,
  modIdcRequest,
  modIdcSuccess,
  modIdcFailure,
  delIdcRequest,
  delIdcSuccess,
  delIdcFailure,
} from '../../actions/Admin/IDC';
import { BASE_URL, IDC_INIT_URL, IDC_DEL_URL, MY_IDC_SETS } from '../../constants/Url';


export function initIdc(page, size = 15) {
  return function (dispatch) {
    dispatch(getIdcRequest());

    return axios.get(`${BASE_URL}${IDC_INIT_URL[0]}${page || 1}${IDC_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(getIdcSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getIdcFailure(error));
      });
  };
}

export function confirmUpd(IdcNo, payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(modIdcRequest());

    return axios.put(`${BASE_URL}${MY_IDC_SETS}/${IdcNo}`, payload)
      .then(() => {
        dispatch(modIdcSuccess(payload));
        dispatch(initIdc(curPage, size));
      })
      .catch((error) => {
        dispatch(modIdcFailure({ error }));
      });
  };
}

export function confirmDel(IdcNo, curPage, size = 15) {
  return function (dispatch) {
    dispatch(delIdcRequest());

    return axios.delete(`${BASE_URL}${IDC_DEL_URL}/${IdcNo}`)
      .then(() => {
        dispatch(delIdcSuccess());
        dispatch(initIdc(curPage, size));
      })
      .catch((error) => {
        dispatch(delIdcFailure({ error }));
      });
  };
}
