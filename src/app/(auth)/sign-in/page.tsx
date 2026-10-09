"use client"
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Login = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        console.log(data)
        const { data: resdata, error } = await signIn.email({

            email: String(data.email),
            password: String(data.password),
            callbackURL: "/"
        });

        console.log(resdata, error)
        if (error) {
            toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়");
            return;
        }
    }
    const handleGoogle = async () => {
        const data = await signIn.social({
            provider: "google",
        });
    }
    const handlegithub = async () => {
        const data = await signIn.social({
            provider: "github"
        })
    }


    return (
        <div className="min-h-screen bg-[#F0F5F0] flex flex-col items-center pt-7">
            {/* Header */}
            <div className="mb-7 text-center">
                <h1 className="text-[27px] font-bold leading-[1.35] text-[#202824]">
                    সাইন ইন
                </h1>

                <p className="mt-1 text-sm text-[#6d766f]">
                    বিস্তারিত নাম, বোর্ডের তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            {/* Card */}
            <div className="w-[464px] rounded-[17px] border border-[#dfe5df] bg-white px-[27px] py-[27px]">
                <form onSubmit={onSubmit}>
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
                            placeholder="Enter your email"
                            className="h-11 w-full rounded-[10px] border border-[#dce3dc] bg-white px-[13px] text-sm text-[#222824] outline-none placeholder:text-[#343a36] focus:border-[#07943f] focus:ring-2 focus:ring-[#07943f]/10"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-[18px]">
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
                            className="h-11 w-full rounded-[10px] border border-[#dce3dc] bg-white px-[13px] text-sm text-[#222824] outline-none placeholder:text-[#343a36] focus:border-[#07943f] focus:ring-2 focus:ring-[#07943f]/10"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="h-11 w-full rounded-[9px] bg-[#07933e] text-sm font-semibold text-white shadow-[0_3px_4px_rgba(0,115,47,0.25)] transition hover:bg-[#078539]"
                    >
                        সাইন ইন
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
                        onClick={handleGoogle}
                        type="button"
                        className=" cursor-pointer flex h-[43px] flex-1 items-center justify-center gap-2 rounded-[9px] border border-[#dce3dc] bg-white text-[13px] font-medium text-[#29302b] transition hover:bg-[#fafcfa]"
                    >
                        <FcGoogle className="text-[18px]" />

                        <span>Google দিয়ে চালিয়ে যান</span>
                    </button>

                    {/* GitHub */}
                    <button
                    onClick={handlegithub}
                        type="button"
                        className=" cursor-pointer flex h-[43px] flex-1 items-center justify-center gap-2 rounded-[9px] border border-[#dce3dc] bg-white text-[13px] font-medium text-[#29302b] transition hover:bg-[#fafcfa]"
                    >
                        <FaGithub className="text-[17px] text-[#24292f]" />

                        <span>GitHub দিয়ে চালিয়ে যান</span>
                    </button>
                </div>

                {/* Sign Up */}
                <div className="mt-[17px] text-center text-[13px] text-[#505851]">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/sign-up"
                        className="font-medium text-[#078d3d] hover:underline"
                    >
                        সাইন আপ করুন
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

export default Login;