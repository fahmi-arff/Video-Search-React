import axios from 'axios';

const KEY = 'AIzaSyC9LtqU9zeuT6hzCtrjRU0V5WikeRvsPFk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
