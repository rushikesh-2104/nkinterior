import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Contactus from './components/Contactus'
import Projects from './components/Projects'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contactus />
      <Footer />
    </div>
  )
}

export default page
