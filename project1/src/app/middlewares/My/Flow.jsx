import axios from 'axios';
import {
  initFlowRequest,
  initFlowSuccess,
  initFlowFailure,
  initFlowGroupRequest,
  initFlowGroupSuccess,
  initFlowGroupFailure,
  addFlowGrpRequest,
  addFlowGrpSuccess,
  addFlowGrpFailure,
  delFlowGrpRequest,
  delFlowGrpSuccess,
  delFlowGrpFailure,
  updFlowGrpRequest,
  updFlowGrpSuccess,
  updFlowGrpFailure,
  delFlowRequest,
  delFlowSuccess,
  delFlowFailure,
  updFlowRequest,
  updFlowSuccess,
  updFlowFailure,
  copyFlowRequest,
  copyFlowSuccess,
  copyFlowFailure,
  shareFlowGrpRequest,
  shareFlowGrpSuccess,
  shareFlowGrpFailure,
  initSharedFlGrpRequest,
  initSharedFlGrpSuccess,
  initSharedFlGrpFailure,
  moveFlowRequest,
  moveFlowSuccess,
  moveFlowFailure,
  fetchChartRequest,
  fetchChartSuccess,
  fetchChartFailure,
  orderFlowRequest,
  orderFlowSuccess,
  orderFlowFailure,
  getSuggestRequest,
  getSuggestSuccess,
  getSuggestFailure,
  initGrpSharedListRequest,
  initGrpSharedListSuccess,
  initGrpSharedListFailure,
  delGrpSharedListRequest,
  delGrpSharedListSuccess,
  delGrpSharedListFailure,
  checkGrpNameRequest,
  checkGrpNameSuccess,
  checkGrpNameFailure
} from '../../actions/My/Flow';
import {
  BASE_URL,
  FLOW_GROUP_URL,
  FLOW_URL,
  FLOW_GROUP_MODIFY_URL,
  FLOW_MODIFY_URL,
  COPY_FLOW,
  FLOW_CHART_URL,
  ORDER_FLOW_URL,
  SHARE_SUGGEST_URL,
  SHARED_TOME_GROUP_URL,
  FLOW_GROUP_TOSHARE_URL,
  FLOW_GROUP_SHARED_LIST,
  FLOW_DELETE_GROUP_SHARE,
  CHECK_GRPNM_URL
} from '../../constants/Url';


export function initFlow(flGrpNo) {
  return function (dispatch) {
    dispatch(initFlowRequest());

    return axios.get(`${BASE_URL}${FLOW_URL[0]}${flGrpNo}${FLOW_URL[1]}`)
      .then((res) => {
        dispatch(initFlowSuccess({ res, flGrpNo }));
      })
      .catch((error) => {
        dispatch(initFlowFailure(error));
      });
  };
}


export function initFlowGroup() {
  return function (dispatch) {
    dispatch(initFlowGroupRequest());

    return axios.get(`${BASE_URL}${FLOW_GROUP_URL}`)
      .then((res) => {
        dispatch(initFlowGroupSuccess(res));
      })
      .catch((error) => {
        dispatch(initFlowGroupFailure(error));
      });
  };
}

export function addFlowGrp(newGrp) {
  return function (dispatch) {
    dispatch(addFlowGrpRequest());

    return axios.post(`${BASE_URL}${FLOW_GROUP_URL}`, newGrp)
      .then((res) => {
        dispatch(addFlowGrpSuccess(res));
        dispatch(initFlowGroup());
      })
      .catch((error) => {
        dispatch(addFlowGrpFailure(error));
      });
  };
}

export function delFlowGrp(flGrpNo) {
  return function (dispatch) {
    dispatch(delFlowGrpRequest());
    return axios.delete(`${BASE_URL}${FLOW_GROUP_MODIFY_URL}${flGrpNo}`)
      .then(() => {
        dispatch(delFlowGrpSuccess());
        dispatch(initFlowGroup());
      })
      .catch((error) => {
        dispatch(delFlowGrpFailure(error));
      });
  };
}

export function updFlowGrp(flGrpNo, payload) {
  return function (dispatch) {
    dispatch(updFlowGrpRequest());
    return axios.put(`${BASE_URL}${FLOW_GROUP_MODIFY_URL}${flGrpNo}`, payload)
      .then(() => {
        dispatch(updFlowGrpSuccess());
        dispatch(initFlowGroup());
      })
      .catch((error) => {
        dispatch(updFlowGrpFailure(error));
      });
  };
}

export function delFlow(flNo, flGrpNo, newListDel) {
  return function (dispatch) {
    dispatch(delFlowRequest());
    return axios.delete(`${BASE_URL}${FLOW_MODIFY_URL}${flNo}`)
      .then(() => {
        dispatch(delFlowSuccess());
        dispatch(orderFlow(flGrpNo, newListDel));
        dispatch(initFlow(flGrpNo));
      })
      .catch((error) => {
        dispatch(delFlowFailure(error));
      });
  };
}

export function updFlow(flNo, flGrpNo, payload) {
  return function (dispatch) {
    dispatch(updFlowRequest());
    return axios.put(`${BASE_URL}${FLOW_MODIFY_URL}${flNo}`, payload)
      .then((payload) => {
        dispatch(updFlowSuccess(payload));
        dispatch(initFlow(flGrpNo));
      })
      .catch((error) => {
        dispatch(updFlowFailure(error));
      });
  };
}

