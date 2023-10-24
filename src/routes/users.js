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

router.get("/", (req, res) => {
  // console.log(req);
  res.status(200).send(users);
});

router.get("/:user", (req, res) => {
  const user = req.params.user;
  const foundUser = users.filter(
    (username) =>
      username.name.includes(user) ||
      username.lastname.includes(user) ||
      username.sex === user
  );
  console.log(user);
  if (foundUser.length > 0) return res.status(200).send(foundUser);
  else res.status(404).send("user not found");
});

router.post("/user", (req, res) => {
  const User = req.body;

  users.push(User);

  res.status(201).send(users);
});

module.exports = router;
