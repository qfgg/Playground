import axios from 'axios';
import moment from 'moment';
import {
  getSuggestRequest,
  getSuggestSuccess,
  getSuggestFailure,
  searchDetailRequest,
  searchDetailSuccess,
  searchDetailFailure,
  setInputValue,
  getRelationNmListRequest,
  getRelationNmListSuccess,
  getRelationNmListFailure,
  getInterfaceByRouterRequest,
  getInterfaceByRouterSuccess,
  getInterfaceByRouterFailure,
  saveTmpFilterRequest,
  saveTmpFilterSuccess,
  saveTmpFilterFailure,
  getLatencyDetailRequest,
  getLatencyDetailSuccess,
  getLatencyDetailFailure,
  latencyChartRequest,
  latencyChartSuccess,
  latencyChartFailure
} from '../../actions/External/Detail';
import {
  BASE_URL,
  DETAIL_SUGGEST_URL,
  DETAIL_SEARCH_URL,
  DETAIL_URL,
  CHARTS_URL,
  MY_FILTER_SETS,
  GET_LATENCY_DETAIL_URL,
  LATENCY_CHART_URL
} from '../../constants/Url';
import chartUtils from '../../../lib/chartUtils';
import { ignoreSeconds } from '../../helper';

const CancelToken = axios.CancelToken;
let cancel;

export function getSuggest(type, query, subQuery) {
  return function (dispatch) {
    dispatch(getSuggestRequest(type));

    const suggestUrlObj = DETAIL_SUGGEST_URL[type];

    const suggestUrl = type === 'AS' ?
      suggestUrlObj.all.map(item => `${item}${query}`).join('') :
      type === 'Country' || type === 'Line' ?
        suggestUrlObj.all.map(item => `${item}${query}`).join('') :
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

function makePayload(routerNo, query) {
  const payload = {
    type: 'external',
    // domainType: 'router',
    // domainValue: routerNo.toString(),
    period: { start: query.period.start, end: query.period.end },
    relationType: ['server_if'],
    server: {
      router: {
        value: [routerNo.toString()]
      }
    }
  };
  const side = query.server ? 'server' : 'user';
  const domain = Object.keys(query[side])[0];
  payload[side] = {
    ...(payload[side] || {}),
    [domain]: query[side][domain]
  };
  return payload;
}

export function getInterfaceByRouter(routerNo, query) {
  return function (dispatch) {
    dispatch(getInterfaceByRouterRequest(routerNo));
    return axios.post(`${BASE_URL}${DETAIL_URL}`, makePayload(routerNo, query))
    .then((res) => {
      dispatch(getInterfaceByRouterSuccess(routerNo, (res.data || {}).server_if));
      if (res.data && res.data.server_if && res.data.server_if.length > 0) {
        res.data.server_if.forEach((item) => {
          const reqQuery = {
            ...query,
            server: {
              ...(query.server || {}),
              if: {
                value: [item]
              }
            },
            // fieldType: 'if',
            // fieldValue: item,
          };
          reqQuery.fieldType = 'server_if';
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

export function getLatencyDetail(domain, id, fn) {
  return function (dispatch) {
    dispatch(getLatencyDetailRequest(domain));

    return axios.get(`${BASE_URL}${GET_LATENCY_DETAIL_URL[domain]}${id}`)
    .then((res) => {
      dispatch(getLatencyDetailSuccess({ res: res.data, domain }));
      if (fn && fn instanceof Function) {
        fn(res.data);
      }
    })
    .catch((error) => {
      dispatch(getLatencyDetailFailure({ error, domain }));
    });
  };
}

export function getLatencyChart(country, as, fn) {
  return function (dispatch) {
    dispatch(latencyChartRequest({ country, as }));

    return axios.post(`${BASE_URL}${LATENCY_CHART_URL}`, {
      countryCd: country,
      as,
      start: ignoreSeconds(moment().subtract(6, 'hours')),
      end: ignoreSeconds(moment())
    })
    .then((res) => {
      dispatch(latencyChartSuccess({ res: res.data, country, as }));
      if (fn && fn instanceof Function) {
        fn(res.data);
      }
    })
    .catch((error) => {
      dispatch(latencyChartFailure({ error, country, as }));
    });
  };
}
