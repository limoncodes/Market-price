
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryType {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Categoryactive = ({
    category,
}: {
    category: CategoryType;
}) => {
    const pathname = usePathname();

    const isActive = pathname === `/category/${category.id}`;

    return (
        <Link
            href={`/category/${category.id}`}
            className="block shrink-0"
        >
            <div
                className={`flex items-center gap-1 px-3 py-2 rounded-md whitespace-nowrap ${
                    isActive
                        ? "text-green-600 bg-green-100"
                        : "text-gray-700"
                }`}
            >
                <span>{category.icon}</span>

                <h2 className="text-sm font-semibold">
                    {category.nameBn}
                </h2>
            </div>
        </Link>
    );
};

export default Categoryactive;

