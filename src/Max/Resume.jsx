import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";


const Resume = () => {
  return (
      <div className='max-lg:flex-col'>
             <div className=' flex  max-lg:flex-col fall justify-center flex-col  items-center p-[5%]  bg-black'>
            <div className=' flex  max-sm:flex-col max-lg:flex-col  flex-col gap-20 '>
              <div className='flex max-sm:flex-col  max-lg:flex-col    justify-center gap-[20vw] '>
                  <div className='flex runtime flex-col gap-3  text-[#E9E9E9]'>   
                      <div className='flex  gap-5'>
                          <div className='flex items-center  '>
                            <span className='h-[9vh] w-[4vw] max-md:w-[15vw] max-md:h-[vh] p-2 rounded-[50%] bg-[#CF1F1F] '><GiGraduateCap className='text-black ' size={40} /></span>      
                          </div>
                            <h1 className='text-[40px] font-mono'>Experience</h1>
                          </div>
                      <div>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-[30px] font-mono'>Professional Experience</h1>
                        <h1 className='text-[25px] text-[#CF1F1F] font-mono '>Sep 2020 - May 2024</h1>
                        <p className=' font-mono text-start max-sm:w-[75vw] max-lg:w-[80vw]  w-[30vw]'>With years of experience in both web development and computer science.. I have contributed to numerous projects ranging from dynamic websites to innovative software applications.</p>
                    </div>
                </div>
          </div>
          <div className='flex  runtime flex-col gap-3  text-[#E9E9E9]'>   
              <div className='flex gap-3 '>
                  <div className='flex items-center '>
                    <span className='h-[9vh] w-[4vw] max-sm:h-[9vh] max-md:w-[13vw] p-2 rounded-[50%] bg-[#CF1F1F] '><GiGraduateCap className='text-[black] ' size={40} /></span>    
                  </div>
                    <h1 className='text-[40px] font-mono'>Education</h1>
                  </div>
              <div>
                  <div>
                      <h1 className='text-[30px] font-mono'>Educational Background</h1>
                      <h1 className='text-[25px] text-[#CF1F1F] font-mono '>Jan 2019 - Dec 2023</h1>
                      <p className=' font-mono items-start max-sm:w-[75vw] max-lg:w-[80vw]  w-[30vw]'>My academic journey has been focused on mastering computer science principles, with a specific emphasis on software development and web technologies.</p>
                  </div>
              </div>
         </div>
        </div>
        <div className='flex max-sm:flex-col max-lg:flex-col  justify-center gap-[20vw] '>
            <div className='flex max-sm:flex-col   runtime flex-col gap-3   text-[#E9E9E9]'>   
                <div className='flex  gap-5'>
                    <div className='flex items-center div   inj '>
                      <span className='h-[9vh] w-[4vw] max-sm:h-[9vh] max-md:w-[13vw] p-2 rounded-[50%] bg-[#CF1F1F] '><MdDeveloperMode className='text-black ' size={40}/></span>  
                      </div>
                      <h1 className='text-[40px] font-mono'>Web Developer</h1>
                    </div>
                <div>
                    <div>
                        <h1 className='text-[30px] font-mono'>Web Development Expertise</h1>
                        <h1 className='text-[25px] text-[#CF1F1F] font-mono '>Sep 2020 - August 2023</h1>
                        <p className=' font-mono text-start max-sm:w-[75vw]  max-lg:w-[80vw] w-[30vw]'>As a web developer, my mission is to create websites and applications that are not only visually appealing but also functional and user-friendly. I focus on writing clean code and designing intuitive interfaces that ensure seamless user experiences.</p>
                    </div>
                </div>
          </div>
          <div className='flex flex-col gap-3 runtime  text-[#E9E9E9]'>   
              <div className='flex gap-3 '>
                  <div className='flex items-center '>
                    <span className='h-[9vh] w-[4vw] max-sm:h-[9vh] max-md:w-[13vw] p-2 rounded-[20%] bg-[#CF1F1F] '><GiGraduateCap className='text-[black] ' size={40} /></span>    
                  </div>
                    <h1 className='text-[40px] font-mono'>Master Computer</h1>
                  </div>
              <div>
                  <div>
                      <h1 className='text-[30px] font-mono'>Web Service</h1>
                      <h1 className='text-[25px] text-[#CF1F1F] font-mono '>Jan 2019 - Dec 2023</h1>
                      <p className=' font-mono items-start max-sm:w-[75vw] max-lg:w-[80vw]  w-[30vw]'>With a Master&apos; degree in Computer Science, I have gained a deep understanding of the theoretical and practical aspects of computing, which allows me to approach web development with an analytical and methodical mindset.</p>
                  </div>
              </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resume