import React from 'react';
import Navbar from './Navbar';
import '../assets/css/About.css'

function About(){
    return (
      <>
        <Navbar />
        <div className="about">
          <h1>Welcome to your VeggieRecipesVault!</h1>
          <p>
            Our web app offers you a simple and fast way to find and discover
            delicious recipes. With a wide range of options and a vast selection
            of ingredients, you'll surely find the perfect recipe to suit your
            tastes and culinary preferences.
          </p>
          <h2>How it works:</h2>
          <h3>Search by Ingredients</h3>
          <p>
            Use the search field to enter the ingredients you want to use in
            your recipe. Simply type in the desired ingredients and press the
            Go! button to display a list of matching recipes.
          </p>

          <h3>View Recipes</h3>
          <p>
            Once you've done your search, you can view a variety of recipes that
            match your search criteria. Each recipe is accompanied by an
            enticing image and a captivating title to whet your appetite.
          </p>

          <h3>Explore Recipes</h3>
          <p>
            Scroll through the various recipes to find your favorite. Click on a
            recipe to view its details and discover the step-by-step ingredients
            and instructions to prepare it.
          </p>

          <h3>Load More Recipes</h3>
          <p>
            If you're looking for even more culinary inspiration, you can load
            additional recipes by clicking the "Load More" button. Keep
            exploring until you find the perfect recipe for your next culinary
            creation.
          </p>

          <h2>Have fun cooking!</h2>

        </div>
      </>
    );
};

export default About;