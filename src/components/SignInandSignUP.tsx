
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
                    setOpen(false);
                    router.push("/sign-in");
                },
            },
        });
    };

    return (
        <div className="flex w-full min-w-0 items-center justify-end gap-2 sm:w-auto sm:gap-5">
            {user?.name ? (
                <div className="relative min-w-0">
                    {/* Profile Button */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-label="Profile menu"
                        className="flex max-w-full cursor-pointer items-center justify-end gap-2 rounded-xl px-1.5 py-1 transition hover:bg-gray-50 sm:gap-3 sm:px-2"
                    >
                        {/* Avatar */}
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#e9f3ed] sm:h-12 sm:w-12">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    sizes="(max-width: 640px) 40px, 48px"
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <span className="text-lg font-semibold text-[#05893E] sm:text-xl">
                                    {firstLetter}
                                </span>
                            )}
                        </div>

                        {/* Name */}
                        <span className="max-w-[100px] truncate text-base font-medium tracking-[-0.5px] text-[#18221b] sm:max-w-none sm:text-lg">
                            {user.name.split(" ")[0]}
                        </span>

                        {/* Arrow */}
                        <FiChevronDown
                            size={18}
                            strokeWidth={2.5}
                            className={`shrink-0 text-[#737a75] transition-transform ${
                                open ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {/* Profile Dropdown */}
                    {open && (
                        <div className="absolute right-0 top-[calc(100%+10px)] z-[100] w-[min(330px,calc(100vw-24px))] rounded-2xl border border-[#dfe5df] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-5">
                            {/* User Info */}
                            <div className="min-w-0 border-b border-[#e5e9e5] pb-4">
                                <h2 className="break-words text-lg font-semibold text-[#202824] sm:text-xl">
                                    {user.name}
                                </h2>

                                <p className="mt-1 break-all text-sm text-[#737b75]">
                                    {user.email}
                                </p>
                            </div>

                            {/* My Profile */}
                            <Link
                                href="/profile"
                                onClick={() => setOpen(false)}
                                className="mt-3 flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#202824] transition hover:bg-[#f3f7f3] sm:text-[15px]"
                            >
                                <FiUser
                                    size={19}
                                    className="shrink-0 text-[#05893E]"
                                />

                                <span>আমার প্রোফাইল</span>
                            </Link>

                            {/* Logout */}
                            <button
                                type="button"
                                onClick={handlelogout}
                                className="mt-1 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50 sm:text-[15px]"
                            >
                                <FiLogOut
                                    size={19}
                                    className="shrink-0"
                                />

                                <span>সাইন আউট</span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:gap-4">
                    <Link
                        href="/sign-in"
                        className="whitespace-nowrap text-sm font-semibold text-[#1D271F]"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="whitespace-nowrap rounded-lg bg-[#05893E] px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#047b38] sm:px-4"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SignInandSignUP;
