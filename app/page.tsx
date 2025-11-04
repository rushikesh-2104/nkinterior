import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contactus'
import Services from './components/Services'
import Projects from './components/Projects'
import Services from './components/Services'
import Aboutus from './components/Aboutus'

const page = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <About />
      <Services/>
      <Projects />
      <Services />
      <Contactus />
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default page
