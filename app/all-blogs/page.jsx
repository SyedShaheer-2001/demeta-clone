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
   <div className=' pb-[100px] pt-[250px] lg:pt-[320px] flex flex-col justify-center relative overflow-hidden '>
   <Navbar/>
  <div className="w-full px-5 py-10">
      <h1 className="text-[32px] font-light tracking-[5px] text-center mb-10">
        All Blogs
      </h1>

      <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-5">
            {/* IMAGE */}
            <Link href={`/${blog.slug}`}>
              <div className="w-full h-[230px] rounded-2xl overflow-hidden relative group">
                <img
                  src={imageBaseURL + blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex justify-start items-start p-4 gap-2">
                  {blog.category_ids.map((catId) => {
                    const category = categories.find((c) => c.id === Number(catId));
                    return (
                      <span 
                        key={catId}
                        className="text-white text-sm px-3 py-1 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                      >
                        {category ? category.name : catId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>

            {/* TITLE */}
            <Link href={`/${blog.slug}`}>
              <h2 className="text-[20px] font-semibold hover:text-[#39C72C] transition-all duration-200">
                {blog.title}
              </h2>
            </Link>

            {/* DESCRIPTION (from content HTML) */}
            <p className="text-[15px] text-gray-700 line-clamp-3">
              {stripHtml(blog.content)}
            </p>

            {/* DATE */}
            <p className="text-sm text-gray-500">
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  
   </div>
    <Footer/>
   </>
  )
}

export default page