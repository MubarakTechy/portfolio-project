'use client'
import React from 'react'
import { FaReact, FaTools, FaRocket } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  const services = [
    {
      icon: <FaReact size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Branding",
      description: "From logo design to complete brand identity systems. I create brands that resonate with your audience. I collaborate with you to understand your values, mission, and target market to design visuals that communicate your brand's message clearly."
    },
    {
      icon: <FaTools size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Web Development",
      description: "As a web developer with a love for clean code and intuitive design, I create websites that not only look great but function flawlessly. Whether you need a stunning landing page, a full-fledged e-commerce site, or a custom web application, I have the skills to bring your vision to life."
    },
    {
      icon: <FaRocket size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Development",
      description: "I use cutting-edge technologies to develop dynamic web applications tailored to your specific needs. Whether it's integrating complex systems, developing databases, or providing custom functionality, I ensure your app runs smoothly and securely."
    },
    {
      icon: <FaCar size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Web Designer",
      description: "With a deep understanding of user experience (UX) and user interface (UI) design principles, I craft visually appealing websites that are intuitive and easy to navigate. My designs are centered around your brand, ensuring a seamless digital journey for your audience."
    },
    {
      icon: <BiWorld size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Social Media",
      description: "Social media is a key driver for business growth. I help brands create engaging social media strategies that align with your business goals, increase visibility, and engage your audience. From content creation to ad management, I'll help you grow your online presence."
    }
  ];

  return (
    <div id='Service' className='py-16 px-4 migos md:px-10 bg-[#0F0F0F]'>
      <div className='flex flex-col items-center mb-12'>
        <h1 className='font-bold text-3xl md:text-5xl text-[#E9E9E9] mb-2'>What I Do</h1>
        <div className='w-24 h-1 bg-[#CF1F1F] rounded-full'></div>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         autoplay={{ delay: 5000, disableOnInteraction: false }}
         breakpoints={{
           640: { slidesPerView: 1 },
           768: { slidesPerView: 2 },
           1024: { slidesPerView: 3 }, 

         }}
          className='pb-12'
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className='group h-full bg-[#1A1A1A] rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-[#CF1F1F]/20 hover:-translate-y-2'>
                <div className='mb-4'>
                  {service.icon}
                </div>
                <h2 className='font-mono text-2xl md:text-3xl text-[#E9E9E9] mb-4'>{service.title}</h2>
                <p className='font-mono text-sm text-[#E9E9E9] opacity-75'>
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Service;