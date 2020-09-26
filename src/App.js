import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

//
// fetches
import { fetchUsers } from './store/usersReducer';
import { fetchTweets } from './store/postsReducer';

//
//components
import Users from './components/Users/Users';
import Tweets from './components/Posts/PostsContainer';
import AddUser from './components/AddUser/AddUser';
import Sidebar from './components/Sidebar/Sidebar';

//
//styles
import './App.css';

const App = (props) => {
  useEffect(() => {
    props.fetchUsers();
    props.fetchTweets();
  }, [props]);
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Route path="/users" component={Users} />
        <Route path="/add-user" component={AddUser} />
        <Route path="/tweets" component={Tweets} />
      </div>
    </Router>
  );
};

export default connect(null, { fetchUsers, fetchTweets })(App);
