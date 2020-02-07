const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList() {
    return db('recipes as r')
        .join('recipes_ingredients as ri', 'r.id', 'ri.recipes_id')
        .join('ingredients as i', 'i.id', 'ri.ingredients_id')
        .select('r.recipe_name as recipe', 'i.ingredient_name as ingredient', 'ri.quantity')
        //.where('r.id' = 'ri.recipes_id')
}

function getInstructions(recipe_id) {
    const id = recipe_id;
    return db('recipes as r')
      .join('steps as s', 'r.id', 's.recipe_id')
      .select('r.name', 's.step_number', 's.instructions')
      .where({"r.id": id})
      .orderBy('s.step_number');
  };