export function copyFlow(flGrpNo, flNo) {
  return function (dispatch) {
    dispatch(copyFlowRequest());
    return axios.put(`${BASE_URL}${COPY_FLOW[0]}${flNo}${COPY_FLOW[1]}`)
      .then(() => {
        dispatch(copyFlowSuccess());
        dispatch(initFlow(flGrpNo));
      })
      .catch((error) => {
        dispatch(copyFlowFailure(error));
      });
  };
}

export function moveFlow(flNo, flGrpNoInitial, newOrder, newListMoveInit, newListMoveTarget) {
  return function (dispatch) {
    dispatch(moveFlowRequest());
    return axios.put(`${BASE_URL}${FLOW_MODIFY_URL}${flNo}`, newOrder)
      .then((res) => {
        dispatch(moveFlowSuccess(res));
        // dispatch(movingFlow(res));
        if (flGrpNoInitial !== newOrder.flGrpNo) {
          dispatch(orderFlow(newOrder.flGrpNo, newListMoveTarget));
        }
        dispatch(orderFlow(flGrpNoInitial, newListMoveInit));
      })
      .catch((error) => {
        dispatch(moveFlowFailure(error));
      });
  };
}

export function shareFlowGrp(shareTo, flGrpNo) {
  return function (dispatch) {
    dispatch(shareFlowGrpRequest());
    return axios.post(`${BASE_URL}${FLOW_GROUP_TOSHARE_URL[0]}${flGrpNo}${FLOW_GROUP_TOSHARE_URL[1]}`, shareTo)
      .then(() => {
        dispatch(shareFlowGrpSuccess());
      })
      .catch((error) => {
        dispatch(shareFlowGrpFailure(error));
      });
  };
}

export function initSharedFlGrp() {
  return function (dispatch) {
    dispatch(initSharedFlGrpRequest());
    return axios.get(`${BASE_URL}${SHARED_TOME_GROUP_URL}`)
      .then((payload) => {
        dispatch(initSharedFlGrpSuccess(payload));
        // dispatch(initFlow(1565));
      })
      .catch((error) => {
        dispatch(initSharedFlGrpFailure(error));
      });
  };
}

export function fetchChart(flNo) {
  return function (dispatch) {
    dispatch(fetchChartRequest(flNo));
    return axios.get(`${BASE_URL}${FLOW_CHART_URL}/${flNo}/chart`)
      .then((res) => {
        dispatch(fetchChartSuccess(res.data, flNo));
      })
      .catch((error) => {
        dispatch(fetchChartFailure(error, flNo));
      });
  };
}

export function orderFlow(flGrpNo, newListDel) {
  return function (dispatch) {
    dispatch(orderFlowRequest());
    return axios.put(`${BASE_URL}${ORDER_FLOW_URL}${flGrpNo}`, newListDel,
      { headers: { 'Content-Type': 'application/json' } })
      .then(() => {
        dispatch(orderFlowSuccess(newListDel));
        // dispatch(initFlow(flGrpNo));
      })
      .catch((error) => {
        dispatch(orderFlowFailure(error));
      });
  };
}

export function getSuggest(type, query, flGrpNo) {
  return function (dispatch) {
    dispatch(getSuggestRequest(type));

    const suggestUrlObj = SHARE_SUGGEST_URL[type];

    const suggestUrl = suggestUrlObj.map(item => `${item}${query}`).join('');

    return axios.get(`${BASE_URL}${suggestUrl}`)
      .then((res) => {
        dispatch(getSuggestSuccess(type, Array.isArray(res.data) ? res.data : [], flGrpNo));
      })
      .catch((error) => {
        dispatch(getSuggestFailure(type, error));
      });
  };
}

export function initGrpSharedList(flGrpNo) {
  return function (dispatch) {
    dispatch(initGrpSharedListRequest(flGrpNo));

    return axios.get(`${BASE_URL}${FLOW_GROUP_SHARED_LIST[0]}${flGrpNo}${FLOW_GROUP_SHARED_LIST[1]}`)
      .then((res) => {
        dispatch(initGrpSharedListSuccess(flGrpNo, res));
      })
      .catch((error) => {
        dispatch(initGrpSharedListFailure(flGrpNo, error));
      });
  };
}

export function delGrpSharedList(rcpntNo, flGrpNo) {
  return function (dispatch) {
    dispatch(delGrpSharedListRequest());
    return axios.delete(`${BASE_URL}${FLOW_DELETE_GROUP_SHARE[0]}${flGrpNo}${FLOW_DELETE_GROUP_SHARE[1]}${rcpntNo}`)
      .then(() => {
        dispatch(delGrpSharedListSuccess());
        dispatch(initGrpSharedList(flGrpNo));
      })
      .catch((error) => {
        dispatch(delGrpSharedListFailure(error));
      });
  };
}

export function checkGrpName(flGrpNm, yFn) {
  return function (dispatch) {
    dispatch(checkGrpNameRequest());
    return axios.get(`${BASE_URL}${CHECK_GRPNM_URL}${flGrpNm}`)
      .then((res) => {
        dispatch(checkGrpNameSuccess((res || {}).data !== -1));
        if (res && res.data === -1 && yFn && yFn instanceof Function) {
          yFn(res.data);
        }
      })
      .catch((error) => {
        dispatch(checkGrpNameFailure(error));
      });
  };
}

