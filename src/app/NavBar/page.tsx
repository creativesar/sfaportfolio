'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 px-24 py-3 flex justify-between items-center transition-colors duration-300 ${isScrolled ? 'bg-accent' : 'bg-accent'}`}>
      {/* Left Section: Logo */}
      <div>
        <Image
          className="w-[85px] h-auto"
          src="/images/logo.png"
          alt="Logo"
          width={125}
          height={39}
        />
      </div>

      {/* Centered Navigation Links */}
      <div className="flex-grow text-center">
        <nav className="flex justify-center space-x-12 py-4">
          <a href="/" className="text-white hover:text-yellow-500 font-medium font-['Poppins'] text-[14px] transition duration-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-yellow-500 font-medium font-['Poppins'] text-[14px] transition duration-300">
            About
          </a>
          <a href="/portfolio" className="text-white hover:text-yellow-500 font-medium font-['Poppins'] text-[14px] transition duration-300">
            Services
          </a>
          <a href="/portfolio" className="text-white hover:text-yellow-500 font-medium font-['Poppins'] text-[14px] transition duration-300">
            Portfolio
          </a>
          <a href="/contact" className="text-white hover:text-yellow-500 font-medium font-['Poppins'] text-[14px] transition duration-300">
            Contact
          </a>
        </nav>
      </div>

      {/* Right Section: Hire Me Button */}
      <div className="flex items-center">
        <div className="w-[114px] h-[30px] p-2.5 bg-[#363636] rounded-xl shadow flex justify-center items-center hover:bg-[#ffffff] transition duration-300 transform hover:scale-105">
          <div className="text-white text-[14px] font-medium font-['Poppins'] transition duration-300 transform hover:scale-110 hover:text-blue-500">
            Hire Me
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
