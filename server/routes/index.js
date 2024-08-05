const api = require("express").Router();
const {signup,login} = require("../controllers/auth")
const {newPassword,forgetPassword} = require("../controllers/forgetPassword")

api.get("/", (req, res) => {
  res.send("Server running");
});

//  add routes here

api.post("/signup", signup)
api.post("/login", login)
api.post("/forgetPassword", forgetPassword)
api.post("/newPassword/:token", newPassword)

module.exports = api;
