import axios from 'axios';
import {
  getMyMenuRequest,
  getMyMenuSuccess,
  getMyMenuFailure
} from '../../actions/App/App';
import { filterMenu } from '../../helper';
import { BASE_URL, GET_MY_MENU_URL } from '../../constants/Url';


export function getMyMenu(fn) {
  return function (dispatch) {
    dispatch(getMyMenuRequest());

    return axios.get(`${BASE_URL}${GET_MY_MENU_URL}`)
      .then((res) => {
        const menu = filterMenu(res.data);
        dispatch(getMyMenuSuccess(menu));
        localStorage.setItem('myMenu', JSON.stringify(menu));
        if (fn && fn instanceof Function) {
          fn();
        }
      })
      .catch((error) => {
        dispatch(getMyMenuFailure(error));
      });
  };
}
