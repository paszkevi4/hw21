import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
