import React, {useState} from 'react'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        id: Date.now(),
        author: '',
        title: '',
        ingredients: [],
        directions: '',
        category: ''
    })

    const handleChange = (e) => {
        setRecipe({...recipe, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        setRecipe({
            id: Date.now(),
            author: '',
            title: '',
            ingredients: '',
            directions: '',
            category: ''
        })
    }

    const authorList = ['abc', 'xyz', 'random']
    const categoryList = ['Lunch', 'Dinner', 'Breakfast']

    return (
        <div>
            <h2>Add a Recipe</h2>
            <form>
                <InputLabel id='author-label'>Author</InputLabel>
                <Select required labelId='author-label' id='author' name='author' value={recipe.author} onChange={handleChange}>
                    {authorList.map(author => {
                        return <MenuItem value={author}>{author}</MenuItem>
                    })}
                </Select><br />
                <TextField required label='Title' id='title' name='title' value={recipe.title} onChange={handleChange} /><br />
                <TextField required label='Ingredients' id='ingredients' name='ingredients' value={recipe.ingredients} onChange={handleChange} /><br />
                <TextField multiline required label='Directions' id='directions' name='directions' value={recipe.directions} onChange={handleChange} /><br />
                <InputLabel id='category-label'>Category</InputLabel>
                <Select required labelId='category-label' id='category' name='category' value={recipe.category} onChange={handleChange}>
                    {categoryList.map(category => {
                        return <MenuItem value={category}>{category}</MenuItem>
                    })}
                </Select><br /><br />
                <Button type='submit' variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    )
}

export default AddRecipe