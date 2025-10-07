import React from 'react'
import { TextAnimate } from '../ui/text-animate'

const Utility = () => {

     const data = [
        {title:'Da1ilmverse (Education)', desc:'Provides access to virtual classrooms, learning hubs, NFT certifications, and knowledge exchanges, with rewards for progress and achievement.'},
        {title:'Business Bay (Business)', desc:'Drives secure transactions, smart contracts, and ownership of virtual properties, enterprises, and marketplaces.'},
        {title:'Gameaholic (Gaming)', desc:'Is used as in-game currency for upgrades, tournaments, rewards, and player-to-player trades without fees.'},
        {title:'Dope (Entertainment)', desc:'Provides access to immersive concerts, events, movies, and interactive entertainment experiences.'},
        {title:'Eureka (Creators & Innovators)', desc:'Powers creator tools, content publishing, AI spaces, and new project development throughout the ecosystem.'}
     ]

    return (
        <div className='bg-white px-5 pb-10 '>

            <TextAnimate animation="slideUp" by="word" duration={0.5} className='text-[36px] sm:text-[48px] tracking-[4px] text-center '>
                DaMeta1 Utility Token
            </TextAnimate>
            <p className='text-[18px] tracking-[1.1px] text-center font-light my-5 max-w-[1000px] mx-auto poppins' style={{ wordSpacing: "4px" }}>
                The DMU Utility Token powers DaMeta1, driving every interaction on its five continents:
                 </p>
                 

                 <div className='flex flex-wrap justify-between gap-10 max-w-[1400px] mx-auto my-20'>
                    {
                        data.map((res,index)=>{
                            return(
                                <div className='flex flex-col gap-3 items-center flex-1 min-w-[190px]' key={index}>
                                    <h6 className='text-[20px] tracking-[1.1px] text-center font-semibold  text-[#7fed71]'>{res.title}</h6>
                                    <p className='text-[16px] tracking-[1.1px] text-center font-light leading-nomal  poppins'>{res.desc}</p>
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
