import React from 'react';
import ProfileCard from '@/public/components/ProfileCard';
import MotionSection from '@/public/components/MotionSection';
import { experienceInfo } from '@/public/constants';
import Link from 'next/link';
import { FaArrowDown } from "react-icons/fa6";
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