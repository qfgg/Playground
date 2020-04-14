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
  getFlowFailure,
  getAnaRoutersRequest,
  getAnaRoutersSuccess,
  getAnaRoutersFailure,
  getAnaRequest,
  getAnaSuccess,
  getAnaFailure
} from '../../actions/External/Explorer';
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
  GET_ONE_FLOW_URL,
  EXPLORER_ANA_ROUTER_URL,
  EXPLORER_ANA_URL
} from '../../constants/Url';
import { ignoreSeconds } from '../../helper';
import { DOMAIN_MAP } from '../../constants/My/Common/DomainTypes';


export function initList(type, domainType, page, query) {
  return function (dispatch) {
    dispatch(initListRequest(type));
    const initUrlObj = EXPLORER_INIT_URL[domainType];
    let initUrl = domainType === 'Country' || domainType === 'Line' ?
      initUrlObj.all.join('') :
      domainType === 'IF' ? `${initUrlObj.all[0]}${query}${initUrlObj.all[1]}` :
      initUrlObj.nm;
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
    let searchUrl = domainType === 'ASN' ?
      searchUrlObj.all.map(item => `${item}${query}`).join('') :
      domainType === 'Country' || domainType === 'Line' ?
      searchUrlObj.all.map(item => `${item}${query}`).join('') :
      domainType === 'IF' ? `${searchUrlObj.all[0]}${subQuery}${searchUrlObj.all[1]}${query}` :
      `${searchUrlObj.nm}${query}`;
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
    protocol: filter.protocol ? filter.protocol.value : ['all'],
  };
  separateList['packet size'] = filter.packetSize ? filter.packetSize.separate : false;
  separateList.protocol = filter.protocol ? filter.protocol.separate : false;
  checkList['tcp flag'] = filter.tcpFlag ? filter.tcpFlag.value : ['all'];
  separateList['tcp flag'] = filter.tcpFlag ? filter.tcpFlag.separate : false;
  let selectedItem = [];

  const routerIF = {};
  let allIF = false;

  if (filter.server) {
    for (const key in filter.server) {
      if (key === 'prefix') {
      //   selectedItem = filter.server[key].name.map(item => ({
      //     id: item,
      //     text: item
      //   }));
      //   selectedItemList.Server_IP = selectedItemList.Server_IP ?
      //     [...selectedItemList.Server_IP, ...selectedItem] : selectedItem;
      //   separateList.Server_IP = filter.server[key].separate;
      // } else if (key === 'ip') {
        selectedItem = filter.server[key].value.map((item, idx) => ({
          id: item,
          text: filter.server[key].name[idx]
        }));
        selectedItemList.Server_Prefix = selectedItemList.Server_Prefix ?
          [...selectedItemList.Server_Prefix, ...selectedItem] : selectedItem;
        separateList.Server_Prefix = filter.server[key].separate;
      } else {
        selectedItem = (filter.server[key].name || [])
          .map((item, idx) => ({
            id: filter.server[key].value[idx],
            text: item
          }));
        if (selectedItem.length > 0) {
          selectedItemList[`Server_${DOMAIN_MAP[key]}`] = selectedItem;
          separateList[`Server_${DOMAIN_MAP[key]}`] = filter.server[key].separate;
        }

        if (key === 'if') {
          for (let i = (filter.server.if.name || []).length,
            len = (filter.server.if.value || []).length; i < len; i++) {
            routerIF[filter.server.if.value[i].split(':')[0]] = true;
          }
        }
      }
    }
    if (filter.server.if && (filter.server.if.value || []).indexOf('*') !== -1) {
      allIF = true;
      selectedItemList[`Server_${DOMAIN_MAP.if}`] =
        (selectedItemList[`Server_${DOMAIN_MAP.if}`] || []).filter(item => item.id !== '*');
    }
  }
  if (filter.user) {
    for (const key in filter.user) {
      if (key === 'prefix') {
      //   selectedItem = filter.user[key].name.map(item => ({
      //     id: item,
      //     text: item
      //   }));
      //   selectedItemList.User_IP = selectedItemList.User_IP ?
      //     [...selectedItemList.User_IP, ...selectedItem] : selectedItem;
      //   separateList.User_IP = filter.user[key].separate;
      // } else if (key === 'ip') {
        selectedItem = filter.user[key].value.map((item, idx) => ({
          id: item,
          text: filter.user[key].name[idx]
        }));
        selectedItemList.User_Prefix = selectedItemList.User_Prefix ?
          [...selectedItemList.User_Prefix, ...selectedItem] : selectedItem;
        separateList.User_Prefix = filter.user[key].separate;
      } else {
        selectedItem = filter.user[key].value.map((item, idx) => ({
          id: item,
          text: filter.user[key].name[idx]
        }));
        selectedItemList[`User_${DOMAIN_MAP[key]}`] = selectedItem;
        separateList[`User_${DOMAIN_MAP[key]}`] = filter.user[key].separate;
      }
    }
  }
  return {
    selectedItemList,
    separateList,
    radioList,
    checkList,
    top,
    period,
    allIF,
    routerIF
  };
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

export function getAnaRouters() {
  return function (dispatch) {
    dispatch(getAnaRoutersRequest());

    return axios.get(`${BASE_URL}${EXPLORER_ANA_ROUTER_URL}`)
      .then((res) => {
        dispatch(getAnaRoutersSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getAnaRoutersFailure(error));
      });
  };
}

export function getAna(jobNo, query) {
  return function (dispatch) {
    dispatch(getAnaRequest());

    return axios.post(`${BASE_URL}${EXPLORER_ANA_URL[0]}${jobNo}${EXPLORER_ANA_URL[1]}`, query)
      .then((res) => {
        dispatch(getAnaSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getAnaFailure(error));
      });
  };
}
