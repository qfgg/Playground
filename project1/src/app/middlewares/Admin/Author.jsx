import axios from 'axios';
import {
  initUserGrpRequest,
  initUserGrpSuccess,
  initUserGrpFailure,
  addUserGrpRequest,
  addUserGrpSuccess,
  addUserGrpFailure,
  delUserGrpRequest,
  delUserGrpSuccess,
  delUserGrpFailure,
  updateUserGrpRequest,
  updateUserGrpSuccess,
  updateUserGrpFailure,
  getGrpEmpRequest,
  getGrpEmpSuccess,
  getGrpEmpFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  delUserRequest,
  delUserSuccess,
  delUserFailure,
  initDeptRequest,
  initDeptSuccess,
  initDeptFailure,
  fetchEmpRequest,
  fetchEmpSuccess,
  fetchEmpFailure,
  fetchDeptRequest,
  fetchDeptSuccess,
  fetchDeptFailure,
  searchEmpRequest,
  searchEmpSuccess,
  searchEmpFailure,
  searchDeptRequest,
  searchDeptSuccess,
  searchDeptFailure,
  findMenuRequest,
  findMenuSuccess,
  findMenuFailure,
  saveMenuAthorRequest,
  saveMenuAthorSuccess,
  saveMenuAthorFailure
} from '../../actions/Admin/Author';
import {
  BASE_URL,
  INIT_GRP_URL,
  ADD_GRP_URL,
  DEL_GRP_URL,
  UPDATE_GRP_URL,
  GET_GRPEMP_URL,
  SAVE_USER_URL,
  DEL_USER_URL,
  INIT_DEPT_URL,
  GET_DEPTEMP_URL,
  GET_SUBDEPT_URL,
  SHARE_SUGGEST_URL,
  SEARCH_DEPT_URL,
  GET_GRP_AUTHOR_URL,
  SAVE_MENU_AUTHOR_URL
} from '../../constants/Url';


const getFlatMenu = (menu) => {
  let nodes = [...menu];
  const flatMenu = {};

  while (nodes.length > 0) {
    const curNode = nodes.shift();
    flatMenu[curNode.mnNo] = curNode;
    if (curNode.sub) {
      nodes = [...nodes, ...curNode.sub];
    }
  }
  flatMenu[0] = {
    authYn: 'Y',
    mnNm: 'All',
    mnNo: 0,
    sub: [...menu]
  };
  return flatMenu;
};

export function initUserGrp(fn) {
  return function (dispatch) {
    dispatch(initUserGrpRequest());

    return axios.get(`${BASE_URL}${INIT_GRP_URL}?page=1&size=1000`)
      .then((res) => {
        dispatch(initUserGrpSuccess(res));
        if (fn && fn instanceof Function) {
          fn(res.data);
        }
      })
      .catch((error) => {
        dispatch(initUserGrpFailure(error));
      });
  };
}

