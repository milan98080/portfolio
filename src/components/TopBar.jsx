import React from 'react'
import { BiSolidPaperPlane } from "react-icons/bi";

const TopBar = () => {

    const handleMailClick = () => {
        const emailAddress = 'mee.lawn111@gmail.com';
        const subject = '';
        const body = '';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className=' sticky top-0 left-0 w-full flex items-center justify-between px-8 lg:px-16 py-4'>
            <img className=' w-36 cursor-pointer' src='logo.svg' />
            <div className='flex items-center justify-center w-20 h-12 rounded-md bg-neutral-500/25 hover:bg-neutral-500/45 cursor-pointer' onClick={handleMailClick}>
                <BiSolidPaperPlane color='white' size={20} />
            </div>
        </div>
    )
}

export default TopBar