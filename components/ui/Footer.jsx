import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-black flex justify-center items-center py-10">
                <div className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12">
<div className='md:col-span-3 text-white grid md:grid-cols-3 gap-10'>
                         
                         <div className=''>
                            <h6 className='text-[#7fed71] tracking-[1px] text-sm mt-2 text-[16px] exo capitalize flex gap-[6px] items-center w-full'>
                                <Image src={'/flags/1.svg'} width={25} height={20} alt=''/>
                                Istanbul Office</h6>
                             <p className="text-zinc-100 tracking-[1px] text-sm mt-2 text-[16px] exo capitalize">Office 269, Building R2, Brandium,<br/> Ateashir, Istanbul, Turkey.</p>
                         </div>

                          <div className='md:text-center md:flex flex-col items-center'>
                            <h6 className='text-[#7fed71] tracking-[1px] text-sm mt-2 text-[16px] exo capitalize flex gap-[6px] items-center mx-auto'>
                                <Image src={'/flags/2.png'} width={25} height={20} alt=''/>
                                Abu dhabi Office</h6>
                             <p className="text-zinc-100 tracking-[1px] text-sm mt-2 text-[16px] exo capitalize">VD-First floor incubator<br/> building masdar city,abu dhabi, United Arab Emirates</p>
                         </div>

                          <div className='md:text-end md:flex flex-col items-end'>
                            <h6 className='text-[#7fed71] tracking-[1px] text-sm mt-2 text-[16px] exo capitalize flex gap-[6px] items-center '>
                                <Image src={'/flags/3.png'} width={25} height={20} alt=''/>
                                USA Office</h6>
                             <p className="text-zinc-100 tracking-[1px] text-sm mt-2 text-[16px] exo capitalize">1900 Camden Avenue suite 101<br/> san jose, CA 95124</p>
                         </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start">
                        <Image alt="logo" src={logo} className="h-[120px] md:h-[150px] w-auto" />
                        <p className="poppins text-sm leading-[20px] text-zinc-300">
                            DaMeta1 is more than just a platform, it is a comprehensive immersive world. Designed for innovators, learners, entrepreneurs, and creators.
                        </p>
                    </div>


                    <div className="flex flex-col items-start lg:items-center gap-5">
                        <h1 className="text-zinc-100 text-[20px] md:text-[23px] font-extrabold leading-[23px] sm:text-center">
                            OUR SOCIAL <br /> MEDIA
                        </h1>
                        <div className="flex gap-3">
                            <Link href={"#"} className="bg-[#7fed71] p-2.5 rounded-md">
                                <FaFacebook className="text-black size-[28px]" />
                            </Link>
                            <Link href={"#"} className="bg-[#7fed71] p-2.5 rounded-md">
                                <IoLogoInstagram className="text-black size-[28px]" />
                            </Link>
                            <Link href={"#"} className="bg-[#7fed71] p-2.5 rounded-md">
                                <FaYoutube className="text-black size-[28px]" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 sm:col-span-3 lg:col-span-1">
                        <h1 className="text-zinc-100 text-[18px] md:text-[20px] font-extrabold">
                            JOIN THE JOURNEY
                        </h1>
                        <p className="poppins text-sm leading-[20px] text-zinc-300">
                            Get updates on special events and receive your first drink on us!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <input
                                type="email"
                                className="flex-1 outline-0 border-b border-white placeholder:text-zinc-500 poppins p-2 text-white text-sm bg-transparent"
                                placeholder="Email"
                            />
                            <button className="poppins text-zinc-100 uppercase text-sm cursor-pointer hover:text-red-700 border-b border-red-700 px-2">
                                Subscribe
                            </button>
                        </div>
                    </div>


                    

                </div>
            </div>

          
        </>
    )
}

export default Footer
