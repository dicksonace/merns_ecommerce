const express = require("express");
const router = express.Router();
const ItemsModel = require("../models/ItemsModel");
const { check, validationResult } = require("express-validator/check");

router.get("/all_items", async (req, res) => {
  const product = await ItemsModel.find({});
  res.json(product);
});
router.get("/get_item/:id", async (req, res) => {
  const { id } = req.params;

  const product = await ItemsModel.findById(id);

  if (!product) {
    res.json({ message: "product not found", status: 0 });
    return;
  }

  res.json(product);
});


router.post(
  "/add",
  check("name", "Enter Product Name").not().isEmpty(),
  check("price", "Enter Product Price").not().isEmpty(),
  check("image", "Add Image Link").not().isEmpty(),
  check("description", "Enter product description").not().isEmpty(),
  (req, res) => {
    const { name, price, image, description } = req.body;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.json({ error: error.array(), status: 0 });
      return;
    }

    const newProduct = new ItemsModel({
      name,
      price,
      image,
      description,
    });

    newProduct.save().then((docs) => {
      res.send({ message: "Product added", status: 1, docs });
    });
  }
);

module.exports = router;
