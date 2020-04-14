import * as types from '../../constants/Reports/Top10/ActionTypes';


const defaultState = {
  list: [{
    no: 1,
    code: '20121',
    asNm: 'AKAMAI-ASN1 Akamai International B.V.',
    avg: '15k/17k',
    max: '20k/16k'
  }, {
    no: 2,
    code: '20122',
    asNm: 'TAIWANMOBILE-AS Taiwan Mobile Co., Ltd.',
    avg: '16k/15k',
    max: '18k/19k'
  }, {
    no: 3,
    code: '20123',
    asNm: 'AKAMAI-ASN1 Akamai International B.V.',
    avg: '16k/14k',
    max: '17k/15k'
  }, {
    no: 4,
    code: '20124',
    asNm: '-Reserved AS-',
    avg: '15k/14k',
    max: '16k/18k'
  }, {
    no: 5,
    code: '20125',
    asNm: 'TFN-TW Taiwan Fixed Network, Telco Corporation',
    avg: '14k/12k',
    max: '15k/20k'
  }, {
    no: 6,
    code: '20126',
    asNm: 'Akamai International B.V.',
    avg: '15k/17k',
    max: '20k/16k'
  }, {
    no: 7,
    code: '20127',
    asNm: 'Taiwan Mobile Co., Ltd.',
    avg: '16k/15k',
    max: '18k/19k'
  }, {
    no: 8,
    code: '20128',
    asNm: 'Akamai International B.V.',
    avg: '16k/14k',
    max: '17k/15k'
  }, {
    no: 9,
    code: '20129',
    asNm: '-Reserved AS-',
    avg: '15k/14k',
    max: '16k/18k'
  }, {
    no: 10,
    code: '20130',
    asNm: 'Taiwan Fixed Network, Telco Corporation',
    avg: '14k/12k',
    max: '15k/20k'
  }],
  curPage: 1,
  totalCnt: 3,
  sortStatus: {}
};


export const reportsTop10Reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.TOP10_SORT:
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
