import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { FaFileDownload } from "react-icons/fa";

const MobileDownload = () => {
    const timeline = gsap.timeline();
    useLayoutEffect(() => {
        timeline.to('.button', {
            rotate: 360,
            duration: 3,
            repeat: -1,
            ease: 'linear'
        }).to('.button', {
            scale: 1.1,
            duration: 3,
            repeat: -1,
            yoyo: true,
        })
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className=' text-white font-semibold mb-3'>Download CV</h1>
            <div className='button w-20 h-20 rounded-full bg-gradient-to-tr from-teal-400 to-yellow-200 flex items-center justify-center shadow-md shadow-black'>
                <div className=' outer w-16 h-16 rounded-full border-dashed border-2 border-black flex items-center justify-center'>
                    <FaFileDownload size={26} />
                </div>
            </div >
        </div>
    )
}

export default MobileDownload