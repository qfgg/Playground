import axios from 'axios';
import {
  getSuggestRequest,
  getSuggestSuccess,
  getSuggestFailure,
  searchDetailRequest,
  searchDetailSuccess,
  searchDetailFailure,
  getRelationNmListRequest,
  getRelationNmListSuccess,
  getRelationNmListFailure,
  setInputValue,
  getInterfaceByRouterRequest,
  getInterfaceByRouterSuccess,
  getInterfaceByRouterFailure,
  saveTmpFilterRequest,
  saveTmpFilterSuccess,
  saveTmpFilterFailure
} from '../../actions/Internal/Detail';
import {
  BASE_URL,
  DETAIL_SUGGEST_URL,
  DETAIL_SEARCH_URL,
  DETAIL_URL,
  CHARTS_URL,
  MY_FILTER_SETS
} from '../../constants/Url';
import chartUtils from '../../../lib/chartUtils';

const CancelToken = axios.CancelToken;
let cancel;

export function getSuggest(type, query, subQuery) {
  return function (dispatch) {
    dispatch(getSuggestRequest(type));

    const suggestUrlObj = DETAIL_SUGGEST_URL[type];
    const reg = /^\d+$/;
    const suggestUrl = type === 'AS' ?
      (reg.test(query) ? suggestUrlObj.all.map(item => `${item}${query}`).join('') : `${suggestUrlObj.nm}${query}`) :
      type === 'Country' ? suggestUrlObj.all.map(item => `${item}${query}`).join('') :
      type === 'Interface' ? `${suggestUrlObj.all[0]}${subQuery}/interfaces${suggestUrlObj.all[1]}${query}` :
      `${suggestUrlObj.nm}${query}`;

    if (cancel) {
      cancel();
    }
    return axios.get(`${BASE_URL}${suggestUrl}`, {
      // eslint-disable-next-line func-names, prefer-arrow-callback
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    })
      .then((res) => {
        dispatch(getSuggestSuccess(type, Array.isArray(res.data) ? res.data : []));
      })
      .catch((error) => {
        dispatch(getSuggestFailure(type, error));
      });
  };
}

export function searchDetail(type, query) {
  return function (dispatch) {
    dispatch(searchDetailRequest(type));

    return axios.get(`${BASE_URL}${DETAIL_SEARCH_URL[type]}${query}`)
      .then((res) => {
        dispatch(searchDetailSuccess(type, res.data));
        dispatch(setInputValue(res.data));
      })
      .catch((error) => {
        dispatch(searchDetailFailure(type, error));
      });
  };
}

export function getRelationNmList(type, payload) {
  return function (dispatch) {
    dispatch(getRelationNmListRequest(type));

    return axios.post(`${BASE_URL}${DETAIL_URL}`, payload)
    .then((res) => {
      dispatch(getRelationNmListSuccess(type, res.data));
    })
    .catch((error) => {
      dispatch(getRelationNmListFailure(type, error));
    });
  };
}

function makePayload(routerNo, period) {
  return {
    type: 'external',
    domainType: 'router',
    domainValue: routerNo.toString(),
    period: { start: period.start, end: period.end },
    relationType: ['if']
  };
}

export function getInterfaceByRouter(routerNo, query) {
  return function (dispatch) {
    dispatch(getInterfaceByRouterRequest(routerNo));
    return axios.get(`${BASE_URL}${DETAIL_URL}`, makePayload(routerNo, query.period))
    .then((res) => {
      dispatch(getInterfaceByRouterSuccess(routerNo, (res.data || {}).if));
      if (res.data && res.data.if && res.data.length > 0) {
        res.data.if.forEach((item) => {
          const reqQuery = {
            ...query,
            server: {
              if: {
                value: [item]
              }
            },
            // fieldType: 'if',
            // fieldValue: item,
          };
          const url = `${BASE_URL}${CHARTS_URL}`;
          chartUtils.chartFetcher(reqQuery, url, `${routerNo}_${item}`);
        });
      }
    })
    .catch((error) => {
      dispatch(getInterfaceByRouterFailure(error));
    });
  };
}

export function saveTmpFilter(payload, fn) {
  return function (dispatch) {
    dispatch(saveTmpFilterRequest());

    return axios.post(`${BASE_URL}${MY_FILTER_SETS}`, payload)
    .then((res) => {
      dispatch(saveTmpFilterSuccess());
      if (fn && fn instanceof Function) {
        fn(res.data);
      }
    })
    .catch((error) => {
      dispatch(saveTmpFilterFailure(error));
    });
  };
}
