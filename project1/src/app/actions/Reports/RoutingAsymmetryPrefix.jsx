import * as types from '../../constants/Reports/RoutingAsymmetryPrefix/ActionTypes';


export const sort = item => ({
  type: types.RAPF_SORT,
  payload: item,
});
