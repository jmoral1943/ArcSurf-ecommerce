const User = require("../models/user.model");
const Product = require("../models/product.model");
const signToken = require("../auth").signToken;

module.exports = {
  create: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) return res.json("User is not created");

      const token = signToken(user);
      res.json(token);
    });
  },

  authenticate: (req, res) => {
    // check if the user exists
    User.findOne({ email: req.body.email }, (err, user) => {
      // if there's no user or the password is invalid
      if (err) return res.json(err);
      if (!user || !user.validPassword(req.body.password)) {
        // deny access
        return res.json({ success: false, message: "Invalid credentials." });
      }

      const token = signToken(user);
      res.json(token);
    });
  },

  getAllProducts: (req, res) => {
    Product.find({}, (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    });
  }
};
