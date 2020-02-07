
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
      { ingredient_name: "meatball"},
      { ingredient_name: "beef brisket"},
      { ingredient_name: "onion"},
      { ingredient_name: "shredded chicken"},
      { ingredient_name: "lime"},
      { ingredient_name: "pork"},
      { ingredient_name: "tomato sauce"},
      { ingredient_name: "pasta"},
      { ingredient_name: "noodle"}
  ])
};
