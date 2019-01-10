const express = require("express");
const router = express.Router();

//Bring in the item model so that we can now do stuffs with that like save,delete i.e. all CRUD operations
const Item = require("../../models/item");
router.get("/", (req, res) => {
  Item.find()
    .sort({ data: -1 })
    .then(items => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => {
    res.json(item);
  });
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.remove().then(() => {
        res.json({ success: true });
      });
    })
    .catch(err => {
      res.status(404).json({ success: false });
    });
});
module.exports = router;
