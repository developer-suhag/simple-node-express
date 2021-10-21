const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(
    "WoW . I excited beacuse, I am learning NODE and Express. Auto restart with nodemon"
  );
});

const users = [
  { id: 0, name: "suhag", address: "tangail", language: "Js" },
  { id: 1, name: "Sanji", address: "Comilla", language: "Js" },
  { id: 2, name: "Amran", address: "Saudi", language: "Js" },
  { id: 3, name: "Nite", address: "Narayangonj", language: "Js" },
  { id: 4, name: "Raisha", address: "Josore", language: "Js" },
  { id: 5, name: "Mokta", address: "Tangail", language: "SM" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port ", port);
});
