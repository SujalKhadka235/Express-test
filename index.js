const express = require("express");
const app = express();
// //printing hello world
// app.get("/", (req, res) => {
//   res.json({ msg: "Hello World" });
// });
// app.listen(8000, () => {
//   console.log("application is running");
// });
console.log("h");
app.get("/", (req, res) => {
  console.log("code is running");
  res.download("");
});
app.listen(7500);
