"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";



const SignUp = () => {
    const [passwordError, setPasswordError] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        const { password, confirmPassword } = data;

        // Password match check
        if (password !== confirmPassword) {
            setPasswordError("পাসওয়ার্ড দুটি একই নয়");

            return;
        }
        setPasswordError("");
        console.log(data)
        const { data: resdata, error } = await signUp.email({
            name: String(data.name),
            email: String(data.email),
            password: String(data.password),
            callbackURL: "/"
        });
        console.log(resdata, error)
        redirect("/")


        






    };

    return (
        <div className="min-h-screen bg-[#f3f7f3] flex flex-col items-center pt-11">

            {/* Header */}
            <div className="mb-7 text-center">
                <h1 className="text-[27px] font-bold leading-[1.35] text-[#202824]">
                    অ্যাকাউন্ট তৈরি করুন
                </h1>

                <p className="mt-1 text-sm text-[#6d766f]">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </p>
            </div>

            {/* Card */}
            <div className="w-[446px] rounded-[17px] border border-[#dfe5df] bg-white px-[26px] py-[27px]">

                <form onSubmit={onSubmit}>

                    {/* Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="mb-[7px] block text-[15px] font-medium text-[#252b27]"
                        >
                            নাম
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter you name"
                            className="h-11 w-full rounded-[10px] border border-[#dce3dc] px-[13px] text-sm outline-none placeholder:text-[#343a36] focus:border-[#07943f] focus:ring-2 focus:ring-[#07943f]/10"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="mb-[7px] block text-[15px] font-medium text-[#252b27]"
                        >
                            ইমেইল
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="h-11 w-full rounded-[10px] border border-[#dce3dc] px-[13px] text-sm outline-none placeholder:text-[#343a36] focus:border-[#07943f] focus:ring-2 focus:ring-[#07943f]/10"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="mb-[7px] block text-[15px] font-medium text-[#252b27]"
                        >
                            পাসওয়ার্ড
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            minLength={8}
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className="h-11 w-full rounded-[10px] border border-[#dce3dc] px-[13px] text-sm outline-none placeholder:text-[#343a36] focus:border-[#07943f] focus:ring-2 focus:ring-[#07943f]/10"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="mb-[7px] block text-[15px] font-medium text-[#252b27]"
                        >
                            পাসওয়ার্ড নিশ্চিত করুন
                        </label>

                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            minLength={8}
                            placeholder="আবার লিখুন"
                            onChange={() => setPasswordError("")}
                            className={`h-11 w-full rounded-[10px] border px-[13px] text-sm outline-none placeholder:text-[#343a36] focus:ring-2 ${passwordError
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                                : "border-[#dce3dc] focus:border-[#07943f] focus:ring-[#07943f]/10"
                                }`}
                        />

                        {/* Password Error */}
                        {passwordError && (
                            <p className="mt-1.5 text-xs text-red-500">
                                {passwordError}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-[1px] h-11 w-full cursor-pointer rounded-[9px] bg-[#07933e] text-sm font-semibold text-white shadow-[0_3px_4px_rgba(0,115,47,0.25)] transition hover:bg-[#078539]"
                    >
                        অ্যাকাউন্ট তৈরি করুন
                    </button>
                </form>

                {/* Divider */}
                <div className="my-[18px] flex items-center gap-[15px]">
                    <div className="h-px flex-1 bg-[#e2e6e2]" />

                    <span className="text-[13px] text-[#555d57]">
                        অথবা
                    </span>

                    <div className="h-px flex-1 bg-[#e2e6e2]" />
                </div>

                {/* Social Buttons */}
                <div className="flex gap-2">

                    {/* Google */}
                    <button
                        type="button"
                        className="flex h-[43px] flex-1 items-center justify-center gap-2 rounded-[9px] border border-[#dce3dc] bg-white text-[13px] font-medium text-[#29302b] transition hover:bg-[#fafcfa]"
                    >
                        <FcGoogle className="text-[18px]" />

                        <span>
                            Google দিয়ে চালিয়ে যান
                        </span>
                    </button>

                    {/* GitHub */}
                    <button
                        type="button"
                        className="flex h-[43px] flex-1 items-center justify-center gap-2 rounded-[9px] border border-[#dce3dc] bg-white text-[13px] font-medium text-[#29302b] transition hover:bg-[#fafcfa]"
                    >
                        <FaGithub className="text-[17px] text-[#24292f]" />

                        <span>
                            GitHub দিয়ে চালিয়ে যান
                        </span>
                    </button>

                </div>

                {/* Login */}
                <div className="mt-[17px] text-center text-[13px] text-[#505851]">
                    অ্যাকাউন্ট আছে?{" "}

                    <Link
                        href="/sign-in"
                        className="font-medium text-[#078d3d] hover:underline"
                    >
                        সাইন ইন করুন
                    </Link>
                </div>

            </div>

            {/* Back */}
            <Link
                href="/"
                className="mt-[27px] text-[13px] text-[#7a817c] transition hover:text-[#078d3d]"
            >
                ← হোম পেজে ফিরে যান
            </Link>

        </div>
    );
};

export default SignUp;