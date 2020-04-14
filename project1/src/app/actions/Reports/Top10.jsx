import * as types from '../../constants/Reports/Top10/ActionTypes';


export const sort = item => ({
  type: types.TOP10_SORT,
  payload: item,
});
