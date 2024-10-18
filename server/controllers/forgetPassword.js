const {Users} = require("../database")
const {Forgetpassword} = require("../database")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")

const forgetPassword=async(req,res,next)=>{
  const {email} = req.body

 try {
  const findEmail = await Users.findOne({where:{email}})

  if (!findEmail) {
    const err = new Error("email not found")
    err.status = 401
    return next(err)
  }
  
  const userid = findEmail.id
  const token = crypto.randomUUID()
  const expiry = Date.now() + 360000 // 1 hour

 const passwordReset = await Forgetpassword.create({token,expiry: new Date(expiry), userid})

 if (!passwordReset) {
   const err = new Error("something went wrong")
   err.status = 400
   return next(err)
 }
  res.status(200).json("check email for reset link")
  
 } catch (error) {
  const err = new Error(error.message)
  return next(err)
 }

}


const newPassword = async(req,res,next) =>{
  const {password} = req.body
  const {token} = req.params
  try {
  const findToken = await Forgetpassword({where:{token}})

  if (!findToken) {
    const err = new Error("token has expired")
    err.status=401 
    return next(err)
  }
  const {userid} = findToken
  const findUser = await Users.findByPk(userid)
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt)
  
  findUser.password = hashPassword
  await findUser.save()
  await Forgetpassword.destroy({where:{userid}})
  res.status(200).json("password reset successfully")

  } catch (error) {
    const err = new Error(error.message)
    return next(err)
  }
}

module.exports={newPassword,forgetPassword}