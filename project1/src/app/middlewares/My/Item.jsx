import axios from 'axios';
import {
  searchListRequest,
  searchListSuccess,
  searchListFailure,
  initListRequest,
  initListSuccess,
  initListFailure,
  initItemRequest,
  initItemSuccess,
  initItemFailure,
  saveItemRequest,
  saveItemSuccess,
  saveItemFailure,
  delItemRequest,
  delItemSuccess,
  delItemFailure
} from '../../actions/My/Item';
import {
  BASE_URL,
  ITEM_INIT_URL,
  ITEM_SEARCH_URL,
  ITEM_GET_ITEM_URL,
  ITEM_SAVE_URL,
  ITEM_DEL_URL
} from '../../constants/Url';


export function initList(type, domainType, page, query) {
  return function (dispatch) {
    dispatch(initListRequest(type));
    const searchUrlObj = ITEM_INIT_URL[domainType];
    let searchUrl = domainType === 'Country' || domainType === 'Line' ?
      searchUrlObj.all.join('') :
      domainType === 'IF' ? searchUrlObj.all.join(query) : searchUrlObj.nm;
    if (page > 1) {
      searchUrl = (`${searchUrl}&page=${page}`);
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

export function searchList(type, domainType, page, query, subQuery) {
  return function (dispatch) {
    dispatch(searchListRequest(type));
    const searchUrlObj = ITEM_SEARCH_URL[domainType];
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
