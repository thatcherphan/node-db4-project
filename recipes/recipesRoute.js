const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Working")
    res.status(200).json({message: "running!"})
})

module.exports = router;