import axios from 'axios';
import moment from 'moment';
import {
  searchListRequest,
  searchListSuccess,
  searchListFailure,
  initListRequest,
  initListSuccess,
  initListFailure,
  saveItemRequest,
  saveItemSuccess,
  saveItemFailure,
  delItemRequest,
  delItemSuccess,
  delItemFailure,
  initItemRequest,
  initItemSuccess,
  initItemFailure,
  checkSubmitNmRequest,
  checkSubmitNmSuccess,
  checkSubmitNmFailure,
  updateNameRequest,
  updateNameSuccess,
  updateNameFailure,
  fetchResultRequest,
  fetchResultSuccess,
  fetchResultFailure,
  getJobRequest,
  getJobSuccess,
  getJobFailure,
  getFilterRequest,
  getFilterSuccess,
  getFilterFailure,
  setSearchQuery,
  getFlowRequest,
  getFlowSuccess,
  getFlowFailure
} from '../../actions/Internal/Explorer';
import {
  BASE_URL,
  EXPLORER_INIT_URL,
  EXPLORER_SEARCH_URL,
  ITEM_SAVE_URL,
  ITEM_DEL_URL,
  ITEM_GET_ITEM_URL,
  EXPLORER_SUBMIT_CHECK_URL,
  EXPLORER_UPDATE_NAME_URL,
  EXPLORER_FETCH_RESULT_URL,
  EXPLORER_GET_JOB_URL,
  EXPLORER_GET_FILTER_URL,
  GET_ONE_FLOW_URL
} from '../../constants/Url';
import { ignoreSeconds } from '../../helper';
import { DOMAIN_MAP } from '../../constants/My/Common/DomainTypes';


export function initList(type, domainType, page, query) {
  return function (dispatch) {
    dispatch(initListRequest(type));
    const initUrlObj = EXPLORER_INIT_URL[domainType];
    let initUrl = domainType === 'IF' ?
    `${initUrlObj.all[0]}${query}${initUrlObj.all[1]}` : initUrlObj.nm;
    if (page > 1) {
      initUrl = (`${initUrl}&page=${page}`);
    }

    return axios.get(`${BASE_URL}${initUrl}`)
      .then((res) => {
        res = res ? res.data : [];
        dispatch(initListSuccess({ type, res, page }));
      })
      .catch((error) => {
        dispatch(initListFailure({ type, error }));
      });
  };
}

export function searchList(type, domainType, page, query, subQuery) {
  return function (dispatch) {
    dispatch(searchListRequest(type));
    const searchUrlObj = EXPLORER_SEARCH_URL[domainType];
    let searchUrl = domainType === 'IF' ?
    `${searchUrlObj.all[0]}${subQuery}${searchUrlObj.all[1]}${query}` :
    searchUrlObj.nm + query;
    if (page > 1) {
      searchUrl = (`${searchUrl}&page=${page}`);
    }

    return axios.get(`${BASE_URL}${searchUrl}`)
      .then((res) => {
        res = res ? res.data : [];
        dispatch(searchListSuccess({ type, res, page }));
      })
      .catch((error) => {
        dispatch(searchListFailure({ type, error }));
      });
  };
}

export function initItem(type) {
  return function (dispatch) {
    dispatch(initItemRequest(type));
    const initUrl = ITEM_GET_ITEM_URL[type];

    return axios.get(`${BASE_URL}${initUrl}`)
      .then((res) => {
        res = res ?
          (type === 'Prefix' ?
            res.data.map(item => ({
              ...item.myItem,
              itmNo: item.myItem.itmNo
            })) : res.data.map(item => ({
              ...item.domain,
              itmNo: item.myItem.itmNo
            }))) : [];
        dispatch(initItemSuccess({ type, res }));
      })
      .catch((error) => {
        dispatch(initItemFailure({ type, error }));
      });
  };
}

export function saveItem(type, item, payload) {
  return function (dispatch) {
    dispatch(saveItemRequest());

    return axios.post(`${BASE_URL}${ITEM_SAVE_URL}`, payload)
    .then((res) => {
      dispatch(saveItemSuccess({ type, item, res: res.data }));
    })
    .catch((error) => {
      dispatch(saveItemFailure(error));
    });
  };
}

export function delItem(type, item) {
  return function (dispatch) {
    dispatch(delItemRequest());

    return axios.delete(`${BASE_URL}${ITEM_DEL_URL}${item.itmNo}`)
    .then(() => {
      dispatch(delItemSuccess({ type, item }));
    })
    .catch((error) => {
      dispatch(delItemFailure(error));
    });
  };
}

export function saveJob(job, fn) {
  return function (dispatch) {
    dispatch(updateNameRequest());

    return axios.post(`${BASE_URL}${EXPLORER_UPDATE_NAME_URL}`, job)
    .then(() => {
      fn();
      dispatch(updateNameSuccess());
    })
    .catch((error) => {
      dispatch(updateNameFailure(error));
    });
  };
}

export function checkSubmitNm(Nm, query, jobTp, fn) {
  return function (dispatch) {
    dispatch(checkSubmitNmRequest());

    return axios.get(`${BASE_URL}${EXPLORER_SUBMIT_CHECK_URL}${Nm}`)
    .then((res) => {
      dispatch(checkSubmitNmSuccess(res.data !== -1));
      if (res.data === -1) {
        const job = {
          jobNm: Nm,
          jobFltrset: JSON.stringify(query),
          jobTp
        };
        dispatch(saveJob(job, fn));
      }
    })
    .catch((error) => {
      dispatch(checkSubmitNmFailure(error));
    });
  };
}

