'use client'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaTools } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  
  return (
    <div  id='Service'  className='p-10 gap-[10%] migos '>
       <div className=' flex flex-col items-center '>
        <h1 className='font-bold text-[50px] text-[#E9E9E9] '>What I Do</h1>
       
      </div>
     <Swiper className=' '
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={5}
       slidesPerView={3}
       pagination
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}>
        
       <SwiperSlide> 
          <div className=' flex flex-col ball hover:bg-[black] hover:text-[white]  hover:  pull items-center justify-center text-center'>
              <FaReact size={50} className='text-[#CF1F1F] hover:text-[white]'/>
              <h2 className=' font-mono text-[40px] text-[#E9E9E9]  '>Branding</h2>
              <p className='w-[20vw] max-sm:w-[65vw] font-mono text-[#E9E9E9] '>From logo design to complete brand identity systems, I create brands that resonate with your audience. I collaborate with you to understand your values, mission, and target market to design visuals that communicate your brand's message clearly.</p>
          </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className=' flex flex-col p-3 items-center justify-center text-center' >
        <FaTools size={50} className='text-[#CF1F1F]' />
            <h2 className=' font-mono text-[40px] text-[#E9E9E9]  '>Web Development</h2>
              <p className='w-[20vw] max-sm:w-[85vw] font-mono text-[#E9E9E9] '>As a web developer with a love for clean code and intuitive design, I create websites that not only look great but function flawlessly. Whether you need a stunning landing page, a full-fledged e-commerce site, or a custom web application, I have the skills to bring your vision to life.</p>
          </div>
        </SwiperSlide>
       <SwiperSlide> 
          <div className=' flex flex-col ball  items-center hover:bg-[black] hover:text-[white]  pull justify-center text-center'>
            <FaRocket size={50} className='text-[#CF1F1F]  hover:text-[white]'  />
                <h2 className=' font-mono text-[40px] text-[#E9E9E9] '>Development</h2>
                <p className='w-[25vw] max-sm:w-[75vw] font-mono text-[#E9E9E9]'> I use cutting-edge technologies to develop dynamic web applications tailored to your specific needs. Whether it's integrating complex systems, developing databases, or providing custom functionality, I ensure your app runs smoothly and securely.</p>
          </div>
       </SwiperSlide>
       <SwiperSlide> 
          <div className=' flex flex-col items-center justify-center text-center' >
               <FaCar  size={50} className='text-[#CF1F1F]'  />
               <h2 className=' font-mono text-[40px] text-[#E9E9E9] '>Web Designer</h2>
              <p className='w-[25vw] max-sm:w-[75vw] font-mono text-[#E9E9E9] '>With a deep understanding of user experience (UX) and user interface (UI) design principles, I craft visually appealing websites that are intuitive and easy to navigate. My designs are centered around your brand, ensuring a seamless digital journey for your audience. </p>
          </div>
       </SwiperSlide>
       <SwiperSlide> 
       <div className=' flex flex-col items-center ball pull hover:bg-[black] hover:text-[white]  justify-center text-center'>
           <BiWorld size={50} className='text-[#CF1F1F] hover:bg-[black] hover:text-[white]'  />
            <h2 className=' font-mono text-[40px] text-[#E9E9E9]  '>Social Media </h2>
            <p className='w-[30vw] max-sm:w-[75vw] font-mono text-[#E9E9E9]'> Social media is a key driver for business growth. I help brands create engaging social media strategies that align with your business goals, increase visibility, and engage your audience. From content creation to ad management, I’ll help you grow your online presence.</p>
          </div>
           
       </SwiperSlide>
       
     </Swiper>

 </div>
  );
};

export default Service











// const Service = () => {
//   return (
//     <div className='flex  flex-col  justify-center items-center  '>
//          <div>
//             <h1 className='font-bold text-[50px] '>My Service</h1>
//             <p className=' font-serif text-[30px] ' >What I give </p>
//         </div>
//          <div>
//             <div className='h-[8vh]  rounded-[5px] w-12 p-1 bg-[orange] ' ><FaReact size={40} /></div>
//             <h2>Know Me Better</h2>
//             <p className='w-[20vw] '>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</p>
//          </div>
//     </div>
//   )
// }

// export default Service