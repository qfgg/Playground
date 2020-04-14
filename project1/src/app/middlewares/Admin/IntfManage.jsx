import axios from 'axios';
import {
  getInterfaceRequest,
  getInterfaceSuccess,
  getInterfaceFailure,
} from '../../actions/Admin/IntfManage';
import { BASE_URL, INTERFACE_INIT_URL } from '../../constants/Url';


export function initInterface(page, size = 15) {
  return function (dispatch) {
    dispatch(getInterfaceRequest());
    return axios.get(`${BASE_URL}${INTERFACE_INIT_URL[0]}${page || 1}${INTERFACE_INIT_URL[1]}${size}`)
      .then((res) => {
        page = page || 1;
        dispatch(getInterfaceSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(getInterfaceFailure(error));
      });
  };
}
