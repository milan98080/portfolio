import './App.css';
import gsap from 'gsap';
import { useLayoutEffect, useState } from 'react';
import AboutPage from './pages/AboutPage';
import WorkAndEducationPage from './pages/WorkAndEducationPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ContactPage from './pages/ContactPage';
import MobileNav from './components/MobileNav';

function App() {
  const page = ["first", "second", "third", "forth"]
  let numberOfPages = 0;
  const [currentPage, setCurrentPage] = useState(1)
  const [counter, setCounter] = useState(0)
  const slidepage = gsap.timeline();

  const tl = gsap.timeline();

  const updateCounter = () => {
    if (counter >= 100) {
      return;
    }
  
    setCounter((prev) => {
      const newCounter = prev + Math.floor(Math.random() * 10) + 1;
  
      if (newCounter > 100) {
        return 100;
      }
  
      let delay = Math.floor(Math.random() * 900) + 50;
  
      setTimeout(updateCounter, delay);
  
      return newCounter;
    });
  };

  useLayoutEffect(() => {
    updateCounter();
    tl.to(".counter", 0.25 , {
      delay: 2,
      opacity: 0,
      zIndex: -1,
    }).to(".bar", 1.5 , {
      delay: 0,
      height: 0,
      zIndex: -1,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut"
    }).to(".loading", {
      zIndex: -1,
      duration: 0
    })
  }, [])

  const navigate = (num) => {
    numberOfPages = Math.abs(currentPage - num)
    if (currentPage < num) {
      if (numberOfPages == 1) {
        console.log(page[num - 2])
        contract(page[num - 2])
        setCurrentPage(num)
      }
      if (numberOfPages == 2) {
        console.log(`double${page[num - 3]}`)
        contract(`double${page[num - 3]}`)
        setCurrentPage(num)
      }
      if (numberOfPages == 3) {
        console.log(`triplefirst`)
        contract(`triplefirst`)
        setCurrentPage(num)
      }
    } else if (currentPage > num) {
      if (numberOfPages == 1) {
        console.log(page[num - 1])
        expand(page[num - 1])
        setCurrentPage(num)
      }
      if (numberOfPages == 2) {
        console.log(`double${page[num - 1]}`)
        expand(`double${page[num - 1]}`)
        setCurrentPage(num)
      }
      if (numberOfPages == 3) {
        console.log(`triplefirst`)
        expand(`triplefirst`)
        setCurrentPage(num)
      }
    }
  }

  const expand = (nav) => {
    slidepage.to(`.${nav}`, {
      x: 0
    })
  }

  const contract = (nav) => {
    slidepage.to(`.${nav}`, {
      x: "-80dvw"
    })
  }

  return (
    <>
    <div className='loading absolute z-30'>
    <h1 className='counter fixed w-full h-full flex justify-end items-end z-20 text-[#bcbcc4] px-[0.2em] py-[0.4em] text-9xl '>{counter}</h1>
    <div className={` loader `}></div>
    <div className='overlay h-[100dvh] w-[100dvw] z-10 flex'>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
      <div className='bar w-[10dvw] h-[100dvh] bg-[#1a1a1a]'></div>
    </div>
    </div>
      <section className={`${(currentPage > 4) && "w-[80dvw]"} forth absolute  lg:w-[100dvw] h-full flex`}>
        <div className=' h-full lg:ml-[15dvw] w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <ContactPage page={currentPage}/>
        </div>
        <div className='hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex flex-col items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(4)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl'>CONTACT</h1>
        </div>
      </section>

      <section className={`${(currentPage > 3) && "w-[80dvw]"} third absolute w-[100dvw] lg:w-[95dvw] h-full flex doublesecond triplefirst`}>
        <div className=' h-full lg:ml-[10dvw] w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <TechnologiesPage page={currentPage}/>
        </div>
        <div className=' hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(3)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl'>TECHNOLOGIES</h1>
        </div>
      </section>

      <section className={`${(currentPage > 2) && "w-[80dvw]"} second absolute w-[100dvw] lg:w-[90dvw] h-full flex doublefirst doublesecond triplefirst`}>
        <div className=' h-full lg:ml-[5dvw] w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <WorkAndEducationPage page={currentPage}/>
        </div>
        <div className='hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(2)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl'>WORK AND EDUCATION</h1>
        </div>
      </section>

      <section className={`${(currentPage > 1) && "w-[80dvw]"} first absolute w-[100dvw]  lg:w-[85dvw] h-full flex doublefirst triplefirst`}>
        <div className=' relative h-full w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <AboutPage page={currentPage}/>
        </div>
        <div className=' hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(1)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl'>ABOUT ME</h1>
        </div>
      </section>
      <MobileNav handleNext={() => {if(currentPage != 4){contract(page[currentPage-1]); setCurrentPage(currentPage+1)}}} handlePrev={() => {if(currentPage != 1){expand(page[currentPage-2]) , setCurrentPage(currentPage-1)}}} />
    </>
  );
}

export default App;
