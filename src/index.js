const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`app is starts on port: ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded());

let users = [
  {
    name: "hoda",
    lastname: "ahmai",
    age: 36,
    sex: "female",
    admin: "true",
  },
  {
    name: "mostafa",
    lastname: "haghani",
    age: 33,
    sex: "male",
    admin: "true",
  },
  {
    name: "banoo",
    lastname: "hajipoor",
    age: 60,
    sex: "female",
    admin: "true",
  },
];

app.get("/", (req, res) => {
  // console.log(req);
  res.status(200).send(users);
});

app.get("/:user", (req, res) => {
  const user = req.params.user;
  const foundUser = users.find((username) => username.name === user);
  console.log(user);
  if (foundUser) return res.status(200).send(foundUser);
  else res.status(404).send("user not found");
});

app.post("/user", (req, res) => {
  const User = req.body;

  users.push(User);

  res.status(201).send(users);
});
