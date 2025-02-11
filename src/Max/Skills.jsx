'use client'
import React, { useState, useEffect } from 'react'

const ProgressBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);
  
  return (
    <div   className="mb-4">
      <div className="flex  justify-between items-center mb-1">
        
        <span className="text-base font-medium text-black dark:text-[black]">{skill}</span>
        <span className="text-sm font-medium text-black dark:text-[black]">{width}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-[#CF1F1F] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skillsData = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 85 },
    { skill: "JavaScript", percentage: 50 },
    { skill: "React", percentage: 75 },
    { skill: "Next.js", percentage: 80 },
  ]

  return (
    <div   id='Skills' className="p-6   flex-col  gap-3  flex  mx-auto bg-[#E9E9E9]  shadow-md ">
         <div className=' flex flex-col gap-4 items-center justify-center  text-center  '>
           <h1 className='text-[30px] font-serif text-[#CF1F1F]'>I have high skills in developing and programming </h1>
           <p className='w-[50vw] max-sm:w-[95vw] font-mono  max-lg:w-[80vw]'>I was doing everything in my power to provide me with all the experiences to provide cost-effective and high quality products to satisfy my customers all over the world.</p>
         </div>
        <div className=' flex flex-col '>
            <h2 className="text-2xl  text-[#CF1F1F] font-mono text-center mt-3 font-bold mb-4">Skills</h2>
          {skillsData.map((item, index) => (
            <ProgressBar key={index} skill={item.skill} percentage={item.percentage} />
          ))}
        </div>
    </div>
  )
}

export default Skills