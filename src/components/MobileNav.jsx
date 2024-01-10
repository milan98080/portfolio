import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const MobileNav = ({handlePrev , handleNext}) => {
  return (
    <div className='lg:hidden absolute bottom-0 left-0 w-[100dvw] flex items-center justify-around my-9'>
        <div className=' cursor-pointer'>
            <FaArrowLeft color='white' size={20} onClick={handlePrev} />
        </div>
        <div className=' cursor-pointer'>
            <FaArrowRight color='white' size={20} onClick={handleNext} />
        </div>
    </div>
  )
}

export default MobileNav