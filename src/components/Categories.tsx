
interface CategoryType {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;

}

const Categories = async () => {
    const getdata = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', {
        next: {
            revalidate: 60
        }



    })
    const data = await getdata.json()


    return (
        <div className="border-t-2 border-b-2 border-[#E1E8E1] bg-[#FAFCFA] ">
            <div className="container mx-auto p-4 flex items-center gap-8">
                {

                    data.map((category: CategoryType) => <div key={category.id}>
                        <div className="flex items-center gap-1 ">
                            <span>{category.icon}</span>
                            <h2 className="text-sm font-semibold">{category.nameBn}</h2>
                        </div>


                    </div>)

                }
            </div>
            
        </div>
    )
}

export default Categories