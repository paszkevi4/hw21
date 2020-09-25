import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/usersReducer';
import s from './users.module.css';

const Users = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div className={s.users_container}>
      {props.users.map((el, i) => {
        return <UserCard name={el.name} username={el.username} avatar={el.avatar} />;
      })}
    </div>
  );
};

export const UserCard = ({ name, username, avatar }) => {
  return (
    <div className={s.userCard}>
      <img src={avatar} alt="avatar" />
      <p className={s.usercardName}>{name}</p>
      <p className={s.usercardUsername}>{username}</p>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    users: store.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(Users);
