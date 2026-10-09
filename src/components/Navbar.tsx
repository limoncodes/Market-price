
"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";
import SignInandSignUP from "./SignInandSignUP";

const Navbar = () => {
    const [today, setToday] = useState("");

    useEffect(() => {
        startTransition(() => {
            setToday(
                new Date().toLocaleDateString("bn-BD", {
                    dateStyle: "full",
                })
            );
        });
    }, []);

    return (
        <div className="bg-[#FAFCFA] sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-3">
                <Link href="/" className="min-w-0">
                    <div className="flex items-center gap-2">
                        <div className="shrink-0">
                            <h2 className="bg-[#05893E] rounded-xl text-lg text-[#A6A09F] p-2">
                                🛒
                            </h2>
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-[#1D271F] font-bold text-xl sm:text-2xl">
                                বাজার দর
                            </h2>

                            <p className="text-sm sm:text-[16px] text-[#1D271F]">
                                {today || "..."}
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="shrink-0">
                    <SignInandSignUP />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

