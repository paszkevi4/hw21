import React, { useState } from 'react';
import './addpost.css';

const AddPost = (props) => {
  let [user, setUser] = useState(1);
  let [text, setText] = useState('');
  let [image, setImageUrl] = useState('');

  const changeUser = () => {
    if (user < props.users.length - 1) {
      setUser(++user);
    } else {
      setUser(0);
    }
  };

  const submitForm = () => {
    props.api.createTweet({
      userId: user + 1,
      content: text,
      image,
    });
    props.createNewPost({
      userId: user + 1,
      content: text,
      image,
    });
    setText('');
    setImageUrl('');
  };

  return (
    <div className="addpost_container">
      <div onClick={changeUser} className="addpost_avatar">
        <img src={props.users[user].avatar} alt="avatar" />
        <span>swap user</span>
      </div>
      <textarea
        placeholder="What's going on?"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        placeholder="image url"
        value={image}
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default AddPost;
