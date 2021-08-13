const express = require("express");
const app = express();
const PORT = 4001;

//middleware:
const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger, requestTime);

//routes:
app.get("/", (req, res) => {
  console.log("Hello, Jerry");
  let responseText = "Hello, Newman.<br>";
  responseText += `<small>Requested at ${req.requestTime}</small>`;
  res.send(responseText);
});

//listener:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});
