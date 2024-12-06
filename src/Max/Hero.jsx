'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { DiBootstrap } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";



// import { Typed } from 'react-typed';

const Hero = () => {
  return (
    <div  id='Hero'  className='mark  flex-col flex justify-center  items-center p-[15vw] '>
         <div className=' flex flex-col items-center  gap-4'> 
            <div>
              <div  className='flex text-center  items-center'><h1 className='font-mono text-[30px] text-[white]  '>WEB DEVELOPER</h1></div>
              <h1 className='font-bold max-sm:text-[35px]  text-[50px] text-[#CF1F1F]'>
              <Typewriter
              options={{ 
              strings: ['Web Developer', 'Android Developer', 'Frontend Developer'],
              autoStart: true,
              loop: true,
            }}/>
            </h1>
            </div>
           <div className='flex text-center  items-center  gap-4 '> 
                <IoLogoHtml5 className='text-[white] hover:text-[#CF1F1F]' size={40} />
                <RiTailwindCssFill  className='text-[white] hover:text-[#CF1F1F]' size={40}  />
                <FaReact   className='text-[white] hover:text-[#CF1F1F]' size={40} />
                <DiBootstrap   className='text-[white] hover:text-[#CF1F1F]' size={40} />
                <TbBrandJavascript   className='text-[white] hover:text-[#CF1F1F]' size={40} /> 
           </div>
         </div>
    </div>
  )
}

export default Hero