import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

function Home() {
    const {recipeList, loading} = useContext(GlobalContext)

    return (

    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ?     
        recipeList.map((recipe, index) => <RecipeItem key={index} recipe={recipe} />)
        : <div>
            <p className="lag:text-4xl text-xl text-center">Nothing to show.. Please search something else</p>
            </div>}
    </div>
  )
}

export default Home;