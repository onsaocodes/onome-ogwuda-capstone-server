const usersData = require("../seed-data/users");
const workoutsData = require("../seed-data/workouts");

exports.seed = async function (knex) {
  await knex("user").del();
  await knex("workouts").del();
  await knex("user").insert(usersData);
  await knex("workouts").insert(workoutsData);
};
