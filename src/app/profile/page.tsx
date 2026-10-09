
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState(user?.name || "");

    useEffect(() => {
        setName(user?.name || "");
    }, [user?.name]);

    const firstLetter =
        user?.name?.charAt(0).toUpperCase() || "U";

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                },
            },
        });
    };

    const handleUpdate = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        await authClient.updateUser({
            name: name,
        });

        console.log("Updated name:", name);
        toast.success("নাম সফলভাবে আপডেট হয়েছে");
    };

    if (!user) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center bg-[#F0F5F0] px-4">
                <p className="text-sm text-[#68716b]">
                    প্রোফাইল লোড হচ্ছে...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F0F5F0] px-4 py-6 sm:px-6 sm:py-8">

            <div className="mx-auto w-full max-w-[528px]">

                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-xl sm:text-2xl font-bold leading-tight text-[#202824]">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-1 text-sm text-[#727a74]">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User Card */}
                <div className="flex flex-col gap-4 rounded-[11px] border border-[#dfe5df] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* User Info */}
                    <div className="flex min-w-0 items-center gap-3">

                        {/* Avatar */}
                        <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#e9f3ed]">

                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || "User"}
                                    fill
                                    sizes="50px"
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-xl font-semibold text-[#05893E]">
                                    {firstLetter}
                                </span>
                            )}

                        </div>

                        {/* Name + Email */}
                        <div className="min-w-0 flex-1">
                            <h2 className="break-words text-sm sm:text-[15px] font-semibold text-[#202824]">
                                {user.name}
                            </h2>

                            <p className="mt-0.5 break-all text-[11px] sm:text-xs text-[#737b75]">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    {/* Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex h-9 w-full shrink-0 items-center justify-center gap-1.5 rounded-md border border-red-400 px-3 text-xs font-medium text-red-500 transition hover:bg-red-50 sm:h-[30px] sm:w-auto sm:text-[11px]"
                    >
                        <FiLogOut size={13} />
                        <span>সাইন আউট</span>
                    </button>
                </div>

                {/* Information Card */}
                <div className="mt-4 rounded-[11px] border border-[#dfe5df] bg-white px-4 py-4">

                    {/* Card Title */}
                    <h2 className="mb-6 sm:mb-7 text-[13px] font-semibold text-[#202824]">
                        তথ্য
                    </h2>

                    <form onSubmit={handleUpdate}>

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-xs sm:text-[11px] font-medium text-[#4d554f]"
                            >
                                নাম
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-10 sm:h-[30px] w-full rounded-md border border-[#dce3dc] bg-white px-3 text-sm sm:text-[11px] text-[#202824] outline-none transition focus:border-[#07933e] focus:ring-2 focus:ring-[#07933e]/10"
                            />
                        </div>

                        {/* Update Button */}
                        <button
                            type="submit"
                            className="mt-3 h-10 sm:h-[30px] w-full cursor-pointer rounded-md bg-[#07933e] text-xs sm:text-[11px] font-medium text-white shadow-[0_2px_3px_rgba(0,115,47,0.25)] transition hover:bg-[#078539]"
                        >
                            আপডেট
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Profile;

