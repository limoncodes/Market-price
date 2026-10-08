"use client";

import { useState } from "react";

interface CategoryType {
    id: number;
    categoryIcon: string;
    nameBn: string;
    today: number;
    unit: string;
    categoryNameBn: string;
    change: {
        dir: string;
        pct: number;
    };
}

const ProductList = ({ data }: { data: CategoryType[] }) => {
    const [sort, setSort] = useState("default");

    const sortedData = [...data].sort((a, b) => {
        if (sort === "low-to-high") {
            return a.today - b.today;
        }

        if (sort === "high-to-low") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <>
            {/* Sort */}
            <div className="bg-[#FAFCFA] rounded-2xl p-5 mt-6 flex items-center justify-end gap-2">
                <span className="text-sm text-gray-600">
                    সাজান
                </span>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-[#DDE4DD] rounded-lg px-3 py-2 text-sm outline-none bg-white cursor-pointer"
                >
                    <option value="default">
                        ডিফল্ট
                    </option>

                    <option value="low-to-high">
                        দাম: কম থেকে বেশি
                    </option>

                    <option value="high-to-low">
                        দাম: বেশি থেকে কম
                    </option>
                </select>
            </div>

            {/* All Data */}
            <div className="mt-6">
                <div className="mb-15">

                    {/* Title */}
                    <div className="my-8">
                        <h2 className="text-[20px] font-bold text-[#1D271F] mb-3">
                            সব পণ্য
                        </h2>

                        <p className="text-[#1D271F] text-sm">
                            মোট <span>{sortedData.length}</span>টি পণ্য দেখানো হচ্ছে
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-3 gap-3">
                        {sortedData.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-xl border border-gray-200 bg-[#FAFCFA] p-3"
                            >

                                {/* Product Info */}
                                <div className="flex items-center gap-3">

                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl">
                                        {item.categoryIcon}
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <h3 className="text-[16px] font-semibold text-[#1D271F]">
                                            {item.nameBn}
                                        </h3>

                                        <p className="text-[12px] text-[#1D271F]">
                                            প্রতি {item.unit}
                                        </p>
                                    </div>

                                </div>

                                {/* Price */}
                                <div className="mt-4 flex items-end justify-between">

                                    <div>
                                        <p className="text-[12px] text-[#1D271F]">
                                            আজকের দাম
                                        </p>

                                        <p className="text-xl font-bold text-[#1D271F]">
                                            {item.today} টাকা
                                        </p>
                                    </div>

                                    {/* Price Change */}
                                    {item.change.dir === "up" ? (
                                        <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-red-500 font-semibold">
                                            ▲ {item.change.pct}%
                                        </span>
                                    ) : item.change.dir === "down" ? (
                                        <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1A9951] font-semibold">
                                            ▼ {item.change.pct}%
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1D271F] font-semibold">
                                            {item.change.pct}%
                                        </span>
                                    )}

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductList;