const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use("/contact", require("./Contact/contact"));
app.use("/home", require("./Home/Home"));
app.use("/login", require("./login/login"));
app.use("/users", require("./Users/users"));
app.listen(8000, () => {
  console.log("application is running");
});
mongoose.connect("mongodb://localhost:27017/blog-app").then(() => {
  console.log("Database is connnected");
});
