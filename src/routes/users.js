const { Router } = require("express");
const router = Router();

let users = [
  {
    name: "hoda",
    lastname: "ahmadi",
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

router.get("", (req, res) => {
  res.status(200).send(users);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const foundUser = users.filter(
    (username) =>
      username.name.includes(item) ||
      username.lastname.includes(item) ||
      username.sex === item
  );
  if (foundUser.length > 0) return res.status(200).send(foundUser);
  else res.status(404).send("user not found");
});

router.post("/add", (req, res) => {
  const User = req.body;

  users.push(User);

  res.status(201).send(users);
});

module.exports = router;
