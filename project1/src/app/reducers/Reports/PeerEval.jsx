import * as types from '../../constants/Reports/PeerEvaluation/ActionTypes';


const defaultState = {
  list: [{
    rank: 1,
    asNo: 20310,
    asNm: 'AKAMAI-ASN1 Akamai International B.V.',
    relation: 'Peer',
    inbound: 821.21,
    outbound: 111.25,
    total: ''
  }, {
    rank: 2,
    asNo: 20311,
    asNm: 'TAIWANMOBILE-AS Taiwan Mobile Co., Ltd.',
    relation: '',
    inbound: 821.32,
    outbound: 215.22,
    total: ''
  }, {
    rank: 3,
    asNo: 20312,
    asNm: 'AKAMAI-ASN1 Akamai International B.V.',
    relation: '',
    inbound: 121.12,
    outbound: 5125.12,
    total: ''
  }, {
    rank: 4,
    asNo: 20313,
    asNm: '-Reserved AS-',
    relation: 'Peer',
    inbound: 22.52,
    outbound: 122.21,
    total: ''
  }, {
    rank: 5,
    asNo: 20314,
    asNm: 'TFN-TW Taiwan Fixed Network, Telco Corporation',
    relation: 'Peer',
    inbound: 5561.63,
    outbound: 212.56,
    total: ''
  }, {
    rank: 6,
    asNo: 20315,
    asNm: 'MULTIMEDIA-AS-AP Hoshin Multimedia Corporation',
    relation: '',
    inbound: 1221.61,
    outbound: 1626.61,
    total: ''
  }],
  curPage: 1,
  totalCnt: 3,
  sortStatus: {}
};


export const reportsPeerReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.PEER_SORT:
    return {
      ...state,
      sortStatus: {
        ...state.sortStatus,
        [payload]:
          state.sortStatus[payload] === undefined ? 1 :
          state.sortStatus[payload] === 1 ? -1 :
          state.sortStatus[payload] + 1,
      },
    };
  default: return state;
  }
};
