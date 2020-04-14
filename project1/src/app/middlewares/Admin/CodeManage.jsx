import axios from 'axios';
import {
  confirmDelGrpRequest,
  confirmDelGrpSuccess,
  confirmDelGrpFailure,
  confirmDelCdRequest,
  confirmDelCdSuccess,
  confirmDelCdFailure,
  confirmUpdGrpRequest,
  confirmUpdGrpSuccess,
  confirmUpdGrpFailure,
  confirmUpdCdRequest,
  confirmUpdCdSuccess,
  confirmUpdCdFailure,
  addGrpCdRequest,
  addGrpCdSuccess,
  addGrpCdFailure,
  addCdRequest,
  addCdSuccess,
  addCdFailure,
  initChildCdRequest,
  initChildCdSuccess,
  initChildCdFailure,
  initGrpCdRequest,
  initGrpCdSuccess,
  initGrpCdFailure,
  checkGrpCdRequest,
  checkGrpCdSuccess,
  checkGrpCdFailure,
  checkChildCdRequest,
  checkChildCdSuccess,
  checkChildCdFailure
} from '../../actions/Admin/CodeManage';
import {
  BASE_URL,
  INIT_CODE_GROUP,
  INIT_CODE,
  SAVE_CODE,
  SAVE_CODE_GROUP,
  UPDATA_CODE,
  UPDATA_CODE_GROUP,
  DELETE_CODE,
  DELETE_CODE_GROUP,
  CHECK_CODE_GROUP,
  CHECK_CODE
} from '../../constants/Url';

export function initGrpCd(page, size = 15) {
  return function (dispatch) {
    dispatch(initGrpCdRequest());

    return axios.get(`${BASE_URL}${INIT_CODE_GROUP[0]}${page || 1}${INIT_CODE_GROUP[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(initGrpCdSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(initGrpCdFailure(error));
      });
  };
}

export function initChildCd(page, size = 15, grpCd) {
  return function (dispatch) {
    dispatch(initChildCdRequest());

    return axios.get(`${BASE_URL}${INIT_CODE[0]}${grpCd}${INIT_CODE[1]}${page || 1}${INIT_CODE[2]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(initChildCdSuccess({ res, page, grpCd }));
      })
      .catch((error) => {
        dispatch(initChildCdFailure({ error, grpCd }));
      });
  };
}

export function confirmDelGrp(grpCd, curPage, size = 15) {
  return function (dispatch) {
    dispatch(confirmDelGrpRequest());

    return axios.delete(`${BASE_URL}${DELETE_CODE_GROUP}${grpCd}`)
      .then(() => {
        dispatch(confirmDelGrpSuccess());
        dispatch(initGrpCd(curPage, size));
      })
      .catch((error) => {
        dispatch(confirmDelGrpFailure({ error }));
      });
  };
}

export function confirmDelCd(cd, curPage, size = 15, selectedGrp) {
  return function (dispatch) {
    dispatch(confirmDelCdRequest());

    return axios.delete(`${BASE_URL}${DELETE_CODE}${cd}`)
      .then(() => {
        dispatch(confirmDelCdSuccess());
        dispatch(initChildCd(curPage, size, selectedGrp));
      })
      .catch((error) => {
        dispatch(confirmDelCdFailure({ error }));
      });
  };
}

export function confirmUpdGrp(grpCd, payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(confirmUpdGrpRequest());

    return axios.put(`${BASE_URL}${UPDATA_CODE_GROUP}${payload.grpCd}`, payload)
      .then(() => {
        dispatch(confirmUpdGrpSuccess(payload));
        dispatch(initGrpCd(curPage, size));
      })
      .catch((error) => {
        dispatch(confirmUpdGrpFailure({ error }));
      });
  };
}

export function confirmUpdCd(cd, payload, curPage, size = 15, grpCd) {
  return function (dispatch) {
    dispatch(confirmUpdCdRequest());

    return axios.put(`${BASE_URL}${UPDATA_CODE}${cd}`, payload)
      .then(() => {
        dispatch(confirmUpdCdSuccess(payload));
        dispatch(initChildCd(curPage, size, grpCd));
      })
      .catch((error) => {
        dispatch(confirmUpdCdFailure({ error }));
      });
  };
}

export function addGrpCd(payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(addGrpCdRequest());

    return axios.post(BASE_URL + SAVE_CODE_GROUP, payload)
      .then(() => {
        dispatch(addGrpCdSuccess());
        dispatch(initGrpCd(curPage, size));
      })
      .catch((error) => {
        dispatch(addGrpCdFailure({ error }));
      });
  };
}

export function addChildCd(payload, curPage, size = 15) {
  return function (dispatch) {
    dispatch(addCdRequest());

    return axios.post(BASE_URL + SAVE_CODE, payload)
      .then(() => {
        dispatch(addCdSuccess());
        dispatch(initChildCd(curPage, size, payload.grpCd));
      })
      .catch((error) => {
        dispatch(addCdFailure({ error }));
      });
  };
}

export function checkGrpCd(newItem, curPage, size) {
  return function (dispatch) {
    dispatch(checkGrpCdRequest());

    return axios.get(`${BASE_URL}${CHECK_CODE_GROUP[0]}${newItem.grpCd}${CHECK_CODE_GROUP[1]}${newItem.grpCdNm}`)
    .then((res) => {
      dispatch(checkGrpCdSuccess(res.data));
      if (res.data === false) {
        dispatch(addGrpCd(newItem, curPage, size));
      }
    })
    .catch((error) => {
      dispatch(checkGrpCdFailure(error));
    });
  };
}

export function checkChildCd(newItem, curPage, size) {
  return function (dispatch) {
    dispatch(checkChildCdRequest());

    return axios.get(`${BASE_URL}${CHECK_CODE[0]}${newItem.cd}${CHECK_CODE[1]}${newItem.cdNm}${CHECK_CODE[2]}${newItem.grpCd}`)
    .then((res) => {
      dispatch(checkChildCdSuccess(res.data));
      if (res.data === false) {
        dispatch(addChildCd(newItem, curPage, size));
      }
    })
    .catch((error) => {
      dispatch(checkChildCdFailure(error));
    });
  };
}
