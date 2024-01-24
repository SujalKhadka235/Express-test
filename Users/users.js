const express = require("express");
const router = express.Router();
const fs = require("fs");
router.get("/", (req, res) => {
  res.json({ msg: "this is the users section" });
});
router.get("/details", (req, res) => {
  fs.readFile("./Users/usersapi.json", "utf-8", (err, data) => {
    res.end(data);
  });
});
router.post("/details", async (req, res) => {
  const currentJSONData = await fs.readFileSync(
    "./Users/usersapi.json",
    "utf8"
  );
  const currentData = JSON.parse(currentJSONData);
  currentData.test = req.body.name;
  res.json({ currentData });
});

router.patch("/details", (req, res) => {
  console.log(req);
});
router.delete("/delete", (req, res) => {
  console.log(req);
});
module.exports = router;
//write a js function which converrts numbers into proper format
//eg 10000=>10,000
//eg
