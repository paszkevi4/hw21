import axios from 'axios';

const instance = axios.create({
  baseURL: ' https://cors-anywhere.herokuapp.com/http://domer.tech:9999/',
});

export const usersAPI = {
  getUsers() {
    return instance.get(`users`).then((res) => res.data);
  },
  createUser(name, username, avatar, setResult) {
    const params = {
      name,
      username,
      avatar,
    };
    return instance
      .post(`users`, params)
      .then((res) => res.data)
      .then((res) => setResult(res.success))
      .catch((res) => {
        setResult(res.response.data.success);
      });
  },
};

export const tweetsAPI = {
  getTweets() {
    return instance.get(`tweets`).then((res) => res.data);
  },
  createTweet({ userId, content, image }) {
    debugger;
    const params = {
      userId,
      content,
      image,
    };
    return instance.post(`tweets`, params).then((res) => res.data);
  },
};
