const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#F0F5F0]">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#05893E] shadow-lg animate-pulse">
          <span className="text-3xl">🛒</span>
        </div>

        {/* Brand */}
        <h2 className="text-2xl font-bold text-[#1D271F]">
          বাজার দর
        </h2>

        <p className="mt-1 text-sm text-gray-500">
            তথ্য লোড হচ্ছে...
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