import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../store/usersReducer';
import s from './adduser.module.css';

const AddUser = (props) => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [result, setResult] = useState(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    setShowNotification(true);
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [result]);

  return (
    <div className={s.addUserContainer}>
      <input
        placeholder="Avatar Url"
        value={avatar}
        onChange={(e) => {
          setAvatar(e.target.value);
        }}
      />
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUser(name, `@${username}`, avatar, setResult);
        }}>
        Add User
      </button>
      {showNotification &&
        result !== null &&
        (result ? (
          <div className={s.successed}>User successfully added</div>
        ) : (
          <div className={s.unsuccessed}>Something went wrong</div>
        ))}
    </div>
  );
};

export default connect(null, { setUser })(AddUser);
