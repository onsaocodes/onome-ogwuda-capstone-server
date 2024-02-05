/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("date_of_birth").notNullable();
      table.string("phone_number").notNullable();
      table.string("email").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("workouts", (table) => {
      table.increments("id").primary();
      table.string("date").notNullable();
      table.string("exercise1_name").notNullable();
      table.string("exercise1_reps").notNullable();
      table.string("exercise1_load").notNullable();
      table.string("exercise2_name").notNullable();
      table.string("exercise2_reps").notNullable();
      table.string("exercise2_load").notNullable();
      table.string("exercise3_name").notNullable();
      table.string("exercise3_reps").notNullable();
      table.string("exercise3_load").notNullable();
      table.string("exercise4_name").notNullable();
      table.string("exercise4_reps").notNullable();
      table.string("exercise4_load").notNullable();
      table.string("exercise5_name").notNullable();
      table.string("exercise5_reps").notNullable();
      table.string("exercise5_load").notNullable();
      table.string("exercise6_name").notNullable();
      table.string("exercise6_reps").notNullable();
      table.string("exercise6_load").notNullable();
      table.integer("likes").notNullable().defaultTo(0);
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("workouts").dropTable("user");
};

knex.schema.alterTable("user", function (table) {
  table.string("password").notNullable();
});
