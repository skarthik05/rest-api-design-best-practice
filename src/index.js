const express = require("express");

const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Router);
// For testing purposes
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, () => {
  console.log(`API is listening on port : ${PORT}`);
});
