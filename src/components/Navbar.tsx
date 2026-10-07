"use client"

import { useEffect, useState } from "react";
import Categories from "./Categories";


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
        <div className="bg-[#FAFCFA]">
            <div className="container mx-auto flex items-center justify-between py-3">

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

                <div className="flex items-center gap-4">
                    <button className=" text-sm font-semibold text-[#1D271F]  ">সাইন ইন</button>

                    <button className="bg-[#05893E] text-sm font-semibold px-4 py-2 rounded-2xl text-white shadow-md">সাইন আপ</button>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar