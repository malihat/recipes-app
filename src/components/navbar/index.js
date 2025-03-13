import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../context"

function Navbar() {
  const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);


  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap lg-gap-0">
        <h2 className="text-2xl font-semibold">
            <ul>
                <li><NavLink to={'/'} className="text-black hover:text-gray-700 duration-300"> 
                    Food Recipes 
                    </NavLink> 
                </li>
            </ul>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" 
                   placeholder="Enter text.."
                   className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"  
                   value={searchParam}
                   onChange={e => setSearchParam(e.target.value)}
            />
        </form>
        <ul className="flex gap-5">
            <li><NavLink to={'/'} className="text-black hover:text-gray-700 duration-300"> Home </NavLink> </li>
            <li><NavLink to={'/favorites'} className="text-black hover:text-gray-700 duration-300"> Favorites </NavLink> </li>
            {/* <li><NavLink to={'/details'} className="text-black hover:text-gray-700 duration-300"> Details </NavLink> </li> */}
        </ul>
    </nav>
  )
}

export default Navbar