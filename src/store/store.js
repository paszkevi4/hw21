import { createStore, combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
