'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  
  // Fetch blogs and categories from the API
  useEffect(() => {
    // Fetch categories first (if available via separate API)

    // axios.get("https://dameta1.com/dameta-backend/public/api/categories")
    //   .then(response => {
    //     setCategories(response.data.categories);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching categories:", error);
    //   });

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

    
    // Fetch blogs from the provided API
   
    axios.get("https://dameta1.com/dameta-backend/public/api/blogs")
      .then(response => {
        setBlogs(response.data.blogs);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  // Function to get category names based on category IDs
  const getCategoryNames = (categoryIds) => {
    return categoryIds
      .map((id) => {
        const category = categories.find((cat) => cat.id === Number(id));
        return category ? category.name : null;
      })
      .filter(Boolean)
      .join(", ");
  };

// Function to strip HTML tags and truncate the content
const truncateHtml = (htmlContent, maxLength = 150) => {
  // Create a temporary element to parse the HTML content
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;

  // Get the plain text content from the HTML
  const text = tempDiv.textContent || tempDiv.innerText || "";

  // Truncate the plain text and return it with ellipsis
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};


  return (
    <div className="fluid-container px-5 py-10" id="blogs">
      <div className="flex items-center justify-between max-w-[1140px] mx-auto">
        <h2 className="text-[28px] font-light tracking-[6.2px] capitalize text-center md:text-left">
          DaMeta1 Insights
        </h2>
        <Link
          href="/all-blogs"
          className="text-[16px] px-4 py-2 rounded-full bg-[#39C72C] text-white hover:bg-[#2ea222] transition-all duration-300"
        >
          Show All
        </Link>
      </div>

      <div className="max-w-[1140px] mx-auto mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-5 p-2">
                <div className="w-full h-[250px] relative rounded-2xl overflow-hidden group">
                  <Link href={`/${item.slug}`}>
                    <div className="absolute w-full h-full bg-black/0 px-10 py-4 z-10 group-hover:bg-black/70 transition-all duration-300">
                      <span className="text-[20px] text-white font-sans opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {getCategoryNames(item.category_ids)} 
                      </span>
                    </div>
                  </Link>
                  <img src={`https://dameta1.com/dameta-backend/public/${item.image}`} alt="" className="w-full h-full object-cover" />
                </div>

                <Link href={`${item.slug}`} className="no-underline">
                  <h3 className="text-[23px] font-medium poppins tracking-tight capitalize hover:text-[#39C72C] transition-all duration-300">
                    {item.title}
                  </h3>
                </Link>

                 <p
                  className="text-[17px] font-normal poppins capitalize"
                  dangerouslySetInnerHTML={{
                    __html: truncateHtml(item.content, 50),
                  }}
                ></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
