import Posts from './Posts';
import { connect } from 'react-redux';
import createPostAC from '../../store/postsReducer';

const mapStateToProps = (store) => {
  return {
    posts: store.posts,
    users: store.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (newPost) => {
      dispatch(createPostAC(newPost));
    },
  };
};

export default connect(mapStateToProps, null)(Posts);
