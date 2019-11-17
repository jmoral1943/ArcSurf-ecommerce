const express = require("express");
const router = new express.Router();

const userCtrl = require("../../controllers");
const verifyToken = require("../../auth").verifyToken

router.route("/").post(userCtrl.create);

router.use(verifyToken)

router.route("/allproducts").get(userCtrl.getAllProducts)

module.exports = router;
