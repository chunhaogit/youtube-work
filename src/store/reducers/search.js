import {
  GET_SEARCH_CAHCE,
  GET_SEARCH_FULFILLED,
  GET_SEARCH_INIT,
  GET_SEARCH_REJECTED,
  UPDATE_PAGE,
} from '../actions/search';

const initialState = {
  cache: {},
  isFetching: false,
  result: {},
  errorMessage: '',
  page: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_INIT:
      return {
        ...state,
        isFetching: true,
      };
    case GET_SEARCH_CAHCE:
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.queryString]: action.payload,
        },
        page: 1,
      };
    case GET_SEARCH_FULFILLED:
      return {
        ...state,
        isFetching: false,
        result: action.payload,
        page: 1,
      };
    case GET_SEARCH_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
