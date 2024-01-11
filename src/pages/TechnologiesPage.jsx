import React from 'react'
import TopBar from '../components/TopBar'
import { SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiGreensock, SiThreedotjs } from "react-icons/si";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TechnologiesPage = ({page}) => {

  const FrontendTechnologies = [
    {
      name: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      progress: "90",
      color: "#e34c26"
    },
    {
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      progress: "80",
      color: "#264de4"
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      progress: "80",
      color: "#61dbfb"
    },
    {
      name: "NextJS",
      link: "https://nextjs.org/",
      progress: "70",
      color: "black"
    },
    {
      name: "TailwindCSS",
      link: "https://tailwindcss.com/",
      progress: "80",
      color: "#06b6d4"
    },
    {
      name: "GSAP",
      link: "https://greensock.com/gsap/",
      progress: "60",
      color: "green"
    },
    {
      name: "ThreeJS",
      link: "https://threejs.org/",
      progress: "50",
      color: "black"
    }
  ]

  const BackendTechnologies = [
    {
      name: "NestJS",
      link: "https://nestjs.com/",
      progress: "70"
    },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
      progress: "80"
    },
    {
      name: "AWS",
      link: "https://aws.amazon.com/",
      progress: "60"
    },
    {
      name: "Docker",
      link: "https://www.docker.com/",
      progress: "50"
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      progress: "80"
    }
  ]

  return (
    <>
      <TopBar />
      <div className=' w-full px-8 h-[70dvh] overflow-scroll md:mt-10'>
        <div className='frontend w-full'>
          <h1 className='text-white font-bold text-2xl'>Frontend Tools</h1>
          <div className='mt-4 flex gap-4 flex-wrap'>
            {
              FrontendTechnologies.map((tech, index) => (
                <CircularProgressbarWithChildren key={index} value={tech.progress} className='w-20' styles={{path:{stroke: tech.color}}} >
                  <a href={tech.link} target='_blank' rel='noreferrer'>
                    <div className=' rounded-full p-3 bg-white flex items-center justify-center'>
                      {
                        tech.name === "HTML" ? <SiHtml5 className='text-5xl text-[#e34c26]' /> :
                        tech.name === "CSS" ? <SiCss3 className='text-5xl text-[#264de4]' /> :
                        tech.name === "React" ? <SiReact className='text-5xl text-[#61dbfb]' /> :
                        tech.name === "NextJS" ? <SiNextdotjs className='text-5xl text-black' /> :
                        tech.name === "TailwindCSS" ? <SiTailwindcss className='text-5xl text-[#06b6d4]' /> :
                        tech.name === "GSAP" ? <SiGreensock className='text-5xl text-green-700' /> :
                        tech.name === "ThreeJS" ? <SiThreedotjs className='text-5xl text-black' /> : null
                      }
                    </div>
                  </a>
                </CircularProgressbarWithChildren>
              ))
            }
          </div>
        </div>
        <div className='backend w-full'>

        </div>
      </div>
    </>
  )
}

export default TechnologiesPage