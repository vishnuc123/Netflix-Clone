import React from 'react'
import { useLocation } from 'react-router-dom'

const VideoPlayer = () => {
    const location = useLocation()
    const videoLink = location.state?.link
  return (
    <div className='w-screen h-screen'>
      <iframe className='h-screen w-screen' src={`https://www.youtube.com/embed/${videoLink}`} ></iframe>
    </div>
  )
}

export default VideoPlayer
