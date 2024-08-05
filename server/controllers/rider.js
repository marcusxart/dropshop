const {Riders} = require("../database")
const {riderToken} = require("../utils/jwt")

const registerRider= async(req,res,next)=>{
const {
    firstName,
    lastName,
    email,
    guarantor,
    guarantorNumber,
    password,
    }= req.body 

   try {

    if (!firstName|| !lastName || !email || !guarantor || !guarantorNumber || !password) {
        const err = new Error("input all required fields")
        err.status = 400
        return next(err)   
      } 
       await Riders.create({firstName,lastName,guarantor,guarantorNumber,password})

       res.status(200).json("Rider registered succesfully")

   } catch (error) {
    const err = new Error(error.message)
    return next(err)
   }
}



const loginRider = async(req,res,next) => {

    const {riderpassword, lastname } = req.body
 
    try {
        if (!lastname || !password) {
            const err = new Error("input all required fields")
            err.status = 400
            return next(err)        
        }  
      const {email,isAdmin,firstName,lastName,password} = await Riders.findOne({where:{lastname}})

     if (password !== riderpassword) {
          const err = new Error("incorrect password")
          err.status = 400
          return next(err)    
     }
     

     const signToken={email,firstName,lastName,isAdmin}

      res.status(200).json({email,firstName,lastName,isAdmin,token:riderToken(signToken)})

    } catch (error) {
      const err = new Error(error.message)
      return next(err)    
    }

}

 module.exports={loginRider,registerRider}