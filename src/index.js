const express = require("express");
const app = express();
const PORT = 4000;
const usersRout = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use(usersRout);

app.listen(PORT, () => {
  console.log(`app is starts on port: ${PORT}`);
});
