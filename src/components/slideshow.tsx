"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import Logo from '@/public/images/logo.jpg'
// import Kit from '@/public/images/kit.jpg'
// import WinterKit from '@/public/images/winterization-kit.jpg'
// import Backlogo from '@/public/images/backlogo.jpg'
// import Winter from '@/public/images/wintNgr.jpg'

const slides = [
  '/images/logo.jpg',
  '/images/kit.jpg',
  '/images/winterization-kit.jpg',
  '/images/backlogo.jpg',
  '/images/wintNgr.jpg',
];


const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative mx-auto max-w-4xl w-full md:w-2/3 lg:w-2/2 mb-4">
      <div className="overflow-hidden relative h-96">
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-fill rounded-xl"
          layout="fill"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Slideshow;