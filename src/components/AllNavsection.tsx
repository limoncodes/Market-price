import Categories from "./Categories"
import Navbar from "./Navbar"
import SingleCategory from "./SingleCategory"


const AllNavsection = () => {
  return (
    <div className="sticky top-0 z-50 w-full ">
         <Navbar />
        <Categories />
        <SingleCategory />
    </div>
  )
}

export default AllNavsection