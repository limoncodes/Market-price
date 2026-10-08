interface DatType {
    id: number;
    categoryIcon: string;
    nameBn: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;

    }

}


const PriceUp = async () => {
    const getdata = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {
        next: {
            revalidate: 60
        }
    });
    const data: DatType[] = await getdata.json()
    const Updatda = data.filter(up => up.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
    const downdatda = data.filter(down => down.change.dir === "down").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
    console.log(data)

    return (
        <div>
            {/* UP data */}
            <div className="my-8">
                <h2 className="mb-4 text-[20px] font-bold text-[#1D271F]">
                    <span className="text-red-500">▲</span> আজ দাম বেড়েছে
                </h2>

                <div className="grid grid-cols-3 gap-3">
                    {Updatda.map((updata) => (
                        <div
                            key={updata.id}
                            className="rounded-xl border border-gray-200 bg-[#FAFCFA] p-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl ">
                                    {updata.categoryIcon}
                                </div>

                                <div>
                                    <h3 className="text-[16px] font-semibold text-[#1D271F]">
                                        {updata.nameBn}
                                    </h3>

                                    <p className="text-[12px] text-[#1D271F]">
                                        প্রতি {updata.unit}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div>
                                    <p className="text-[12px] text-[#1D271F]">
                                        আজকের দাম
                                    </p>

                                    <p className="text-xl font-bold text-[#1D271F]">
                                        {updata.today} টাকা
                                    </p>
                                </div>

                                <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-red-500 font-semibold">
                                    ▲ {updata.change.pct}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* down data */}
            <div className="my-8">
                <h2 className="mb-4 text-[20px] font-bold text-[#1D271F]">
                    <span className="text-[#1A9951]">▼</span> আজ দাম কমেছে
                </h2>

                <div className="grid grid-cols-3 gap-3">
                    {downdatda.map((data) => (
                        <div
                            key={data.id}
                            className="rounded-xl border border-gray-200 bg-[#FAFCFA] p-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl ">
                                    {data.categoryIcon}
                                </div>

                                <div>
                                    <h3 className="text-[16px] font-semibold text-[#1D271F]">
                                        {data.nameBn}
                                    </h3>

                                    <p className="text-[12px] text-[#1D271F]">
                                        প্রতি {data.unit}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div>
                                    <p className="text-[12px] text-[#1D271F]">
                                        আজকের দাম
                                    </p>

                                    <p className="text-xl font-bold text-[#1D271F]">
                                        {data.today} টাকা
                                    </p>
                                </div>

                                <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1A9951] font-semibold">
                                    ▼ {data.change.pct}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* সব পণ্য */}
            <div className="mb-15" >
                <div className="my-8">
                    <h2 className=" text-[20px] font-bold text-[#1D271F] mb-3">
                        সব পণ্য
                    </h2>
                    <p className="text-[#1D271F] text-sm">মোট <span>{data.length}</span>টি পণ্য দেখানো হচ্ছে</p>

                </div>
                <div className="grid grid-cols-3 gap-3" >
                    {
                        data.map(data =>
                            <div
                                key={data.id}
                                className="rounded-xl border border-gray-200 bg-[#FAFCFA] p-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl ">
                                        {data.categoryIcon}
                                    </div>

                                    <div>
                                        <h3 className="text-[16px] font-semibold text-[#1D271F]">
                                            {data.nameBn}
                                        </h3>

                                        <p className="text-[12px] text-[#1D271F]">
                                            প্রতি {data.unit}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-[12px] text-[#1D271F]">
                                            আজকের দাম
                                        </p>

                                        <p className="text-xl font-bold text-[#1D271F]">
                                            {data.today} টাকা
                                        </p>
                                    </div>

                                    {

                                        data.change.dir === "up" ? <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-red-500 font-semibold">
                                            ▲ {data.change.pct}%
                                        </span> : data.change.dir === "down" ? <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1A9951] font-semibold">
                                            ▼ {data.change.pct}%
                                        </span> : <span className="rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1D271F] font-semibold">
                                            {data.change.pct}%
                                        </span>
                                    }
                                </div>
                            </div>

                        )
                    }
                </div>


            </div>


        </div>
    )
}

export default PriceUp