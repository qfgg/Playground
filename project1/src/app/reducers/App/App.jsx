import * as types from '../../constants/App/ActionTypes';


const defaultState = {
  keyword: '',
  showSubMenuFlag: {},
  userInfo: {},
  myMenu: {}
};

export const myAppReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.SET_SEARCH_KEYWORD:
    return {
      ...state,
      keyword: payload
    };

  case types.SHOW_SUBMENU:
    return {
      ...state,
      showSubMenuFlag: { [payload]: true }
    };

  case types.SET_USER_INFO:
    return {
      ...state,
      userInfo: payload
    };

  case types.GET_MYMENU_REQUEST:
    return {
      ...state,
      myMenu: {
        ...state.myMenu,
        isFetching: true,
        error: null
      }
    };

  case types.GET_MYMENU_SUCCESS:
    return {
      ...state,
      myMenu: {
        ...state.myMenu,
        isFetching: false,
        res: payload
      }
    };

  case types.GET_MYMENU_FAILURE:
    return {
      ...state,
      myMenu: {
        ...state.myMenu,
        isFetching: false,
        error: payload
      }
    };

  default:
    return state;
  }
};
