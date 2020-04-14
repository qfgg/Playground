import * as types from '../../constants/My/Item/ActionTypes';


const defaultState = {
  initItemList: {},
  initResList: {},
  searchResList: {},
  favoredItemList: {},
  selectedIfrouter: null,
  saveStatus: {},
  delStatus: {}
};

export const myItemReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
  case types.ADD_SEL_IFROUTER:
    return {
      ...state,
      selectedIfrouter: payload
    };

  case types.REMOVE_SEL_IFROUTER:
    return {
      ...state,
      selectedIfrouter: null
    };

  case types.INIT_LIST_REQUEST:
    return {
      ...state,
      initResList: {
        ...state.initResList,
        [payload]: {
          ...state.initResList[payload],
          isFetching: true,
          error: '',
        }
      }
    };

  case types.INIT_LIST_SUCCESS:
    return {
      ...state,
      initResList: {
        ...state.initResList,
        [payload.type]: {
          ...state.initResList[payload.type],
          isFetching: false,
          res: payload.page > 1 && payload.page > (state.initResList[payload.type] || {}).page ?
            [...(state.initResList[payload.type] || {}).res, ...payload.res] : payload.res,
          page: payload.res.length > 0 ? payload.page : (state.initResList[payload.type] || {}).page
        }
      }
    };

  case types.INIT_LIST_FAILURE:
    return {
      ...state,
      initResList: {
        ...state.initResList,
        [payload.type]: {
          ...state.initResList[payload.type],
          isFetching: false,
          error: payload.error,
        }
      }
    };

  case types.SEARCH_LIST_REQUEST:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload]: {
          ...state.searchResList[payload],
          isFetching: true,
          error: '',
        }
      }
    };

  case types.SEARCH_LIST_SUCCESS:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload.type]: {
          ...state.searchResList[payload.type],
          isFetching: false,
          res: payload.page > 1 && payload.page > (state.searchResList[payload.type] || {}).page ?
            [...(state.searchResList[payload.type] || {}).res, ...payload.res] : payload.res,
          page: payload.res.length > 0 ? payload.page :
            (state.searchResList[payload.type] || {}).page
        }
      }
    };

  case types.SEARCH_LIST_FAILURE:
    return {
      ...state,
      searchResList: {
        ...state.searchResList,
        [payload.type]: {
          ...state.searchResList[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.INIT_ITEM_REQUEST:
    return {
      ...state,
      initItemList: {
        ...state.initItemList,
        [payload]: {
          ...state.initItemList[payload],
          isFetching: true,
          error: ''
        }
      }
    };

  case types.INIT_ITEM_SUCCESS:
    return {
      ...state,
      initItemList: {
        ...state.initItemList,
        [payload.type]: {
          ...state.initItemList[payload.type],
          isFetching: false
        }
      },
      favoredItemList: {
        ...state.favoredItemList,
        [payload.type]: payload.res.map(item => ({
          ...item,
          text: item.fullName || item.name || item.host_name || item.esmNm || item.itmVal,
          id: item.asNo || item.intfNo || item.routerNo || item.popNo ||
            item.idcCd || item.cntryCd || item.esmCd || item.crctId || item.ispId || item.itmVal
        }))
      }
    };

  case types.INIT_ITEM_FAILURE:
    return {
      ...state,
      initItemList: {
        ...state.initItemList,
        [payload.type]: {
          ...state.initItemList[payload.type],
          isFetching: false,
          error: payload.error
        }
      }
    };

  case types.SAVE_ITEM_REQUEST:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: true,
        error: ''
      }
    };

  case types.SAVE_ITEM_SUCCESS:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false
      },
      favoredItemList: {
        ...state.favoredItemList,
        [payload.type]:
        [...(state.favoredItemList[payload.type] || []),
        { ...payload.item, itmNo: payload.res }]
      }
    };

  case types.SAVE_ITEM_FAILURE:
    return {
      ...state,
      saveStatus: {
        ...state.saveStatus,
        isSaving: false,
        error: payload
      }
    };

  case types.DEL_ITEM_REQUEST:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: true,
        error: ''
      }
    };

  case types.DEL_ITEM_SUCCESS:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false
      },
      favoredItemList: {
        ...state.favoredItemList,
        [payload.type]: state.favoredItemList[payload.type].filter(item =>
          item.id !== payload.item.id)
      }
    };

  case types.DEL_ITEM_FAILURE:
    return {
      ...state,
      delStatus: {
        ...state.delStatus,
        isDeleting: false,
        error: payload
      }
    };

  default: return state;
  }
};
