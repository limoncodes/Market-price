
const Footer = () => {
    return (
        <div className="bg-[#FAFCFA]">
            <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 py-6 px-4 sm:px-6 lg:px-8">

                <div className="min-w-0">
                    <p className="text-sm text-[#1D271F]">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>
                </div>

                <div className="min-w-0">
                    <p className="text-sm text-[#1D271F]">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;