export function addUserGrp(payload, fn) {
  return function (dispatch) {
    dispatch(addUserGrpRequest());

    return axios.post(`${BASE_URL}${ADD_GRP_URL}`, payload)
      .then(() => {
        dispatch(addUserGrpSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(addUserGrpFailure(error));
      });
  };
}

export function delUserGrp(grpNo, fn) {
  return function (dispatch) {
    dispatch(delUserGrpRequest());

    return axios.delete(`${BASE_URL}${DEL_GRP_URL}/${grpNo}`)
      .then(() => {
        dispatch(delUserGrpSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(delUserGrpFailure(error));
      });
  };
}

export function updateUserGrp(id, payload, fn) {
  return function (dispatch) {
    dispatch(updateUserGrpRequest());

    return axios.put(`${BASE_URL}${UPDATE_GRP_URL}/${id}`, payload)
      .then(() => {
        dispatch(updateUserGrpSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(updateUserGrpFailure(error));
      });
  };
}

export function getGrpEmp(grpNo, fn) {
  return function (dispatch) {
    dispatch(getGrpEmpRequest());

    return axios.get(`${BASE_URL}${GET_GRPEMP_URL[0]}${grpNo}${GET_GRPEMP_URL[1]}?page=1&size=1000`)
      .then((res) => {
        dispatch(getGrpEmpSuccess(res));
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(getGrpEmpFailure(error));
      });
  };
}

export function addUser(grpNo, payload, fn) {
  return function (dispatch) {
    dispatch(addUserRequest());

    return axios.post(`${BASE_URL}${SAVE_USER_URL[0]}${grpNo}${SAVE_USER_URL[1]}`, payload)
      .then(() => {
        dispatch(addUserSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(addUserFailure(error));
      });
  };
}

export function delUser(grpNo, empNo, fn) {
  return function (dispatch) {
    dispatch(delUserRequest());

    return axios.delete(`${BASE_URL}${DEL_USER_URL[0]}${grpNo}${DEL_USER_URL[1]}${empNo}`)
      .then(() => {
        dispatch(delUserSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(delUserFailure(error));
      });
  };
}

export function initDept() {
  return function (dispatch) {
    dispatch(initDeptRequest());

    return axios.get(`${BASE_URL}${INIT_DEPT_URL}`)
      .then((res) => {
        dispatch(initDeptSuccess(res));
      })
      .catch((error) => {
        dispatch(initDeptFailure(error));
      });
  };
}

export function fetchEmp(deptCode, fn) {
  return function (dispatch) {
    dispatch(fetchEmpRequest(deptCode));

    return axios.get(`${BASE_URL}${GET_DEPTEMP_URL[0]}${deptCode}${GET_DEPTEMP_URL[1]}`)
      .then((res) => {
        dispatch(fetchEmpSuccess({ deptCode, res }));
        if (fn && fn instanceof Function && res && res.data) {
          fn(res.data);
        }
      })
      .catch((error) => {
        dispatch(fetchEmpFailure({ deptCode, error }));
      });
  };
}

export function fetchDept(deptCode) {
  return function (dispatch) {
    dispatch(fetchDeptRequest(deptCode));

    return axios.get(`${BASE_URL}${GET_SUBDEPT_URL[0]}${deptCode}${GET_SUBDEPT_URL[1]}`)
      .then((res) => {
        dispatch(fetchDeptSuccess({ deptCode, res }));
      })
      .catch((error) => {
        dispatch(fetchDeptFailure({ deptCode, error }));
      });
  };
}

export function searchEmp(keyword) {
  return function (dispatch) {
    dispatch(searchEmpRequest());

    return axios.get(`${BASE_URL}${SHARE_SUGGEST_URL.Employee[0]}${keyword}${SHARE_SUGGEST_URL.Employee[1]}${keyword}${SHARE_SUGGEST_URL.Employee[2]}${keyword}`)
      .then((res) => {
        dispatch(searchEmpSuccess(res));
      })
      .catch((error) => {
        dispatch(searchEmpFailure(error));
      });
  };
}

export function searchDept(keyword) {
  return function (dispatch) {
    dispatch(searchDeptRequest());

    return axios.get(`${BASE_URL}${SEARCH_DEPT_URL}${keyword}`)
      .then((res) => {
        dispatch(searchDeptSuccess(res));
      })
      .catch((error) => {
        dispatch(searchDeptFailure(error));
      });
  };
}

export function findMenu(grpNo, fn) {
  return function (dispatch) {
    dispatch(findMenuRequest());

    return axios.get(`${BASE_URL}${GET_GRP_AUTHOR_URL[0]}${grpNo}${GET_GRP_AUTHOR_URL[1]}`)
      .then((res) => {
        const flatMenu = getFlatMenu(res.data);
        dispatch(findMenuSuccess({ res: res.data, flatMenu }));
        if (fn && fn instanceof Function) {
          fn(res.data, flatMenu);
        }
      })
      .catch((error) => {
        dispatch(findMenuFailure(error));
      });
  };
}

export function saveMenuAthor(grpNo, payload, fn) {
  return function (dispatch) {
    dispatch(saveMenuAthorRequest());

    return axios.put(`${BASE_URL}${SAVE_MENU_AUTHOR_URL[0]}${grpNo}${SAVE_MENU_AUTHOR_URL[1]}`, payload)
      .then(() => {
        dispatch(saveMenuAthorSuccess());
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(saveMenuAthorFailure(error));
      });
  };
}
