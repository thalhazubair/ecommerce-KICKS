const express = require("express")
const router = express.Router()
const userLogin = require('../controller/userController/userLogin')
const userSignup = require('../controller/userController/userSignup')
const verifyLogin = require("../middleware/session");

router.get("/",userLogin.getPage)
router.get("/home",verifyLogin.verifyLoginUser,userLogin.getHome)
router.get("/login",userLogin.getLogin)
router.post("/login",userLogin.postLogin)
router.get("/signup",userSignup.getSignup)
router.post("/signup",userSignup.postSignup)
router.post("/otpsignup",userSignup.postOtpsignup)

router.get("/shop",userLogin.getShop)
router.get('/cart',verifyLogin.verifyLoginUser,userLogin.getCart)
router.get("/addcart/:id",verifyLogin.verifyLoginUser,userLogin.addCart)
router.post("/changeQuantity",userLogin.postchangeQuantity,userLogin.totalAmount)
router.post("/removeProduct",userLogin.postremoveProduct)

router.post('/checkCoupon',verifyLogin.verifyLoginUser,userLogin.checkCoupon)

router.get("/guestproductdetails/:id",userLogin.guestgetProduct)

router.get("/productdetails/:id",verifyLogin.verifyLoginUser,userLogin.getProduct)
router.get('/categoryfilter/:categories',verifyLogin.verifyLoginUser,userLogin.getCategory)
router.get('/shopcategoryfilter/:categories',verifyLogin.verifyLoginUser,userLogin.getShopCategory)
router.get('/shopbrandfilter/:brand',verifyLogin.verifyLoginUser,userLogin.getShopBrand)
router.get('/shoppricefilter',verifyLogin.verifyLoginUser,userLogin.getShopPrice)
router.post("/search",verifyLogin.verifyLoginUser,userLogin.Search)

router.get('/wishlist',verifyLogin.verifyLoginUser,userLogin.getWishlist)
router.get('/addtowishlist/:id',verifyLogin.verifyLoginUser,userLogin.addWishlist)
router.post("/removewishlistProduct",verifyLogin.verifyLoginUser,userLogin.postremovewishlistProduct)

router.get("/checkout",verifyLogin.verifyLoginUser,userLogin.getCheckout)
router.post("/placeOrder",verifyLogin.verifyLoginUser,userLogin.postplaceOrder)
router.get('/ordersuccess',verifyLogin.verifyLoginUser,userLogin.orderSuccess)
router.get('/orderdetails',verifyLogin.verifyLoginUser,userLogin.getOrderstatus)
router.get("/viewOrderProducts/:id",verifyLogin.verifyLoginUser,userLogin.viewOrderProducts)
router.post('/addNewAddress',verifyLogin.verifyLoginUser,userLogin.addNewAddress);

router.post("/verifypayment",verifyLogin.verifyLoginUser,userLogin.postverifyPayment)

router.get('/getprofile',verifyLogin.verifyLoginUser,userLogin.getProfile)
router.post('/addaddress',userLogin.postAddress)
router.get('/editaccount',verifyLogin.verifyLoginUser,userLogin.getEditAccount)
router.get('/savedaddress',verifyLogin.verifyLoginUser,userLogin.getsavedaddress)
router.patch('/editAddress/:id',verifyLogin.verifyLoginUser,userLogin.postEditAddress);
router.get('/deleteaddress/:id',verifyLogin.verifyLoginUser,userLogin.deleteAddress);
router.get('/editaccount',verifyLogin.verifyLoginUser,userLogin.editAccount);
router.post('/postEditAccount',verifyLogin.verifyLoginUser,userLogin.postEditAccount);


router.get("/cancelOrder/:id",verifyLogin.verifyLoginUser,userLogin.cancelOrder);

router.get('/changePassword',userLogin.changePassword);
router.post('/postChangePassword',userLogin.postChangePassword);
router.get('/forgotpassword',userLogin.forgotPassword)
router.post('/forgotpassword',userLogin.postforgotPassword)
router.post('/resetpassotp',userLogin.postotpsignup)
router.post('/newpassword',userLogin.postNewPassword)
router.get('/logout',userLogin.getLogout)

module.exports = router