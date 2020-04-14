import axios from 'axios';

import {
  chartReqCommonRequest,
  chartReqCommonSuccess,
  chartReqCommonFailure,
} from './action';

export default function chartReqCommon(query, url, type, succCallback, failCallback) {
  return function(dispatch) {
    dispatch(chartReqCommonRequest(type));

    return axios.post(url, query)
      .then((res) => {
        dispatch(chartReqCommonSuccess({res, type, compareTime: (query || {}).compareTime})); 
        succCallback && succCallback(res);
      })
      .catch((error) => {
        dispatch(chartReqCommonFailure({error, type}));
        failCallback && failCallback(error);
      });
  };
}