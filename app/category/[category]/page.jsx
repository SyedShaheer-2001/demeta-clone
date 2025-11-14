"use client"
import BlogHero from '@/app/[slug]/components/blogHero';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import blogData from '../../../config/blogData'

const Page = () => {
    const { category } = useParams();
    const categories = blogData.filter(item => item.category.includes(category));

    console.log('categories', categories)
    console.log('category', category)


    return (
        <div className="w-full h-auto">
            <BlogHero heading={category} cat={true} />

            <div className="w-full flex justify-center items-center flex-col gap-10 sm:gap-14 my-20 sm:my-40 px-4">
                {categories.map((catog, i) => (
                    <div
                        key={i}
                        className="border rounded-2xl sm:rounded-3xl w-full sm:w-[80%] flex flex-col gap-8 sm:gap-16"
                    >
                        <div className="w-full h-[220px] sm:h-[300px] md:h-[450px] relative">
                            <img
                                alt={catog.head}
                                src={catog.imgUrl}
                                className="rounded-2xl sm:rounded-3xl absolute object-cover h-full w-full"
                            />
                            <div className="absolute bottom-0 flex gap-1 z-10 left-0">
                                <div className="bg-white rounded-full p-2 px-3 sm:p-3 sm:px-5">
                                    <p className="exo text-xs sm:text-sm text-zinc-400">
                                        {catog.date} / {catog.owner}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 sm:px-8 md:px-12 flex flex-col gap-5 sm:gap-9 pb-8 sm:pb-12">
                            <Link href={catog.url}>
                                <h1
                                    className="exo text-lg sm:text-2xl md:text-4xl lg:text-[40px] 
                                    font-medium 
                                    leading-snug sm:leading-normal md:leading-[48px] lg:leading-[50px] 
                                    relative group inline-block 
                                    break-words max-w-full"
                                >
                                    {catog.head}
                                    <span className="absolute left-0 -bottom-1 sm:-bottom-2 lg:-bottom-3 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
                                </h1>
                            </Link>


                            <p className="exo text-base sm:text-lg md:text-[20px] font-normal leading-relaxed sm:leading-[30px] md:leading-[35px]">
                                {catog.desc}
                            </p>

                            <div className="flex flex-wrap justify-start items-center gap-1">
                                {catog.category.map((c, i) => (
                                    <React.Fragment key={i}>
                                        <Link href={`category/${c}`}>
                                            <p className="exo text-xs sm:text-sm text-zinc-600 font-medium pr-1 hover:text-zinc-800">
                                                {c}
                                            </p>
                                        </Link>
                                        {i !== catog.category.length - 1 && (
                                            <p className="exo text-xs sm:text-sm text-zinc-600 font-medium tracking-[1px] sm:tracking-[2px] pr-1">
                                                /
                                            </p>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <Link href={`/${catog.url}`}>
                                <div className="border-b w-max border-red-500 py-1 sm:py-2">
                                    <h1 className="exo text-sm sm:text-base md:text-[20px] text-red-500 font-medium leading-[20px] uppercase">
                                        Read More
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page
