import axios from 'axios';
import {
  findMenuRequest,
  findMenuSuccess,
  findMenuFailure,
  addMenuRequest,
  addMenuSuccess,
  addMenuFailure,
  getMenuRequest,
  getMenuSuccess,
  getMenuFailure,
  delMenuRequest,
  delMenuSuccess,
  delMenuFailure,
  updateMenuRequest,
  updateMenuSuccess,
  updateMenuFailure,
  getGrpRequest,
  getGrpSuccess,
  getGrpFailure,
  updateGrpRequest,
  updateGrpSuccess,
  updateGrpFailure
} from '../../actions/Admin/Menu';
import { getMyMenu } from '../App/App';
import {
  BASE_URL,
  FIND_MENU_URL,
  ADD_MENU_URL,
  EDIT_MENU_URL,
  GET_MENU_GRP_URL,
  UPDATE_MENU_GRP_URL
} from '../../constants/Url';


export function findMenu(mnNo, fn) {
  return function (dispatch) {
    dispatch(findMenuRequest(mnNo));

    return axios.get(`${BASE_URL}${FIND_MENU_URL}${mnNo}`)
      .then((res) => {
        dispatch(findMenuSuccess({ res: res.data, mnNo }));
        if (fn && fn instanceof Function) {
          fn(res.data);
        }
      })
      .catch((error) => {
        dispatch(findMenuFailure({ error, mnNo }));
      });
  };
}

export function addMenu(payload, fn) {
  return function (dispatch) {
    dispatch(addMenuRequest());

    return axios.post(`${BASE_URL}${ADD_MENU_URL}`, payload)
      .then(() => {
        dispatch(addMenuSuccess());
        dispatch(getMyMenu());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(addMenuFailure(error));
      });
  };
}

export function getMenu(mnNo, fn) {
  return function (dispatch) {
    dispatch(getMenuRequest(mnNo));

    return axios.get(`${BASE_URL}${EDIT_MENU_URL}${mnNo}`)
      .then((res) => {
        dispatch(getMenuSuccess({ mnNo, res: res.data }));
        if (fn && fn instanceof Function) {
          fn(res.data);
        }
      })
      .catch((error) => {
        dispatch(getMenuFailure({ mnNo, error }));
      });
  };
}

export function delMenu(mnNo, fn) {
  return function (dispatch) {
    dispatch(delMenuRequest(mnNo));

    return axios.delete(`${BASE_URL}${EDIT_MENU_URL}${mnNo}`)
      .then(() => {
        dispatch(delMenuSuccess(mnNo));
        dispatch(getMyMenu());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(delMenuFailure({ mnNo, error }));
      });
  };
}

export function updateMenu(mnNo, payload, fn) {
  return function (dispatch) {
    dispatch(updateMenuRequest());

    return axios.put(`${BASE_URL}${EDIT_MENU_URL}${mnNo}`, payload)
      .then(() => {
        dispatch(updateMenuSuccess());
        dispatch(getMyMenu());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(updateMenuFailure({ mnNo, error }));
      });
  };
}

export function getGrp(mnNo, fn) {
  return function (dispatch) {
    dispatch(getGrpRequest(mnNo));

    return axios.get(`${BASE_URL}${GET_MENU_GRP_URL[0]}${mnNo}${GET_MENU_GRP_URL[1]}`)
      .then((res) => {
        dispatch(getGrpSuccess({ mnNo, res: res.data }));
        if (fn && fn instanceof Function) {
          fn(res.data);
        }
      })
      .catch((error) => {
        dispatch(getGrpFailure({ mnNo, error }));
      });
  };
}

export function updateGrp(mnNo, payload, fn) {
  return function (dispatch) {
    dispatch(updateGrpRequest());

    return axios.put(`${BASE_URL}${UPDATE_MENU_GRP_URL[0]}${mnNo}${UPDATE_MENU_GRP_URL[1]}`,
      payload)
      .then(() => {
        dispatch(updateGrpSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(updateGrpFailure({ mnNo, error }));
      });
  };
}
