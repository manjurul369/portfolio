import React from 'react';
import ProfileCard from '@/public/components/ProfileCard';
import MotionSection from '@/public/components/MotionSection';
import { tools } from '@/public/constants';
import Image from 'next/image';
import SendMessageForm from '@/public/components/SendMessageForm';

export default function Page() {
    return (
        <div className='p-5 sm:px-10 md:px-15 lg:pt-15 xl:px-30 2xl:px-70'>
            <div className='flex flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:justify-center lg:items-start'>
                <MotionSection delay={0.1} className='relative lg:sticky top-0 lg:top-[40px] w-full lg:w-1/3 flex justify-center'>
                    <ProfileCard />
                </MotionSection>
                <div className='w-full lg:w-2/3 flex flex-col items-center lg:items-start xl:'>
                    <div className='flex flex-col gap-20 mt-15 lg:mt-5'>
                        <MotionSection delay={0.2} className='flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>RECENT</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>PROJECTS</h1>
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
                            <div className='mt-10'></div>
                        </MotionSection>

                        <MotionSection delay={0.3} className='flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>LET&apos;S WORK</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>TOGETHER</h1>
                            </div>
                            <SendMessageForm />
                        </MotionSection>

                    </div>
                </div>
            </div>
        </div>
    )
}