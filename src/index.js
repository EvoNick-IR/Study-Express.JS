////////// requires start //////////

require("dotenv").config();
const express = require("express");
const app = express();
const usersRout = require("./routes/users");
const uniRout = require("./routes/universities");

////////// requires end //////////

////////// app port start //////////

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is starts on port: ${PORT}`);
});

////////// app port end //////////

////////// middlewares start //////////

app.use(express.json());
app.use(express.urlencoded());

////////// middlewares end //////////

////////// Routers start //////////

app.use("/api/users", usersRout);
app.use("/api/universities", uniRout);

////////// Routers end //////////
