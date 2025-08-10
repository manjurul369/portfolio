"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { FiTool } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import { about, folder } from '../assets/images';

export default function Nav() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: <IoHomeOutline className="text-2xl text-white" size={25} />, href: '/' },
    { id: 'about', label: 'About', icon: <Image src={about} alt="About" width={25} height={25} />, href: '/about' },
    { id: 'projects', label: 'Projects', icon: <Image src={folder} alt="Projects" width={33} height={33} />, href: '/projects' },
    { id: 'experience', label: 'Experience', icon: <CgToolbox className="text-2xl text-white" size={25} />, href: '/experience' },
    { id: 'skills', label: 'Skills', icon: <FiTool className="text-2xl text-white" size={25} />, href: '/skills' },
    { id: 'education', label: 'Education', icon: <RiGraduationCapLine className="text-2xl text-white" size={25} />, href: '/education' },
    { id: 'contact', label: 'Contact', icon: <LuContact className="text-2xl text-white" size={25} />, href: '/#contact' }
  ];

  return (
    <div className='w-screen flex justify-center items-center py-5 md:pt-8'>
      <div className='flex bg-body-secondary rounded-lg px-6 py-2 gap-4 md:gap-6'>
        {navItems.map((item) => (
          <div 
            key={item.id}
            className='relative flex items-center'
            onMouseEnter={() => setHoveredButton(item.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Link href={item.href}>
              <button className='cursor-pointer transition-transform duration-200 hover:scale-110'>
                {item.icon}
              </button>
            </Link>
            
            {/* Tooltip with smooth animation */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1/2 bg-body-tertiary text-white text-sm rounded-md whitespace-nowrap transition-all duration-300 ease-in-out transform
                ${hoveredButton === item.id 
                  ? 'opacity-100 translate-y-1/5 scale-100 visible' 
                  : 'opacity-0 -translate-y-5 scale-90 invisible pointer-events-none'
                }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}