'use client'
import React, { useState } from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  async function fetchApi(e) {
    e.preventDefault();
    setSending(true);
    try {
      const baseurl = 'https://formserver-srjh.onrender.com/submit-form/f93837d0-30b7-40d9-bfd2-5d0df4b61e8f';
      const response = await fetch(baseurl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      await response.json();
      setSending(false);
      toast.success('Message sent!');
    } catch (error) {
      setSending(false);
      toast.error('Unable to send, please check your internet.');
    }
  }

  return (
    <motion.div 
      id='Contact'
      className='flex justify-center max-md:flex-col max-lg:items-start max-lg:flex-col overflow-hidden items-center p-[5%] gap-[20%] bg-black'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form 
        onSubmit={fetchApi} 
        method='post'
        className='flex flex-col gap-5'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='font-mono text-[35px] text-[#CF1F1F]'>Contact</h1>
        <motion.input 
          whileFocus={{ scale: 1.05 }}
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className='input-field' 
          type='text' placeholder='Name' required
        />
        <motion.input 
          whileFocus={{ scale: 1.05 }}
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className='input-field' 
          type='email' placeholder='Email' required
        />
        <motion.input 
          whileFocus={{ scale: 1.05 }}
          onChange={(e) => setSubject(e.target.value)} 
          value={subject} 
          className='input-field' 
          type='text' placeholder='Subject'
        />
        <motion.textarea 
          whileFocus={{ scale: 1.05 }}
          onChange={(e) => setMessage(e.target.value)} 
          value={message} 
          className='input-field h-[30vh]' 
          placeholder='Message'
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='p-2 bg-[#cF1F1F] text-[#E9E9E9] font-mono max-sm:w-[25vw] max-lg:w-[30vw] w-[10vw]'
        >
          {sending ? 'Sending...' : 'Send'}
        </motion.button>
        <ToastContainer />
      </motion.form>

      <motion.div 
        className='flex flex-col gap-5 p-2' 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className='font-serif text-[35px] text-[#CF1F1F]'>Info</h1>
        <p className='text-lg text-white font-mono'>Fill out the form to contact me.</p>
        {[{ icon: MdEmail, label: 'Email', text: 'kadirmubarak27@gmail.com' },
          { icon: MdLocationOn, label: 'Address', text: 'New York, City' },
          { icon: FaPhone, label: 'Phone', text: '+44 7428287353 & 07066214165' }].map((item, index) => (
          <motion.div 
            key={index} 
            className='flex flex-col gap-3' 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className='flex gap-3 items-center'>
              <item.icon className='text-[#cF1F1F] animate-bounce' size={30} />
              <h1 className='font-serif text-[22px] text-[#CF1F1F]'>{item.label}</h1>
            </div>
            <h1 className='font-mono text-[15px] text-white'>{item.text}</h1>
          </motion.div>
        ))}
        <a 
          href='https://wa.me/2347066214165' 
          className='flex gap-3 items-center font-mono'
        >
          <FaWhatsapp className='text-[#CF1F1F] animate-bounce hover:text-white' size={40} />
          <p className='text-white text-[15px]'>+234 7066214165</p>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;