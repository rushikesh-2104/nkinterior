import React from 'react'

const Hero = () => {
  return (

    <div>
      <video className='absolute top-0 left-0 object-cover w-full h-full'  src="/Introduction.mp4" 
      autoPlay
      muted
      playsInline
      loop></video>
    </div>
  )
}

export default Hero