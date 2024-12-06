import React from 'react'
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Skills from './Skills';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Porfolio';

const Home = () => {
  return (
    <div>
       <Hero/>
       <About />
       <Service/>
       <Resume/>
       <Portfolio/>
       <Skills />
       <Contact/>
    </div>
  )
}

export default Home