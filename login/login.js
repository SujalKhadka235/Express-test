const express = require("express");
const router = express.Router();
const numberformatter = require("../utils/numberformatter");
router.get("/", (req, res) => {
  res.json({ msg: "This is the login page" });
});
module.exports = router;
router.post("/:n", (req, res) => {
  res.json({ msg: `${numberformatter.fixNumber(req.params.n)}` });
});
