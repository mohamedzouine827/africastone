import Image from 'next/image'
import React from 'react'
import Logo from "@/public/WhiteLogo.svg"

export default function Footer() {
  return (
    <div className="w-full h-auto px-4 md:px-[150px] py-10 md:py-24 bg-yellow-700 flex flex-col md:flex-row justify-center items-center  gap-8">
      {/* Logo Section */}
      <div className="w-full md:w-[261px] flex-col justify-start items-start gap-2.5 flex">
        <div className='flex justify-start items-center w-full md:w-[261px]'>
          <Image src={Logo} alt="Logo" width={206} height={40} />
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="w-full md:w-[261px] flex-col justify-center items-start gap-2.5 flex">
        <div className="text-white text-base font-medium">Contact</div>
        <div className="text-white text-sm font-normal">WhatsApp: +212 766666666</div>
        <div className="text-white text-sm font-normal">Fix: +212 868691717</div>
        <div className="text-white text-sm font-normal">Email: Africastone@support.com</div>
      </div>
      
      {/* Socials Section */}
      <div className="w-full md:w-[261px] flex-col justify-center items-start gap-2.5 flex">
        <div className="text-white text-base font-medium">Socials</div>
        <div className="text-white text-sm font-normal">Instagram: Africa Stone</div>
        <div className="text-white text-sm font-normal">Facebook: Africa Stone</div>
      </div>
      
      {/* Rights Reserved Section */}
      <div className="w-full md:w-auto flex-col justify-center items-start gap-2.5 flex">
        <div className="text-white text-sm font-medium">All rights reserved to Africa Stone</div>
      </div>
    </div>
  )
}
