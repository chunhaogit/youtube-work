import { getSearch } from '../../services/search';

export const GET_SEARCH_INIT = 'GET_SEARCH_INIT';
export const GET_SEARCH_CAHCE = 'GET_SEARCH_CAHCE';
export const GET_SEARCH_FULFILLED = 'GET_SEARCH_FULFILLED';
export const GET_SEARCH_REJECTED = 'GET_SEARCH_REJECTED';
export const UPDATE_PAGE = 'UPDATE_PAGE';

const getSearchInit = () => ({ type: GET_SEARCH_INIT });
const getSearchCache = (queryString, payload) => ({
  type: GET_SEARCH_CAHCE,
  queryString,
  payload,
});
const getSearchFulfilled = (payload) => ({
  type: GET_SEARCH_FULFILLED,
  payload,
});
const getSearchRejected = (payload) => ({
  type: GET_SEARCH_REJECTED,
  payload,
});
export const updatePage = (payload) => ({
  type: UPDATE_PAGE,
  payload,
});

export const fetchSearch = (queryString) => async (dispatch, getSate) => {
  const { cache } = getSate().search;
  if (cache[queryString]) {
    dispatch(getSearchFulfilled(cache[queryString]));
    console.log('dispatch cache');
  } else {
    try {
      dispatch(getSearchInit());
      const result = await getSearch(queryString);
      dispatch(getSearchFulfilled(result));
      console.log(result);
      dispatch(getSearchCache(queryString, result));
    } catch (err) {
      dispatch(getSearchRejected(err.toString()));
    }
  }
};
