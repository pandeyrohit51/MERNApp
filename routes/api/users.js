const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.post("/", (req, res) => {
  const newItem = new User({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  });
  newItem.save().then(item => {
    res.json(item);
  });
});
router.post("/validateUser", (req, res) => {
  const newItem = {
    username: req.body.username,
    password: req.body.password
  };
  User.find(newItem).then(item => {
    if (item.length === 0) return res.status(404).json({ success: false });
    res.json(item);
  });
});
router.get("/", (req, res) => {
  User.find().then(items => {
    return res.json(items);
  });
});
module.exports = router;
