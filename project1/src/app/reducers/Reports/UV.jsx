import * as types from '../../constants/Reports/UV/ActionTypes';


const defaultState = {
  list: [{
    no: 1,
    code: 'L0001',
    name: 'Line X',
    uvmax: '20k',
    uvavg: '15k'
  }, {
    no: 2,
    code: 'L0002',
    name: 'Line Z',
    uvmax: '18k',
    uvavg: '16k'
  }, {
    no: 3,
    code: 'L0003',
    name: 'Line Y',
    uvmax: '17k',
    uvavg: '16k'
  }, {
    no: 4,
    code: 'L0004',
    name: 'Line W',
    uvmax: '16k',
    uvavg: '15k'
  }, {
    no: 5,
    code: 'L0005',
    name: 'Line U',
    uvmax: '15k',
    uvavg: '14k'
  }],
  curPage: 1,
  totalCnt: 3,
  sortStatus: {}
};


export const reportsUVReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.UV_SORT:
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
