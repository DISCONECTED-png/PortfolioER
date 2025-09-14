import { useState } from 'react'
import './App.css'
import React from 'react'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Nav from './components/Navbar'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav/>
      <Banner/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
