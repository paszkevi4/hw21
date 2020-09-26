import React from 'react';
import { connect } from 'react-redux';
import './post.css';

const Post = ({ index, name, avatar, nickname, content, image, ...props }) => {
  return (
    <div className="post_container">
      <div className="post_header">
        <img className="post_header__avatar" src={avatar} alt="avatar" />
        <div className="post_header__name">
          <div>
            {name}
            <span>{nickname}</span>
          </div>
        </div>
      </div>
      <div className="post_body">
        {content}
        {image && <img src={image} alt={image} />}
      </div>
    </div>
  );
};

export default connect(null, null)(Post);
