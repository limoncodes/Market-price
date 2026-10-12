
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
        <div className="sticky top-0 z-50 bg-[#FAFCFA]">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6 lg:px-8">
                {/* Logo and Date */}
                <Link href="/" className="min-w-0 shrink">
                    <div className="flex items-center gap-2">
                        <div className="shrink-0">
                            <h2 className="rounded-xl bg-[#05893E] p-2 text-lg text-[#A6A09F]">
                                🛒
                            </h2>
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-xl font-bold text-[#1D271F] sm:text-2xl">
                                বাজার দর
                            </h2>

                            <p className="text-sm text-[#1D271F] sm:text-[16px]">
                                {today || "..."}
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Profile / Authentication */}
                <div className="ml-auto flex shrink-0 items-center justify-end">
                    <SignInandSignUP />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
