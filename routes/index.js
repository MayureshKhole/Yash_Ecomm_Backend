const express = require("express")

const router = express.Router()

const authToken = require("../middleware/authToken")

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSignIn")
const userDetailsController = require("../controller/user/userDetails")
const userLogout = require("../controller/user/userLogout")
const allUsers = require("../controller/user/allUsers")
const updateUser = require("../controller/user/updateUser")

const UploadProductController = require("../controller/product/uploadProduct")
const getProductController = require("../controller/product/getProduct")
const updateProductController = require("../controller/product/updateProduct")
const getCategoryProductOne = require("../controller/product/getCategoryProductOne")
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct")
const filterProductController = require("../controller/product/filterProduct")
const searchProduct = require("../controller/product/searchProduct")
const getProductDetails = require("../controller/product/getProductDetails")
const addToCartController = require("../controller/user/addToCartController")
const countAddToCartProduct = require("../controller/user/countAddToCartProduct")
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct")
const addToCartViewProduct = require("../controller/user/addToCartViewProduct")
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin-panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//Product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProductOne)
router.post("/category-product",getCategoryWiseProduct)

router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


module.exports= router

