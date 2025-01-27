import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

function Details() {
  const params = useParams();
  const {
    recipeDetailData,
    setRecipeDetailData,
    handleAddToFavorite,
    favoriteList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await response.json();
      console.log("this is data:", data.data);
      if (data?.data) {
        setRecipeDetailData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-black">
          {recipeDetailData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block bg-black text-white"
          >
            {favoriteList.findIndex(
              (item) => item.id === recipeDetailData?.recipe?.id
            ) !== -1
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailData?.recipe?.ingredients.map((ingredient) => (
              <li key={ingredient.id} className="flex items-center gap-2">
                <span className="text-xl font-semibold text-black">
                  {" "}
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-xl font-medium text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;

{
  /* <span className="text-xl font-semibold text-black gap-2"> {ingredient.quantity} {ingredient.unit}</span>
<span className="text-xl font-semibold text-black gap-2">{ingredient.description}</span> */
}