export function fetchResult(payload) {
  return function (dispatch) {
    dispatch(fetchResultRequest());

    return axios.get(`${BASE_URL}${EXPLORER_FETCH_RESULT_URL[0]}${payload}${EXPLORER_FETCH_RESULT_URL[1]}`)
      .then((res) => {
        dispatch(fetchResultSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchResultFailure(error));
      });
  };
}

function processResponse(filter) {
  const selectedItemList = {};
  const separateList = {};
  const top = filter.top ? {
    limit: filter.top.limit,
    order: filter.top.order
  } : {
    limit: '10',
    order: 'bylast'
  };
  const period = filter.period ? {
    start: filter.period.start,
    end: filter.period.end
  } : {
    start: ignoreSeconds(moment().subtract(6, 'hours')),
    end: ignoreSeconds(moment())
  };
  const radioList = {
    aggregation: filter.aggregation || 'avg',
    data: filter.itemType || 'traffic',
    interval: filter.interval || '1m',
  };
  const checkList = {
    'packet size': filter.packetSize ? filter.packetSize.value : ['all'],
    protocol: filter.protocol ? filter.protocol.value : ['all']
  };
  separateList['packet size'] = false;
  separateList.protocol = false;
  checkList['tcp flag'] = filter.tcpFlag ? filter.tcpFlag.value : ['all'];
  separateList['tcp flag'] = false;
  let selectedItem = [];

  if (filter.src) {
    for (const key in filter.src) {
      if (key === 'prefix') {
      //   selectedItem = filter.src[key].name.map(item => ({
      //     id: item,
      //     text: item
      //   }));
      //   selectedItemList.A_IP = selectedItemList.A_IP ?
      //     [...selectedItemList.A_IP, ...selectedItem] : selectedItem;
      //   separateList.A_IP = filter.src[key].separate;
      // } else if (key === 'ip') {
        selectedItem = filter.src[key].value.map((item, idx) => ({
          id: item,
          text: filter.src[key].name[idx]
        }));
        selectedItemList.A_Prefix = selectedItemList.A_Prefix ?
          [...selectedItemList.A_Prefix, ...selectedItem] : selectedItem;
        separateList.A_Prefix = filter.src[key].separate;
      } else {
        selectedItem = filter.src[key].value.map((item, idx) => ({
          id: item,
          text: filter.src[key].name[idx]
        }));
        selectedItemList[`A_${DOMAIN_MAP[key]}`] = selectedItem;
        separateList[`A_${DOMAIN_MAP[key]}`] = filter.src[key].separate;
      }
    }
  }
  if (filter.dst) {
    for (const key in filter.dst) {
      if (key === 'prefix') {
      //   selectedItem = filter.dst[key].name.map(item => ({
      //     id: item,
      //     text: item
      //   }));
      //   selectedItemList.B_IP = selectedItemList.B_IP ?
      //     [...selectedItemList.B_IP, ...selectedItem] : selectedItem;
      //   separateList.B_IP = filter.dst[key].separate;
      // } else if (key === 'ip') {
        selectedItem = filter.dst[key].value.map((item, idx) => ({
          id: item,
          text: filter.dst[key].name[idx]
        }));
        selectedItemList.B_Prefix = selectedItemList.B_Prefix ?
          [...selectedItemList.B_Prefix, ...selectedItem] : selectedItem;
        separateList.B_Prefix = filter.dst[key].separate;
      } else {
        selectedItem = filter.dst[key].value.map((item, idx) => ({
          id: item,
          text: filter.dst[key].name[idx]
        }));
        selectedItemList[`B_${DOMAIN_MAP[key]}`] = selectedItem;
        separateList[`B_${DOMAIN_MAP[key]}`] = filter.dst[key].separate;
      }
    }
  }
  return { selectedItemList, separateList, radioList, checkList, top, period };
}

export function getJob(payload) {
  return function (dispatch) {
    dispatch(getJobRequest());

    return axios.get(`${BASE_URL}${EXPLORER_GET_JOB_URL}${payload}`)
      .then((res) => {
        dispatch(getJobSuccess({
          status: res.data.jobStas,
          filter: processResponse(JSON.parse(res.data.jobFltrset))
        }));
        const query = JSON.parse(res.data.jobFltrset);
        query.forbidToFlow = true;
        dispatch(setSearchQuery(query));
      })
      .catch((error) => {
        dispatch(getJobFailure(error));
      });
  };
}

export function getFilter(payload) {
  return function (dispatch) {
    dispatch(getFilterRequest());

    return axios.get(`${BASE_URL}${EXPLORER_GET_FILTER_URL}${payload}`)
      .then((res) => {
        dispatch(getFilterSuccess({
          filter: processResponse(JSON.parse(res.data.fltrset)),
          isTmp: res.data.tempYn === 'Y'
        }));
      })
      .catch((error) => {
        dispatch(getFilterFailure(error));
      });
  };
}

export function getFlow(payload) {
  return function (dispatch) {
    dispatch(getFlowRequest());

    return axios.get(`${BASE_URL}${GET_ONE_FLOW_URL}${payload}`)
      .then((res) => {
        dispatch(getFlowSuccess(processResponse(JSON.parse(res.data.flFltrset))));
      })
      .catch((error) => {
        dispatch(getFlowFailure(error));
      });
  };
}
