"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";

const SignInandSignUP = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);

    const firstLetter =
        user?.name?.charAt(0).toUpperCase() || "U";

    const handlelogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                },
            },
        });
    };

    return (
        <div className="flex items-center gap-5">
            {user?.name ? (
                <div className="relative">

                    {/* Profile Button */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-gray-50"
                    >
                        {/* Avatar */}
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#e9f3ed]">
                            {user?.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <span className="text-xl font-semibold text-[#05893E]">
                                    {firstLetter}
                                </span>
                            )}
                        </div>

                        {/* Name */}
                        <span className="text-lg font-medium tracking-[-0.5px] text-[#18221b]">
                            {user.name.split(" ")[0]}
                        </span>

                        {/* Arrow */}
                        <FiChevronDown
                            size={18}
                            strokeWidth={2.5}
                            className={`text-[#737a75] transition-transform ${
                                open ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {/* Profile Info Dropdown */}
                    {open && (
                        <div className="absolute right-0 top-[62px] z-50 w-[330px] rounded-2xl border border-[#dfe5df] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">

                            {/* User Info */}
                            <div className="border-b border-[#e5e9e5] pb-4">
                                <h2 className="text-xl font-semibold text-[#202824]">
                                    {user.name}
                                </h2>

                                <p className="mt-1 text-sm text-[#737b75]">
                                    {user.email}
                                </p>
                            </div>

                            {/* My Profile */}
                           <Link href="/profile">
                            <div
                               
                                onClick={() => setOpen(false)}
                                className="mt-3 flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-medium text-[#202824] transition hover:bg-[#f3f7f3]"
                            >
                                <FiUser
                                    size={19}
                                    className="text-[#05893E]"
                                />

                                <span>
                                    আমার প্রোফাইল
                                </span>
                            </div>
                           </Link>

                            {/* Logout */}
                            <button
                                type="button"
                                onClick={handlelogout}
                                className="mt-1 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-medium text-red-600 transition hover:bg-red-50"
                            >
                                <FiLogOut size={19} />

                                <span>
                                    সাইন আউট
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <Link
                        href="/sign-in"
                        className="text-sm font-semibold text-[#1D271F]"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="rounded-lg bg-[#05893E] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#047b38]"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SignInandSignUP;