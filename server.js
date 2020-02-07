const express = require('express');

const recipesRoute = require('./recipes/recipesRoute');

const server = express();

server.use(express.json());

 server.use('/api/recipes', recipesRoute);

server.get('/', (req, res) => {
    res.status(200).json({message: "Recipe Book API is running!"})
})

module.exports = server;