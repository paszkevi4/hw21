import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

//components
import Posts from './components/Posts/PostsContainer';
import AddPost from './components/AddPost/AddPostContainer';

//styles
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AddPost />
        <Posts />
      </div>
    </Provider>
  );
};

export default App;
