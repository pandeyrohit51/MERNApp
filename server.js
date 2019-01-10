const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const items = require("./routes/api/items");
const users = require("./routes/api/users");
const db = require("./config/keys").mongoUri;
const app = express();
const path = require("path");
app.use([cors(), bodyParser.json()]);
// app.use(bodyParser.json());
mongoose.connect(
  db,
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

//Use routes. Here we specify that anything that goes through "/api/items" should refer to items variable which is the items.js
app.use("/api/items", items);
app.use("/api/users", users);
// serve static assets if we are in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
