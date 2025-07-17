import React from 'react'
import './Project.css'
import { PROJECTS } from '../../constants'
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div className='mt-24' id='Project'>
      <div className='flex justify-center text-5xl font-bold'><motion.h1
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0}}
      >Project</motion.h1></div>
      <div className='mt-14'>
        <div className='flex flex-col gap-10'>
          {
            PROJECTS.map((project,index)=>(
              <div key={index} className='flex flex-wrap lg:justify-center hover:border-1 p-3 cursor-pointer'>
                <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0}}

                className='w-full lg:w-1/2 mb-2 flex justify-center'>
                  <img src={project.image} width={250} height={250} alt={`Project ${index+1}`}/>
                </motion.div>
                <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0}}
                className='w-full lg:w-1/2 flex flex-col item-center '>
                  <h6 className='mb-2 font-semibold'>{project.title}</h6>
                  <p className='mb-4 text-neutral-400'>{project.description}</p>
                  <div className='flex gap-4'>
                    {
                      project.technologies.map((tag)=>(
                          <span key={tag} className='bg-purple-950 rounded-sm px-2 py-0.5'>{tag}</span>
                      ))
                    }
                  </div>
                </motion.div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project