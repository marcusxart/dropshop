const api = require("express").Router();
const {isAuthenticated} = require("../controllers/isauthenticated")
const {riderAuth,customerAuth} = require("../middlewares/authMiddleware")
const {signup,login} = require("../controllers/auth")
const {signupAdmin,loginAdmin} = require("../controllers/admin")
const {newPassword,forgetPassword} = require("../controllers/forgetPassword")
const {registerRider,getAllRiders,getRiderById,loginRider,riderStatus,deleteRider} = require("../controllers/rider")
const {getOrderById,getAllOrders,updateOrder,createOrder,acceptOrder, riderOrderHistory, riderOngoingOrder, customerOngoingOrder,} = require("../controllers/order")

api.get("/", (req, res) => {
  res.send("Server running");
});

//  add routes here!

//authenticated user
api.get("/isAuthenticated", isAuthenticated)
//customers
api.post("/signup", signup)
api.post("/login", login)
//admin
api.post("/signUpAdmin", signupAdmin)
api.post("/loginAdmin", loginAdmin)
//password-reset
api.post("/forgetPassword", forgetPassword)
api.post("/newPassword/:token", newPassword)
//orders
api.get("/getAllOrders", getAllOrders)
api.get("/getOrderById/:id", getOrderById)
api.put("/updateOrder/:id", updateOrder) 
api.post("/createOrder",customerAuth, createOrder)
api.put("/acceptOrder/:id",riderAuth, acceptOrder) 
api.get("/riderOrderHistory",riderAuth, riderOrderHistory)
api.get("/ongoingOrder",riderAuth, riderOngoingOrder)//test on postman
api.get("/customerOngoingOrder",customerAuth,customerOngoingOrder)  

//riders
api.post("/registerRider", registerRider)
api.post("/loginRider", loginRider)
api.get("/getAllRiders", getAllRiders)
api.get("/getRiderById/:id", getRiderById)
api.get("/riderStatus", riderAuth, riderStatus) //test on postman
api.delete("/deleteRider/:id", deleteRider)


module.exports = api;
