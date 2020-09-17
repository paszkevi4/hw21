import React from 'react';
import './post.css';

const Post = ({ name, avatar, nickname, date, content, image }) => {
  return (
    <div className="post_container">
      <div className="post_header">
        <img className="post_header__avatar" src={avatar} />
        <div className="post_header__name">
          <div>
            {name}
            <span>@{nickname}</span>
          </div>
          <div>20 feb 20</div>
        </div>
      </div>
      <div className="post_body">
        {content}
        {image && <img src={image} alt={image} />}
      </div>

      <div className="post_footer">
        <div>Like</div>
        <div>Comments</div>
        <div>Repost</div>
      </div>
    </div>
  );
};

export default Post;
