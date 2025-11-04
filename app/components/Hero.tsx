import React from 'react'

const Hero = () => {
  return (

    <div>
      <video className='absolute top-0 left-0 object-cover w-full h-full'  src="/Introduction.mp4" 
      autoPlay
      muted
      playsInline
      loop></video>

      <div className='min-h-screen flex items-center justify-center'>
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
    
        {/* Headline */}
        <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
          Welcome to <span className='bg-gradient-to-br from-amber-400 to-blue-100 px-4 py-2 rounded-2xl text-black'>NK Interiors</span>
          {/* <br className="hidden sm:block" /> NK Inetriors */}
        </h1>
        <p className="m-8 text-2xl font-medium text-white">Transforming Spaces Into Timeless Experiences by creating elegant, functional interiors.</p>
        {/* Buttons */}
        <div className="mt-2 flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full shadow-md hover:scale-[1.03] transition">
            Book Consultation
          </button>

          <button className="px-8 py-3 bg-[#1b1b1b] text-gray-300 border border-gray-600 font-medium rounded-full hover:bg-gray-800 transition">
            Explore our Work
          </button>
        </div>

      </section>
      </div>

    </div>
  )
}

export default Hero