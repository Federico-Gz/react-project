// SearchBar.js

import React, { useState } from 'react';
import '../assets/css/SearchBar.css';


function SearchBar() {

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = () => {
        searchRecipes(searchTerm)
            .then((results) => {
                setSearchResults(results); // Imposta i risultati della ricerca nello stato
            })
            .catch((error) => {
                console.error('Errore durante la ricerca:', error);
            });
    };

    return (
        <div className="search-bar">
            <input
                className="search-input"
                placeholder="Search by Ingredients"
                
            />
            <button className="search-button" >
                Go!
            </button>
        </div>
    );
}

export default SearchBar;

