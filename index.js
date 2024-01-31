const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", (req, res) => {
  res.status(404).send("Successfully added new user");
});

app.listen(port, () => {
  console.log(`Habitrack app listening on port ${port}`);
});
