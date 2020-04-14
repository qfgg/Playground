import * as types from '../../constants/My/Jobs/ActionTypes';


const defaultState = {
  initJobStatus: {},
  delJobStatus: {},
  updateNmStatus: {},
  pauseJobStatus: {},
  resumeJobStatus: {},
  checkExpireStatus: {},
  updateExpireStatus: {},
  restartExpireStatus: {},
  jobList: [],
  editFlag: {},
  curPage: 1,
  totalCnt: 0,
  totalEntries: 0,
  entriesPerPage: 15,
};

export const myJobReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.TOGGLE_EDIT_FLAG:
    return {
      ...state,
      editFlag: {
        ...state.editFlag,
        [payload]: !state.editFlag[payload]
      }
    };

  case types.INIT_JOB_REQUEST:
    return {
      ...state,
      initJobStatus: {
        ...state.initJobStatus,
        jobList: [],
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.INIT_JOB_SUCCESS:
    return {
      ...state,
      initJobStatus: {
        ...state.initJobStatus,
        isFetching: false
      },
      jobList: payload ? payload.res.data : state.jobList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : state.totalCnt,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.INIT_JOB_FAILURE:
    return {
      ...state,
      initJobStatus: {
        ...state.initJobStatus,
        isFetching: false,
        error: payload
      }
    };

  case types.DEL_JOB_REQUEST:
    return {
      ...state,
      delJobStatus: {
        ...state.delJobStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_JOB_SUCCESS:
    return {
      ...state,
      delJobStatus: {
        ...state.delJobStatus,
        isDeleting: false
      }
    };

  case types.DEL_JOB_FAILURE:
    return {
      ...state,
      delJobStatus: {
        ...state.delJobStatus,
        isDeleting: false,
        error: payload
      }
    };

  case types.UPDATE_NAME_REQUEST:
    return {
      ...state,
      updateNmStatus: {
        ...state.updateNmStatus,
        isUpdating: true,
        error: ''
      }
    };

  case types.UPDATE_NAME_SUCCESS:
    return {
      ...state,
      updateNmStatus: {
        ...state.updateNmStatus,
        isUpdating: false
      }
    };

  case types.UPDATE_NAME_FAILURE:
    return {
      ...state,
      updateNmStatus: {
        ...state.updateNmStatus,
        isUpdating: false,
        error: payload
      }
    };

  case types.PAUSE_JOB_REQUEST:
    return {
      ...state,
      pauseJobStatus: {
        ...state.pauseJobStatus,
        [payload]: {
          isPausing: true,
          error: ''
        }
      }
    };

  case types.PAUSE_JOB_SUCCESS:
    return {
      ...state,
      pauseJobStatus: {
        ...state.pauseJobStatus,
        [payload.jobNo]: {
          ...state.pauseJobStatus[payload.jobNo],
          isPausing: false,
          res: payload.res
        }
      }
    };

  case types.PAUSE_JOB_FAILURE:
    return {
      ...state,
      pauseJobStatus: {
        ...state.pauseJobStatus,
        [payload.jobNo]: {
          ...state.pauseJobStatus[payload.jobNo],
          isPausing: false,
          error: payload.error
        }
      }
    };

  case types.RESUME_JOB_REQUEST:
    return {
      ...state,
      resumeJobStatus: {
        ...state.resumeJobStatus,
        [payload]: {
          isResuming: true,
          error: ''
        }
      }
    };

  case types.RESUME_JOB_SUCCESS:
    return {
      ...state,
      resumeJobStatus: {
        ...state.resumeJobStatus,
        [payload.jobNo]: {
          ...state.resumeJobStatus[payload.jobNo],
          isResuming: false,
          res: payload.res
        }
      }
    };

  case types.RESUME_JOB_FAILURE:
    return {
      ...state,
      resumeJobStatus: {
        ...state.resumeJobStatus,
        [payload.jobNo]: {
          ...state.resumeJobStatus[payload.jobNo],
          isResuming: false,
          error: payload.error
        }
      }
    };

  case types.CHECK_EXPIRE_REQUEST:
    return {
      ...state,
      checkExpireStatus: {
        ...state.checkExpireStatus,
        [payload]: {
          isChecking: true,
          error: ''
        }
      }
    };

  case types.CHECK_EXPIRE_SUCCESS:
    return {
      ...state,
      checkExpireStatus: {
        ...state.checkExpireStatus,
        [payload.jobNo]: {
          ...state.checkExpireStatus[payload.jobNo],
          isChecking: false,
          res: payload.res
        }
      }
    };

  case types.CHECK_EXPIRE_FAILURE:
    return {
      ...state,
      checkExpireStatus: {
        ...state.checkExpireStatus,
        [payload.jobNo]: {
          ...state.checkExpireStatus[payload.jobNo],
          isChecking: false,
          error: payload.error
        }
      }
    };

  case types.UPDATE_EXPIRE_REQUEST:
    return {
      ...state,
      updateExpireStatus: {
        ...state.updateExpireStatus,
        [payload]: {
          isChecking: true,
          error: ''
        }
      }
    };

  case types.UPDATE_EXPIRE_SUCCESS:
    return {
      ...state,
      updateExpireStatus: {
        ...state.updateExpireStatus,
        [payload.jobNo]: {
          ...state.updateExpireStatus[payload.jobNo],
          isChecking: false,
          res: payload.res
        }
      }
    };

  case types.UPDATE_EXPIRE_FAILURE:
    return {
      ...state,
      updateExpireStatus: {
        ...state.updateExpireStatus,
        [payload.jobNo]: {
          ...state.updateExpireStatus[payload.jobNo],
          isChecking: false,
          error: payload.error
        }
      }
    };

  case types.CLEAR_RESTART_EXPIRE_ERROR:
    return {
      ...state,
      restartExpireStatus: {
        ...state.restartExpireStatus,
        [payload]: {
          isChecking: false,
          error: ''
        }
      }
    };

  case types.RESTART_EXPIRE_REQUEST:
    return {
      ...state,
      restartExpireStatus: {
        ...state.restartExpireStatus,
        [payload]: {
          isChecking: true,
          error: ''
        }
      }
    };

  case types.RESTART_EXPIRE_SUCCESS:
    return {
      ...state,
      restartExpireStatus: {
        ...state.restartExpireStatus,
        [payload.jobNo]: {
          ...state.restartExpireStatus[payload.jobNo],
          isChecking: false,
          res: payload.res
        }
      }
    };

  case types.RESTART_EXPIRE_FAILURE:
    return {
      ...state,
      restartExpireStatus: {
        ...state.restartExpireStatus,
        [payload.jobNo]: {
          ...state.restartExpireStatus[payload.jobNo],
          isChecking: false,
          error: payload.error
        }
      }
    };

  case types.SET_ENTRIES_PERPAGE:
    return {
      ...state,
      entriesPerPage: payload
    };

  default:
    return state;
  }
};
