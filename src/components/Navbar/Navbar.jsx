import React, { useRef, useState } from 'react'
import './Navbar.css'
import { IoMdClose } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }  
  return (
    <div className='flex justify-between mt-5'>
        <div className='text-3xl font-bold tracking-widest'>Vansh</div>
        
        <div className='text-4xl nav-mob-open' onClick={openMenu}><MdMenuOpen/></div>

        <ul ref={menuRef} className='flex gap-3 lg:gap-14 lg:text-xl nav-menu'>
            <div className='nav-mob-close text-3xl' onClick={closeMenu}><IoMdClose/></div>
            <li className=' cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#Home'><p>Home</p></AnchorLink></li>
            <li className=' cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#About_Me'><p>About Me</p></AnchorLink></li>
            <li className=' cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#Skill'><p>Skill</p></AnchorLink></li>
            <li className=' cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#Project'><p>Project</p></AnchorLink></li>
            <li className=' cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#Contact'><p>Contact Us</p></AnchorLink></li>
        </ul>
    </div>
  )
}

export default Navbar