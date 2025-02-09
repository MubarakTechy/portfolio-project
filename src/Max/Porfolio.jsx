import React from 'react';
import photo1 from '../image/3.jpg';
import photo2 from '../image/2.jpg';
import photo3 from '../image/3 (1).jpg';
import photo4 from '../image/4.jpg';
import photo5 from '../image/bg-img.jpg';
import photo6 from '../image/6.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      src: photo1.src,
      alt: 'photo1',
      title: 'Project 1',
      description: ' AI project' ,
      url: "https://app.youlearn.ai/"
    },
    {
      id: 2,
      src: photo2.src,
      alt: 'photo2',
      title: 'Project 2',
      description: 'AI project for students',
      url: "https://www.iu.org/blog/ai-and-education/best-ai-tools-for-students/"

    },
    {
      id: 3,
      src: photo3.src,
      alt: 'photo3',
      title: 'Project 3',
      description: ' health company project',
      url: " https://fikr-health.vercel.app/"

    },
    {
      id: 4,
      src: photo4.src,
      alt: 'photo4',
      title: 'Project 4',
      description: ' LMS project',
      url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiP9PX-pLaLAxVuolAGHSxaAHEYABAWGgJkZw&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAwaG9BhAREiwAdhv6Y9nTw7T0zshE6qCiRJGRvFYnnRAB67wSbvvDl48cgKhOJJAfjCP0cRoCViMQAvD_BwE&ohost=www.google.com&cid=CAESVOD2pOT0_20TU2JC5hzlSOzJjLi12X_WF5QqJ1spYeX0mqsR_th_TG1s1xhDrenx1osqvuHJOYqKIN7_jEd-QHI34j5YQ-5Oi5R0VDj-GHvATsnj7g&sig=AOD64_0Fri0n2fQwMMJ8PHafvTOWsiwBwA&q&adurl&ved=2ahUKEwiAg_D-pLaLAxXGVkEAHRaGAEIQ0Qx6BAgJEAE"

    },
    {
      id: 5,
      src: photo5.src,
      alt: 'photo5',
      title: 'Project 5',
      description: ' Formserver project',
      url: "https://formserverweb.vercel.app/"

    },
    {
      id: 6,
      src: photo6.src,
      alt: 'photo6',
      title: 'Link to pages',
      description: 'Click to view more details',
      url: "https://ib-academy.nl/"

    },
  ];

  return (
    <div className="flex justify-between items-center bg-black gap-10 flex-col p-10">
      <h1 className="font-mono text-[40px] text-[#CF1F1F]">--Portfolio--</h1>
      
      <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-4 w-full">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="relative group rounded-lg overflow-hidden aspect-square"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-center">{item.description}</p>
                <a href={item.url} className="mt-4 px-4 py-2 bg-[#CF1F1F] text-white rounded hover:bg-[#A31919] transition-colors">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

