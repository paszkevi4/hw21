import store from './store';

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

type actionType = createPostACType | likePostACType | repostACType;

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
    case LIKE_POST:
      return [
        ...state.map((el, i) => {
          if (i === action.index) {
            return { ...el, liked: action.liked };
          }
          return { ...el };
        }),
      ];
    case REPOST:
      return [
        ...state.map((el, i) => {
          if (i === action.index) {
            return { ...el, reposted: action.reposted };
          }
          return { ...el };
        }),
      ];
    default:
      return state;
  }
};

export const createPostAC = (post: PostType): createPostACType => ({
  type: CREATE_NEW_POST,
  post,
});

export default postsReducer;
