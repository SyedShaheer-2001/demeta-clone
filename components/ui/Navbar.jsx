import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../assets/logo.png'
import NavBtn from './NavBtn'
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

const Navbar = () => {



    return (
        <>
        <div className='hidden xl:flex absolute top-[10px] w-[98%] left-[1%] justify-center items-center flex-col gap-2.5  z-10'>
            <div className='w-full bg-[#111111] py-3.5 px-12 rounded-2xl flex gap-5 text-white'>
                <Link href={"https://www.facebook.com/DaMeta1Community"} target='_blank'>
                <FaFacebookF className='size-[17px] cursor-pointer hover:text-[#f14f44] transition-all duration-300'/>
                </Link>
                <Link href={"https://x.com/DaMeta1_"} target='_blank'>
                <FaXTwitter className='size-[17px] cursor-pointer hover:text-[#f14f44] transition-all duration-300'/>
                </Link>
                <Link href={"https://www.youtube.com/@DaMeta1"} target='_blank'>
                <FaYoutube className='size-[18px] cursor-pointer hover:text-[#f14f44] transition-all duration-300'/>
                </Link>
            </div>
            <div className='w-full bg-[#111111]  px-5 rounded-3xl flex justify-between items-center'>
                <div className='w-[205px] hidden xl:flex'>
                </div>
                <div className='flex justify-center items-center gap-3 '>
                    <NavBtn text={'Home'} url={'/'} defaulBtn={true} />
                    <NavBtn text={'About us'} url={'/#about'}/>

                    <div className='px-10 py-2'>
                        <Image alt='logo' src={logo} className='h-[85px] w-auto p-0' />
                    </div>

                    <NavBtn text={'Our Vision'} url={'/#roadmap'} />
                    <NavBtn text={'Blogs'} url={'/#blogs'} />
                </div>
                <div className=' hidden xl:flex'>
                    <Link href='https://dmu.dameta1.com' target="_blank" className='manrope text-white font-semibold text-[14px] leading-[27px] px-6 sm:px-10 py-5 rounded-full border-2 border-[#95cc43] hover:bg-[#2bf568] hover:border-[#2bf568] transition-all duration-300 ease-in-out'>Explore DaMeta1 Utility Token</Link>
                </div>
            </div>
        </div>
        <div className='bg-[#111111] absolute top-0 px-5 w-full flex items-center justify-between xl:hidden z-10 '>
<Image alt='logo' src={logo} className='h-[108px] w-auto p-0' />

<Sheet>
  <SheetTrigger><HiOutlineMenuAlt3 size={28} color='white'/></SheetTrigger>
  <SheetContent className="xl:hidden text-white bg-[#000] p-5 pt-16">
    <SheetHeader>
     <SheetTitle></SheetTitle>

     <div className='flex flex-col gap-1 mt-3 mb-8'>
      <Link href={'/'} className='exo font-normal text-[16px] text-[#f14f44] border-b-2 px-2 py-3'>Home</Link>
      <Link href={'/'} className='exo font-normal text-[16px] hover:text-[#f14f44] transition-all duration-300 ease-in-out border-b-2 px-2 py-3'>About us</Link>
      <Link href={'/'} className='exo font-normal text-[16px] hover:text-[#f14f44] transition-all duration-300 ease-in-out border-b-2 px-2 py-3'>Our Vision</Link>
      <Link href={'/'} className='exo font-normal text-[16px] hover:text-[#f14f44] transition-all duration-300 ease-in-out border-b-2 px-2 py-3'>Blogs</Link>
     </div>
      
       <div className='w-full flex gap-5 text-white h-10'>
               <Link href={"https://www.facebook.com/DaMeta1Community"} target='_blank'>
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

            <Link href='https://dmu.dameta1.com' target="_blank" className='manrope text-white font-semibold text-[14px] px-6 sm:px-10 py-5 rounded-full border-2 border-[#95cc43] hover:bg-[#2bf568] hover:border-[#2bf568] transition-all duration-300 ease-in-out'>Explore DaMeta1 Utility Token</Link>
            </div>

    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
        </>
    )
}

export default Navbar
