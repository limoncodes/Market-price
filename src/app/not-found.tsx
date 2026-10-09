
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F3F7F3] flex items-center justify-center px-4 py-8 sm:px-6">
      <div className="w-full max-w-[650px]">

        {/* Main Card */}
        <div className="bg-white border border-[#DFE7DF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center shadow-sm">

          {/* 404 */}
          <div className="relative flex justify-center mb-5 sm:mb-6">
            <h1 className="text-[88px] xs:text-[100px] sm:text-[120px] md:text-[150px] font-bold leading-none tracking-tight text-[#E8F3EA]">
              404
            </h1>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-[#009B4D] flex items-center justify-center shadow-lg">
                <FaSearch className="text-white text-xl sm:text-2xl md:text-3xl" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#202820] leading-snug">
            পেজটি খুঁজে পাওয়া যায়নি
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-[#737A73] max-w-[480px] mx-auto">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
            পেজটি হয়তো সরানো হয়েছে অথবা লিংকটি ভুল হয়েছে।
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-6 sm:mt-8">
            {/* Back */}
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto min-h-11 flex items-center justify-center gap-2 rounded-xl border border-[#D8E2D8] bg-white px-5 sm:px-6 py-3 text-sm font-semibold text-[#303830] transition hover:bg-[#F3F7F3]"
            >
              <FaArrowLeft className="text-xs shrink-0" />
              পিছনে যান
            </button>

            {/* Home */}
            <Link
              href="/"
              className="w-full sm:w-auto min-h-11 flex items-center justify-center gap-2 rounded-xl bg-[#009B4D] px-5 sm:px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008B45]"
            >
              <FaHome className="text-xs shrink-0" />
              হোমে যান
            </Link>
          </div>
        </div>

        {/* Brand */}
        <div className="text-center mt-5 sm:mt-6">
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#009B4D] flex items-center justify-center shrink-0">
              <span className="text-white text-sm">🛒</span>
            </div>

            <span className="text-sm font-bold text-[#202820]">
              বাজার দর
            </span>
          </div>

          <p className="text-[11px] text-[#899189] mt-2">
            প্রতিদিনের বাজারদর এক নজরে
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

