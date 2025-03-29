import React from 'react';
import { GiGraduateCap } from 'react-icons/gi';
import { MdDeveloperMode } from 'react-icons/md';

const Resume = () => {
  return (
    <div className='flex flex-col items-center p-8 bg-black text-[#E9E9E9]'>
      <div className='flex flex-wrap justify-center gap-16 max-w-6xl'>
        {/* Experience Section */}
        <div className='flex flex-col items-start gap-4 w-full sm:w-[45%]'>
          <div className='flex items-center gap-4'>
            <span className='h-16 w-16 flex items-center justify-center rounded-full bg-[#CF1F1F]'>
              <GiGraduateCap className='text-black' size={40} />
            </span>
            <h2 className='text-3xl font-mono'>Experience</h2>
          </div>
          <h3 className='text-2xl font-mono'>Professional Experience</h3>
          <h4 className='text-xl text-[#CF1F1F] font-mono'>Sep 2020 - May 2024</h4>
          <p className='font-mono text-start text-lg'>
            With years of experience in both web development and computer science, I have contributed to numerous projects
            ranging from dynamic websites to innovative software applications.
          </p>
        </div>

        {/* Education Section */}
        <div className='flex flex-col items-start gap-4 w-full sm:w-[45%]'>
          <div className='flex items-center gap-4'>
            <span className='h-16 w-16 flex items-center justify-center rounded-full bg-[#CF1F1F]'>
              <GiGraduateCap className='text-black' size={40} />
            </span>
            <h2 className='text-3xl font-mono'>Education</h2>
          </div>
          <h3 className='text-2xl font-mono'>Educational Background</h3>
          <h4 className='text-xl text-[#CF1F1F] font-mono'>Jan 2019 - Dec 2023</h4>
          <p className='font-mono text-start text-lg'>
            My academic journey has been focused on mastering computer science principles, with a specific emphasis on software
            development and web technologies.
          </p>
        </div>
      </div>

      {/* Web Development & Master's Section */}
      <div className='flex flex-wrap justify-center gap-16 max-w-6xl mt-12'>
        {/* Web Developer Section */}
        <div className='flex flex-col items-start gap-4 w-full sm:w-[45%]'>
          <div className='flex items-center gap-4'>
            <span className='h-16 w-16 flex items-center justify-center rounded-full bg-[#CF1F1F]'>
              <MdDeveloperMode className='text-black' size={40} />
            </span>
            <h2 className='text-3xl font-mono'>Web Developer</h2>
          </div>
          <h3 className='text-2xl font-mono'>Web Development Expertise</h3>
          <h4 className='text-xl text-[#CF1F1F] font-mono'>Sep 2020 - August 2023</h4>
          <p className='font-mono text-start text-lg'>
            As a web developer, my mission is to create websites and applications that are not only visually appealing but also
            functional and user-friendly. I focus on writing clean code and designing intuitive interfaces that ensure seamless
            user experiences.
          </p>
        </div>

        {/* Master's Degree Section */}
        <div className='flex flex-col items-start gap-4 w-full sm:w-[45%]'>
          <div className='flex items-center gap-4'>
            <span className='h-16 w-16 flex items-center justify-center rounded-full bg-[#CF1F1F]'>
              <GiGraduateCap className='text-black' size={40} />
            </span>
            <h2 className='text-3xl font-mono'>Master's Degree</h2>
          </div>
          <h3 className='text-2xl font-mono'>Web Services</h3>
          <h4 className='text-xl text-[#CF1F1F] font-mono'>Jan 2019 - Dec 2023</h4>
          <p className='font-mono text-start text-lg'>
            With a Master’s degree in Computer Science, I have gained a deep understanding of the theoretical and practical
            aspects of computing, which allows me to approach web development with an analytical and methodical mindset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
