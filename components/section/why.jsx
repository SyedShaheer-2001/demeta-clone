import Image from 'next/image'
import React from 'react'
import { HeroVideoDialog } from '../ui/hero-video-dialog'
import { TextAnimate } from '../ui/text-animate'
import { Button } from '../ui/button'

const Why = () => {

  const data = [
    {
      title:"Creator Economy",
      desc:"Build, share, and monetize your ideas in a space designed for developers and digital  pioneers.",
      img:"/why/img1.png"
    },
    {
      title:"Virtual Real Estate",
      desc:"Buy, lease, or showcase Blockchain backed properties with long term value in an ever expanding digital economy.",
      img:"/why/img2.png"
    },
    {
      title:"Gaming Tournaments",
      desc:"Join global competitions, earn rewards, and experience play to earn like never before.",
      img:"/why/img3.png"
    },
    {
      title:"Immersive Learning",
      desc:"Step into the future of education with VR classrooms and AI-personalized learning paths.",
      img:"/why/img4.png"
    },
    {
      title:"Innovation Labs",
      desc:"Explore AI, Blockchain and digital real estate through community driven labs and experimental zones.",
      img:"/why/img5.png"
    },
    {
      title:"AI-Driven Communication",
      desc:"Master business networking and leadership with intelligent, real time coaching in virtual environments.",
      img:"/why/img6.png"
    }
  ]

  return (
    <div className='bg-white px-5 pt-20 pb-10 '>
      <div className='bg-[#1CD44C] w-full h-[2px] block '></div>
      <h1 className='text-[36px] sm:text-[48px] tracking-[4px] text-center my-6 sm:my-10' style={{wordSpacing:"4px"}}>Why DaMeta1?</h1>
      <TextAnimate animation="slideUp" by="word" duration={0.5} className='text-[#169135] tracking-[3.5px] text-center text-[26px] sm:text-[36px]'>
      Tap Into Your Hidden Potential
    </TextAnimate>
     
      <TextAnimate animation="slideUp" by="word" duration={0.5}  className='text-[#169135] tracking-[3.5px] text-center text-[22px] sm:text-[28px] my-3'>Real Growth Start Here</TextAnimate>
      <p className='text-[18px] tracking-[1.1px] text-center font-light my-5 max-w-[1000px] mx-auto poppins' style={{wordSpacing:"4px"}}>DaMeta1 is a next generation ecosystem built for those who dare to evolve.  From entrepreneurs and educators to gamers and innovators, DaMeta1 delivers cutting-edge, immersive experiences that transform how we engage, learn, create, and collaborate.</p>
    
       <div className=' flex flex-wrap gap-[25px] sm:gap-[42px] justify-center mt-10'>
        {
          data.map((item, index)=>{
              return (
               <div key={index} className='flex flex-col items-center text-center gap-4 p-5 sm:max-w-[360px] hover:shadow-[0_0_94px_0_#39FF14]'>
                <div className='w-[205px] h-[205px] bg-[#000] relative rounded-[28px] group'>

                <Image src={item.img} fill alt='' className='group-hover:scale-120 transition-all'/>
                  </div>

                   <h3 className='text-[28px] leading-[1.2] tracking-[2px] font-semibold sm:max-w-[280px]'>{item.title}</h3>
                   <p className='text-[16px] leading-[2] sm:max-w-[300px] poppins'>{item.desc}</p>
               </div>
              )
          })
        }
       </div>

       <HeroVideoDialog
  className="relative flex mx-auto max-w-[1200px] max-h-[640px] rounded-2xl overflow-hidden sm:my-10 md:my-20"
  animationStyle="from-center"
  videoSrc="https://www.youtube.com/embed/vWVm_9ewZ_Q?si=DgMJcm1FuYCfC4te"
  thumbnailSrc="https://dameta1.com/wp-content/uploads/2025/02/bussinessbay.jpg"
  thumbnailAlt="Dummy Video Thumbnail"
/>




    
     
    </div>
  )
}

export default Why
