// src/components/Footer.tsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-xl font-bold text-yellow-300">HCFO Logo</h1>
            <p className="mt-2 text-justify pr-20">HCFO works exclusively in Afghanistan, providing crucial support to widows, orphans, and those in need. We are dedicated to offering quality education in remote areas where no schools are available and responding to emergency disasters. Our mission is to create a future where every person in Afghanistan can live with dignity, security, and hope.
                </p>
            <p className="mt-2">95% of all our expenses go to program services.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-yellow-300">Learn More</h2>
            <ul className="mt-2">
              <li><a href="#" className="hover:underline">Our Work</a></li>
              <li><a href="#" className="hover:underline">Get Involved</a></li>
              <li><a href="#" className="hover:underline">Ways to Give</a></li>
              <li><a href="#" className="hover:underline">News & Stories</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Donate</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Corporate Partnerships</a></li>
              <li><a href="#" className="hover:underline">Accountability & Transparency</a></li>
              <li><a href="#" className="hover:underline">Annual Reports</a></li>
              <li><a href="#" className="hover:underline">Financial Responsibility</a></li>
              <li><a href="#" className="hover:underline">Equity & Inclusion</a></li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <p className="mt-2">HCFO is a not-for-profit organization. Our EIN number is xx-xxxxxxx. © 2024 HCFO. All rights reserved.</p>
            <ul className="mt-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
            <p className="mt-2">Text HCFO on <span className='text-green-400'> 0785055574 </span> to stay connected.</p>
            <p className='text-yellow-400 pt-4'>Address</p>
            <p>Parojah Taimani Road#4 Street#3 House#8</p>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;