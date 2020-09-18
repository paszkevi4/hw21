import React from 'react';
import Post from './Post/Post';

const Posts = ({ posts, users }) => {
  return (
    <div className="posts_column">
      {posts.map((post, i) => {
        return (
          <Post
            index={i}
            name={users[post.author].name}
            avatar={users[post.author].avatar}
            nickname={users[post.author].nickname}
            date={post.publicationDate}
            content={post.text}
            image={post.image}
            liked={post.liked}
            likes={post.likesAmount}
            comments={post.commentariesAmount}
            reposted={post.reposted}
            reposts={post.repostAmount}
          />
        );
      })}
    </div>
  );
};

export default Posts;
