"use client"
import React, { useState } from 'react'
import Logo from "@/public/Logos.svg"
import Image from 'next/image'
import Arrow from "@/public/Arrow.svg"
import Shop from "@/public/shop.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/closed
  };

  return (
    <div className="relative w-full px-[16px] md:px-[60px] py-4 border-b border-yellow-800 flex justify-between items-center z-20">
      {/* Logo */}
      <Image src={Logo} alt="Logo" width={206} height={40} />

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Links (hidden on mobile, visible on larger screens) */}
      <div className="hidden md:flex justify-start items-center gap-8">
        <div className="flex justify-center items-center gap-2">
          <Image src={Arrow} alt="Arrow" width={23.74} height={12.75} />
          <div className="text-zinc-600 text-base font-medium">En</div>
        </div>
        <Image src={Shop} alt="Shop" width={24} height={24} />
      </div>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-10 flex justify-center items-center">
          <div className="text-center flex flex-col gap-8">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white focus:outline-none">
              {/* Close Icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Menu Items */}
            <div className="text-white text-2xl font-medium flex flex-col gap-4">
              <div className="flex justify-center items-center gap-2">
                <Image src={Arrow} alt="Arrow" width={23.74} height={12.75} />
                <div>En</div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={Shop} alt="Shop" width={24} height={24} />
                {isOpen && <span>Store</span>} {/* Show "Store" when menu is open */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
