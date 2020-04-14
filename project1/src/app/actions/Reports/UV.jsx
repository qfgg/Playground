import * as types from '../../constants/Reports/UV/ActionTypes';


export const sort = item => ({
  type: types.UV_SORT,
  payload: item,
});
