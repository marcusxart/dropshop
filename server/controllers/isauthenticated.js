const isAuthenticated =async(req,res,next)=>{
 const isAuthenticated = req.user
 if (!isAuthenticated) {
    const err = new Error("sorry not authenticated")
    err.status - 401
    next(err)
 }
 res.status(200).json(isAuthenticated)
}

module.exports = {isAuthenticated}