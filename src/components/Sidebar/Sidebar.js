import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <sidebar>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/add-user">Add uer</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </sidebar>
  );
};

export default Sidebar;
