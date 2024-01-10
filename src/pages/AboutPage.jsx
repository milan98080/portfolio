import React from 'react'
import TopBar from '../components/TopBar'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import MobileDownload from '../components/MobileDownload';

const AboutPage = ({page}) => {

  const githubLink = "https://github.com/milan98080";
  const linkedInLink = "https://www.linkedin.com/in/milanpokhrel";
  const facebookLink = "https://www.facebook.com/milan.pokhrel.52687/";
  const instagramLink = "https://www.instagram.com/ig_milann";

  const downloadCV = () => {
    const aTag = document.createElement('a');
    aTag.href = 'http://localhost:5173/CV_MILAN_POKHREL.pdf';
    aTag.setAttribute('download', 'CV_MILAN_POKHREL.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  }


  return (
    <>
      <TopBar />
      <div className='mx-8 lg:mx-16 mt-20 md:mt-[20dvh] lg:w-[60%] z-20 overflow-scroll'>
        <h1 className=' text-white font-bold text-4xl md:text-5xl md:w-[60%] lg:w-[100%] lg:text-6xl '>Creative Web Developer</h1>
        <h1 className=' text-neutral-400 text-xl md:text-2xl lg:text-3xl mt-3'>Values creativity and simplicity!</h1>
        <div className={`flex gap-2 mt-5 flex-wrap`}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className='github flex items-center justify-center w-16 h-10 rounded-md bg-black cursor-pointer shadow-md shadow-black'>
            <FaGithub color='white' size={20} />
          </a>
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className='linkedIn flex items-center justify-center w-16 h-10 rounded-md bg-[#0077B5] cursor-pointer shadow-md shadow-black'>
            <FaLinkedinIn color='white' size={20} />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className='facebook flex items-center justify-center w-16 h-10 rounded-md bg-[#4267B2] cursor-pointer shadow-md shadow-black'>
            <FaFacebookF color='white' size={20} />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='instagram flex items-center justify-center w-16 h-10 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-700 to-purple-800 cursor-pointer shadow-md shadow-black'>
            <FaLinkedinIn color='white' size={20} />
          </a>
        </div>
      </div>
      <div className='absolute md:hidden right-20 bottom-48'>
        <MobileDownload/>
      </div>
      <div className='hidden md:block md:absolute lg:items-center justify-center md:right-32 md:top-[25dvh]'>
        <img src='avatar.png' className='md:w-72 lg:w-80' />
        <div onClick={downloadCV} className='w-36 md:w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 flex py-3 rounded-lg items-center justify-center cursor-pointer hover:shadow-md shadow-black'>
          <h1 className='font-semibold text-xl text-white'>Download CV</h1>
        </div>
      </div>
      <div className='absolute md:block mx-8 md:pt-10 lg:absolute flex flex-col lg:w-full bottom-32 lg:bottom-0 left-0  md:mx-16 lg:mb-10'>
        <h1 className=' text-neutral-400 text-sm lg:text-xl mb-3'>Currently working at:</h1>
        <img src='bizbazarlogo.png' className='w-36 md:w-44 lg:w-64' />
      </div>
    </>
  )
}

export default AboutPage