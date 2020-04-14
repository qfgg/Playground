import axios from 'axios';
import moment from 'moment';
import {
  searchRequest,
  searchSuccess,
  searchFailure,
  getTrfRequest,
  getTrfSuccess,
  getTrfFailure
} from './action';
import { BASE_URL, CHARTS_URL } from  '../../app/constants/Url';
import { ignoreSeconds } from '../../app/helper';


function intSearch(type, payload, url, size, side, succCallback, failCallback) {
  return function(dispatch) {
    dispatch(searchRequest({ type, side }));

    return axios.get(`${url[0]}${payload}${url[1]}${size || 5}${url[2]}`)
      .then((res) => {
        dispatch(searchSuccess({ res, type, side }));
        succCallback && succCallback(res);
      })
      .catch((error) => {
        dispatch(searchFailure({ error, type, side }));
        failCallback && failCallback(error);
      });
  };
}

function extractData(res) {
  const trf = {
    in: null,
    out: null
  };
  if (!res || !res.data || !res.data.charts || res.data.charts.length === 0) {
    return trf;
  }
  const chartArr = res.data.charts;
  for (let i = 0, len = chartArr.length; i < len; i++) {
    if ((chartArr[i].direction === 'in' || chartArr[i].direction === 'out') &&
      chartArr[i].avgMinMaxLast) {
      trf[chartArr[i].direction] = chartArr[i].avgMinMaxLast.last;
    }
  }
  return trf;
}

function getTrf(type, id, side) {
  const domain = type === 'as' ? 'asn' : type === 'interface' ? 'if' : type;;
  const s = side.toLowerCase() === 'internal' ? 'dst' :
    domain === 'asn' || domain === 'country' ? 'user' : 'server';
  const query = {
    type: side.toLowerCase(),
    requestType: 'search',
    // domainType: type === 'interface' ? 'if' : type,
    // domainValue: id,
    [s]: {
      [domain]: {
        value: [id]
      }
    },
    directionType: 'all',
    itemType: 'traffic',
    period:
    {
      start: ignoreSeconds(moment().subtract(5, 'minutes')),
      end: ignoreSeconds(moment())
    },
    aggregation: 'avg',
    interval: '1m',
    showDiff: false
  };

  return function(dispatch) {
    dispatch(getTrfRequest({ type, side, id }));

    return axios.post(`${BASE_URL}${CHARTS_URL}`, query)
      .then((res) => {
        const trf = extractData(res);
        dispatch(getTrfSuccess({ res: trf, type, side, id }));
      })
      .catch((error) => {
        dispatch(getTrfFailure({ error, type, side, id }));
      });
  };
}

const intSearchUtils = (function() {
  return {
    // common integration search requester
    search(type, payload, url, size, side, succCallback, failCallback) {
      window.dispatch(intSearch(type, payload, url, size, side, succCallback, failCallback));
    },
    fetchTraffic(type, id, side) {
      window.dispatch(getTrf(type, id, side));
    }
  };
}());

export default intSearchUtils;