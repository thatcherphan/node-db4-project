const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error retrieving recipes"})
        })
})

router.get('/shoppinglist', (req, res) => {
    Recipes.getShoppingList()
        .then(ingredient => {
            res.status(200).json(ingredient)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error retrieving ingredients"})
        })
})

module.exports = router;