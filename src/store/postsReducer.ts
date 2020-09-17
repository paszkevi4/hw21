const CREATE_NEW_POST = 'CREATE_NEW_POST';

type PostType = {
  author: string;
  avatar: string;
  nickname: string;
  publicationDate: Date | string;
  text: string;
  image: string;
  likesAmount: number;
  commentariesAmount: number;
  repostAmount: number;
};

type createPostAC = {
  type: typeof CREATE_NEW_POST;
  post: PostType;
};

const initialState: Array<PostType> = [
  {
    author: 'user name',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
    nickname: 'userNickName',
    publicationDate: new Date(),
    text: 'Hello, world!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    likesAmount: 5,
    commentariesAmount: 3,
    repostAmount: 1,
  },
  {
    author: 'userName',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
    nickname: 'coolNickName',
    publicationDate: new Date(),
    text: 'Hello, everyone!',
    image:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    likesAmount: 51,
    commentariesAmount: 31,
    repostAmount: 11,
  },
];

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return [...state, action.post];
    default:
      return state;
  }
};

export const createPostAC = (post: PostType): createPostAC => ({
  type: CREATE_NEW_POST,
  post,
});

export default postsReducer;
