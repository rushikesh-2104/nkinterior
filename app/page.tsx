import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contactus'
import Projects from './components/Projects'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Testimonialtry from './components/Testimonialtry'

const page = () => {
  return (
    <div>
      <section id='home'><Hero /></section>
      <section id='about'><Aboutus /></section>
      <section id=''><About /></section>
      <section id='project'><Projects /></section>
      <section id='service'><Services /></section>
      <section id=''><Testimonialtry /></section>
      <section id='contact'><Contactus /></section>
    </div>
  )
}

export default page
