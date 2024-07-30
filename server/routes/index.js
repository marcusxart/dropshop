const api = require("express").Router();
const {signup,login} = require("../controllers/auth")

api.get("/", (req, res) => {
  res.send("Server running");
});

//  add routes here

api.post("/signup", signup)
api.post("/login", login)

module.exports = api;
