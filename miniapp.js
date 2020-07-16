// установить все пакеты проекта "npn install" - в терминале
// запустить проект "npn start" - в терминале
var express = require("express");
var app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
