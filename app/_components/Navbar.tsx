import React from 'react'
import Logo from "@/public/Logos.svg"
import Image from 'next/image'
import Arrow from "@/public/Arrow.svg"
import Shop from "@/public/shop.svg"

export default function Navbar() {
    return (
        <div className="w-full px-[60px] py-4 border-b border-yellow-800 justify-between items-center inline-flex">
            <Image src={Logo} alt="Logo" width={206} height={40} />
            <div className="justify-start items-center gap-8 flex">
                <div className="justify-center items-center gap-2 flex">
                <Image src={Arrow} alt="Logo" width={23.74} height={12.75} />
                    <div className="text-zinc-600 text-base font-medium ">En</div>
                </div>
                <Image src={Shop} alt="Logo" width={24} height={24} />
            </div>
        </div>
    )
}