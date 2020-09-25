import { connect } from 'react-redux';
import AddPost from './AddPost';
import { createPostAC } from '../../../store/postsReducer';

const mapStateToProps = (store) => {
  return {
    users: store.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: (newPost) => {
      dispatch(createPostAC(newPost));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
