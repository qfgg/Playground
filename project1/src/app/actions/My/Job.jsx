import * as types from '../../constants/My/Jobs/ActionTypes';


export const setCurPage = target => ({
  type: types.SET_CUR_PAGE,
  payload: target
});

export const toggleEditFlag = jobNo => ({
  type: types.TOGGLE_EDIT_FLAG,
  payload: jobNo
});

export const initJobRequest = () => ({
  type: types.INIT_JOB_REQUEST
});

export const initJobSuccess = ({ res, page } = {}) => ({
  type: types.INIT_JOB_SUCCESS,
  payload: { res, page }
});

export const initJobFailure = error => ({
  type: types.INIT_JOB_FAILURE,
  payload: error
});

export const delJobRequest = () => ({
  type: types.DEL_JOB_REQUEST
});

export const delJobSuccess = jobNo => ({
  type: types.DEL_JOB_SUCCESS,
  payload: jobNo
});

export const delJobFailure = error => ({
  type: types.DEL_JOB_FAILURE,
  payload: error
});

export const updateNameRequest = () => ({
  type: types.UPDATE_NAME_REQUEST
});

export const updateNameSuccess = job => ({
  type: types.UPDATE_NAME_SUCCESS,
  payload: job
});

export const updateNameFailure = error => ({
  type: types.UPDATE_NAME_FAILURE,
  payload: error
});

export const pauseJobRequest = jobNo => ({
  type: types.PAUSE_JOB_REQUEST,
  payload: jobNo
});

export const pauseJobSuccess = ({ res, jobNo } = {}) => ({
  type: types.PAUSE_JOB_SUCCESS,
  payload: { res, jobNo }
});

export const pauseJobFailure = ({ error, jobNo } = {}) => ({
  type: types.PAUSE_JOB_FAILURE,
  payload: { error, jobNo }
});

export const resumeJobRequest = jobNo => ({
  type: types.RESUME_JOB_REQUEST,
  payload: jobNo
});

export const resumeJobSuccess = ({ res, jobNo } = {}) => ({
  type: types.RESUME_JOB_SUCCESS,
  payload: { res, jobNo }
});

export const resumeJobFailure = ({ error, jobNo } = {}) => ({
  type: types.RESUME_JOB_FAILURE,
  payload: { error, jobNo }
});

export const checkExpireRequest = jobNo => ({
  type: types.CHECK_EXPIRE_REQUEST,
  payload: jobNo
});

export const checkExpireSuccess = ({ jobNo, res } = {}) => ({
  type: types.CHECK_EXPIRE_SUCCESS,
  payload: { jobNo, res }
});

export const checkExpireFailure = ({ jobNo, error } = {}) => ({
  type: types.CHECK_EXPIRE_FAILURE,
  payload: { jobNo, error }
});

export const updateExpireRequest = jobNo => ({
  type: types.UPDATE_EXPIRE_REQUEST,
  payload: jobNo
});

export const updateExpireSuccess = ({ jobNo, res } = {}) => ({
  type: types.UPDATE_EXPIRE_SUCCESS,
  payload: { jobNo, res }
});

export const updateExpireFailure = ({ jobNo, error } = {}) => ({
  type: types.UPDATE_EXPIRE_FAILURE,
  payload: { jobNo, error }
});

export const clearrestartExpireError = jobNo => ({
  type: types.CLEAR_RESTART_EXPIRE_ERROR,
  payload: jobNo
});

export const restartExpireRequest = jobNo => ({
  type: types.RESTART_EXPIRE_REQUEST,
  payload: jobNo
});

export const restartExpireSuccess = ({ jobNo, res } = {}) => ({
  type: types.RESTART_EXPIRE_SUCCESS,
  payload: { jobNo, res }
});

export const restartExpireFailure = ({ jobNo, error } = {}) => ({
  type: types.RESTART_EXPIRE_FAILURE,
  payload: { jobNo, error }
});

export const setEntriesPerPage = size => ({
  type: types.SET_ENTRIES_PERPAGE,
  payload: size
});
