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
      description: 'Description for Project 1',
      url: "https://google.com"
    },
    {
      id: 2,
      src: photo2.src,
      alt: 'photo2',
      title: 'Project 2',
      description: 'Description for Project 2',
      url: "google.com"

    },
    {
      id: 3,
      src: photo3.src,
      alt: 'photo3',
      title: 'Project 3',
      description: 'Description for Project 3',
      url: "facebook.com"

    },
    {
      id: 4,
      src: photo4.src,
      alt: 'photo4',
      title: 'Project 4',
      description: 'Description for Project 4',
      url: "google.com"

    },
    {
      id: 5,
      src: photo5.src,
      alt: 'photo5',
      title: 'Project 5',
      description: 'Description for Project 5',
      url: "google.com"

    },
    {
      id: 6,
      src: photo6.src,
      alt: 'photo6',
      title: 'Link to pages',
      description: 'Click to view more details',
      url: "google.com"

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

