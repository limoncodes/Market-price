
import Link from "next/link";
import Marquee from "react-fast-marquee";

interface MarqueeType {
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

const SingleCategory = async () => {
    const getdata = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    const data: MarqueeType[] = await getdata.json();

    return (
        <div className="w-full min-w-0 overflow-hidden bg-[#FAFCFA] shadow-md p-2">
            <Marquee speed={80}>
                {data.map((marquee) => (
                    <Link
                        href={`/productdetilse/${marquee.id}`}
                        key={marquee.id}
                        className="shrink-0"
                    >
                        <div className="flex items-center gap-1.5 px-3 sm:px-5 py-1 border-r border-[#E5E7EB] whitespace-nowrap">
                            <h3 className="text-sm">
                                {marquee.categoryIcon}
                            </h3>

                            <h2 className="text-[15px] text-[#252B27]">
                                {marquee.nameBn}
                            </h2>

                            <p className="text-[15px] text-[#252B27]">
                                {marquee.today} টাকা/{marquee.unit}
                            </p>

                            {marquee.change.dir === "up" ? (
                                <span className="text-[#D03739] font-semibold text-sm">
                                    ▲ {marquee.change.pct}%
                                </span>
                            ) : (
                                <span className="text-[#1A9951] font-semibold text-sm">
                                    ▼ {marquee.change.pct}%
                                </span>
                            )}
                        </div>
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default SingleCategory;

