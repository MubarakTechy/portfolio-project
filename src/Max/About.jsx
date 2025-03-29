'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Max2 from '../image/press.jpg';
import { FaPenClip } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";


const About = () => {
  return (
    <motion.div
      id='About'
      className='bg-[#E9E9E9] flex flex-col justify-center items-center overflow-hidden p-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className='flex max-md:flex-col justify-center items-center gap-10'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
          <Image className=' rounded-[15px] max-sm:w-[70vw]' 
              src={Max2.src} 
              width={460} 
              height={250} 
              priority   alt="" />
        </motion.div>

        <motion.div
          className='flex flex-col gap-7'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-6xl font-mono text-center text-[#CF1F1F]'>About me</h1>
          <p className='text-lg text-gray-600 max-sm:w-[90vw] w-[45vw] font-mono text-start'>
            Hello! I&apos;m Mubarak. I&apos;m a web developer, and I&apos;m very passionate and dedicated to my work.
            With 3 years of experience as a professional web developer, I have acquired the skills and knowledge
            necessary to make your project a success. I enjoy every step of the design process, from discussion to collaboration.
          </p>

          <motion.div
            className='flex gap-8 items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { icon: <FaPenClip size={35} />, text: "Designer", bg: "bg-[#CF1F1F]", textColor: "text-white" },
              { icon: <AiOutlineUser size={35} />, text: "Developer", bg: "bg-transparent", textColor: "text-black border border-black" },
              { icon: <IoCodeSlash size={35} />, text: "Programmer", bg: "bg-[#CF1F1F]", textColor: "text-white" }
            ].map((btn, index) => (
              <motion.button
                key={index}
                className={`w-[11vw] max-sm:w-[23vw] max-sm:text-[15px] rounded text-[25px] font-mono gap-2 p-3 flex flex-col ${btn.bg} ${btn.textColor} hover:bg-black hover:text-white`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {btn.icon} {btn.text}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
