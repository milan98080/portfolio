import React, { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import TopBar from '../components/TopBar'
import { SlLocationPin } from "react-icons/sl";
import { CiMobile1, CiMail } from "react-icons/ci";
import Links from '../components/Links';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const [ mailSent , setMailSent ] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (mailSent) {
      toast.error('Message already sent ! Please Try again later.');
      setSubmitting(false);
      return;
    }
    emailjs.sendForm('service_6vis7xu', 'template_qr0skco', form.current, '7D5qxkpi2qqsJbFPR')
      .then((result) => {
        toast.success('Message sent successfully !');
        setMailSent(true);
        form.current.reset();
        setSubmitting(false);
      }, (error) => {
        toast.error('Something went wrong !');
        setSubmitting(false);
      });
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <TopBar />
      <div className='w-full flex items-center justify-center'>
        <div className='w-[85%] h-[70dvh] my-12 bg-neutral-800/50 rounded-2xl border border-neutral-400 py-2 md:py-10 lg:py-20 flex flex-wrap overflow-scroll'>
          <div className='w-full pl-4 md:pl-24 mb-0 md:mb-4 lg:mb-8 '><Links /></div>
          <form ref={form} onSubmit={sendEmail} className='form w-full md:w-[60%] pl-4 pr-4 md:pr-0 md:pl-24'>
            <h1 className=' text-white font-semibold text-2xl md:text-4xl lg:text-5xl font-poppins'>Contact Me !</h1>
            <h1 className=' text-neutral-400 text-lg md:text-2xl mt-1 md:mt-4 font-poppins'>Would love to hear from you.</h1>
            <div className=' w-full flex'>
              <input required minLength={3} type='text' name='user_name' id='name' placeholder='Name' className=' font-poppins w-[40%] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-3 md:mt-8 mr-2 p-2' />
              <input required type='email' name='user_email' id='email' placeholder='Email' className=' font-poppins w-[60%] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-3 md:mt-8 p-2' />
            </div>
            <input required minLength={3} type='text' name='topic' id='title' placeholder='Title' className=' font-poppins w-[100%] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-4 p-2' />
            <textarea required minLength={5} type='text' name='message' id='message' placeholder='Message' className=' font-poppins w-[100%] max-h-[200px] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-4 p-2' />
            <div className='w-full flex items-center justify-center mt-6'>
              <button disabled={submitting} type='submit' className=' bg-black border border-neutral-400 rounded-3xl text-neutral-400 px-10 py-2 font-poppins'>Send Message</button>
            </div>
          </form>
          <div className='others hidden md:block w-[40%] pl-16'>
            <img src='avatar.png' className='w-60 hidden lg:block' />
            <div className='flex mt-4 items-center'>
              <SlLocationPin color='white' size={20} />
              <h1 className='text-neutral-400 text-xl ml-6 font-poppins'>Pokhara, Nepal</h1>
            </div>
            <div className='flex mt-1 items-center'>
              <CiMobile1 color='white' size={20} />
              <h1 className='text-neutral-400 text-xl ml-6 font-poppins'>+977-9808097406</h1>
            </div>
            <div className='flex mt-1 items-center'>
              <CiMail color='white' size={20} />
              <h1 className='text-neutral-400 text-xl ml-6 font-poppins'>mee.lawn111@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage