const jwt = require("jsonwebtoken")

const generateToken = (uservalue) => {
    return jwt.sign(
      { email: uservalue.email, isAdmin: uservalue.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "3d" },
    ); 
  }


  const riderToken = (uservalue) => {
    return jwt.sign(
      { email: uservalue.email, isAdmin: uservalue.isAdmin, name:uservalue.name,
        role:uservalue.role
       },
      process.env.JWT_KEY,
      { expiresIn: "3d" },
    ); 
  }
  module.exports={generateToken,riderToken}