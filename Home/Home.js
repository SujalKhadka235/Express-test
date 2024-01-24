const express = require("express");
const router = express.Router();
// //printing hello world
//router1
// router.post("/", (req, res) => {
//   console.log(req.body);
//   console.log(req.query);
//   console.log(req.params);
// });
router.get("/", (req, res) => {
  res.json({ msg: "welcome to home" });
});

router.get("/:a/:b", (req, res) => {
  const num1 = Number(req.params.a);
  const num2 = Number(req.params.b);
  res.json({ msg: `the sum is ${num1 + num2}` });
});

//get=>server to fe
//put->fe to server;fix majority of data
//post-front end to server
//patch-appends one data in server
//delete-deletes one data from server
module.exports = router;
