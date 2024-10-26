require("dotenv").config();
const appError = require("../utils/appError")
const logger = require("../utils/logger");

const throwAppError=(res,err)=>{
return res.status(err.statusCode).json({
  name : "appError",
  message:err.message,
  status: err.statusCode
})
}


function errorHandler(err, req, res, next) {
  logger.log("error", err.stack);
  if (err instanceof appError) {
    return throwAppError(res,err)
  }
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
}

module.exports = errorHandler;
