const express = require("express");
const app = express();
const PORT = 4001;

//routes:
app.get("/", (req, res) => {
  console.log("Hello, Jerry");
  res.send("Hello, Newman");
});

//middleware:
const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

//listener:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});
