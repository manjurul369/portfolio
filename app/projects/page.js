import React from 'react';
import ProfileCard from '@/public/components/ProfileCard';
import MotionSection from '@/public/components/MotionSection';
import Projects from '@/public/components/Projects';
import SendMessageForm from '@/public/components/SendMessageForm';
import Video from '@/public/components/Video';
import { videoInfo } from '@/public/constants';

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
                            <Projects />
                            {/* Project Video Section */}
                            <div className='w-full mt-10'>
                                <div className='flex flex-col items-center lg:items-start mb-6'>
                                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>Project Demo</h2>
                                    <p className='text-para-black text-center lg:text-left max-w-[600px]'>
                                        Watch me walk through my projects, explaining the development process, key features, and technical decisions behind each solution.
                                    </p>
                                </div>
                                {videoInfo.map((video, index) => (
                                    <Video
                                        key={index}
                                        videoId={video.id}
                                        title={video.title}
                                        description={video.description}
                                    />
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