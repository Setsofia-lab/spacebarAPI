const express = require("express");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const app = express();
const User = require("./model");
const cors = require("cors");
const connectDb = require("./mongo");
const path = require("path");
const bodyparser = require("body-parser");

connectDb();

app.use(express.json()).use(cors());

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const senduser = await User.create(req.body);
    res.status(200).json(senduser);
  } catch (error) {
    res.status(400).json(error);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname));
  app.use(bodyparser.urlencoded({ extended: true }));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("welcome to the spacebar application");
  });
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
