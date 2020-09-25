import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://domer.tech:9999/',
});

export const usersAPI = {
  getUsers() {
    return instance.get(`users`).then((response) => response.data);
  },
  createUser(name, username, avatar, setResult) {
    const params = {
      name,
      username,
      avatar,
    };
    return instance
      .post(`users/`, params)
      .then((response) => response.data)
      .then((res) => setResult(res.success))
      .catch((res) => {
        setResult(res.response.data.success);
      });
  },
};
