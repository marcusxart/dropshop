const isAuthenticated =async(req,res,next)=>{
 const isLoggedin = req.user
 if (!isAuthenticated) {
    const err = new Error("sorry not authenticated")
    err.status - 401
    next(err)
 }
 res.status(200).json(isLoggedin)
}

module.exports = {isAuthenticated}