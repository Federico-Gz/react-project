import {React, useState} from 'react';
import '../assets/css/Cards.css';

function Cards({ recipes, searchRecipeDetails }) {

    const [loading, setLoading] = useState(false);

    const handleCardClick = async (id) => {
        setLoading(true); // Set loading to true before the API call
        try {
            const url = await searchRecipeDetails(id);
            window.open(url, '_blank'); // open link in a new schedule
        } catch (error) {
            console.error('Error navigating to recipe details:', error);
        } finally{
            setLoading(false); // Set loading to false after the API call completes
        }
    };

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    return (
        <div className="cards-container">
            {recipes.map((recipe, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(recipe.id) }>
                    <p>{truncateTitle(recipe.title, 30)}</p>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}
            {loading && <img className="loading" src="/public/images/loading.gif"/>}
        </div>
    );
}

export default Cards;
