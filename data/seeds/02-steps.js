
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { step_number: 1, recipe_id: 1, instruction: "Boil water to cook pasta"},
    { step_number: 2, recipe_id: 1, instruction: "Drain pasta out"},
    { step_number: 3, recipe_id: 1, instruction: "Add tomato sauce and serve"},
    { step_number: 1, recipe_id: 2, instruction: "Put noodle inside"},
    { step_number: 2, recipe_id: 2, instruction: "Add beef and veggie"},
    { step_number: 1, recipe_id: 3, instruction: "Put noodle inside"},
    { step_number: 2, recipe_id: 3, instruction: "Add beef and veggie"},
    { step_number: 1, recipe_id: 4, instruction: "Put noodle inside"},
    { step_number: 2, recipe_id: 4, instruction: "Add chicken and veggie"},
    { step_number: 1, recipe_id: 5, instruction: "Put noodle inside"},
    { step_number: 2, recipe_id: 5, instruction: "Add pork"}
  ])
};
