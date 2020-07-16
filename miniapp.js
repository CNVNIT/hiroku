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

let a = [];
app.get("/array", function (req, res) {
  res.send(a);
});
app.post("/array", function (req, res) {
  let b = req.body.a;
  a = a.concat(b);
  a = Array.from(new Set(a)); // удаление дубликатов
  res.send(a);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
