import React from 'react';
import Link from 'next/link';
import ProfileCard from '@/public/components/ProfileCard';
import MotionSection from '@/public/components/MotionSection';
import { educationInfo, achievements, certifications } from '@/public/constants';

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
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>TECHNICAL</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>CERTIFICATES</h1>
                            </div>
                            {certifications.map((certification, index) => (
                                <Link key={index} href={certification.link} target="_blank" rel="noopener noreferrer">
                                    <div className='flex flex-col mb-6 p-4 w-full bg-none hover:bg-[#353334] rounded-lg transition-all duration-300 cursor-pointer'>
                                        <h2 className='text-3xl font-semibold'>{certification.title}</h2>
                                        <h3 className='text-md text-para-black font-medium'>{certification.institution}</h3>
                                        <p className='mt-4 text-para-black font-medium'>{certification.description}</p>
                                        <h2 className='mt-4 text-para-black font-medium'>{certification.date}</h2>
                                    </div>
                                </Link>
                            ))}
                            <div className='mt-10'></div>
                        </MotionSection>


                        <MotionSection delay={0.2} className='flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>ACADEMIC</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>EDUCATION</h1>
                            </div>
                            {educationInfo.map((education, index) => (
                                <Link key={index} href={education.link} target="_blank" rel="noopener noreferrer">
                                    <div className='flex flex-col mb-6 p-4 w-full bg-none hover:bg-[#353334] rounded-lg transition-all duration-300 cursor-pointer'>
                                        <h2 className='text-3xl font-semibold'>{education.title}</h2>
                                        <h3 className='text-md text-para-black font-medium'>{education.institution}</h3>
                                        <p className='mt-4 text-para-black font-medium'>{education.description}</p>
                                        <h2 className='mt-4 text-para-black font-medium'>{education.date}</h2>
                                    </div>
                                </Link>
                            ))}
                            <div className='mt-10'></div>
                        </MotionSection>

                        <MotionSection delay={0.2} className='flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>ACADEMIC</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>ACHIEVEMENT</h1>
                            </div>
                            {achievements.map((achievement, index) => (
                                <Link key={index} href={achievement.link} target="_blank" rel="noopener noreferrer">
                                    <div className='flex flex-col mb-6 p-4 w-full bg-none hover:bg-[#353334] rounded-lg transition-all duration-300 cursor-pointer'>
                                        <h2 className='text-3xl font-semibold'>{achievement.title}</h2>
                                        <h3 className='text-md text-para-black font-medium'>{achievement.institution}</h3>
                                        <h3 className='text-md text-para-black font-medium'>{achievement.venue}</h3>
                                        <p className='mt-4 text-para-black font-medium'>{achievement.description}</p>
                                        <h2 className='mt-4 text-para-black font-medium'>{achievement.date}</h2>
                                    </div>
                                </Link>
                            ))}
                            <div className='mt-10'></div>
                        </MotionSection>

                    </div>
                </div>
            </div>
        </div>
    )
}