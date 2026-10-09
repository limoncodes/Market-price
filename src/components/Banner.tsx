
"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";

const Banner = () => {
    const [today, setToday] = useState("");

    useEffect(() => {
        startTransition(() => {
            setToday(
                new Date().toLocaleDateString("bn-BD", {
                    dateStyle: "full",
                })
            );
        });

        const id = setInterval(() => {
            startTransition(() => {
                setToday(
                    new Date().toLocaleDateString("bn-BD", {
                        dateStyle: "full",
                    })
                );
            });
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 my-6 sm:my-7 lg:my-9 mx-3 sm:mx-0 px-5 sm:px-6 lg:px-8 py-6 sm:py-7 bg-[#FAFCFA] border border-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full min-w-0 max-w-2xl">
                <h2 className="inline-block mb-3 px-3 py-1 bg-[#E4F3EA] text-[#05893E] text-xs sm:text-sm font-medium rounded-full">
                    {today || "..."}
                </h2>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D271F] leading-tight mb-4">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="max-w-xl text-sm sm:text-base text-gray-500 leading-7 mb-6">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <button className="bg-[#05893E] hover:bg-[#047936] text-sm font-semibold px-5 py-2.5 text-white shadow-md hover:shadow-lg rounded-lg transition-all duration-300">
                    সব পণ্য দেখুন
                </button>
            </div>

            <div className="hidden sm:block w-full sm:w-auto shrink-0 sm:ml-2 lg:ml-6">
                <Image
                    src="/bazar-hero 1.png"
                    width={315}
                    height={263}
                    alt="bajar hero"
                    className="object-contain w-full max-w-[220px] md:max-w-[270px] lg:max-w-[315px] h-auto"
                    loading="eager"
                />
            </div>
        </div>
    );
};

export default Banner;

