import * as types from '../../constants/Reports/RoutingAsymmetryAS/ActionTypes';


export const sort = item => ({
  type: types.RAAS_SORT,
  payload: item,
});
