import React from 'react';
import ProfileCard from '@/public/components/ProfileCard';
import MotionSection from '@/public/components/MotionSection';

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
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>ABOUT</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>ME</h1>
                            </div>
                            <div className='mt-5'>
                                <p className='text-para-black text-center lg:text-left text-lg font-medium leading-7 mb-6'>
                                    I am a tech-driven environmental innovator with expertise in Machine Learning, Data Science, and Full-Stack Web Development, blending technology with sustainability-focused research. My work bridges the gap between environmental science and computational solutions, using advanced tools to solve real-world challenges.
                                </p>
                            </div>
                        </MotionSection>

                        <MotionSection delay={0.3} className='flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>TECHNICAL</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>SKILLS</h1>
                            </div>
                            <div className='mt-10 w-full'>
                                <div className='mb-8'>
                                    <h3 className='text-xl font-semibold mb-4'>Programming & Development</h3>
                                    <ul className='list-disc list-inside text-para-black font-medium space-y-2'>
                                        <li>Python (Pandas, Numpy, Matplotlib, Seaborn)</li>
                                        <li>HTML, CSS, JavaScript, TypeScript Tailwind CSS</li>
                                        <li>ReactJS, NextJS, NodeJS, ExpressJS (CSR, SSR, RSC concepts)</li>
                                        <li>MySQL, MongoDB database management and queries</li>
                                    </ul>
                                </div>
                                <div className='mb-8'>
                                    <h3 className='text-xl font-semibold mb-4'>Data Science & Machine Learning</h3>
                                    <ul className='list-disc list-inside text-para-black font-medium space-y-2'>
                                        <li>Exploratory Data Analysis (EDA)</li>
                                        <li>Feature Engineering</li>
                                        <li>Predictive Modeling with ML/DL techniques</li>
                                        <li>Environmental data processing from satellite sources</li>
                                    </ul>
                                </div>
                                <div className='mb-8'>
                                    <h3 className='text-xl font-semibold mb-4'>Design & Visualization</h3>
                                    <ul className='list-disc list-inside text-para-black font-medium space-y-2'>
                                        <li>Adobe Photoshop, Adobe Illustrator (graphic design & branding)</li>
                                        <li>Data visualization and dashboard creation</li>
                                        <li>Figma, Canva for UI and Graphic Design</li>
                                    </ul>
                                </div>
                            </div>
                        </MotionSection>

                        <MotionSection delay={0.4} className='flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>PROJECTS</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>& WORKS</h1>
                            </div>
                            <div className='mt-10 w-full'>
                                <div className='mb-8 bg-none hover:bg-[#353334] p-4 rounded-lg transition-all duration-300'>
                                    <h3 className='text-xl font-semibold mb-2'>EnvoBrick - Environmental Bricks</h3>
                                    <p className='text-para-black font-medium'>
                                        Developed a sustainable brick concept aimed at reducing environmental impact. Conducted hands-on tests like water absorption, T-shape fall strength testing, and acoustic quality checks.
                                    </p>
                                </div>
                                <div className='mb-8 bg-none hover:bg-[#353334] p-4 rounded-lg transition-all duration-300'>
                                    <h3 className='text-xl font-semibold mb-2'>LST Prediction for Keraniganj, Bangladesh</h3>
                                    <p className='text-para-black font-medium'>
                                        Built a data-driven approach to predict Land Surface Temperature using ML/DL. Utilized NDVI, NDBI, MNDWI, and other indices from 30 years of satellite data for predictive modeling.
                                    </p>
                                </div>
                                <div className='mb-8 bg-none hover:bg-[#353334] p-4 rounded-lg transition-all duration-300'>
                                    <h3 className='text-xl font-semibold mb-2'>NextJS & ReactJS Applications</h3>
                                    <p className='text-para-black font-medium'>
                                        Created interactive web interfaces with optimized image handling, dynamic routing, and server-client component integration.
                                    </p>
                                </div>
                                <div className='mb-8 bg-none hover:bg-[#353334] p-4 rounded-lg transition-all duration-300'>
                                    <h3 className='text-xl font-semibold mb-2'>Data Analysis Projects</h3>
                                    <p className='text-para-black font-medium'>
                                        Performed statistical and graphical analysis on environmental datasets, generating insights for research and reporting.
                                    </p>
                                </div>
                            </div>
                        </MotionSection>

                        <MotionSection delay={0.5} className='flex flex-col items-center lg:items-start mb-30'>
                            <div className='flex flex-col items-center lg:items-start sm:flex-row md:flex-col sm:gap-2'>
                                <h1 className='text-5xl md:text-8xl font-bold leading-11 md:leading-13'>PROFESSIONAL</h1>
                                <h1 className='text-5xl md:text-8xl font-bold opacity-15'>DIRECTION</h1>
                            </div>
                            <div className='mt-10'>
                                <p className='text-para-black text-lg font-medium leading-7'>
                                    I aim to become an AI/ML Engineer, applying computational techniques to environmental and climate challenges. My approach combines coding, data science, and domain expertise to create impactful, sustainable solutions.
                                </p>
                            </div>
                        </MotionSection>

                    </div>
                </div>
            </div>
        </div>
    )
}