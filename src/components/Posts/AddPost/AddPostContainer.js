import { connect } from 'react-redux';
import AddPost from './AddPost';
import { createPostAC } from '../../../store/postsReducer';
import { tweetsAPI } from '../../../API/requests';

const mapStateToProps = (store) => {
  return {
    users: store.users,
    api: tweetsAPI,
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
