import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import NavBar from '../components/NavBar'

export default function Home() {

  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Projects />
    </div>
  
  )
}
