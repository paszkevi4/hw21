import { Dispatch } from 'redux';
import { tweetsAPI } from '../API/requests';

const FETCH_TWEETS = 'FETCH_TWEETS';
const CREATE_NEW_POST = 'CREATE_NEW_POST';
const LIKE_POST = 'LIKE_POST';
const REPOST = 'REPOST';

type PostType = {
  userId: number;
  content: string;
  image: string;
};

type createPostACType = {
  type: typeof CREATE_NEW_POST;
  post: PostType;
};

type likePostACType = {
  type: typeof LIKE_POST;
  index: number;
  liked: boolean;
};

type repostACType = {
  type: typeof REPOST;
  index: number;
  reposted: boolean;
};

type fetchTweetsACType = {
  type: typeof FETCH_TWEETS;
  tweets: Array<PostType>;
};

type actionType = createPostACType | likePostACType | repostACType | fetchTweetsACType;

const initialState: Array<PostType> = [
  {
    userId: 2,
    content: 'Hello, world!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
  },
  {
    userId: 3,
    content: 'Hello, everyone!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
  },
];

const postsReducer = (state = initialState, action: actionType): Array<PostType> => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return [...state, { ...action.post }];
    case FETCH_TWEETS:
      return [...action.tweets];
    default:
      return state;
  }
};

export const createPostAC = (post: PostType): createPostACType => ({
  type: CREATE_NEW_POST,
  post,
});

const fetchTweetsAC = (tweets: Array<PostType>): fetchTweetsACType => ({
  type: FETCH_TWEETS,
  tweets,
});

export const fetchTweets = () => {
  return (dispatch: Dispatch<fetchTweetsACType>) => {
    tweetsAPI.getTweets().then((data) => {
      dispatch(fetchTweetsAC(data.data));
    });
  };
};

export default postsReducer;
