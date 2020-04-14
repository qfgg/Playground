import * as types from '../../constants/Admin/CodeManage/ActionTypes';

export const sortGrp = item => ({
  type: types.SORT_GRP,
  payload: item,
});

export const sortCd = item => ({
  type: types.SORT_CODE,
  payload: item,
});

export const confirmDelGrpRequest = () => ({
  type: types.CONFIRM_DEL_GRP_CODE_REQUEST
});

export const confirmDelGrpSuccess = () => ({
  type: types.CONFIRM_DEL_GRP_CODE_SUCCESS
});

export const confirmDelGrpFailure = ({ error } = {}) => ({
  type: types.CONFIRM_DEL_GRP_CODE_FAILURE,
  payload: { error }
});

export const confirmDelCdRequest = () => ({
  type: types.CONFIRM_DEL_CHILD_CODE_REQUEST,
});

export const confirmDelCdSuccess = () => ({
  type: types.CONFIRM_DEL_CHILD_CODE_SUCCESS
});

export const confirmDelCdFailure = ({ error } = {}) => ({
  type: types.CONFIRM_DEL_CHILD_CODE_FAILURE,
  payload: { error }
});

export const updateGrpCd = item => ({
  type: types.UPDATE_GROUP_CODE,
  payload: item,
});

export const updateCd = item => ({
  type: types.UPDATE_CODE,
  payload: item,
});

export const confirmUpdGrpRequest = () => ({
  type: types.CONFIRM_UPD_GRP_CODE_REQUEST,
});

export const confirmUpdGrpSuccess = item => ({
  type: types.CONFIRM_UPD_GRP_CODE_SUCCESS,
  payload: item,
});

export const confirmUpdGrpFailure = ({ error } = {}) => ({
  type: types.CONFIRM_UPD_GRP_CODE_FAILURE,
  payload: { error }
});

export const confirmUpdCdRequest = () => ({
  type: types.CONFIRM_UPD_CHILD_CODE_REQUEST
});

export const confirmUpdCdSuccess = item => ({
  type: types.CONFIRM_UPD_CHILD_CODE_SUCCESS,
  payload: item
});

export const confirmUpdCdFailure = ({ error } = {}) => ({
  type: types.CONFIRM_UPD_CHILD_CODE_FAILURE,
  payload: { error }
});

export const cancelUpdCd = item => ({
  type: types.CANCEL_UPD_CODE,
  payload: item,
});

export const cancelUpdGrp = item => ({
  type: types.CANCEL_UPD_GROUP,
  payload: item,
});

export const addGrpCdRequest = () => ({
  type: types.ADD_GRP_CODE_REQUEST,
});

export const addGrpCdSuccess = item => ({
  type: types.ADD_GRP_CODE_SUCCESS,
  payload: item,
});

export const addGrpCdFailure = ({ error } = {}) => ({
  type: types.ADD_GRP_CODE_FAILURE,
  payload: { error }
});

export const addCdRequest = () => ({
  type: types.ADD_CHILD_CODE_REQUEST,
});

export const addCdSuccess = item => ({
  type: types.ADD_CHILD_CODE_SUCCESS,
  payload: item,
});

export const addCdFailure = ({ error } = {}) => ({
  type: types.ADD_CHILD_CODE_FAILURE,
  payload: { error }
});

export const initChildCdRequest = () => ({
  type: types.INIT_CHILD_CODE_REQUEST
});

export const initChildCdSuccess = ({ res, page } = {}) => ({
  type: types.INIT_CHILD_CODE_SUCCESS,
  payload: { res, page }
});

export const initChildCdFailure = ({ error, page } = {}) => ({
  type: types.INIT_CHILD_CODE_FAILURE,
  payload: { error, page }
});

export const initGrpCdRequest = () => ({
  type: types.INIT_GRP_CODE_REQUEST
});

export const initGrpCdSuccess = ({ res, page } = {}) => ({
  type: types.INIT_GRP_CODE_SUCCESS,
  payload: { res, page }
});

export const initGrpCdFailure = ({ error, page } = {}) => ({
  type: types.INIT_GRP_CODE_FAILURE,
  payload: { error, page }
});

export const checkGrpCdRequest = () => ({
  type: types.CHECK_GRP_CODE_REQUEST,
});

export const checkGrpCdSuccess = res => ({
  type: types.CHECK_GRP_CODE_SUCCESS,
  payload: res,
});

export const checkGrpCdFailure = error => ({
  type: types.CHECK_GRP_CODE_FAILURE,
  payload: error,
});

export const checkChildCdRequest = () => ({
  type: types.CHECK_CHILD_CODE_REQUEST,
});

export const checkChildCdSuccess = res => ({
  type: types.CHECK_CHILD_CODE_SUCCESS,
  payload: res,
});

export const checkChildCdFailure = error => ({
  type: types.CHECK_CHILD_CODE_FAILURE,
  payload: error,
});

export const setCurPageGrp = target => ({
  type: types.SET_CUR_PAGE_GROUP,
  payload: target,
});

export const setCurPageCd = target => ({
  type: types.SET_CUR_PAGE_CODE,
  payload: target,
});

export const selectGroup = grpCd => ({
  type: types.SELECT_GROUP,
  payload: grpCd
});

export const setEntriesPerPageGrp = size => ({
  type: types.SET_GRP_ENTRIES_PERPAGE,
  payload: size
});

export const setEntriesPerPageCd = size => ({
  type: types.SET_CHILD_ENTRIES_PERPAGE,
  payload: size
});
