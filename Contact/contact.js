const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ msg: "this is the contact page" });
});
router.get("/aboutus", (req, res) => {
  res.json({ msg: "this is the about us section" });
});
module.exports = router;
