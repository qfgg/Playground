import axios from 'axios';
import moment from 'moment';
import {
  initRouterRequest,
  initRouterSuccess,
  initRouterFailure,
  getIFRequest,
  getIFSuccess,
  getIFFailure
} from '../../actions/Reports/Misconfig';
import {
  chartReqCommonRequest,
  chartReqCommonSuccess,
  chartReqCommonFailure,
} from '../../../lib/chartUtils/ChartRequestCommon/action';
import {
  BASE_URL,
  ROUTER_EXC_INIT_URL,
  DETAIL_URL,
  CHARTS_URL,
  MNS_CHART_URL
} from '../../constants/Url';
import { ignoreSeconds } from '../../helper';
import chartUtils from '../../../lib/chartUtils';


export function initRouter(page, size = 6, fn) {
  return function (dispatch) {
    dispatch(initRouterRequest(page || 1));
    return axios.get(`${BASE_URL}${ROUTER_EXC_INIT_URL[0]}${page || 1}${ROUTER_EXC_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        const list = (res || {}).data || [];
        if (fn && fn instanceof Function) {
          fn(list);
        }
        if (list.length > 0) {
          list.forEach(item => dispatch(getIF(item.routerNo)));
        }
        dispatch(initRouterSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(initRouterFailure({ error, page }));
      });
  };
}

function makePayload(routerNo) {
  const payload = {
    type: 'external',
    period: {
      start: ignoreSeconds(moment().subtract(6, 'hours')),
      end: ignoreSeconds(moment())
    },
    relationType: ['server_if'],
    server: {
      router: {
        value: [routerNo.toString()]
      }
    },
    showName: true
  };
  return payload;
}

export function getIF(routerNo) {
  return function (dispatch) {
    dispatch(getIFRequest(routerNo));
    return axios.post(`${BASE_URL}${DETAIL_URL}`, makePayload(routerNo))
    .then((res) => {
      dispatch(getIFSuccess({ routerNo, res: (res.data || {}).server_if }));
      if (res.data && res.data.server_if) {
        for (const key in res.data.server_if) {
          const reqQuery = {
            type: 'external',
            period: {
              start: ignoreSeconds(moment().subtract(6, 'hours')),
              end: ignoreSeconds(moment())
            },
            server: {
              if: {
                value: [key]
              }
            },
            requestType: 'detail_relation',
            fieldTopLimit: 0,
            // fieldType: 'server_if',
            // fieldValue: item,
            aggregation: 'avg',
            interval: '1m',
            itemType: 'traffic',
            directionType: 'all',
            showDiff: false
          };
          const url = `${BASE_URL}${CHARTS_URL}`;
          chartUtils.chartFetcher(reqQuery, url, `${routerNo}_${key}`);
          dispatch(getNMS(routerNo, key));
        }
      }
    })
    .catch((error) => {
      dispatch(getIFFailure({ routerNo, error }));
    });
  };
}

export function getNMS(routerNo, ifNo) {
  return function (dispatch) {
    dispatch(chartReqCommonRequest(`nms_${routerNo}_${ifNo}`));
    return axios.get(`${BASE_URL}${MNS_CHART_URL}${ifNo}`)
      .then((res) => {
        dispatch(chartReqCommonSuccess({ type: `nms_${routerNo}_${ifNo}`, res }));
      })
      .catch((error) => {
        dispatch(chartReqCommonFailure({ type: `nms_${routerNo}_${ifNo}`, error }));
      });
  };
}
