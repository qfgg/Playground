import axios from 'axios';
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
} from '../../actions/Login';
import { getMyMenu } from '../App/App';
import { BASE_URL, AUTH_URL } from '../../constants/Url';


export default function userLogin(userInfo, succCallback, failCallback) {
  return function (dispatch) {
    axios.defaults.withCredentials = true;
    dispatch(userLoginRequest());
    const url = `${BASE_URL}${AUTH_URL}`;
    return axios.post(url, userInfo)
      .then((res) => {
        const token = res.headers['x-access-token'];
        dispatch(userLoginSuccess(res.data));
        if (token && token !== '') {
          localStorage.setItem('userToken', token);
          document.cookie = `nssTok=${token};domain=navercorp.com;path=/`;
          // axios.defaults.headers.common.Authorization = token;
          dispatch(getMyMenu(succCallback.bind(null, res.data)));
        }
        // if (succCallback) {
        //   succCallback(res.data);
        // }
      })
      .catch((error) => {
        dispatch(userLoginFailure((error.response || {}).data));
        if (failCallback && error) {
          if (error.response && error.response.data) {
            failCallback(error.response.data.error);
          } else {
            failCallback(error.error);
          }
        }
      });
  };
}
