
import Link from "next/link";

interface DatType {
    id: number;
    categoryIcon: string;
    nameBn: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}

const PriceUp = async () => {
    const getdata = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    const data: DatType[] = await getdata.json();

    const Updatda = data
        .filter((up) => up.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    const downdatda = data
        .filter((down) => down.change.dir === "down")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <div className="w-full min-w-0 px-4 sm:px-0">
            {/* UP data */}
            <div className="my-8">
                <h2 className="mb-4 text-[20px] font-bold text-[#1D271F]">
                    <span className="text-red-500">▲</span> আজ দাম বেড়েছে
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Updatda.map((updata) => (
                        <Link
                            href={`/productdetilse/${updata.id}`}
                            key={updata.id}
                            className="min-w-0"
                        >
                            <div className="h-full rounded-xl border border-gray-200 bg-[#FAFCFA] p-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl">
                                        {updata.categoryIcon}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-[16px] font-semibold text-[#1D271F] break-words">
                                            {updata.nameBn}
                                        </h3>

                                        <p className="text-[12px] text-[#1D271F]">
                                            প্রতি {updata.unit}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-end justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-[12px] text-[#1D271F]">
                                            আজকের দাম
                                        </p>

                                        <p className="text-xl font-bold text-[#1D271F]">
                                            {updata.today} টাকা
                                        </p>
                                    </div>

                                    <span className="shrink-0 rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-red-500 font-semibold">
                                        ▲ {updata.change.pct}%
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* down data */}
            <div className="my-8">
                <h2 className="mb-4 text-[20px] font-bold text-[#1D271F]">
                    <span className="text-[#1A9951]">▼</span> আজ দাম কমেছে
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {downdatda.map((item) => (
                        <Link
                            href={`/productdetilse/${item.id}`}
                            key={item.id}
                            className="min-w-0"
                        >
                            <div className="h-full rounded-xl border border-gray-200 bg-[#FAFCFA] p-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl">
                                        {item.categoryIcon}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-[16px] font-semibold text-[#1D271F] break-words">
                                            {item.nameBn}
                                        </h3>

                                        <p className="text-[12px] text-[#1D271F]">
                                            প্রতি {item.unit}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-end justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-[12px] text-[#1D271F]">
                                            আজকের দাম
                                        </p>

                                        <p className="text-xl font-bold text-[#1D271F]">
                                            {item.today} টাকা
                                        </p>
                                    </div>

                                    <span className="shrink-0 rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1A9951] font-semibold">
                                        ▼ {item.change.pct}%
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* সব পণ্য */}
            <div className="mb-15">
                <div className="my-8">
                    <h2 className="mb-3 text-[20px] font-bold text-[#1D271F]">
                        সব পণ্য
                    </h2>

                    <p className="text-[#1D271F] text-sm">
                        মোট <span>{data.length}</span>টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.map((item) => (
                        <Link
                            href={`/productdetilse/${item.id}`}
                            key={item.id}
                            className="min-w-0"
                        >
                            <div className="h-full rounded-xl border border-gray-200 bg-[#FAFCFA] p-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl">
                                        {item.categoryIcon}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-[16px] font-semibold text-[#1D271F] break-words">
                                            {item.nameBn}
                                        </h3>

                                        <p className="text-[12px] text-[#1D271F]">
                                            প্রতি {item.unit}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-end justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-[12px] text-[#1D271F]">
                                            আজকের দাম
                                        </p>

                                        <p className="text-xl font-bold text-[#1D271F]">
                                            {item.today} টাকা
                                        </p>
                                    </div>

                                    {item.change.dir === "up" ? (
                                        <span className="shrink-0 rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-red-500 font-semibold">
                                            ▲ {item.change.pct}%
                                        </span>
                                    ) : item.change.dir === "down" ? (
                                        <span className="shrink-0 rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1A9951] font-semibold">
                                            ▼ {item.change.pct}%
                                        </span>
                                    ) : (
                                        <span className="shrink-0 rounded-full bg-[#F1F7F2] px-2 py-1 text-[12px] text-[#1D271F] font-semibold">
                                            {item.change.pct}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PriceUp;

