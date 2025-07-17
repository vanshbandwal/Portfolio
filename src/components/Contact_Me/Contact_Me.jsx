import React from 'react'
import './Contact_Me.css'
import { SiGmail } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Contact_Me = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6a93e4d-5cdd-4c80-b336-f8651dfba52e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("form submitted properly")
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='mt-24' id='Contact'>
      <motion.div 
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0}}
      className='flex justify-center'><h1 className='text-5xl font-bold'>Get In Touch</h1></motion.div>
      <div className='mt-16 flex flex-col lg:flex-row '>
        <motion.div 
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}}
        className='w-full lg:w-1/2 mt-20'>
          <h1 className='text-4xl font-black bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent mb-6' >Let's Talk</h1>
          <p className='pl-2'>I am available to talk on E-mail ,<br/> so feel to send me a message about anything . <br/>You can contact anything .</p>
          <div className='mt-7 flex flex-col gap-4'>
            <div className='flex gap-5'><div className='text-2xl'><SiGmail/></div><span>bandwalvansh@gmail.com</span></div>
            <div className='flex gap-5'><div className='text-2xl'><IoIosCall/></div><span>8955874931</span></div>
            <div className='flex gap-5'><div className='text-2xl'><IoLocationOutline/></div><span>1 Dhan Mandi , Inside Delhi Gate</span></div>
          </div>
        </motion.div>
        <motion.form 
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}}
        onSubmit={onSubmit} className='w-full lg:w-1/2 flex flex-col gap-3 mt-24 lg:mt-2'>
          <div className='flex flex-col gap-2'>
            <div>Your Name</div>
            <div><input type="text" placeholder='Enter Your Name' className='w-full bg-neutral-600 px-3 py-2 rounded-sm' required/></div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>Your Email</div>
            <div><input type="text" placeholder='Your Email'  className='w-full bg-neutral-600 px-3 py-2 rounded-sm' required/></div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>Write Your Message</div>
            <div><textarea type="text" placeholder='Write Your Message Here' rows={10}  className='w-full bg-neutral-600 px-3 py-2 rounded-sm' required/></div>
          </div>
          <div className='flex justify-center'><button className='px-6 py-2 m-10 bg-neutral-200 text-black rounded-md text-2xl bg-gradient-to-r from-pink-300 to-purple-500 cursor-pointer hover:text-2xl'>Submit</button></div>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact_Me