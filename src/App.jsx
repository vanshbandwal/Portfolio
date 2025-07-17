import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About_Me from './components/About_Me/About_Me'
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import Contact_Me from './components/Contact_Me/Contact_Me'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased'>
      <div className="top-0 h-full w-full">
      <div className="fixed  top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto p-8'>
        <Navbar />
        <Hero/>
        <About_Me/>
        <Skill/>
        <Project/>
        <Contact_Me/>
        <Footer/>
      </div>
    </div>
  )
}

export default App