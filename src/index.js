const express = require("express");
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app is starts on port: ${PORT}`);
});

app.use(express.json);
app.use(express.urlencoded);
