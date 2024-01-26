//create an express application in which create a route called users and print all the requests body,params and query.connect this with postman
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "hello this is the first page" });
});
app.use("/users", require("./Users/users"));
app.use((err, req, res, next) => {
  const errmsg = err ? err.toString() : "something went wrong";
  res.status(500).json({ msg: errmsg });
});
app.listen(6002, () => {
  console.log("application is running at port 6000");
});
