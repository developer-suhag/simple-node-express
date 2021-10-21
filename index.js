const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "WoW . I excited beacuse, I am learning NODE and Express. Auto restart with nodemon"
  );
});

// use query search

const users = [
  { id: 0, name: "suhag", address: "tangail", language: "Js" },
  { id: 1, name: "Sanji", address: "Comilla", language: "Js" },
  { id: 2, name: "Amran", address: "Saudi", language: "Js" },
  { id: 3, name: "Nite", address: "Narayangonj", language: "Js" },
  { id: 4, name: "Raisha", address: "Josore", language: "Js" },
  { id: 5, name: "Mokta", address: "Tangail", language: "SM" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// post

app.post("/users", (req, res) => {
  console.log("hitting the post", req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port ", port);
});
