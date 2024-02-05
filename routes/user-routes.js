const router = require("express").Router();
const userController = require("../controllers/user-controller");
const knex = require("knex")(require("../knexfile"));

router.route("/").get(userController.index);
router.route("/:id").get(userController.findOne);

router.get("/:id/workouts", async (req, res) => {
  try {
    const data = await knex("workouts").where("user_id", req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving workouts: ${err}`);
  }
});

module.exports = router;
