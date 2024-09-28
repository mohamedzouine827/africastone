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
        <div className="absolute inset-0 flex flex-col justify-center items-center  ">
          <div className="max-w-[1255px] text-center  flex flex-col gap-6  space-y-6">
            <h1 className="text-[#fdffe5]  md:text-[64px] font-semibold  leading-[81px]">
              Discover the Soul of Moroccan Craftsmanship with Africa Stone
            </h1>
            <p className="text-[#fcffc1] font-normal leading-[30px] text-[24px] max-w-[793px] mx-auto">
              Authentic Zelij Tiles: Where Tradition Meets Timeless Elegance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}