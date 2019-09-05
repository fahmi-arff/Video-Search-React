import React from 'react';

const VideoDetai = ({ video }) => {
  if(!video) {
    return <div>Loading ...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div>
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
    </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetai;