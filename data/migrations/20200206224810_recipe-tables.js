
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128)
                .notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('instruction', 256)
                .notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128)
                .unique();
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipes_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.float('quantity')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
