import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/search';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
