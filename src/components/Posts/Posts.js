import React from 'react';
import Post1 from './Post/Post';

const Posts = ({ posts, users, createPost }) => {
  return (
    <div>
      {posts
        .slice()
        .reverse()
        .map((post) => {
          return (
            <Post1
              name={users[post.author].name}
              avatar={users[post.author].avatar}
              nickname={users[post.author].nickname}
              date={post.publicationDate.toString()}
              content={post.text}
              image={post.image}
            />
          );
        })}
    </div>
  );
};

export default Posts;
