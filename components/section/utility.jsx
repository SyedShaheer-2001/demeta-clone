'use client'
import React, { useEffect } from 'react'
import { TextAnimate } from '../ui/text-animate'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Utility = () => {

         useEffect(() => {
        AOS.init({
          duration: 1000 // Duration in milliseconds
        });
      }, []);

     const data = [
        {title:'Da1ilmverse', desc:'Provides access to virtual classrooms, learning hubs, NFT certifications, and knowledge exchanges, with rewards for progress and achievement.'},
        {title:'Business Bay', desc:'Drives secure transactions, smart contracts, and ownership of virtual properties, enterprises, and marketplaces.'},
        {title:'Gameaholic', desc:'Is used as in-game currency for upgrades, tournaments, rewards, and player-to-player trades without fees.'},
        {title:'Dope', desc:'Provides access to immersive concerts, events, movies, and interactive entertainment experiences.'},
        {title:'Eureka', desc:'Powers creator tools, content publishing, AI spaces, and new project development throughout the ecosystem.'}
     ]

    return (
        <div className='bg-white px-5 pb-10 utilityBlock'>

            <TextAnimate animation="slideUp" by="word" duration={0.5} className='text-[36px] sm:text-[48px] tracking-[4px] text-center '>
                DaMeta1 Utility Token
            </TextAnimate>
            <p className='text-[18px] tracking-[1.1px] text-center font-light my-5 max-w-[1000px] mx-auto poppins' style={{ wordSpacing: "4px" }}>
                DaMeta1 Utility Token (DMU) powers DaMeta1, driving every interaction on its five continents
                 </p>
                 

                 <div className='flex flex-wrap justify-center gap-10 max-w-[1400px] mx-auto my-20 utility'>
                    {
                        data.map((res,index)=>{
                            return(
                                <div className='flex flex-col gap-3 items-center flex-1 min-w-[190px]' key={index}  data-aos={'fade-up'} >
                                    <h6 className='text-[20px] tracking-[1.1px] text-center font-semibold  text-[#7fed71]'>{res.title}</h6>
                                    <p className='text-[16px] tracking-[1.1px] text-center font-light leading-nomal  poppins '>{res.desc}</p>
                                </div>
                            )
                        })
                    }
                 </div>

                  <p className='text-[18px]  font-light my-8 max-w-[1100px] text-center mx-auto poppins' style={{ wordSpacing: "4px" }}>
                With DMU at its center, DaMeta1's continents remain interconnected, prosperous, and prepared for infinite possibilities.
                 </p>

        </div>
    )
}

export default Utility


{/* <div className='flex flex-wrap justify-between gap-10 max-w-[1400px] mx-auto my-20'>
                    {
                        data.map((res,index)=>{
                            return(
                                <div className='flex flex-col gap-3 items-center flex-1 min-w-[190px]' key={index}  data-aos={'fade-up'} >
                                    <h6 className='text-[20px] tracking-[1.1px] text-center font-semibold  text-[#7fed71]'>{res.title}</h6>
                                    <p className='text-[16px] tracking-[1.1px] text-center font-light leading-nomal  poppins'>{res.desc}</p>
                                </div>
                            )
                        })
                    }
                 </div> */}