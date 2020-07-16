// установить все пакеты проекта "npn install" - в терминале
// запустить проект "npn start" - в терминале
var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
