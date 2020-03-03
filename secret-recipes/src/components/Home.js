import React from 'react'
import {Link} from 'react-router-dom'
import RecipeCard from './RecipeCard'

const Home = () => {
    const allRecipes = ['Recipe 1', 'Recipe 2', 'Recipe 3', 'Recipe 4', 'Recipe 5', 'Recipe 6']
    return (
        <div>
            <Link to='/'>All Recipes</Link>
            <Link to='/user-recipes'>Recipes by Author</Link>
            <Link to='/add'>Add Recipe</Link>
            <div className='recipe-container'>
                {allRecipes.map(recipe => {
                    return <RecipeCard recipe={recipe} />
                })}
            </div>
        </div>
    )
}

export default Home