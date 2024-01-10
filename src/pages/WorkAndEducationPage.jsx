import React from 'react'
import TopBar from '../components/TopBar'

const WorkAndEducationPage = () => {
  const WorkExperience = [
    {
      company: "Bizbazar",
      position: "React/NextJS Developer",
      duration: "2023 Nov - Present",
      description: "Development of various web applications. Collaborate with cross-functional teams to identify and prioritize features and requirements. Troubleshoot and resolve software defects and issues.",
      tags:["React", "NextJS", "TailwindCSS", "GSAP", "NestJS", "PostgreSQL", "AWS", "Docker", "Git"]
    },
    {
      company: "Heisternest",
      position: "Freelance Web Developer",
      duration: "2022 - 2023",
      description: "Wordpress website development. Frontend web developmentusing React. Website Maintenance and Optimization.",
      tags:["Wordpress", "React", "TailwindCSS","SEO"]
    },
  ]

  const Education = [
    {
      institution: "Pokhara University",
      location: "Pokhara, Nepal",
      degree: "Bachelors in Software Engineering",
      duration: "2018 - 2023",
    },
    {
      institution: "Sagarmatha Secondary School",
      location: "Pokhara, Nepal",
      degree: "+2 Science",
      duration: "2016 - 2018",
    },
  ]

  return (
    <>
      <TopBar />
      <div className=' w-full px-8 h-[70dvh] overflow-scroll md:mt-10'>
        <div className='work w-full'>
          <h1 className='text-white font-bold text-2xl'>Experience</h1>
          <div className='mt-4 flex gap-5 flex-col md:flex-row'>
            {
              WorkExperience.map((work, index) => (
                <div key={index} className='flex flex-col flex-wrap md:w-[50%]'>
                  <h1 className='text-neutral-400 text-lg'>{work.duration}</h1>
                  <h1 className='text-neutral-300 font-semibold text-xl'>{work.company} &#183; <span className=' font-thin text-lg'>{work.position}</span></h1>
                  <h1 className='text-neutral-400 text-sm py-1'>{work.description}</h1>
                  <div className='flex flex-wrap'>
                  {
                    work.tags.map((tag, index) => (
                      <div key={index} className='bg-gradient-to-r from-blue-800 to-indigo-900 bg-opacity-90 rounded-full px-2 py-1 text-neutral-300 text-xs mt-2 mr-2'>{tag}</div>
                    ))
                  }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='education w-full mt-8 md:mt-12'>
          <h1 className='text-white font-bold text-2xl mt-3'>Education</h1>
          <div className='mt-4 flex flex-col gap-3'>
            {
              Education.map((edu, index) => (
                <div key={index}>
                  <h1 className='text-neutral-400 text-lg'>{edu.duration}</h1>
                  <h1 className='text-neutral-300 font-semibold text-xl '>{edu.institution}</h1>
                  <h1 className='text-neutral-400 text-sm py-1'>{edu.degree}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkAndEducationPage