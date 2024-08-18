const {Riders} = require("../database")
const {Orders} = require("../database")
const {generateToken,riderToken} = require("../utils/jwt")

const registerRider= async(req,res,next)=>{
const {
    name,
    email,
    guarantor,
    guarantorNumber,
    password,
    address,
    riderNumber
    }= req.body 

   try {

    if (!name || !address || !email || !guarantor || !guarantorNumber || !password || !riderNumber) {
        const err = new Error("input all required fields")
        err.status = 400
        return next(err)   
      } 
       await Riders.create({name,guarantor,guarantorNumber,password,email,address,riderNumber})

       res.status(200).json("Rider registered succesfully")

   } catch (error) {
    const err = new Error(error.message)
    return next(err)
   }
}



const loginRider = async(req,res,next) => {

    const {riderpassword, riderName } = req.body
 
    try {
        if (!riderName || !riderpassword) {
            const err = new Error("input all required fields")
            err.status = 400
            return next(err)        
        }  
      const {role,email,isAdmin,password,name,riderNumber} = await Riders.findOne({where:{name:riderName}})

     if (password !== riderpassword) {
          const err = new Error("incorrect password")
          err.status = 400
          return next(err)    
     }
     

     const signToken={email,role,isAdmin,name,riderNumber}

      res.status(200).json({role,email,name,isAdmin,token:riderToken(signToken)})

    } catch (error) {
      const err = new Error(error.message)
      return next(err)    
    }

}


const riderStatus = async(req,res,next) =>{
  const riderName = req.user.name
  try {
    const busyRider = await Orders.findAll({where:{status:"in-progress",rider:riderName}})
    if (busyRider.length!==0) {
      const err = new Error("rider already occupied")
      err.status = 200
      return next(err)
    }
    res.status(200).json("free")
  } catch (error) {
     const err = new Error(error.message)
     return next(err) 
  }
}


const getAllRiders=async(req,res,next)=>{
try {
    const allRiders = await Riders.findAll()
    if (!allRiders) {
      return res.status(200).json("No created rider yet")
    }
   res.status(200).json(allRiders)
} catch (error) {
      const err = new Error(error.message)
      return next(err) 
  } 
}  

const getRiderById =async(req,res,next) =>{
  const {id} = req.params
try {
  const rider = await Riders.findByPk(id)

  if (!rider) {
      return res.status(200).json("Rider not found")
    }
    res.status(200).json(rider)

} catch (error) {
  const err = new Error(error.message)
  return next(err)
}
}

const deleteRider= async(req,res,next)=>{
  const {id} = req.params
   try {
      const findRider = await Riders.findByPk(id)
      
      if (!findRider) {
        const err = new Error("rider not found")
        err.status = 400
        return next(err)
      }

       await findRider.destroy()
      res.status(200).json("rider deleted")
   } catch (error) {
    const err = new Error(error.message)
    return next(err)
   }
}

 module.exports={loginRider,registerRider,getAllRiders, getRiderById,riderStatus,deleteRider}