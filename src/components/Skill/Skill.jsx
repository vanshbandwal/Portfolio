import React from 'react'
import './Skill.css'
import { RiTailwindCssFill } from "react-icons/ri"
import { SiNestjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion"
import { SiMongodb } from "react-icons/si";

const iconVariant = (duration) =>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

const Skill = () => {
  return (
    <div className='mt-24 flex flex-col justify-center' id='Skill'>
      <motion.div 
      whileInView={{y:0,opacity:1}}
      initial={{y:-100,opacity:0}}
      transition={{duration:1,delay:0.5}}
      className='flex justify-center text-5xl font-bold'>Skill</motion.div>
      <motion.div 
      initial={{x:100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1,delay:0.5}}
      className='flex justify-center gap-4 mt-16 lg:gap-6'>
        <motion.div 
        variants={iconVariant(2.5)}
        initial='initial'
        animate='animate'
        className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-orange-500 lg:text-8xl'><FaHtml5/></motion.div>
        <motion.div 
        variants={iconVariant(2)}
        initial='initial'
        animate='animate'
        className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-blue-900 lg:text-8xl'><FaCss3Alt/></motion.div>
        <motion.div 
        variants={iconVariant(1.5)}
        initial='initial'
        animate='animate'
        className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-yellow-500 lg:text-8xl'><FaJs/></motion.div>
        <motion.div 
        variants={iconVariant(1)}
        initial='initial'
        animate='animate'
        className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-blue-500 lg:text-8xl'><FaReact/></motion.div>
        <motion.div className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-blue-400 lg:text-8xl ' ><FaNodeJs/></motion.div>
         <motion.div 
        variants={iconVariant(1.5)}
        initial='initial'
        animate='animate'
        className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-green-500 lg:text-8xl'><SiMongodb/></motion.div>
        <motion.div 
        variants={iconVariant(1.5)}
        initial='initial'
        animate='animate'
        className='border-2 border-neutral-300 p-2 text-6xl rounded-md text-red-500 lg:text-8xl'><SiNestjs/></motion.div>
      </motion.div>
      <div className='mt-20'>
        <motion.div 
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1,delay:0.5}}
        className='flex flex-col gap-7'>
          <div className='flex gap-5'><p className='text-2xl'>HTML</p><hr width={"45%"}  className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl'/><div className='text-xl'>90%</div></div>
          <div className='flex gap-5'><p className='text-2xl'>CSS</p><hr  width={"40%"} className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl'/><div className='text-xl'>80%</div></div>
          <div className='flex gap-5'><p className='text-2xl'>JS</p><hr  width={"35%"} className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl'/><div className='text-xl'>70%</div></div>
          <div className='flex gap-5'><p className='text-2xl'>React.js</p><hr  width={"40%"}  className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl' /><div className='text-xl'>80%</div></div>
          <div className='flex gap-5 '><p className='text-2xl'>Node.js</p><hr  width={"35%"} className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl'/><div className='text-xl'>70%</div></div>
           <div className='flex gap-5 '><p className='text-2xl'>MongoDB</p><hr  width={"35%"} className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl'/><div className='text-xl'>80%</div></div>
            <div className='flex gap-5 '><p className='text-2xl'>Nest Js</p><hr  width={"25%"} className='mt-2 outline-none border-none h-4 bg-gradient-to-r from via-slate-200 to-purple-500 rounded-2xl'/><div className='text-xl'>60%</div></div>
      </motion.div>
  
      </div>
    </div>
  )
}

export default Skill