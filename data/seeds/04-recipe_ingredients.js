
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { recipes_id: 1, ingredients_id: 1, quantity: 10},
    { recipes_id: 1, ingredients_id: 8, quantity: 2.5},
    { recipes_id: 2, ingredients_id: 2, quantity: 4.5},
    { recipes_id: 2, ingredients_id: 5, quantity: 2},
    { recipes_id: 2, ingredients_id: 9, quantity: 1.8},
    { recipes_id: 3, ingredients_id: 5, quantity: 7.8},
    { recipes_id: 3, ingredients_id: 6, quantity: 3.5},
    { recipes_id: 4, ingredients_id: 2, quantity: 2.5},
    { recipes_id: 4, ingredients_id: 6, quantity: 1},
    { recipes_id: 5, ingredients_id: 9, quantity: 6},
    { recipes_id: 5, ingredients_id: 6, quantity: 3.65},
  ])
};
