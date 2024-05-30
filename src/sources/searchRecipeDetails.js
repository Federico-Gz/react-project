async function searchRecipeDetails(id) {
    const apiKey = '606d52674f8348099bad0a61f8fa8ad7';
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/card?apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch recipe details');
        }
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        throw error;
    }
}

export default searchRecipeDetails;
