'use client'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React, { useEffect, useState } from "react";
import Link from "next/link";

function page() {

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const imageBaseURL = "https://dameta1.com/dameta-backend/public/";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://dameta1.com/dameta-backend/public/api/blogs"
        );
        const data = await res.json();

        setBlogs(data.blogs);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching blogs:", error);
        setLoading(false);
      }
    };

     const fetchCategories = async () => {
      // try {
      //   const res = await fetch(
      //     "https://dameta1.com/dameta-backend/public/api/categories"
      //   );
      //   const data = await res.json();

      //   setCategories(data.categories);
      //   setLoading(false);
      // } catch (error) {
      //   console.log("Error fetching blogs:", error);
      //   setLoading(false);
      // }
      setCategories(
        [
        {
            "id": 1,
            "name": "AI",
            "slug": "ai",
            "status": "1",
            "created_at": "2025-11-13T20:29:33.000000Z",
            "updated_at": "2025-11-13T20:29:33.000000Z"
        },
        {
            "id": 2,
            "name": "Data science",
            "slug": "data-science",
            "status": "1",
            "created_at": "2025-11-13T20:29:42.000000Z",
            "updated_at": "2025-11-13T20:29:42.000000Z"
        },
        {
            "id": 3,
            "name": "Business",
            "slug": "business",
            "status": "1",
            "created_at": "2025-11-13T20:29:50.000000Z",
            "updated_at": "2025-11-13T20:29:50.000000Z"
        }
    ]
       )
    };

    fetchBlogs();
    fetchCategories();
  }, []);



  if (loading) {
    return (
      <div className="w-full h-[300px] flex justify-center items-center">
        <p className="text-xl">Loading blogs...</p>
      </div>
    );
  }

  function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
}


  return (
   <>
   <div className=' pb-[100px] pt-[150px] lg:pt-[220px] flex flex-col justify-center relative overflow-hidden '>
   <Navbar/>
  <div className="w-full px-5 py-10">
      <h1 className="text-[32px] font-light tracking-[5px] text-center mb-10">
        All Blogs
      </h1>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {blogs.map((blog) => {
    const blogCategories = blog.category_ids
      .map((catId) => categories.find((c) => c.id === Number(catId)))
      .filter(Boolean);

    return (
      <div
        key={blog.id}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 relative"
      >
        {/* IMAGE */}
        <Link href={`/${blog.slug}`}>
          <div className="relative w-full h-[230px] overflow-hidden">
            <img
              src={imageBaseURL + blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>

            {/* Categories slide-up */}
            <div className="absolute bottom-3 left-3 flex gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {blogCategories.map((cat) => (
                <span
                  key={cat.id}
                  className="text-white text-xs px-3 py-1 bg-black/50 rounded-full backdrop-blur-md border border-white/20"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* CONTENT */}
        <div className="p-5 flex flex-col">
  {/* TITLE */}
  <Link href={`/${blog.slug}`}>
    <h2 className="text-[20px] font-semibold text-gray-900 relative inline-block mb-3">
      <span className="group-hover:text-[#39C72C] transition-colors duration-300">
        {blog.title}
      </span>
    </h2>
  </Link>

  {/* DESCRIPTION */}
  <p className="text-[15px] text-gray-600 line-clamp-3 mb-4">
    {stripHtml(blog.content)}
  </p>

  {/* Push footer to bottom */}
  <div className="mt-auto flex justify-between items-center pt-2">
    {/* FORMATTED DATE (mm/dd/yyyy) */}
    <p className="text-sm text-gray-500 absolute left-2 bottom-2 ">
      {new Date(blog.created_at).toLocaleDateString("en-US")}
    </p>

    {/* READ MORE button */}
    <Link href={`/${blog.slug}`}>
      <span className="text-sm text-[#39C72C] font-medium hover:underline absolute right-2 bottom-2">
        Read More →
      </span>
    </Link>
  </div>
</div>

      </div>
    );
  })}
</div>

    </div>
  
   </div>
    <Footer/>
   </>
  )
}

export default page