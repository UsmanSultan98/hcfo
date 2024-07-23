"use client";

import React , { useState} from 'react';
import Logo from "@/public/images/logo.jpg";
import Image from 'next/image';
import Link from 'next/link';

function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen) 
    };

        return <nav className='bg-blue-500 p-4'>
              <div className="flex items-center justify-between">
           
                {/* logo code */}
        <Image src={Logo} alt='logo' className="w-14 rounded-xl"></Image>
                
       

                    {/* Organization Name */}
            <div className="text-white text-2xl font-bold">Heal The Children&apos;s Future Organization</div>
               <div className="md:hidden">
                <button className='text-white' onClick={toggleMenu}>
                <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin = 'round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    className='w-6 h-6'
                    >
                <path d="M4 6h16M4 12h16M4 18h16"></path>     
                </svg>
                </button>
               </div>
                <ul className='hidden md:flex space-x-4'>
                    <li><Link href="/mainPage" className='text-white hover:text-yellow-300 hover:underline transition ease-out duration-3000'> Home</Link>  </li>
                    <li><a href="#" className='text-white hover:text-yellow-300 hover:underline transition ease-out duration-3000'>About</a></li>
                    <li><Link href="/projects" className='text-white hover:text-yellow-300 hover:underline transition ease-out duration-3000'> Projects</Link>  </li>
                    <li> <a href="/contact" className="text-white hover:text-yellow-300 hover:underline transform transition-transform duration-300 ease-out hover:scale-110">Contacts</a></li>
                </ul>
        </div>

        {/* mobile menue  hamburger*/}

        {isMenuOpen ? (
            <ul className='flex-col md:hidden'>
            <li className='py-1'><a href="/mainPage" className='text-white'>Home </a></li>
            <li className='py-1'><a href="#" className='text-white'>About </a></li>
            <li className='py-1'><a href="/projects" className='text-white'>Projects </a></li>
            <li className='py-1'><a href="#" className='text-white'>Contact </a></li>
        </ul>
        ) : null}
    </nav>
}

export default Navbar;