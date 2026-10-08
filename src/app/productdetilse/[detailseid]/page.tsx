import { DataType } from "@/app/type";
import { notFound } from "next/navigation";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ detailseid: string }>;
}) => {
  const { detailseid } = await params;

  const getdata = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${detailseid}`,
    {
      cache: "no-store",
    }
  );

  // Product না পাওয়া গেলে not-found page দেখাবে
  if (!getdata.ok) {
    notFound();
  }

  const data: DataType = await getdata.json();

  console.log(data);

  // সর্বনিম্ন দাম
  const minimumPrice = Math.min(
    ...data.markets.map((item) => item.min)
  );

  // সর্বাধিক দাম
  const maximumPrice = Math.max(
    ...data.markets.map((item) => item.max)
  );

  // সব বাজারের গড় দাম
  const averagePrice = Math.round(
    data.markets.reduce(
      (total, item) => total + (item.min + item.max) / 2,
      0
    ) / data.markets.length
  );

  return (
    <div className="min-h-screen p-6">

      {/* Product Header */}
      <div className="max-w-5xl mx-auto bg-[#FAFCFA] border-none shadow rounded-2xl p-5 flex justify-between">

        <div className="flex gap-4 items-center">

          {/* Icon */}
          <div className="w-16 h-16 bg-[#f1f6f1] rounded-xl flex items-center justify-center text-3xl">
            {data.categoryIcon}
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {data.nameBn}
            </h1>

            <p className="text-sm text-gray-500">
              প্রতি {data.unit} দাম
            </p>

            <p className="text-xs mt-1 text-gray-500">
              গতকালের তুলনায় দাম{" "}
              {data.change.dir === "up" ? "বেড়েছে" : "কমেছে"} -{" "}
              {Math.abs(data.change.pct)}%
            </p>
          </div>

        </div>

        {/* Today Price */}
        <div className="bg-[#f1f6f1] rounded-xl px-6 py-3 text-right">

          <p className="text-xs text-gray-500">
            আজকের দাম
          </p>

          <h2 className="text-2xl font-bold">
            {data.today}
          </h2>

          <p className="text-xs text-gray-500">
            টাকা / {data.unit}
          </p>

          <p
            className={`text-xs ${data.change.dir === "up"
                ? "text-red-500"
                : "text-green-600"
              }`}
          >
            {data.change.dir === "up" ? "▲" : "▼"}{" "}
            {Math.abs(data.change.pct)}%
          </p>

        </div>

      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto bg-[#FAFCFA] rounded-2xl p-5 mt-5">

        {/* Summary */}
        <h2 className="font-bold mb-3">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-3 gap-3">

          {/* Minimum */}
          <div className="border border-[#E1E8E1] shadow rounded-xl p-4">

            <p className="text-xs text-gray-500">
              সর্বনিম্ন দাম
            </p>

            <h2 className="text-xl font-bold text-green-600">
              {minimumPrice} টাকা
            </h2>

            <p className="text-xs text-gray-500">
              সবচেয়ে কম দামের বাজার
            </p>

          </div>

          {/* Maximum */}
          <div className="border border-[#E1E8E1] shadow rounded-xl p-4">

            <p className="text-xs text-gray-500">
              সর্বাধিক দাম
            </p>

            <h2 className="text-xl font-bold text-red-500">
              {maximumPrice} টাকা
            </h2>

            <p className="text-xs text-gray-500">
              সবচেয়ে বেশি দামের বাজার
            </p>

          </div>

          {/* Average */}
          <div className="border border-[#E1E8E1] shadow rounded-xl p-4">

            <p className="text-xs text-gray-500">
              গড় দাম
            </p>

            <h2 className="text-xl font-bold text-green-600">
              {averagePrice} টাকা
            </h2>

            <p className="text-xs text-gray-500">
              প্রতি {data.unit}-এর হিসাবে
            </p>

          </div>

        </div>

        {/* Market */}
        <h2 className="font-bold mt-6 mb-3">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="border border-[#E1E8E1] shadow rounded-xl overflow-hidden">

          <table className="w-full">

            <thead>

              <tr className="border-b border-[#E1E8E1] text-left text-sm text-gray-500">

                <th className="p-3">
                  বাজার
                </th>

                <th className="p-3">
                  বিভাগ
                </th>

                <th className="p-3">
                  সর্বনিম্ন
                </th>

                <th className="p-3">
                  সর্বাধিক
                </th>

                <th className="p-3 text-right">
                  গড়
                </th>

              </tr>

            </thead>

            <tbody>

              {data.markets.map((item, index) => (

                <tr
                  key={index}
                  className="border-b border-[#E1E8E1]"
                >

                  <td className="p-3">
                    {item.market}
                  </td>

                  <td className="p-3">
                    {item.division}
                  </td>

                  <td className="p-3">
                    {item.min} টাকা
                  </td>

                  <td className="p-3">
                    {item.max} টাকা
                  </td>

                  <td className="p-3 text-right font-semibold">
                    {Math.round(
                      (item.min + item.max) / 2
                    )} টাকা
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;