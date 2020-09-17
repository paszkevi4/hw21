type UserType = {
  name: string;
  avatar: string;
  nickname: string;
};

const initialState: Array<UserType> = [
  {
    name: 'Anakin Skywalker',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
    nickname: 'dart_vader',
  },
  {
    name: 'Bruce Wayne',
    avatar: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png',
    nickname: 'batman_official',
  },
];

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
