const express = require("express");
const upper = require("../uppercase");
const router = express.Router();
router.get("/", (req, res, next) => {
  try {
    const { name } = req.query;
    console.log(name);
    if (!name) throw new Error("Data is missing");
    const final = upper.uppercase(name);
    res.json({ msg: `${final}` });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
