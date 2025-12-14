import React from 'react'
import './About_Me.css'
import { ABOUT_TEXT } from '../../constants'
import About from '../../assets/IMG_3958.jpg'
import { motion } from "framer-motion"


const About_Me = () => {
  return (
    <div id='About_Me' className='mt-24'>
      <div className='flex justify-center'><h1 className='text-5xl font-bold'>About Me</h1></div>
      <div className="lg:flex mt-20">
        <motion.div 
         initial={{x:-100,opacity:0}}
         whileInView={{x:0,opacity:1}}
         transition={{duration:1,delay:0.5}}
        className='flex justify-center lg:w-1/2 mt-5 '><img src={About} alt="" className='photo_my' /></motion.div>
        <motion.div 
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1,delay:0.5}}
        className='leading-7 mt-14 w-full lg:w-1/2 text-xl flex items-center'>{ABOUT_TEXT}</motion.div>
      </div>
    </div>
  )
}

export default About_Me