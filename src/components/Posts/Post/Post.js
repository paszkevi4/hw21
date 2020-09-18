import React, { useState } from 'react';
import { connect } from 'react-redux';
import { likePostPostAC, repostPostAC } from '../../../store/postsReducer';
import './post.css';
import { Favorite, Chat, Share } from '@material-ui/icons';

const Post = ({
  index,
  name,
  avatar,
  nickname,
  date,
  content,
  image,
  liked,
  likes,
  comments,
  reposted,
  reposts,
  ...props
}) => {
  //const [liked, setLiked] = useState(props.liked);
  return (
    <div className="post_container">
      <div className="post_header">
        <img className="post_header__avatar" src={avatar} />
        <div className="post_header__name">
          <div>
            {name}
            <span>@{nickname}</span>
          </div>
          <div>
            {date.toLocaleDateString('ru-RU')} {date.getHours()}:{date.getMinutes()}
          </div>
        </div>
      </div>
      <div className="post_body">
        {content}
        {image && <img src={image} alt={image} />}
      </div>

      <div className="post_footer">
        <div
          onClick={() => {
            props.likePost(index, !liked);
          }}
          style={liked ? { color: 'red' } : { color: 'black' }}>
          <Favorite />
          {likes + liked}
        </div>
        <div>
          <Chat />
          {comments}
        </div>
        <div
          onClick={() => {
            props.repost(index, !reposted);
          }}
          style={reposted ? { color: 'blue' } : { color: 'black' }}>
          <Share />
          {reposts + reposted}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    likePost: (index, liked) => {
      dispatch(likePostPostAC(index, liked));
    },
    repost: (index, reposted) => {
      dispatch(repostPostAC(index, reposted));
    },
  };
};

export default connect(null, mapDispatchToProps)(Post);
