import * as types from '../../constants/Reports/PeerEvaluation/ActionTypes';


export const sort = item => ({
  type: types.PEER_SORT,
  payload: item,
});
