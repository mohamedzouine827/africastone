import React from 'react'
import Picture from "@/public/picture.png"
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-[60px] py-12 md:py-24 bg-[#b49275] flex justify-center items-center">
      <div className="relative w-full max-w-[1260px] aspect-[1260/544]">
        <Image 
          src={Picture.src}
          alt="picture of the room" 
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <div className="max-w-[1255px] flex flex-col gap-4 md:gap-6">
            <h1 className="text-[#fdffe5] text-[24px] leading-[36px] sm:text-[32px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[81px] font-semibold">
              Discover the Soul of Moroccan Craftsmanship with Africa Stone
            </h1>
            <p className="text-[#fcffc1] text-[16px] font-normal leading-[24px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[30px] max-w-[793px] mx-auto">
              Authentic Zelij Tiles: Where Tradition Meets Timeless Elegance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
