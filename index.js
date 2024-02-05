const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const cors = require("cors");

const userRoutes = require("./routes/user-routes");
app.use(cors());

app.use("/users", userRoutes);
app.use("/workouts", userRoutes);

app.post("/signup", (req, res) => {
  res.status(404).send("Successfully added new user");
});

app.listen(PORT, () => {
  console.log(`Habitrack app listening on port ${PORT}`);
});
