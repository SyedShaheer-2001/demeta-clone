'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Explore = () => {

      useEffect(() => {
    AOS.init({
      duration: 1000 
    });
  }, []);

    const data = [
        {
            title: "Bussiness Bay - Live",
            description: "The Global Digital Economy Hub The first ever virtual real estate ecosystem where you can rent, buy or showcase properties in a digital world.",
            href: "/explore/business-bay/",
            imageUrl: "/explore/background1.jpg"
        },
        {
            title: "Da1ilmverse -Live",
            description: "The Future of Learning AI empowered virtual classrooms, personalized learning and smart learning environments.",
            href: "/explore/da1ilmverse/",
            imageUrl: "/explore/background2.jpg"
        },
        {
            title: "Eureka - Coming Soon",
            description: "The Creator's Innovation Hub A digital lab for innovators, developers, and content creatore to collaborate and push the boundaries of Metaverse and AI technology",
            href: "/explore/eureka/",
            imageUrl: "/explore/background3.jpg"
        },
        {
            title: "Gameaholic - Coming Soon",
            description: "The Ultimate Gaming Universe Experience play to earn gaming opportunities, immersive E-Sports arenas, and user generated adventures.",
            href: "/explore/gameaholic/",
            imageUrl: "/explore/background4.jpg"
        },
        {
            title: "Dope - Coming Soon",
            description: "The Entertainment & Sports Capital The ultimate hotspot for live concerts, digital cinemas and immersive musical events.",
            href: "/explore/dope",
            imageUrl: "/explore/background5.jpg"
        },
    ]

    return (
        <div className='bg-black text-white py-20 relative overflow-hidden'>
            <Image src={'/explore/background.jpg'} fill alt='' className='opacity-25'/>
            <div className="fluid-container flex flex-wrap justify-center gap-20 relative z-10">
                {data.map((item, index) => {
                    return (
                        <div key={index} data-aos={'fade-up'} 
                        className="flex grow max-w-[410px] flex-col gap-4 hover:bg-black/70 transition-all duration-150 ease-in-out hover:shadow-2xl shadow-[#37ff148f] p-5">
                            <div className='h-[270px] relative'>
                             <Image src={item.imageUrl} fill  alt=''/>
                            </div>
                           <h5 className='text-[30px]'>{item.title}</h5>
                           <p className='max-w-[350px] text-[#CFCFCF] text-base poppins'>
                            {item.description}
                           </p>
                           <Link href={item.href}>
                           <Button variant={"secondary"}>Explore Now</Button>
                           </Link>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Explore
