import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Contactus from './components/Contactus'
import Projects from './components/Projects'
import Services from './components/Services'
import Aboutus from './components/Aboutus'

const page = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <About />
      <Projects />
      <Services />
      <Contactus />
      <Footer />
    </div>
  )
}

export default page
