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
  const slidepage = gsap.timeline();

  const tl = gsap.timeline();


  useLayoutEffect(() => {
    tl.to(".counter-text", {
      duration: 3,
      opacity: 0,
      yoyo: true,
      repeat: -1,
      zIndex: -1,
    }).from(".progressbar", {
      duration: 3,
      width: 0,
      zIndex: -1,
    }, '<').to(".progressbar", {
      duration:2,
      y: 100,
    })
      .to(".logoimg", {
        duration: 0.5,
        opacity: 0,
        zIndex: -1,
      }, '<').to(".bar", {
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

  const [startX, setStartX] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;

      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          console.log('Significant swipe right');
          if (currentPage != 1) { expand(page[currentPage - 2]); setCurrentPage(currentPage - 1) }
        } else if (deltaX < 0) {
          console.log('Significant swipe left');
          if (currentPage != 4) { contract(page[currentPage - 1]); setCurrentPage(currentPage + 1) }
        }

        setStartX(null);
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}

    >
      <div className='loading absolute z-30'>
        <div className='logoimg fixed w-full h-full flex items-center justify-center'>
          <img src='logo.svg' className=' w-40 lg:w-60' />
        </div>
        <div className='logoimg fixed w-full h-full flex items-end justify-center z-20 text-[#bcbcc4] text-3xl md:text-4xl lg:text-5xl '>
          <h1 className='counter-text mb-24'>Loading</h1>
        </div>
        <div className='progressbar fixed w-full h-full flex items-end justify-center z-20 text-[#bcbcc4] text-3xl md:text-4xl lg:text-5xl '>
          <div className=' w-full h-5 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400'></div>
        </div>
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
          <ContactPage />
        </div>
        <div className='hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex flex-col items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(4)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl font-poppins'>CONTACT</h1>
        </div>
      </section>

      <section className={`${(currentPage > 3) && "w-[80dvw]"} third absolute w-[100dvw] lg:w-[95dvw] h-full flex doublesecond triplefirst`}>
        <div className=' h-full lg:ml-[10dvw] w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <TechnologiesPage />
        </div>
        <div className=' hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(3)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl font-poppins'>TECHNOLOGIES</h1>
        </div>
      </section>

      <section className={`${(currentPage > 2) && "w-[80dvw]"} second absolute w-[100dvw] lg:w-[90dvw] h-full flex doublefirst doublesecond triplefirst`}>
        <div className=' h-full lg:ml-[5dvw] w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <WorkAndEducationPage />
        </div>
        <div className='hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(2)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl font-poppins'>WORK AND EDUCATION</h1>
        </div>
      </section>

      <section className={`${(currentPage > 1) && "w-[80dvw]"} first absolute w-[100dvw]  lg:w-[85dvw] h-full flex doublefirst triplefirst`}>
        <div className=' relative h-full w-[100dvw] lg:w-[80dvw] bg-black bg-opacity-70 '>
          <AboutPage />
        </div>
        <div className=' hidden h-full w-[5dvw] bg-black bg-opacity-80 lg:flex items-center justify-center cursor-pointer whitespace-nowrap' onClick={() => {
          navigate(1)
        }}>
          <h1 className=' rotate-90 cursor-pointer text-white font-bold text-3xl font-poppins'>ABOUT ME</h1>
        </div>
      </section>
      <MobileNav handleNext={() => { if (currentPage != 4) { contract(page[currentPage - 1]); setCurrentPage(currentPage + 1) } }} handlePrev={() => { if (currentPage != 1) { expand(page[currentPage - 2]), setCurrentPage(currentPage - 1) } }} />
    </div>
  );
}

export default App;
