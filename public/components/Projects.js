import React from 'react'
import Image from 'next/image'
import { projectInfo } from '../constants'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiMongodb, SiDjango, SiPandas, SiNumpy } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa6";
import { SiScikitlearn } from "react-icons/si";

// Technology icon mapping
const techIcons = {
    "Next.js": <RiNextjsFill className='text-2xl text-primary' />,
    "React.js": <FaReact className='text-2xl text-primary' />,
    "JavaScript": <IoLogoJavascript className='text-2xl text-primary' />,
    "Tailwind CSS": <RiTailwindCssFill className='text-2xl text-primary' />,
    "MongoDB": <SiMongodb className='text-2xl text-primary' />,
    "Node.js": <IoLogoNodejs className='text-2xl text-primary' />,
    "Python": <FaPython className='text-2xl text-primary' />,
    "Django": <SiDjango className='text-2xl text-primary' />,
    "Machine Learning": <SiScikitlearn className='text-2xl text-primary' />,
    "Pandas": <SiPandas className='text-2xl text-primary' />,
    "Numpy": <SiNumpy className='text-2xl text-primary' />
};

export default function Projects() {
    return (
        <div className='w-full space-y-6'>
            {projectInfo.map((project, index) => (
                <div key={index} className='flex flex-col lg:items-start gap-5 mt-0 sm:mt-4 bg-none hover:bg-[#353334] p-4 rounded-lg transition-all duration-300'>
                    <div className='flex gap-5 flex-col sm:flex-row items-center justify-between'>
                        <Image
                            src={project.image}
                            alt={project.title}
                            className='rounded-lg w-full max-w-[410px] sm:w-[150px] xl:w-[250px] h-full sm:h-[150px] object-cover'
                        />
                        <div className='flex-1'>
                            <h2 className='text-xl sm:text-2xl font-bold lg:text-3xl'>{project.title}</h2>
                            <p className='text-sm sm:text-md text-para-black mt-1 max-w-[410px] leading-4'>{project.description}</p>
                            <div className='flex items-center gap-4 mt-2 flex-wrap'>
                                {project.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className='flex items-center'>
                                        {techIcons[tech] || <span className='text-sm text-primary'>{tech}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center sm:justify-start justify-center mt-2'>
                        <div className='relative group'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.github}
                                className='text-white hover:underline inline-block'
                            >
                                View on GitHub
                            </a>
                            <FaArrowDown className='absolute text-xs -top-1 -right-4 transition-all duration-300 group-hover:-top-2 group-hover:-right-5 text-white tranform -rotate-135 mr-1' />
                        </div>
                        <span>|</span>
                        <div className='relative group'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.live}
                                className='text-white hover:underline inline-block'
                            >
                                Live Demo
                            </a>
                            <FaArrowDown className='absolute text-xs -top-1 -right-4 transition-all duration-300 group-hover:-top-2 group-hover:-right-5 text-white tranform -rotate-135 mr-1' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
