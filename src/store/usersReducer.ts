import { Dispatch } from 'redux';
import { usersAPI } from '../API/requests';

const SET_USERS = 'SET_USERS';

type UserType = {
  id: number;
  name: string;
  avatar: string;
  nickname: string;
};

type setUserACType = {
  type: typeof SET_USERS;
  users: any;
};

const initialState: Array<UserType> = [
  {
    id: 2,
    name: 'Anakin Skywalker',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
    nickname: 'dart_vader',
  },
  {
    id: 3,
    name: 'Bruce Wayne',
    avatar: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png',
    nickname: 'batman_official',
  },
];

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.users];
    default:
      return state;
  }
};

export const setUsersAC = (users: any): setUserACType => ({
  users,
  type: SET_USERS,
});

export const fetchUsers = () => {
  return (dispatch: Dispatch<setUserACType>) => {
    usersAPI.getUsers().then((data) => {
      console.log(data.data);
      dispatch(setUsersAC(data.data));
    });
  };
};

export const setUser = (name: string, username: string, avatar: string, setResult: any) => {
  return (dispatch: any) => {
    usersAPI.createUser(name, username, avatar, setResult).then((data) => {
      console.log(data);
    });
  };
};

export default usersReducer;
