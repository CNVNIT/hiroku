let express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let a = ["Tom", "Nick", "Yan"];

app.get("/people", function (req, res) {
  res.send(a);
});

app.post("/people", function (req, res) {
  let name = req.body.newName;
  a.push(name);
  res.send(a);
});

let c = { Canada: "Ottawa", Ukraine: "Kyiv", "United Kingdom": "London" };

app.post("/country", function (req, res) {
  let country = req.body.newCountry;
  let city = req.body.newCity;
  c[country] = city;
  res.send(c);
});

// HOMEWORK ==============

// 1. Отправить с сервера обект человек let person = {name: "Tom", age: 20} (GET)

let p = { name: "Tom", age: 20 };
app.get("/person", function (req, res) {
  res.send(p);
});
// 2. Отправить с сервера масив людей. (GET)

let g = ["Tom", "John", "Anna", "Nick", "David"];
app.get("/group", function (req, res) {
  res.send(g);
});

// 3. Добавить на сервер еще одного человека через POST.

app.post("/group", function (req, res) {
  let person = req.body.newPerson;
  g = g.concat(person);
  res.send(g);
});
// app.post("/group", function (req, res) {
//   let person2 = req.body.newPerson2;
//   g.push(person2);
//   res.send(g);
// });

// do not touch  :)   -- ===  S T A R T  === ---

app.listen(2000, function () {
  console.log("Example app listening on port 2000!");
});
