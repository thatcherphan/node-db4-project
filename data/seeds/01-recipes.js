
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: "Spaghetti" },
    { recipe_name: "Bun bo hue" },
    { recipe_name: "Pho" },
    { recipe_name: "Mien ga"},
    { recipe_name: "Banh canh gio heo"}
  ]);
};
