const express = require("express");
const router = express.Router();
router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    res.json({ msg: "This is users route" });
    console.log(data);
  } catch (e) {
    throw e;
  }
});
module.exports = router;
