const router = require("express").Router();
const Product = require("../../models/product.model");

// express endpoint for products
router.get("/", (req, res) => {
  if (req.query.type) {
    Product.find({ type: req.query.type }, (err, result) => {
      if (err) return res.json(err);
      products = result.map(product => {
        let newProduct = JSON.parse(JSON.stringify(product));
        newProduct.sizes = newProduct.sizes.length;
        return newProduct;
      });
      return res.json(products);
    });
  } else {
    Product.find({}, (err, result) => {
      if (err) return res.json(err);
      products = result.map(product => {
        let newProduct = JSON.parse(JSON.stringify(product));
        newProduct.sizes = newProduct.sizes.length;
        return newProduct;
      });
      return res.json(products);
    });
  }
});

// express endpoint for products
router.post("/", (req, res) =>
  Product.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))
);

module.exports = router;
