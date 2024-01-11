import React, { useState } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar'
import { SlLocationPin } from "react-icons/sl";
import { CiMobile1, CiMail } from "react-icons/ci";
import Links from '../components/Links';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where your server handles email sending
      await axios.post('YOUR_SERVER_ENDPOINT', formData);

      // Optionally, you can handle success here (e.g., show a success message, redirect the user, etc.)
      console.log('Email sent successfully!');
    } catch (error) {
      // Handle errors here (e.g., show an error message to the user)
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <TopBar />
      <div className='w-full flex items-center justify-center'>
        <div className='w-[85%] h-[70dvh] my-12 bg-neutral-800/50 rounded-2xl border border-neutral-400 py-2 md:py-10 lg:py-20 flex flex-wrap overflow-scroll'>
          <div className='w-full pl-4 md:pl-24 mb-0 md:mb-4 lg:mb-8 '><Links /></div>
          <form onSubmit={handleSubmit} className='form w-full md:w-[60%] pl-4 pr-4 md:pr-0 md:pl-24'>
            <h1 className=' text-white font-semibold text-3xl md:text-4xl lg:text-5xl'>Contact Me !</h1>
            <h1 className=' text-neutral-400 text-xl md:text-2xl mt-1 md:mt-4'>Would love to hear from you.</h1>
            <div className=' w-full flex'>
              <input type='text' name='name' id='name' placeholder='Name' value={formData.name}
                onChange={handleChange} className='w-[40%] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-8 mr-2 p-2' />
              <input type='email' name='email' id='email' value={formData.email}
                onChange={handleChange} placeholder='Email' className='w-[60%] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-8 p-2' />
            </div>
            <input type='text' name='title' id='title' placeholder='Title' value={formData.title}
              onChange={handleChange} className='w-[100%] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-4 p-2' />
            <textarea type='text' name='message' id='message' placeholder='Message' value={formData.message}
              onChange={handleChange} className='w-[100%] max-h-[200px] bg-neutral-500 border rounded-xl border-neutral-400 text-white text-xl focus:outline-none focus:border-white mt-4 p-2' />
            <div className='w-full flex items-center justify-center mt-6'>
              <button type='submit' className=' bg-black border border-neutral-400 rounded-3xl text-neutral-400 px-10 py-2'>Send Message</button>
            </div>
          </form>
          <div className='others hidden md:block w-[40%] pl-16'>
            <img src='avatar.png' className='w-60 hidden lg:block' />
            <div className='flex mt-4 items-center'>
              <SlLocationPin color='white' size={20} />
              <h1 className='text-neutral-400 text-xl ml-6'>Pokhara, Nepal</h1>
            </div>
            <div className='flex mt-1 items-center'>
              <CiMobile1 color='white' size={20} />
              <h1 className='text-neutral-400 text-xl ml-6'>+977-9808097406</h1>
            </div>
            <div className='flex mt-1 items-center'>
              <CiMail color='white' size={20} />
              <h1 className='text-neutral-400 text-xl ml-6'>mee.lawn111@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage