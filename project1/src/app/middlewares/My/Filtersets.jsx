import axios from 'axios';
import {
  getFiltersetsRequest,
  getFiltersetsSuccess,
  getFiltersetsFailure,
  saveFiltersetsRequest,
  saveFiltersetsSuccess,
  saveFiltersetsFailure,
  deleteFiltersetsRequest,
  deleteFiltersetsSuccess,
  deleteFiltersetsFailure,
  checkFiltersNameRequest,
  checkFiltersNameSuccess,
  checkFiltersNameFailure,
  updateFiltersetRequest,
  updateFiltersetSuccess,
  updateFiltersetFailure
} from '../../actions/My/Filtersets';
import { BASE_URL, MY_FILTER_SETS } from '../../constants/Url';


export function getMyFiltersets(page, size = 10) {
  return function (dispatch) {
    dispatch(getFiltersetsRequest());

    return axios.get(`${BASE_URL}${MY_FILTER_SETS}?page=${page || 1}&size=${size}`)
      .then((res) => {
        dispatch(getFiltersetsSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getFiltersetsFailure({ error }));
      });
  };
}

export function saveMyFiltersets(payload, redirctCb) {
  return function (dispatch) {
    dispatch(saveFiltersetsRequest());

    return axios.post(`${BASE_URL}${MY_FILTER_SETS}`, payload)
      .then(() => {
        dispatch(saveFiltersetsSuccess());
        redirctCb();
      })
      .catch((error) => {
        dispatch(saveFiltersetsFailure({ error }));
      });
  };
}

export function deleteMyFiltersets(fltrsetNo, curPage, size = 10) {
  return function (dispatch) {
    dispatch(deleteFiltersetsRequest());

    return axios.delete(`${BASE_URL}${MY_FILTER_SETS}/${fltrsetNo}`)
      .then(() => {
        dispatch(deleteFiltersetsSuccess());
        dispatch(getMyFiltersets(curPage, size));
      })
      .catch((error) => {
        dispatch(deleteFiltersetsFailure({ error }));
      });
  };
}

export function checkFiltersetsName(fltrsetNm, payload, cb) {
  return function (dispatch) {
    dispatch(checkFiltersNameRequest());

    return axios.get(`${BASE_URL}${MY_FILTER_SETS}/check?fltrsetNm=${fltrsetNm}`)
      .then((res) => {
        dispatch(checkFiltersNameSuccess({ isDup: res.data !== -1, fltrsetNo: res.data }));
        if (res.data === -1) {
          dispatch(saveMyFiltersets(payload, cb));
        }
      })
      .catch((error) => {
        dispatch(checkFiltersNameFailure({ error }));
      });
  };
}

export function updateFilterset(fltrsetNo, payload, curPage, size = 10, redirctCb) {
  return function (dispatch) {
    dispatch(updateFiltersetRequest());

    return axios.put(`${BASE_URL}${MY_FILTER_SETS}/${fltrsetNo}`, payload)
      .then(() => {
        dispatch(updateFiltersetSuccess());
        dispatch(getMyFiltersets(curPage, size));
        redirctCb();
      })
      .catch((error) => {
        dispatch(updateFiltersetFailure({ error }));
      });
  };
}
