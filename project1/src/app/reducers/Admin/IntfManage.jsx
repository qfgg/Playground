import * as types from '../../constants/Admin/IntfManage/ActionTypes';
import { sortAscBy, sortDescBy } from '../../helper';


const defaultState = {
  resList: [],
  defaultList: [],
  isEditing: [],
  initInterface: {},
  curPage: 1,
  totalCnt: 0,
  totalEntries: 0,
  entriesPerPage: 15,
  sortStatus: {}
};

export const adminIntfReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.INTERFACE_SORT:
    return {
      ...state,
      sortStatus: {
        [payload]:
          state.sortStatus[payload] === undefined ? 1 :
          state.sortStatus[payload] === 1 ? -1 :
          state.sortStatus[payload] + 1,
      },
      resList: state.sortStatus[payload] === -1 ? state.defaultList :
        state.sortStatus[payload] === 1 ? [...state.resList].sort(sortDescBy(payload)) :
        [...state.resList].sort(sortAscBy(payload)),
    };

  case types.UPDATE_ITEM:
    return {
      ...state,
      isEditing: [...state.isEditing, payload.intfNo]
    };

  case types.CONFIRM_UPD:
    return {
      ...state,
      resList: [...state.resList].map((item) => {
        if (payload.modItem.intfNm !== '' && item.intfNo === payload.intfNo) {
          return {
            ...item,
            intfNm: payload.modItem.intfNm,
          };
        }
        return item;
      }),
      isEditing: [...state.isEditing].filter(item => item !== payload.intfNo)
    };

  case types.CANCEL_UPD:
    return {
      ...state,
      isEditing: [...state.isEditing].filter(item => item !== payload.intfNo)
    };

  case types.SET_CUR_PAGE:
    return {
      ...state,
      curPage: payload
    };

  case types.GET_INTERFACE_REQUEST:
    return {
      ...state,
      initIntfStatus: {
        ...state.initIntfStatus,
        defaultList: [],
        curPage: 1,
        totalCnt: 0,
        isFetching: true,
        error: ''
      }
    };

  case types.GET_INTERFACE_SUCCESS:
    return {
      ...state,
      initIntfStatus: {
        ...state.initIntfStatus,
        isFetching: false
      },
      resList: payload ? payload.res.data : state.resList,
      defaultList: payload ? payload.res.data : state.resList,
      totalCnt: payload ? Math.ceil(payload.res.headers['x-total-count'] / state.entriesPerPage) : state.totalCnt,
      curPage: payload ? payload.page : state.curPage,
      totalEntries: payload ? payload.res.headers['x-total-count'] : state.totalEntries
    };

  case types.GET_INTERFACE_FAILURE:
    return {
      ...state,
      initIntfStatus: {
        ...state.initIntfStatus,
        isFetching: false,
        error: payload
      }
    };

  default: return state;
  }
};
