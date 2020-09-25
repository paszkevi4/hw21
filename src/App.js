import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/store';

//
//components
import Users from './components/Users/Users';
import Tweets from './components/Posts/PostsContainer';
import AddUser from './components/AddUser/AddUser';
import Sidebar from './components/Sidebar/Sidebar';
//import AddPost from './components/AddPost/AddPostContainer';

//
//styles
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <Route path="/users" component={Users} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/tweets" component={Tweets} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
