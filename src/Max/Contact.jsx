'use client'
import React, {useState} from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
     
    const [name , setName]  = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending ] = useState (false)

    async function  fetchApi(e){
        e.preventDefault()
        setSending(true)
        try {
           const baseurl ='https://formserver-srjh.onrender.com/submit-form/f93837d0-30b7-40d9-bfd2-5d0df4b61e8f'
           const response  = await fetch (baseurl,{
              method:'POST',
              headers: {'Content-type' : 'application/json'},
              body : JSON.stringify({name, email, subject, message})    
           }); console.log(response)
           await response.json()
           if (response.ok){ 
            setSending(false)
            toast.status('message sent!!!')    
            console.log(toast.success) 
           }
        } catch (error) {
            setSending(false)
            toast.error ('unable to send please check your internet ');
            console.log(error.message)
        }

    }
     

  return (
    <div  id='Contact'  className=' flex justify-center max-md:flex-col  overflow-hidden items-center p-[5%] gap-[20%] bg-black '>
        <form onSubmit={fetchApi} method='post'>
            <div className=' flex shape flex-col justify-center items-start text-start gap-5  '>
                <h1 className='font-mono  text-[35px] text-[#CF1F1F]'>Contact</h1>
                <input onChange={(e)=> setName(e.target.value)} name='name' value={name} className='w-[35vw]  max-sm:w-[100vw] bg-[#1E1E1E] p-3 make border-none text-white  rounded-[5px]  hover:border-b'  type="text" id="name"  placeholder="Name" required="" data-error="Please enter your name"></input>
                <input  onChange={(e)=> setEmail(e.target.value)} name='email' value={email}  className='w-[35vw]  max-sm:w-[100vw] bg-[#1E1E1E] p-3 make border-none text-white  rounded-[5px]  hover:border-b      ' type="email" required  placeholder='Email'  id="email" />
                <input  onChange={(e)=> setSubject(e.target.value)} name='subject' value={subject}  className='w-[35vw] max-sm:w-[100vw]  bg-[#1E1E1E] p-3 make border-none text-white  rounded-[5px]  hover:border-b  ' type="text" placeholder='Subject' id="" />
                <div className='flex flex-col gap-4 text-start '>
                    <textarea onChange={(e)=> setMessage(e.target.value)} name='message' value={message} className=' max-sm:w-[100vw]  w-[35vw] bg-[#1E1E1E] rounded-[5px]  text-[grey]  h-[30vh]  border-1 ' placeholder='Message' id=""></textarea>
                    <button  className='p-2 bg-[#cF1F1F] text-[#E9E9E9] font-mono max-sm:w-[25vw]    w-[10vw] '>{sending ? 'sending...' : 'Send' } </button>
                </div>
           </div>
           <ToastContainer />
        </form>
        <div className=' flex flex-col max-md:justify-start  max-sm:items-start max-sm:text-start max-sm:mr-[%]  gap-5 p-2 '>
            <h1 className='font-serif text-[35px] text-[#CF1F1F] '>Info</h1>
            <p className=' text-lg text-white w-[30vw] max-sm:w-[80vw]   font-mono text-start'>Please fill out the form on this section to contact with me.</p>
            <div className='flex flex-col  gap-3 '>
                 <div className='flex gap-3 items-center'>
                    <MdEmail className='text-[#cF1F1F] ' size={30} />
                    <h1 className=' font-serif  text-[22px] text-[#CF1F1F] '>Email</h1>
                 </div>
                 <h1 className='font-mono  text-[15px]  text-white ' >kadirmubarak27@gmail.com</h1>
            </div>
            <div className='flex flex-col gap-3 '>
                <div className='flex gap-3 items-center'>
                   <MdLocationOn className='text-[#cF1F1F] ' size={30} />
                    <h1  className=' font-serif text-[22px] text-[#CF1F1F] '>Address</h1>
                </div>
                <h1 className='font-mono  text-[15px] text-white ' >New York ,City</h1>
            </div>
            <div  className='flex flex-col gap-3 '>
                <div  className='flex gap-3 items-center' >
                   <FaPhone className='text-[#cF1F1F] ' size={30} />
                    <h1  className=' font-serif text-[22px] text-[#CF1F1F]'>Phone </h1>
                </div>
                 <span className='font-mono  text-[15px] text-white'>07066214165</span>
            </div>
            <div className='flex flex-col  gap-3'>
                <div className='  gap-3' >
                    <a className='font-mono flex gap-3 items-center' href='https://wa.me/2347066214165'><FaWhatsapp className='text-[#CF1F1F]   hover:text-[white]' size={40}  />
                    <p className='text-[white] text-[15px]'>+234 7066214165</p></a>
                </div>
               <div>
                   <a href='linkedin.com/in/'><CiLinkedin   className=' text-[white]  hover:text-[#CF1F1F]  'size={35} /></a>
                   <p>Abdulkadir Mubarak</p>
               </div>
           </div>

        </div>

    </div>
  )
}

export default Contact