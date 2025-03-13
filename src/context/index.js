import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailData, setRecipeDetailData] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false);
                setSearchParam('');
                navigate('/')
            }

        } catch(e) {
            console.log(e);
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFavorite(getCurrentItem) {
        const exists = favoriteList.some(item => item.id === getCurrentItem.id);
    
        if (exists) {
            setFavoriteList(favoriteList.filter(item => item.id !== getCurrentItem.id));
        } else {
            setFavoriteList([...favoriteList, getCurrentItem]);
        }

    }




    return <GlobalContext.Provider value={{searchParam, loading, recipeList, setSearchParam, handleSubmit, recipeDetailData, setRecipeDetailData, handleAddToFavorite, favoriteList}}>
        {children}
    </GlobalContext.Provider>
}