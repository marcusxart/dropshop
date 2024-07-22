const api = require("express").Router();

api.get("/", (req, res) => {
  res.send("Server running");
});

//  add routes here

module.exports = api;
