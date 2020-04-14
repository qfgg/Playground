import * as types from '../../constants/Login/ActionTypes';


const defaultState = {
  userToken: {},
};

export const userLoginReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.USER_LOGIN_REQUEST:
    return {
      ...state,
      userToken: {
        isFetching: true,
        res: '',
        error: '',
      }
    };

  case types.USER_LOGIN_SUCCESS:
    return {
      ...state,
      userToken: {
        isFetching: false,
        res: payload,
        error: '',
      }
    };

  case types.USER_LOGIN_FAILURE:
    return {
      ...state,
      userToken: {
        isFetching: false,
        res: '',
        error: payload,
      }
    };

  default:
    return state;
  }
};
