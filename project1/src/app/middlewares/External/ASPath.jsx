import axios from 'axios';
import {
  getSuggestRequest,
  getSuggestSuccess,
  getSuggestFailure,
  searchPathRequest,
  searchPathSuccess,
  searchPathFailure,
  getRouterRequest,
  getRouterSuccess,
  getRouterFailure,
  getBasicRequest,
  getBasicSuccess,
  getBasicFailure
} from '../../actions/External/ASPath';
import {
  BASE_URL,
  ASPATH_SUGGEST_URL,
  ASPATH_SEARCH_URL,
  ASPATH_GET_ROUTER_URL,
  ASPATH_BASIC_URL
} from '../../constants/Url';


export function getSuggest(query) {
  return function (dispatch) {
    dispatch(getSuggestRequest());

    const suggestUrlObj = ASPATH_SUGGEST_URL;
    const suggestUrl = (isNaN(parseInt(query, 10)) ? suggestUrlObj.nm + query :
      suggestUrlObj.all.map(item => `${item}${query}`).join(''));

    return axios.get(`${BASE_URL}${suggestUrl}`)
      .then((res) => {
        dispatch(getSuggestSuccess(Array.isArray(res.data) ? res.data : []));
      })
      .catch((error) => {
        dispatch(getSuggestFailure(error));
      });
  };
}

export function searchPath(query) {
  return function (dispatch) {
    dispatch(searchPathRequest());

    return axios.post(`${BASE_URL}${ASPATH_SEARCH_URL}`, query)
      .then((res) => {
        dispatch(searchPathSuccess(res.data ? res.data : null));
      })
      .catch((error) => {
        dispatch(searchPathFailure(error));
      });
  };
}

export function getRouter(query) {
  return function (dispatch) {
    dispatch(getRouterRequest());

    return axios.get(`${BASE_URL}${ASPATH_GET_ROUTER_URL[0]}${query}${ASPATH_GET_ROUTER_URL[1]}`)
      .then((res) => {
        dispatch(getRouterSuccess(res.data ? res.data : null));
      })
      .catch((error) => {
        dispatch(getRouterFailure(error));
      });
  };
}

export function getBasic(query) {
  return function (dispatch) {
    dispatch(getBasicRequest());

    return axios.get(`${BASE_URL}${ASPATH_BASIC_URL}${query}`)
      .then((res) => {
        dispatch(getBasicSuccess(res.data ? res.data : null));
        if (res.data) {
          dispatch(searchPath({ last: res.data.asNo }));
        }
      })
      .catch((error) => {
        dispatch(getBasicFailure(error));
      });
  };
}
