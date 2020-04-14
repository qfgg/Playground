import axios from 'axios';
import {
  initListRequest,
  initListSuccess,
  initListFailure,
  searchListRequest,
  searchListSuccess,
  searchListFailure,
  saveItemRequest,
  saveItemSuccess,
  saveItemFailure,
  delItemRequest,
  delItemSuccess,
  delItemFailure,
  initItemRequest,
  initItemSuccess,
  initItemFailure,
  findBillingRequest,
  findBillingSuccess,
  findBillingFailure
} from '../../actions/Reports/Billing';
import {
  BASE_URL,
  BILLING_INIT_URL,
  BILLING_SEARCH_URL,
  ITEM_GET_ITEM_URL,
  ITEM_SAVE_URL,
  ITEM_DEL_URL,
  BILLING_FIND_URL
} from '../../constants/Url';


export function initList(type, domainType, page) {
  return function (dispatch) {
    dispatch(initListRequest(type));
    let searchUrl = BILLING_INIT_URL[type][0];
    if (page > 1) {
      searchUrl = BILLING_INIT_URL[type][2] ?
        (`${searchUrl}${BILLING_INIT_URL[type][1]}${page}${BILLING_INIT_URL[type][2]}`)
        : (`${searchUrl}${BILLING_INIT_URL[type][1]}${page}`);
    } else {
      searchUrl = BILLING_INIT_URL[type][2] ?
        (`${searchUrl}${BILLING_INIT_URL[type][1]}${BILLING_INIT_URL[type][2]}`)
        : (`${searchUrl}${BILLING_INIT_URL[type][1]}`);
    }

    return axios.get(`${BASE_URL}${searchUrl}`)
      .then((res) => {
        res = res ? res.data : [];
        dispatch(initListSuccess({ type, res, page }));
      })
      .catch((error) => {
        dispatch(initListFailure({ type, error }));
      });
  };
}

export function searchList(type, domainType, page, query) {
  return function (dispatch) {
    dispatch(searchListRequest(type));
    let searchUrl = `${BILLING_SEARCH_URL[type][0]}${query}`;
    if (page > 1) {
      searchUrl = BILLING_SEARCH_URL[type][2] ?
        (`${searchUrl}${BILLING_SEARCH_URL[type][1]}${page}${BILLING_SEARCH_URL[type][2]}`)
        : (`${searchUrl}${BILLING_SEARCH_URL[type][1]}${page}`);
    } else {
      searchUrl = BILLING_SEARCH_URL[type][2] ?
        (`${searchUrl}${BILLING_SEARCH_URL[type][1]}${BILLING_SEARCH_URL[type][2]}`)
        : (`${searchUrl}${BILLING_SEARCH_URL[type][1]}`);
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

export function findBilling(payload) {
  return function (dispatch) {
    dispatch(findBillingRequest());

    return axios.post(`${BASE_URL}${BILLING_FIND_URL}`, payload)
    .then((res) => {
      dispatch(findBillingSuccess(res.data || {}));
    })
    .catch((error) => {
      dispatch(findBillingFailure(error));
    });
  };
}
