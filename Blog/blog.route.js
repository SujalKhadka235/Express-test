const express = require("express");
const router = express.Router();
const blogController = require("./blog.controller");
router.post("/data", async (req, res, next) => {
  try {
    res.json({ msg: "This is route server" });
    const data = req.body;
    console.log({ data });
    const result = await blogController.create(data);
    res.json({ msg: `${result}` });
  } catch (e) {
    throw e;
  }
});
router.get("/data", (req, res, next) => {
  try {
    res.json({ msg: "Welcome to route server" });
  } catch (e) {}
});
module.exports = router;
