import Image from 'next/image'
import React from 'react'
import { dashes1, profile, dashes2 } from '../assets/images'
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin, FaPhoneFlip } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import Link from 'next/link'

export default function ProfileCard() {
  return (
    <div className='relative w-full max-w-[700px] lg:max-w-[350px] flex flex-col items-center py-10 bg-white rounded-2xl overflow-hidden'>
        <Image src={dashes1} alt="Dashes" className="select-none pointer-events-none absolute top-0" />
        <Image src={dashes2} alt="Dashes" className="select-none pointer-events-none absolute top-40 -left-10" />

        <div className='w-[260px] h-[210px] md:w-[240px] md:h-[280px] flex justify-center'>
            <Image src={profile} alt="Profile" className="rounded-xl h-auto w-full object-center object-cover" />
        </div>
        <h2 className='text-black text-3xl font-bold mt-4'>MD Manjurul Islam</h2>
        <p className='text-sm sm:text-lg text-para-black text-center font-medium w-[80%] leading-5 mt-1 max-w-[300px]'>AI/ML enthusiast, skilled full-stack developer, and creative graphic designer, with experties in Python and JavaScript</p>
        <div className='flex items-center justify-center gap-5 mt-4'>
            <Link href={'mailto:manjurul.ses.bu@gmail.com'} target="_blank" rel="noopener noreferrer">
                <div className='hover:bg-gray-200 transition-all duration-300 p-1 rounded-sm'>
                    <MdEmail className='text-2xl text-primary' />
                </div>
            </Link>
            <Link href={'https://github.com/manjurul369'} target="_blank" rel="noopener noreferrer">
                <div className='hover:bg-gray-200 transition-all duration-300 p-1 rounded-sm'>
                    <AiOutlineGithub className='text-2xl text-primary' />
                </div>
            </Link>
            <Link href={'https://linkedin.com/in/manjurul369'} target="_blank" rel="noopener noreferrer">
                <div className='hover:bg-gray-200 transition-all duration-300 p-1 rounded-sm'>
                    <FaLinkedin className='text-2xl text-primary' />
                </div>
            </Link>
            <Link href={'tel:+8801767980780'} target="_blank" rel="noopener noreferrer">
                <div className='hover:bg-gray-200 transition-all duration-300 p-1 rounded-sm'>
                    <FaPhoneFlip className='text-2xl text-primary' />
                </div>
            </Link>
            <Link href={'https://wa.me/message/D37Z6GUAIT35M1'} target="_blank" rel="noopener noreferrer">
                <div className='hover:bg-gray-200 transition-all duration-300 p-1 rounded-sm'>
                    <FaWhatsappSquare className='text-3xl text-primary' />
                </div>
            </Link>
        </div>
    </div>
  )
}
