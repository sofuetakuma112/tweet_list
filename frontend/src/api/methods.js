import Api from './index';

export default {
  fetchTweet (id) {
    const query = { id }
    return Api().post('/fetchTweet', query);
  }
}