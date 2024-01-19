const express = require("express");
const app = express();
//printing hello world
app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});
app.listen(8000, () => {
  console.log("application is running");
});
