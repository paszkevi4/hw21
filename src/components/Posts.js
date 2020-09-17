import React from 'react';
import Post from './Post/Post';

const Posts = ({ posts, createPost }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            author={post.author}
            content={post.text}
            image={post.image}
            date={post.publicationDate.toString()}
            liked
            stats={(post.likesAmount, post.commentariesAmount, post.repostAmount)}
          />
        );
      })}
    </div>
  );
};

export default Posts;
