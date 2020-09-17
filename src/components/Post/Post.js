import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {
  ArrowRight,
  At,
  Heart,
  HeartFill,
  PatchCheckFll,
  ChatDots,
  ChatDotsFill,
  ReplyAllFill,
  ReplyAll,
} from 'react-bootstrap-icons';
import s from './post.module.sass';

const Post = ({ author, content, image, date, liked, stats }) => {
  const { name, photo, nickname, checked } = author;
  const { likes, comments, reposts } = stats;
  let [Liked, setLiked] = useState(liked);
  return (
    <Card className={s.card}>
      <Card.Body className={s.body}>
        <div className={s.header}>
          <div className={s.photo_container}>
            <img src={photo} alt="avatar" className={s.avatar} />
          </div>
          <div className={s.name__container}>
            <span className={s.name}>{name}</span>
            {checked ? <PatchCheckFll size={20} className={s.checked} /> : ''}
            <span className={s.nickname}>{nickname}</span>
          </div>
          <div className={s.date}>
            <span>{date}</span>
          </div>
        </div>
        <div className={s.content}>
          {content}
          {image && <img src={image} alt="image" />}
        </div>
        <div className={s.footer}>
          <div
            className={s.like}
            onClick={() => {
              setLiked(!Liked);
            }}>
            {Liked ? <HeartFill color="red" size={24} /> : <Heart size={24} />}
            <span>{!liked && Liked ? likes + 1 : liked && !Liked ? likes - 1 : likes}</span>
          </div>
          <div className={s.comments}>
            <ChatDots size={24} />
            <span>{comments}</span>
          </div>
          <div className={s.repost}>
            <ReplyAllFill size={24} />
            <span>{reposts}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
