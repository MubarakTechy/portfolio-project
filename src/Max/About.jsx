import React from 'react'
import Max2 from '../image/IMG-20240810-WA0044_1.jpg';

import { FaPenClip } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";cbchds

// About component with image, text, and buttons. The buttons are currently empty placeholders.
const About = () => {
  return (
    <div id='About' className='bg-[#E9E9E9]  flex flex-col justify-center items-center overflow-hidden p-10'>
        <div className=' flex  max-md:flex-col max-lg:flex-col justify-center items-center gap-10 '>
            <div><img className='about-img w-[35vw] max-sm:w-[70vw]  ' src={Max2.src} alt="" /></div>
           <div className='flex flex-col gap-7 '>
              <h1 className=' text-6xl font-mono text-center text-[#CF1F1F]'>About me</h1>
              <p className='text-lg text-gray-600  max-lg:w-[90vw]  max-sm:w-[90vw] max-md:w-[100vw] w-[45vw] font-mono text-start'>Hi, I'm Mubarak – a passionate web developer with 3 years of experience crafting impactful digital experiences. I thrive on turning ideas into interactive, user-friendly websites. From concept to deployment, I bring dedication and precision to every project. Let's build something amazing together.</p>
              <div className=' flex gap-8 items-center justify-center  '>
                <button className='w-[10vw] max-sm:w-[23vw] max-lg:w-[30vw]  max-md:w-[40vw] max-sm:text-[15px] bg-[#CF1F1F] rounded  text-white text-[25px] font-mono gap-2 border-border 2 hover:text-white hover:bg-black  flex flex-col p-3 ' ><FaPenClip size={35} /> Designer</button>
                <button className='w-[11vw]  max-sm:w-[23vw] max-lg:w-[90vw]  max-md:w-[40vw]   max-sm:text-[15px] rounded text-[25px] outline font-mono gap-2 border-border 2 hover:text-white hover:bg-black  flex flex-col p-3 ' ><AiOutlineUser size={35} />Developing</button>
                <button className='w-[11vw] max-sm:w-[23vw]  max-lg:w-[90vw] max-md:w-[40vw]   max-sm:text-[15px]  bg-[#CF1F1F]  rounded text-[25px] text-white font-mono gap-2 border-border 2 hover:text-white hover:bg-black  flex flex-col p-3 ' ><IoCodeSlash size={35} />Programmer</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About