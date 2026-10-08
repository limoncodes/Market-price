"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


const Banner = () => {


    const [today, setToday] = useState("");

    useEffect(() => {


        // eslint-disable-next-line react-hooks/set-state-in-effect
        setToday(
            new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
            })
        );
    }, []);
    return (
        <div className="flex items-center justify-between my-9 px-4 sm:px-6 lg:px-8 py-5 sm:py-7 bg-[#FAFCFA] border border-gray-200 rounded-2xl overflow-hidden">

            {/* div1 */}
            <div className="max-w-2xl">
                <h2 className="inline-block mb-3 px-3 py-1 bg-[#E4F3EA] text-[#05893E] text-sm font-medium rounded-full">
                    {today}
                </h2>

                <h1 className="text-4xl sm:text-4xl font-bold text-[#1D271F] leading-tight mb-4">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="max-w-xl text-sm sm:text-base text-gray-500 leading-7 mb-6">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <button className="bg-[#05893E] hover:bg-[#047936] text-sm font-semibold px-5 py-2.5 text-white shadow-md hover:shadow-lg rounded-lg transition-all duration-300">
                    সব পণ্য দেখুন
                </button>
            </div>

            {/* div2 */}
            <div className="hidden sm:block shrink-0 ml-6">
                <Image
                    src="/bazar-hero 1.png"
                    width={315}
                    height={263}
                    alt="bajar herro"
                    className="object-contain"
                    loading="eager"
                />
            </div>

        </div>
    )
}

export default Banner