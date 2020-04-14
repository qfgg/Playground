import axios from 'axios';
import {
  saveTmpFilterRequest,
  saveTmpFilterSuccess,
  saveTmpFilterFailure
} from '../../actions/External/Dashboard';
import {
  BASE_URL,
  MY_FILTER_SETS
} from '../../constants/Url';


export function saveTmpFilter(payload, fn) {
  return function (dispatch) {
    dispatch(saveTmpFilterRequest());

    return axios.post(`${BASE_URL}${MY_FILTER_SETS}`, payload)
    .then((res) => {
      dispatch(saveTmpFilterSuccess());
      if (fn && fn instanceof Function) {
        fn(res.data);
      }
    })
    .catch((error) => {
      dispatch(saveTmpFilterFailure(error));
    });
  };
}
