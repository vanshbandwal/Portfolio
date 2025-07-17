import React from 'react'
import './Hero.css'
import { HERO_CONTENT } from '../../constants'
import Hero1 from '../../assets/Project_Portfolio.jpg'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div id="Home" className='mt-28 lg:flex'>
      <div className='w-full lg:w-1/2' >
        <motion.div
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}}
        ><h1 className='text-5xl'>Vansh Bandwal</h1></motion.div>
        <motion.div
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        ><h2 className='text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent mt-14'>Full Stack Developer</h2></motion.div>
        <motion.div 
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,delay:1}}
        className='mt-7 leading-7 text-xl'><p>{HERO_CONTENT}</p></motion.div>
      </div>
      <motion.div 
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.5,delay:1.5}}
      className="lg:w-1/2 w-full lg:mt-0 mt-10" ><img className='w-full h-full' src={Hero1} alt="" /></motion.div>
    </div>
  )
}

export default Hero