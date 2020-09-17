const CREATE_NEW_POST = 'CREATE_NEW_POST';

type PostType = {
  author: number;
  publicationDate: Date | string;
  text: string;
  image: string;
  likesAmount: number;
  commentariesAmount: number;
  repostAmount: number;
};

type createPostACType = {
  type: typeof CREATE_NEW_POST;
  post: PostType;
};

const initialState: Array<PostType> = [
  {
    author: 0,
    publicationDate: new Date(),
    text: 'Hello, world!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    likesAmount: 5,
    commentariesAmount: 3,
    repostAmount: 1,
  },
  {
    author: 1,
    publicationDate: new Date(),
    text: 'Hello, everyone!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    likesAmount: 51,
    commentariesAmount: 31,
    repostAmount: 11,
  },
];

const postsReducer = (state = initialState, action: createPostACType): Array<PostType> => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return [...state, { ...action.post }];
    default:
      return state;
  }
};

export const createPostAC = (post: PostType): createPostACType => ({
  type: CREATE_NEW_POST,
  post,
});

export default postsReducer;
