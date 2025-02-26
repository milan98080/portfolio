import React from 'react'
import TopBar from '../components/TopBar'
import MobileDownload from '../components/MobileDownload';
import Links from '../components/Links';
import { MdOutlineSwipeLeft } from "react-icons/md";

const AboutPage = () => {

  const downloadCV = () => {
    const aTag = document.createElement('a');
    aTag.href = '/CV_MILAN_POKHREL.pdf';
    aTag.setAttribute('download', 'CV_MILAN_POKHREL.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  }


  return (
    <>
      <TopBar />
      <div className='mx-8 lg:mx-16 mt-20 md:mt-[20dvh] lg:w-[60%] z-20 overflow-scroll'>
        <h1 className=' text-white font-bold text-4xl md:text-5xl md:w-[60%] lg:w-[100%] lg:text-6xl font-poppins'>Creative Web Developer</h1>
        <h1 className=' text-neutral-400 text-xl md:text-2xl lg:text-3xl mt-3 font-poppins'>Values creativity and simplicity!</h1>
        <Links />
      </div>
      <div className='absolute md:hidden right-14 bottom-32'>
        <MobileDownload downloadCV={downloadCV}/>
      </div>
      <div className='hidden md:block md:absolute lg:items-center justify-center md:right-32 md:top-[25dvh]'>
        <img src='avatar.png' className='md:w-72 lg:w-80' />
        <div onClick={downloadCV} className='w-36 md:w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 flex py-3 rounded-lg items-center justify-center cursor-pointer hover:shadow-md shadow-black'>
          <h1 className='font-semibold text-xl text-white font-poppins'>Download CV</h1>
        </div>
      </div>
      <div className=' absolute lg:hidden flex flex-col items-end right-10 bottom-20'>
        <MdOutlineSwipeLeft size={20} className=' text-white'/> &nbsp; &nbsp; <h1 className=' text-neutral-400 font-thin text-base font-poppins'> Swipe to Explore</h1>
      </div>
      <div className='absolute md:block mx-8 md:pt-10 lg:absolute flex flex-col lg:w-full bottom-20 md:bottom-32 lg:bottom-0 left-0  lg:mx-16 lg:mb-10'>
        <h1 className=' text-neutral-400 text-sm lg:text-xl mb-3 font-poppins'>Currently working as DevOps Engineer at:</h1>
        <img src='leapfrog.svg' className='w-36 md:w-44 lg:w-64' />
      </div>
    </>
  )
}

export default AboutPage
