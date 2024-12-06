import React from 'react'
import Max2 from '../image/2 (1).jpg'
import Max3 from '../image/bg-img.jpg'
import Max4 from '../image/1.jpg'
import Max5 from '../image/6.jpg'
import Max6 from '../image/4.jpg'
import Max7 from '../image/3 (1).jpg'

const Porfolio = () => {
  return (
    <div  className='flex justify-between items-center bg-[#000000] gap-10 flex-col p-10 '>
        <h1 className='font-mono text-[30px] text-[#CF1F1F]  '>--Portfolio-- </h1>
       <div className="flex justify-center max-md:flex-col items-center gap-10 ">
            <img className='w-[25vw] max-md:w-[55vw]    h-[30vh] ' src={Max2.src} alt="" />
            <img className='w-[25vw] max-md:w-[55vw]    h-[30vh] ' src={Max3.src} alt="" />
            <img className='w-[25vw] max-md:w-[55vw]    h-[30vh] ' src={Max4.src} alt="" />
        </div>
        <div className=" flex justify-center max-md:flex-col items-center gap-10 ">
            <img className='w-[25vw] max-md:w-[55vw]   h-[30vh] ' src={Max5.src} alt="" />
            <img className='w-[25vw] max-md:w-[55vw]   h-[30vh] ' src={Max6.src} alt="" />
            <img className='w-[25vw]  max-md:w-[55vw]  h-[30vh] ' src={Max7.src} alt="" />
        </div>
    </div>
  )
}

export default Porfolio