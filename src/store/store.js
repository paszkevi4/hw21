import { createStore, combineReducers } from 'redux';

import postsReducer from './postsReducer';

let reducers = combineReducers({
  posts: postsReducer,
});

let store = createStore(reducers);

export default store;
