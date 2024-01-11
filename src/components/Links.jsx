import React from 'react'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Links = () => {

    const githubLink = "https://github.com/milan98080";
    const linkedInLink = "https://www.linkedin.com/in/milanpokhrel";
    const facebookLink = "https://www.facebook.com/milan.pokhrel.52687/";
    const instagramLink = "https://www.instagram.com/ig_milann";

    return (
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
    )
}

export default Links