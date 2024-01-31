const express = require("express");
const app = express();
app.use("/users", require("./users/index"));
app.listen(7302, () => {
  console.log("application is runnning");
});
