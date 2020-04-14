import axios from 'axios';
import {
  initCountryRequest,
  initCountrySuccess,
  initCountryFailure,
  initMonthRequest,
  initMonthSuccess,
  initMonthFailure,
  getCountryRequest,
  getCountrySuccess,
  getCountryFailure
} from '../../actions/Reports/Country';
import {
  BASE_URL,
  MONTH_INIT_URL,
  COUNTRY_SEARCH_URL,
  COUNTRY_ALL_URL
} from '../../constants/Url';


export function initCountry(page, size = 15, payload = {}, fn) {
  return function (dispatch) {
    dispatch(initCountryRequest(page || 1));
    return axios.post(`${BASE_URL}${COUNTRY_SEARCH_URL[0]}${page || 1}${COUNTRY_SEARCH_URL[1]}${size}`, payload)
      .then((res) => {
        page = page || 1;
        dispatch(initCountrySuccess({ res, page }));
        if (typeof fn === 'function' && res.headers && res.headers['x-total-count']) {
          fn(res.headers['x-total-count']);
        }
      })
      .catch((error) => {
        dispatch(initCountryFailure({ error, page }));
      });
  };
}

export function initMonth() {
  return function (dispatch) {
    dispatch(initMonthRequest());
    return axios.get(`${BASE_URL}${MONTH_INIT_URL}`)
      .then((res) => {
        dispatch(initMonthSuccess(res.data));
      })
      .catch((error) => {
        dispatch(initMonthFailure(error));
      });
  };
}

export function getCountry(payload = {}, fn) {
  return function (dispatch) {
    dispatch(getCountryRequest());
    return axios.post(`${BASE_URL}${COUNTRY_ALL_URL}`, payload)
      .then((res) => {
        dispatch(getCountrySuccess(res.data || []));
        if (typeof fn === 'function') {
          fn(res.data || []);
        }
      })
      .catch((error) => {
        dispatch(getCountryFailure(error));
      });
  };
}
