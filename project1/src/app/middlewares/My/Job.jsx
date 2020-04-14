import axios from 'axios';
import {
  initJobRequest,
  initJobSuccess,
  initJobFailure,
  delJobRequest,
  delJobSuccess,
  delJobFailure,
  updateNameRequest,
  updateNameSuccess,
  updateNameFailure,
  pauseJobRequest,
  pauseJobSuccess,
  pauseJobFailure,
  resumeJobRequest,
  resumeJobSuccess,
  resumeJobFailure,
  checkExpireRequest,
  checkExpireSuccess,
  checkExpireFailure,
  updateExpireRequest,
  updateExpireSuccess,
  updateExpireFailure,
  restartExpireRequest,
  restartExpireSuccess,
  restartExpireFailure
} from '../../actions/My/Job';
import {
  BASE_URL,
  JOB_INIT_URL,
  JOB_DEL_URL,
  JOB_GET_JOB_URL,
  JOB_PAUSE_URL,
  JOB_RESUME_URL,
  JOB_CHECK_EXPIRE_URL,
  JOB_UPDATE_EXPIRE_URL,
  JOB_RESTART_EXPIRE_URL
} from '../../constants/Url';


export function initJob(page, size = 10) {
  return function (dispatch) {
    dispatch(initJobRequest());

    return axios.get(`${BASE_URL}${JOB_INIT_URL[0]}${page || 1}${JOB_INIT_URL[1]}${size}`)
      .then((res) => {
        dispatch(initJobSuccess({ res, page }));
      })
      .catch((error) => {
        dispatch(initJobFailure(error));
      });
  };
}

export function delJob(jobNo, curPage, size = 10) {
  return function (dispatch) {
    dispatch(delJobRequest());

    return axios.delete(`${BASE_URL}${JOB_DEL_URL}${jobNo}`)
      .then(() => {
        dispatch(delJobSuccess());
        dispatch(initJob(curPage, size));
      })
      .catch((error) => {
        dispatch(delJobFailure(error));
      });
  };
}

export function updateName(jobNo, payload, curPage, size = 10) {
  return function (dispatch) {
    dispatch(updateNameRequest());

    return axios.put(`${BASE_URL}${JOB_GET_JOB_URL}${jobNo}`, payload)
    .then(() => {
      dispatch(updateNameSuccess());
      dispatch(initJob(curPage, size));
    })
    .catch((error) => {
      dispatch(updateNameFailure(error));
    });
  };
}

export function pauseJob(jobNo, curPage, size = 10) {
  return function (dispatch) {
    dispatch(pauseJobRequest(jobNo));

    return axios.get(`${BASE_URL}${JOB_PAUSE_URL}${jobNo}`)
      .then((res) => {
        dispatch(pauseJobSuccess({ res: res.data, jobNo }));
        dispatch(initJob(curPage, size));
      })
      .catch((error) => {
        dispatch(pauseJobFailure({ error, jobNo }));
      });
  };
}

export function resumeJob(jobNo, curPage, size = 10) {
  return function (dispatch) {
    dispatch(resumeJobRequest(jobNo));

    return axios.get(`${BASE_URL}${JOB_RESUME_URL}${jobNo}`)
      .then((res) => {
        dispatch(resumeJobSuccess({ res: res.data, jobNo }));
        dispatch(initJob(curPage, size));
      })
      .catch((error) => {
        dispatch(resumeJobFailure({ error, jobNo }));
      });
  };
}

export function checkExpire(jobNo, yesFn, noFn) {
  return function (dispatch) {
    dispatch(checkExpireRequest(jobNo));

    return axios.get(`${BASE_URL}${JOB_CHECK_EXPIRE_URL[0]}${jobNo}${JOB_CHECK_EXPIRE_URL[1]}`)
    .then((res) => {
      if (res.data) {
        yesFn();
      } else {
        noFn();
      }
      dispatch(checkExpireSuccess({ res: res.data, jobNo }));
    })
    .catch((error) => {
      dispatch(checkExpireFailure({ error, jobNo }));
    });
  };
}

export function updateExpire(jobNo, curPage, size = 10) {
  return function (dispatch) {
    dispatch(updateExpireRequest(jobNo));

    return axios.put(`${BASE_URL}${JOB_UPDATE_EXPIRE_URL[0]}${jobNo}${JOB_UPDATE_EXPIRE_URL[1]}`)
      .then((res) => {
        dispatch(updateExpireSuccess({ res: res.data, jobNo }));
        dispatch(initJob(curPage, size));
      })
      .catch((error) => {
        dispatch(updateExpireFailure({ error, jobNo }));
      });
  };
}

export function restartExpire(jobNo, curPage, size = 10) {
  return function (dispatch) {
    dispatch(restartExpireRequest(jobNo));

    return axios.put(`${BASE_URL}${JOB_RESTART_EXPIRE_URL[0]}${jobNo}${JOB_RESTART_EXPIRE_URL[1]}`)
      .then((res) => {
        dispatch(restartExpireSuccess({ res: res.data, jobNo }));
        dispatch(initJob(curPage, size));
      })
      .catch((error) => {
        dispatch(restartExpireFailure({ error, jobNo }));
      });
  };
}
