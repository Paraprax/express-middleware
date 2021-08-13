const express = require("express");
const app = express();
const PORT = 4001;

app.get("/", (req, res) => {
  console.log("Hello, Jerry");
  res.send("Hello, Newman");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
