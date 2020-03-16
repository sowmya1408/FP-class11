exports.up = function(knex) {
  return knex.schema.createTable('crops', function(table) {
    table.increments('id');
    table.varchar('name', 255).notNullable();
    table.varchar('plant_variety', 255).notNullable();
    table.integer('fk_user_id').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('created_at').notNullable();
    table.timestamp('deleted_at').notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('crops');
};
