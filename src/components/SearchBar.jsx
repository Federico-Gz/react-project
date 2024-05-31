import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/SearchBar.css';
import Cards from './Cards';
import Navbar from './Navbar';
import searchRecipeDetails from '../sources/searchRecipeDetails'; // Assicurati di importare correttamente la funzione

const API_KEY = '606d52674f8348099bad0a61f8fa8ad7';

function SearchBar() {
    const [recipes, setRecipes] = useState([]);
    const [ingredient, setIngredient] = useState("");
    const [offset, setOffset] = useState(0);
    const [noRecipes, setNoRecipes] = useState(false);
    

    const getRecipes = async (newSearch = false) => {
        

        try {
            const response = await axios.get(
                "https://api.spoonacular.com/recipes/complexSearch",
                {
                    params: {
                        query: ingredient,
                        apiKey: API_KEY,
                        number: 8, 
                        offset: newSearch ? 0 : offset,
                    },
                }
            );


            const data = response.data;

            if (data.results.length === 0) {
                setNoRecipes(true);
            } else {
                setNoRecipes(false);
            }

            setRecipes((prevRecipes) => newSearch ? data.results : [...prevRecipes, ...data.results]);
            setOffset((prevOffset) => newSearch ? 10 : prevOffset + 10);
            console.log(data.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleChange = (event) => {
        setIngredient(event.target.value);
    };

    const handleButtonClick = () => {
        getRecipes(true);
    };

    const handleLoadMoreClick = () => {
        getRecipes();
    };

    return (
        <>
        <Navbar />
        <div className="search-bar">
            <input
                className="search-input"
                placeholder="Search by Ingredients"
                value={ingredient}
                onChange={handleChange}
            />
            <button className="search-button load-more-btn" onClick={handleButtonClick}>
                Go!
            </button>
            {noRecipes && (
                <div className="no-recipes-alert">
                    <img src="/public/images/ops.gif" />
                    <p>No recipes founded</p>
                </div>
            )}
            <Cards recipes={recipes}  searchRecipeDetails={searchRecipeDetails} />
            {recipes.length > 0 && (
                <button className="load-more-btn" onClick={handleLoadMoreClick}>
                    Load More
                </button>
            )}
        </div>
        </>
    );
}

export default SearchBar;
