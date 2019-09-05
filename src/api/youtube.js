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

// export default axios.create({
//   baseURL: 'https://api.unsplash.com',
//   headers: {
//     Authorization: 'Client-ID c59e14f9eb75a1ccba65ac8c6c564af19299c8cd474cae34566789061532f5a5'
//   }
// });
