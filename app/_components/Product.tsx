import React from 'react'

export default function Product() {
  return (
    <div className="w-full overflow-hidden px-[60px] py-24 flex-col justify-start items-center gap-12 inline-flex">
    <div className="text-center text-black text-[32px] font-bold ">Discover Our Collection</div>
    <div className="justify-start items-start gap-8 inline-flex">
        <div className="w-[300px] h-[300px] relative bg-black" />
        <div className="w-[300px] h-[300px] relative bg-black" />
        <div className="w-[300px] h-[300px] relative bg-black" />
        <div className="w-[300px] h-[300px] relative bg-black" />
        <div className="w-[300px] h-[300px] relative bg-black" />
    </div>
    <div className="px-6 py-4 bg-yellow-800 justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-xl font-semibold ">Discover Now</div>
    </div>
</div>
  )
}
