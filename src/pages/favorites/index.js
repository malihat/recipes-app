import RecipeItem from "../../components/recipe-item";
import { useContext } from "react";
import {GlobalContext} from "../../context";

function Favorites() {
  const {favoriteList } = useContext(GlobalContext)

  return (

  <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ?     
      favoriteList.map((recipe, index) => <RecipeItem key={index} recipe={recipe} />)
      : <div>
          <p className="lag:text-4xl text-xl text-center">Nothing is added in favorites</p>
          </div>}
  </div>
)
}

export default Favorites