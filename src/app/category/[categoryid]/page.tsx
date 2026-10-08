import ProductList from "@/components/ProductList";


interface CategoryType {
  id: number;
  categoryIcon: string;
  nameBn: string;
  today: number;
  unit: string;
  categoryNameBn: string;
  change: {
    dir: string;
    pct: number;
  };
}

const Category = async ({
  params,
}: {
  params: Promise<{ categoryid: string }>;
}) => {
  const { categoryid } = await params;

  const getdata = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryid}`
  );

  const data: CategoryType[] = await getdata.json();

  // First category data
  const onecategory = data.slice(0, 1);

  return (
    <div className="my-6">

      {/* Banner */}
      {onecategory.map((sdata) => (
        <div
          key={sdata.id}
          className="bg-[#FAFCFA] rounded-2xl p-5"
        >
          <div className="flex items-center gap-1">

            {/* Icon */}
            <div>
              <span className="text-4xl">
                {sdata.categoryIcon}
              </span>
            </div>

            {/* Category Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1D271F]">
                {sdata.categoryNameBn}
              </h2>

              <p className="text-[#1D271F] text-sm">
                {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>

          </div>
        </div>
      ))}

      {/* Sort + Product List */}
      <ProductList data={data} />

    </div>
  );
};

export default Category;