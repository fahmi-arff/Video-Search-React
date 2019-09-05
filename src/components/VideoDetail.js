import React from 'react';

const VideoDetai = ({ video }) => {
  if(!video) {
    return <div>Loading ...</div>
  }
  return <div>{video.snippet.title}</div>
}

export default VideoDetai;