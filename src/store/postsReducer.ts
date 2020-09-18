import store from './store';

const CREATE_NEW_POST = 'CREATE_NEW_POST';
const LIKE_POST = 'LIKE_POST';
const REPOST = 'REPOST';

type PostType = {
  author: number;
  publicationDate: Date | string;
  text: string;
  image: string;
  likesAmount: number;
  liked: boolean;
  commentariesAmount: number;
  repostAmount: number;
  reposted: boolean;
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
    author: 0,
    publicationDate: new Date(2020, 8, 15, 23, 15),
    text: 'Hello, world!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    liked: false,
    likesAmount: 5,
    commentariesAmount: 3,
    repostAmount: 1,
    reposted: true,
  },
  {
    author: 1,
    publicationDate: new Date(2020, 8, 17, 15, 47),
    text: 'Hello, everyone!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',

    liked: true,
    likesAmount: 51,
    commentariesAmount: 31,
    repostAmount: 11,
    reposted: false,
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

export const likePostPostAC = (index: number, liked: boolean): likePostACType => ({
  type: LIKE_POST,
  index,
  liked,
});

export const repostPostAC = (index: number, reposted: boolean): repostACType => ({
  type: REPOST,
  index,
  reposted,
});

export default postsReducer;
