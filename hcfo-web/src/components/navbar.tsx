"use client";

import React , { useState} from 'react';


function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen) 
    };

        return <nav className='bg-blue-500 p-4'>
        <div className="flex items-center justify-between">
            {/* logo code */}
            <div className="text-white text-2xl font-bold">ReactTailwind</div>
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
                    <li><a href="#" className='text-white'>Home</a></li>
                    <li><a href="#" className='text-white'>About</a></li>
                    <li><a href="#" className='text-white'>Projects</a></li>
                    <li><a href="#" className='text-white'>Contacts</a></li>
                </ul>
        </div>
        {/* mobile menue */}

        {isMenuOpen ? (
            <ul className='flex-col md:hidden'>
            <li className='py-1'><a href="#" className='text-white'>Home </a></li>
            <li className='py-1'><a href="#" className='text-white'>Services </a></li>
            <li className='py-1'><a href="#" className='text-white'>About us </a></li>
            <li className='py-1'><a href="#" className='text-white'>Contact </a></li>
        </ul>
        ) : null}
    </nav>
}

export default Navbar;