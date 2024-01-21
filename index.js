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
  res.send("hello worldddddd");
});
// app.get("/:a/:b", (req, res) => {
//   const num1 = Number(req.params.a);
//   const num2 = Number(req.params.b);
//   res.json({ msg: `the sum is ${num1 + num2}` });
// });
//destrcture method
app.get("/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const c = Number(a) + Number(b);
  res.json({ msg: `the sum is ${c}` });
});
//write a express get method to pass default parameter in the first GET
app.listen(7700);
//get=>server to fe
//put->fe to server;fix majority of data
//post-front end to server
//patch-appends one data in server
//delete-deletes one data from server
