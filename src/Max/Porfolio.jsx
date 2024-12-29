import React from 'react'
import photo1 from '../image/3.jpg';
import photo2 from '../image/3.jpg';
import photo3 from '../image/3.jpg';
import photo4 from '../image/3.jpg';
import photo5 from '../image/3.jpg';
import photo6 from '../image/3.jpg';

const Porfolio = () => {
  const restImages = [
    { 
      id: 1,  src: photo1.src, alt: 'photo1' 
    },
    { 
      id: 2, src: photo2.src, alt: 'photo2' 
    },
    { 
      id: 3,  src: photo3.src, alt: 'photo3' 
    },
    { 
      id: 4,  src: photo4.src, alt: 'photo4' 
    },
    { 
      id: 5,  src: photo5.src, alt: 'photo5' 
    },
    { 
      id: 6,  src: photo6.src, alt: 'photo6',tittle:"link to pages", 
    },
  ];
  
  return (
    <div  className='flex justify-between items-center bg-[#000000] gap-10 flex-col p-10 '>
        <h1 className='font-mono text-[30px] text-[#CF1F1F]  '>--Portfolio-- </h1>
        <div className="grid max-sm:flex-col grid-cols-3 gap-4">
          {restImages.map((img) => (
            <div key={img.id} className="rounded-lg overflow-hidden ">
              <img 
                src={img.src} 
                alt={img.alt}
                className=""
              />
            </div>
          ))}
        </div>
       
    </div>
  )
}

export default Porfolio


