import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion"
const Footer = () => {
  return (
    <div className='flex flex-col gap-9 items-center mt-24'>
      <motion.div 
       initial={{x:-100,opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{duration:0.5,delay:0}}
      className='flex gap-7 lg:gap-14'>
        <div>Home</div>
        <div>About Me</div>
        <div>Skill</div>
        <div>Project</div>
        <div>Contact Us</div>
      </motion.div>
      <motion.div
       initial={{x:100,opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{duration:0.5,delay:0}}
      >bandwalvansh@gmail.com</motion.div>
    </div>
  )
}

export default Footer