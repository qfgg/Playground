import axios from 'axios';
import {
  getRouterRequest,
  getRouterSuccess,
  getRouterFailure,
  updateRoutersRequest,
  updateRoutersSuccess,
  updateRoutersFailure,
  getIFRequest,
  getIFSuccess,
  getIFFailure,
  updateIFsRequest,
  updateIFssuccess,
  updateIFsFailure
} from '../../actions/Admin/RouterManage';
import {
  BASE_URL,
  ROUTER_INIT_URL,
  UPDATE_ROUTERS_URL,
  EXPLORER_INIT_URL,
  UPDATE_IFS_URL
} from '../../constants/Url';


export function initRouter(page, size = 15, fn) {
  return function (dispatch) {
    dispatch(getRouterRequest());
    return axios.get(`${BASE_URL}${ROUTER_INIT_URL[0]}${page || 1}${ROUTER_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        if (fn && fn instanceof Function) {
          fn((res || {}).data || []);
        }
        dispatch(getRouterSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getRouterFailure(error));
      });
  };
}

export function updateRouters(payload, fn, page, size) {
  return function (dispatch) {
    dispatch(updateRoutersRequest());
    return axios.put(`${BASE_URL}${UPDATE_ROUTERS_URL}`, payload)
      .then(() => {
        dispatch(updateRoutersSuccess());
        // refresh router list
        axios.get(`${BASE_URL}${ROUTER_INIT_URL[0]}${page}${ROUTER_INIT_URL[1]}${size}`)
          .then((res) => {
            dispatch(getRouterSuccess({ res, page }));
            if (fn && fn instanceof Function) {
              fn();
            }
          });
      })
      .catch((error) => {
        dispatch(updateRoutersFailure(error));
      });
  };
}

export function initIF(routerNo) {
  return function (dispatch) {
    dispatch(getIFRequest(routerNo));
    return axios.get(`${BASE_URL}${EXPLORER_INIT_URL.IF.all[0]}${routerNo}${EXPLORER_INIT_URL.IF.all[1]}`)
      .then((res) => {
        dispatch(getIFSuccess({ res: res.data, routerNo }));
      })
      .catch((error) => {
        dispatch(getIFFailure({ error, routerNo }));
      });
  };
}

export function updateIFs(payload, fn, routerNo) {
  return function (dispatch) {
    dispatch(updateIFsRequest());
    return axios.put(`${BASE_URL}${UPDATE_IFS_URL}`, payload)
      .then(() => {
        dispatch(updateIFssuccess());
        // refresh interface list
        axios.get(`${BASE_URL}${EXPLORER_INIT_URL.IF.all[0]}${routerNo}${EXPLORER_INIT_URL.IF.all[1]}`)
          .then((res) => {
            dispatch(getIFSuccess({ res: res.data, routerNo }));
            if (fn && fn instanceof Function) {
              fn();
            }
          });
      })
      .catch((error) => {
        dispatch(updateIFsFailure(error));
      });
  };
}
