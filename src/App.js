import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

//components
import Posts from './components/PostsContainer';

//styles
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div>123</div>
        <Posts />
      </div>
    </Provider>
  );
};

export default App;
