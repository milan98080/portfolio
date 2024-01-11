import React from 'react'
import TopBar from '../components/TopBar'
import { SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiGreensock, SiThreedotjs, SiNestjs, SiGit, SiNodedotjs, SiMongodb, SiGooglecloud } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaDocker } from "react-icons/fa";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TechnologiesPage = ({ page }) => {

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
      progress: "70",
      color: "#ed1543"
    },
    {
      name: "NodeJS",
      link: "https://nodejs.org/en/",
      progress: "60",
      color: "#026e00"
    },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
      progress: "70",
      color: "#0064a5"
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      progress: "60",
      color: "#13aa52"
    },

  ]

  const CloudTechnologies = [
    {
      name: "AWS",
      link: "https://aws.amazon.com/",
      progress: "60",
      color: "#ff9900"
    },
    {
      name: "GCP",
      link: "https://cloud.google.com/",
      progress: "50",
      color: "#4285f4"
    }
  ]

  const Others = [
    {
      name: "Docker",
      link: "https://www.docker.com/",
      progress: "50",
      color: "#0db7ed"
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      progress: "70",
      color: "#f05032"
    }
  ]

  return (
    <>
      <TopBar />
      <div className=' w-full px-8 h-[70dvh] overflow-scroll md:mt-10'>
        <div className='frontend w-full mb-5'>
          <h1 className='text-white font-bold text-2xl'>Frontend Tools</h1>
          <div className='mt-4 flex gap-4 flex-wrap'>
            {
              FrontendTechnologies.map((tech, index) => (
                <CircularProgressbarWithChildren key={index} value={tech.progress} className='w-16' styles={{ path: { stroke: tech.color } }} >
                  <a href={tech.link} target='_blank' rel='noreferrer'>
                    <div className=' rounded-full p-3 bg-white flex items-center justify-center'>
                      {
                        tech.name === "HTML" ? <SiHtml5 className='text-3xl text-[#e34c26]' /> :
                          tech.name === "CSS" ? <SiCss3 className='text-3xl text-[#264de4]' /> :
                            tech.name === "React" ? <SiReact className='text-3xl text-[#61dbfb]' /> :
                              tech.name === "NextJS" ? <SiNextdotjs className='text-3xl text-black' /> :
                                tech.name === "TailwindCSS" ? <SiTailwindcss className='text-3xl text-[#06b6d4]' /> :
                                  tech.name === "GSAP" ? <SiGreensock className='text-3xl text-green-700' /> :
                                    tech.name === "ThreeJS" ? <SiThreedotjs className='text-3xl text-black' /> : null
                      }
                    </div>
                  </a>
                </CircularProgressbarWithChildren>
              ))
            }
          </div>
        </div>
        <div className='backend w-full mb-5'>
          <h1 className='text-white font-bold text-2xl'>Backend Tools</h1>
          <div className='mt-4 flex gap-4 flex-wrap'>
            {
              BackendTechnologies.map((tech, index) => (
                <CircularProgressbarWithChildren key={index} value={tech.progress} className='w-16' styles={{ path: { stroke: tech.color } }} >
                  <a href={tech.link} target='_blank' rel='noreferrer'>
                    <div className=' rounded-full p-3 bg-white flex items-center justify-center'>
                      {
                        tech.name === "NestJS" ? <SiNestjs className='text-3xl text-[#ed1543]' /> :
                          tech.name === "NodeJS" ? <SiNodedotjs className='text-3xl text-[#026e00]' /> :
                            tech.name === "PostgreSQL" ? <BiLogoPostgresql className='text-3xl text-[#0064a5]' /> :
                              tech.name === "AWS" ? <FaAws className='text-3xl text-[#ff9900]' /> :
                                tech.name === "Docker" ? <FaDocker className='text-3xl text-[#0db7ed]' /> :
                                  tech.name === "MongoDB" ? <SiMongodb className='text-3xl text-[#13aa52]' /> :
                                    tech.name === "Git" ? <SiGit className='text-3xl text-[#f05032]' /> : null
                      }
                    </div>
                  </a>
                </CircularProgressbarWithChildren>
              ))
            }
          </div>
        </div>
        <div className='cloud w-full mb-5'>
          <h1 className='text-white font-bold text-2xl'>Cloud Tools</h1>
          <div className='mt-4 flex gap-4 flex-wrap'>
            {
              CloudTechnologies.map((tech, index) => (
                <CircularProgressbarWithChildren key={index} value={tech.progress} className='w-16' styles={{ path: { stroke: tech.color } }} >
                  <a href={tech.link} target='_blank' rel='noreferrer'>
                    <div className=' rounded-full p-3 bg-white flex items-center justify-center'>
                      {
                        tech.name === "AWS" ? <FaAws className='text-3xl text-[#ff9900]' /> :
                          tech.name === "GCP" ? <SiGooglecloud className='text-3xl text-[#4285f4]' /> : null
                      }
                    </div>
                  </a>
                </CircularProgressbarWithChildren>
              ))
            }
          </div>
        </div>
        <div className='others w-full'>
          <h1 className='text-white font-bold text-2xl'>Other Tools</h1>
          <div className='mt-4 flex gap-4 flex-wrap'>
            {
              Others.map((tech, index) => (
                <CircularProgressbarWithChildren key={index} value={tech.progress} className='w-16' styles={{ path: { stroke: tech.color } }} >
                  <a href={tech.link} target='_blank' rel='noreferrer'>
                    <div className=' rounded-full p-3 bg-white flex items-center justify-center'>
                      {
                        tech.name === "Docker" ? <FaDocker className='text-3xl text-[#0db7ed]' /> :
                          tech.name === "Git" ? <SiGit className='text-3xl text-[#f05032]' /> : null
                      }
                    </div>
                  </a>
                </CircularProgressbarWithChildren>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologiesPage