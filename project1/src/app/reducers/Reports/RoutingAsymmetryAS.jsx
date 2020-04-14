import * as types from '../../constants/Reports/RoutingAsymmetryAS/ActionTypes';


const defaultState = {
  list: [{
    peer: 'SKB',
    asNo: 20310,
    asNm: 'AKAMAI-ASN1 Akamai International B.V.',
    inbound: 821.21,
    outbound: 111.25,
    total: 932.46,
    ratio: '738.16%'
  }, {
    peer: 'SKB',
    asNo: 20311,
    asNm: 'TAIWANMOBILE-AS Taiwan Mobile Co., Ltd.',
    inbound: 821.32,
    outbound: 500.22,
    total: 1321.54,
    ratio: '164.19%'
  }, {
    peer: 'LGU+',
    asNo: 20312,
    asNm: 'AKAMAI-ASN1 Akamai International B.V.',
    inbound: 121.12,
    outbound: 5115.12,
    total: 5236.24,
    ratio: '2.36%'
  }, {
    peer: 'LGU+',
    asNo: 20313,
    asNm: '-Reserved AS-',
    inbound: 22.52,
    outbound: 32.21,
    total: 54.73,
    ratio: '69.91%'
  }, {
    peer: 'LGU+',
    asNo: 20314,
    asNm: 'TFN-TW Taiwan Fixed Network, Telco Corporation',
    inbound: 5561.63,
    outbound: 5212.56,
    total: 10774.19,
    ratio: '106.69%'
  }, {
    peer: 'SKB',
    asNo: 20315,
    asNm: 'MULTIMEDIA-AS-AP Hoshin Multimedia Corporation',
    inbound: 1221.61,
    outbound: 1626.61,
    total: 2848.22,
    ratio: '75.1%'
  }],
  curPage: 1,
  totalCnt: 3,
  sortStatus: {}
};


export const reportsRAASReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.RAAS_SORT:
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
