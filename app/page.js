import Blogs from "@/components/section/blogs";
import BoardMembers from "@/components/section/boardMembers";
import Continents from "@/components/section/Continents";
import Explore from "@/components/section/explore";
import Features from "@/components/section/features";
import Gallery from "@/components/section/gallery";
import Partners from "@/components/section/partners";
import Segments from "@/components/section/segments";
import University from "@/components/section/university";
import VideoModal from "@/components/section/videoModal";
import Hero from "@/components/section/Hero";
import NumberSec from "@/components/section/NumberSec";
import What from "@/components/section/What";
import Why from "@/components/section/why";
import { Button } from "@/components/ui/button";
import Roadmap from "@/components/section/roadmap";
import Footer from "@/components/ui/Footer";
import Hero2 from "@/components/section/Hero2.0";
import ContactBook from "@/components/ui/contactBook";
import HowItWorks from "@/components/section/howItWorks";
import AlertBox from "@/components/ui/alertbox";
import Utility from "@/components/section/utility";
import Utility2 from "@/components/section/utility2";



export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      
        <ContactBook />
        <AlertBox />
      <Hero2 />
      <What />
      <div className="border-[12px] sm:border-[16px] md:border-[18px] border-[#1bd44c] flex justify-center items-center rounded-xl px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-[1px] py-2 font-medium leading-[35px] sm:leading-[40px] md:leading-[45px] text-center">
          Our First MVP Impact
        </h1>
      </div>

      <NumberSec />
      <Continents />
      <Explore />
      <Why />
      <Utility />
      <Utility2 />
      <HowItWorks />
      <University />
      <Features />
      <Roadmap />
      <Segments />
      <VideoModal />
      <BoardMembers />
      <Gallery />
      <Partners />
      <Blogs />
      <div className="mx-3 sm:mx-5">
        <div className="w-full border-t-[2px] border-[#1bd44c] flex justify-center items-center py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl w-full sm:w-[80%] md:w-[68%] tracking-[1px] py-2 sm:py-3.5 font-normal leading-[35px] sm:leading-[40px] md:leading-[45px] text-center sm:text-left">
            Connect With Us
          </h1>
        </div>
      </div>

      <Footer />


      


    </div>
  );
}
