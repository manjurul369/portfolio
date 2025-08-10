import React from 'react'
import ProfileCard from '@/public/components/ProfileCard'
import Projects from '@/public/components/Projects'
import { experienceInfo } from '@/public/constants'
import Link from 'next/link';
import { FaArrowDown } from "react-icons/fa6";
import { tools } from '@/public/constants';
import Image from 'next/image';
import SendMessageForm from '@/public/components/SendMessageForm';

export default function Page() {
  return (
    <div className='p-5 sm:px-10 md:px-15 lg:pt-15 xl:px-30 2xl:px-70'>
      <div className='flex flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:justify-center lg:items-start'>
        <div className='relative lg:sticky top-0 lg:top-[40px] w-full lg:w-1/3 flex justify-center'>
          <ProfileCard />
        </div>
        <div className='w-full lg:w-2/3 flex flex-col items-center lg:items-start xl:'>
          <div className='flex flex-col gap-20 mt-15 lg:mt-5'>
            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>DOWNLOAD</h1>
                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>RESUME</h1>
              </div>
              <p className='text-center lg:text-left text-para-black text-lg font-medium leading-6 mt-3 max-w-[480px]'>Download my comprehensive resume to explore my journey in web development, data science, and graphic design. Discover detailed insights into my projects, technical expertise, and professional experience.</p>
              <Link href="https://drive.google.com/file/d/1raJQQoEbf9T560JxWvaAmjuFttU9jdIv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className='mt-4 lg:px-10 lg:py-4 px-8 py-3 lg:text-xl text-md font-semibold cursor-pointer bg-white text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300'>
                  Download Resume
                </button>
              </Link>
            </div>


            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>RECENT</h1>
                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>PROJECTS</h1>
              </div>
              <Projects />
            </div>

            <div className='flex flex-col items-center lg:items-start mt-10'>
              <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>WORK</h1>
                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>EXPERIENCE</h1>
              </div>
              <div>
                {experienceInfo.map((experience, index) => (
                  <Link key={index} href={experience.link} target="_blank" rel="noopener noreferrer">
                    <div className='relative group flex flex-col mb-6 bg-none hover:bg-[#353334] p-4 rounded-lg transition-all duration-300'>
                      <FaArrowDown className='hidden lg:block absolute text-xs top-4 right-4 transition-all duration-300 group-hover:top-2 group-hover:right-2 text-primary tranform -rotate-135 mr-1' />
                      <h2 className='text-2xl font-semibold'>{experience.title}</h2>
                      <h3 className='text-md text-para-black font-medium'>{experience.company}</h3>
                      <p className='mt-4 text-para-black font-medium'>{experience.description}</p>
                      <h2 className='mt-4 text-para-black font-medium'>{experience.date}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>


            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>PREMIUM</h1>
                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>TOOLS</h1>
              </div>
              {tools.map((tool, index) => (
                <div key={index} className='flex flex-col mb-6 p-4 w-full'>
                  <h2 className='text-3xl font-semibold'>{tool.category}</h2>
                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4'>
                    {tool.skill.map((skill, skillIndex) => (
                      <div key={skillIndex} className='flex items-center gap-4 bg-none hover:bg-[#353334] p-3 rounded-lg transition-all duration-300'>
                        <div className='w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center flex-shrink-0'>
                          <Image src={skill.icon} alt={skill.title} className='w-[50%]' />
                        </div>
                        <div>
                          <h2 className='text-xl font-medium'>{skill.title}</h2>
                          <p className='text-md text-para-black font-medium'>{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>LET'S WORK</h1>
                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>TOGETHER</h1>
              </div>
              <SendMessageForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
