const api = require("express").Router();
const {isAuthenticated} = require("../controllers/isauthenticated")
const {riderAuth,customerAuth,checkToken, adminAuth} = require("../middlewares/authMiddleware")
const {signup,login,getAllUsers} = require("../controllers/auth")
const {signupAdmin,loginAdmin} = require("../controllers/admin")
const {newPassword,forgetPassword} = require("../controllers/forgetPassword")
const {registerRider,getAllRiders,getRiderById,loginRider,riderStatus,deleteRider} = require("../controllers/rider")
const {getOrderById,getAllOrders,customerOrderHistory,updateOrder,getPendingOrders,createOrder,acceptOrder, riderOrderHistory, riderOngoingOrder, customerOngoingOrder,} = require("../controllers/order")

api.get("/", (req, res) => {
  res.send("Server running");
});

//  add routes here!

//authenticated user
api.get("/isAuthenticated",checkToken, isAuthenticated)
//customers
api.post("/signup", signup)
api.post("/login", login)
api.get("/getAllUsers", adminAuth, getAllUsers)
//admin
api.post("/signUpAdmin", signupAdmin)
api.post("/loginAdmin", loginAdmin)
//password-reset
api.post("/forgetPassword", forgetPassword)
api.post("/newPassword/:token", newPassword)
//orders
api.get("/getAllOrders",adminAuth, getAllOrders)
api.get("/getPendingOrders",riderAuth, getPendingOrders)
api.get("/getOrderById/:id",checkToken, getOrderById)
api.put("/updateOrder/:id",riderAuth, updateOrder) 
api.post("/createOrder",customerAuth, createOrder)
api.put("/acceptOrder/:id",riderAuth, acceptOrder) 
api.get("/riderOrderHistory",riderAuth, riderOrderHistory)
api.get("/ongoingOrder",riderAuth, riderOngoingOrder)//test on postman
api.get("/customerOngoingOrder",customerAuth,customerOngoingOrder)  
api.get("/customerOrderHistory",customerAuth,customerOrderHistory)  

//riders  
api.post("/registerRider",adminAuth, registerRider)
api.post("/loginRider", loginRider)
api.get("/getAllRiders",adminAuth, getAllRiders)
api.get("/getRiderById/:id",adminAuth, getRiderById)
api.get("/riderStatus", riderAuth, riderStatus) //test on postman
api.delete("/deleteRider/:id", deleteRider)


module.exports = api;
