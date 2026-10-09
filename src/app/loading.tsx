
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#F0F5F0] px-4 py-6">
      <div className="flex w-full flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#05893E] shadow-lg animate-pulse">
          <span className="text-2xl sm:text-3xl">🛒</span>
        </div>

        {/* Brand */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#1D271F]">
          বাজার দর
        </h2>

        <p className="mt-2 max-w-full text-xs sm:text-sm text-gray-500">
          বাজারের সর্বশেষ দাম লোড হচ্ছে...
        </p>

        {/* Loading */}
        <div className="mt-6 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#05893E] animate-bounce [animation-delay:-0.3s]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#05893E] animate-bounce [animation-delay:-0.15s]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#05893E] animate-bounce" />
        </div>

      </div>
    </div>
  );
};

export default Loading;

