"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import SignInandSignUP from "./SignInandSignUP";



const Navbar = () => {

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
        <div className="bg-[#FAFCFA] sticky top-0 z-50 ">

            <div className="container mx-auto flex items-center justify-between py-3  ">

                <Link href="/">
                    <div className="flex items-center gap-2">
                        <div>
                            <h2 className="bg-[#05893E] rounded-xl text-lg text-[#A6A09F] p-2">
                                🛒
                            </h2>
                        </div>

                        <div>
                            <h2 className="text-[#1D271F] font-bold text-2xl ">
                                বাজার দর
                            </h2>

                            <p className="text-[16px] text-[#1D271F]">
                                {today}
                            </p>
                        </div>
                    </div>
                </Link>

                <SignInandSignUP/>
            </div>


        </div>
    )
}

export default Navbar