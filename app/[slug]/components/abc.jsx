"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BlogHero from "./components/blogHero";
import axios from "axios";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import AnimatedBtn from "@/components/ui/AnimatedBtn";

const Page = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch blogs + categories
  useEffect(() => {
    axios
      .get("https://dameta1.com/dameta-backend/public/api/blogs")
      .then((res) => {
        const blogs = res.data.blogs;

        // find current page blog
        const found = blogs.find((b) => b.slug === slug);
        setBlog(found);

        // recent posts (excluding current)
        const filtered = blogs
          .filter((b) => b.slug !== slug)
          .slice(0, 3);
        setRecentBlogs(filtered);
      });

    // Fetch categories (ID → name)
    axios
      .get("https://dameta1.com/dameta-backend/public/api/categories")
      .then((res) => setCategories(res.data.categories));
  }, [slug]);

  // Convert content HTML → paragraphs (clean)
  const parseContentToParagraphs = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.innerText.split("\n").filter((p) => p.trim() !== "");
  };

  // Get category names using category_ids
  const getCategoryNames = (ids) => {
    return ids.map((id) => {
      const match = categories.find((c) => c.id === Number(id));
      return match ? match.name : "";
    });
  };

   const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const data = [
    {
      title: "Virtual Real Estate: A Smart Investment in the Digital Era",
      desc: "Virtual Real Estate: A Smart Investment in the Digital Era",
      date: "March 27, 2025",
      img: "/blogs/img1.jpg",
      href: "virtual-real-estate-a-smart-investment-in-the-digital-era/"
    },
    {
      title: "5 Ways AI Is Changing the Game for Education and Business",
      desc: " 5 Ways AI Is Changing the Game for Education and Business",
      date: "March 27, 2025",
      img: "/blogs/img2.jpeg",
      href: "5-ways-ai-is-changing-the-game-for-education-and-business/"
    },
    {
      title: "The Future Is Virtual: Why the Metaverse Matters More Than Ever",
      desc: "The Future Is Virtual: Why the Metaverse Matters More Than Ever",
      date: "March 24, 2025",
      img: "/blogs/img3.jpg",
      href: "the-future-is-virtual-why-the-metaverse-matters-more-than-ever/"
    }
  ]

  if (!blog) return <p className="p-10 text-center">Loading...</p>;

  const paragraphs = parseContentToParagraphs(blog.content);
  const categoryList = getCategoryNames(blog.category_ids);

  const imageUrl = `https://dameta1.com/dameta-backend/public/storage/${blog.image}`;

  return (
    <div className="w-full h-auto flex flex-col items-center gap-20 md:gap-40">
      {/* HERO */}
      <BlogHero heading={blog.title} />

      <div className="w-[90%] flex flex-col md:flex-row justify-center items-start gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:[600px] relative">
            <img
              alt="blog-img"
              src={imageUrl}
              className="rounded-3xl absolute h-full w-full object-cover"
            />

            <div className="absolute bottom-0 flex flex-wrap gap-2 z-10 left-0">
              <div className="bg-white rounded-full p-2 px-4">
                <p className="exo text-xs sm:text-sm text-zinc-400">
                  {blog.created_at.split("T")[0]} / {blog.author}
                </p>
              </div>

              {categoryList.map((cat, i) => (
                <div key={i} className="bg-white rounded-full p-2 px-4 mb-[2px]">
                  <Link href={`/category/${cat}`}>
                    <p className="exo text-xs sm:text-sm text-zinc-800 capitalize">
                      / {cat} /
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div className="w-full py-10 md:py-20 border-b border-green-700">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="exo text-base sm:text-lg md:text-xl text-zinc-700 leading-7 sm:leading-8 md:leading-[40px] mb-6 sm:mb-8"
              >
                {para}
              </p>
            ))}
          </div>

          {/* AUTHOR + SOCIAL */}
          <div className="w-full my-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="exo text-lg sm:text-xl font-medium">By {blog.author}</h1>
            <div className="flex gap-6">
              <Link href="#"><FaFacebookF className="size-4 sm:size-5" /></Link>
              <Link href="#"><FaXTwitter className="size-4 sm:size-5" /></Link>
              <Link href="#"><FaYoutube className="size-5 sm:size-6" /></Link>
            </div>
          </div>

           {/* Comment Box */}
          <div className="bg-[#ebf0f4] rounded-3xl my-10 sm:my-20 p-6 sm:p-12 md:p-20 flex flex-col gap-6">
            <h1 className="exo text-2xl sm:text-3xl font-medium">Leave a Comment</h1>
            <p className="exo text-base sm:text-lg">Your email address will not be published. Required fields are marked *</p>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="relative w-full">
                <input type="text" id="name" className="peer exo w-full border-b border-zinc-400 text-sm outline-none py-3 placeholder-transparent" placeholder="Name" />
                <label htmlFor="name" className="exo absolute left-0 top-3 text-zinc-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-5px]">Name</label>
              </div>
              <div className="relative w-full">
                <input type="email" id="email" className="peer exo w-full border-b border-zinc-400 text-sm outline-none py-3 placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="exo absolute left-0 top-3 text-zinc-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-5px]">Email</label>
              </div>
            </div>

            <div className="relative w-full">
              <textarea id="message" rows="5" className="peer exo w-full border-b border-zinc-400 text-sm outline-none py-3 placeholder-transparent resize-none" placeholder="message"></textarea>
              <label htmlFor="message" className="exo absolute left-0 top-3 text-zinc-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-5px]">Message</label>
            </div>

            <div className="flex items-start gap-3">
              <input id="check" type="checkbox" />
              <label htmlFor="check" className="exo text-base sm:text-lg">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <AnimatedBtn />
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-full md:w-[350px] lg:w-[400px]  flex-col items-center gap-7 hidden lg:flex">
          <div className="rounded-3xl w-full bg-[#ebf0f4] flex flex-col gap-5 py-8 px-6">
            {['Network Integration','Deep learning solutions','Transfer learning','Model evalution',"Real-time prediction"].map((txt, i) => (
              <p key={i} className="exo text-base sm:text-lg md:text-xl font-medium text-zinc-400">{txt}</p>
            ))}
          </div>

          {/* Recent posts */}
          <div className="border-b border-green-800 w-full py-4 flex justify-between items-center">
            <h1 className="exo text-xl sm:text-2xl font-medium">Recent posts</h1>
            <IoShareSocialSharp />
          </div>
          <div className="w-full flex flex-col gap-5">
            {data.map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="group w-full flex gap-3">
                  <img alt="" src={item.img} className="w-20 h-20 object-cover rounded-xl" />
                  <div>
                    <p className="exo text-gray-500 text-sm sm:text-base">{item.date}</p>
                    <p className="group-hover:underline exo text-base sm:text-lg font-medium">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Calendar */}
          <div className="w-full py-6 flex flex-col items-center">
            <p className="exo text-lg sm:text-xl text-[#f14f44]">{monthNames[currentMonth]} {currentYear}</p>
            <div className="w-full p-4 bg-white rounded-xl">
              <div className="grid grid-cols-7 text-center gap-2 mb-2">
                {weekdays.map((d, i) => <p key={i} className="exo text-sm font-medium text-[#f14f44]">{d}</p>)}
              </div>
              <div className="grid grid-cols-7 text-center gap-2">
                {calendarDays.map((day, i) => {
                  const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                  return (
                    <div key={i} className={`exo w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg ${isToday ? 'bg-[#f14f44] text-white' : 'text-gray-700'}`}>
                      {day || ''}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
