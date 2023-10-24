const { Router } = require("express");
const router = Router();

const universities = [
  { university: "tehran" },
  { university: "beheshti" },
  { university: "sama" },
  { university: "azad" },
];

router.get("", (req, res) => {
  res.status(200).send(universities);
});

router.post("/add", (req, res) => {
  const Uni = req.body;
  universities.push(Uni);

  res.status(201).send(universities);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const foundUni = universities.filter((uni) => uni.university.includes(item));
  if (foundUni.length > 0) return res.status(200).send(foundUni);
  else res.status(404).send("university not found");
});

module.exports = router;
