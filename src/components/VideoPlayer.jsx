import React from 'react'

const VideoPlayer = ({src}) => {
  return (
    <>
     <div className="videoContainer">
      <video src={src}
      className='video-player'
      autoPlay
      loop
      muted
      playsInline
      />
    </div> 
    </>
  )
}

export default VideoPlayer
