const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const { registerAdmin, loginAuth, verifyOtp } = require("../controllers/adminAuth.controllers");

router.route("/").get(authControllers.home)
router.route("/addproduct").post(authControllers.addProduct);
router.route("/scanproduct").post(authControllers.scanProduct)
router.route("/signup").post(registerAdmin)
router.route("/login").post(loginAuth)
router.route("/getproducts").post( authControllers.getProducts);
router.route("/productdetail").post(authControllers.productDetails)
router.route("/updateproduct").post(authControllers.updateProduct)
router.route("/verifyotp/:email/:shopid").post(verifyOtp)


module.exports = router