import React from 'react';
import Post from './Post/Post';
import AddPost from './AddPost/AddPostContainer';
import './posts.css';

const Posts = ({ posts, users }) => {
  return (
    <div className="posts_container">
      <AddPost />
      <div className="posts_column">
        {posts.map((post, i) => {
          const user = users.find((el) => el.id === post.userId);
          return (
            <Post
              index={i}
              name={user.name}
              avatar={user.avatar}
              nickname={user.username}
              date={post.publicationDate}
              content={post.content}
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
    </div>
  );
};

export default Posts;
