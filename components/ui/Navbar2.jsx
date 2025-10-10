import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NavBtn2 from './NavBtn2';

const Navbar2 = () => {
  return (
    <>
      <div className='hidden xl:flex top-0 w-[95%]  justify-center items-center flex-col gap-2.5 m-2'>

        <div className='w-full bg-[#ffffff]  px-5 py-7 my-3 rounded-3xl flex justify-between items-center h-[180px]'>
          <div className='w-[205px] hidden xl:flex'>
          </div>
          <div className='flex justify-center items-center gap-3 '>
            <NavBtn2 text={'Home'} url={'/'} />
            <NavBtn2 text={'About us'} url={'/'} />

            <div className='px-10 py-2 relative h-[150px] w-[60px]'>
              <Image alt='logo' src={'/logo.png'} fill className='h-[150px] w-auto p-0 object-contain' />
            </div>

            <NavBtn2 text={'Our Vision'} url={'/'} />
            <NavBtn2 text={'Blogs'} url={'/ '} />
          </div>
          <div className=' hidden xl:flex'>
            <Link href='https://dmu.dameta1.com' target="_blank" className='manrope  font-semibold text-[14px] leading-[27px] px-6 sm:px-10 py-5 rounded-full border-2 border-[#95cc43] hover:bg-[#2bf568] hover:border-[#2bf568] transition-all duration-300 ease-in-out'>Explore DaMeta1 Utility Token</Link>
          </div>
        </div>
      </div>
      <div className='bg-[#ffffff] pt-[45px] px-5 w-full flex items-center justify-between xl:hidden  relative'>
        <Image alt='logo' src={'/logo.png'} height={108} width={108} className='h-[108px]  w-auto p-0 object-contain' />
        <Sheet>
  <SheetTrigger><HiOutlineMenuAlt3 size={28} color='black'/></SheetTrigger>
  <SheetContent className="xl:hidden text-black bg-[#fff] p-5 pt-16">
    <SheetHeader>
     <SheetTitle></SheetTitle>

     <div className='flex flex-col gap-1 mt-3 mb-8'>
      <Link href={'/'} className='exo font-normal text-[16px] text-[#f14f44] border-b-2 px-2 py-3'>Home</Link>
      <Link href={'/'} className='exo font-normal text-[16px] hover:text-[#f14f44] transition-all duration-300 ease-in-out border-b-2 px-2 py-3'>About us</Link>
      <Link href={'/'} className='exo font-normal text-[16px] hover:text-[#f14f44] transition-all duration-300 ease-in-out border-b-2 px-2 py-3'>Our Vision</Link>
      <Link href={'/'} className='exo font-normal text-[16px] hover:text-[#f14f44] transition-all duration-300 ease-in-out border-b-2 px-2 py-3'>Blogs</Link>
     </div>
      
       <div className='w-full flex gap-5 text-white h-10'>
                <Link href={"https://www.facebook.com/DaMeta1Community"}  target='_blank'>
                <FaFacebookF className='size-[17px] cursor-pointer hover:text-[#f14f44] transition-all duration-300'/>
                </Link>
                <Link href={"https://x.com/DaMeta1_"} target='_blank'>
                <FaXTwitter className='size-[17px] cursor-pointer hover:text-[#f14f44] transition-all duration-300'/>
                </Link>
                <Link href={"https://www.youtube.com/@DaMeta1"} target='_blank'>
                <FaYoutube className='size-[18px] cursor-pointer hover:text-[#f14f44] transition-all duration-300'/>
                </Link>
            </div>
            <div className='mt-10'>

            <Link href='https://dmu.dameta1.com' target="_blank" className='manrope text-black font-semibold text-[14px] px-6 sm:px-10 py-5 rounded-full border-2 border-[#95cc43] hover:bg-[#2bf568] hover:border-[#2bf568] transition-all duration-300 ease-in-out'>Explore DaMeta1 Utility Token</Link>
            </div>

    </SheetHeader>
  </SheetContent>
</Sheet>

      </div>
    </>
  )
}

export default Navbar2
