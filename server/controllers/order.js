const {Orders} = require("../database")

const createOrder=async(req,res,next)=>{

const {type,price,from,to,number}= req.body
const customerName = req.user.name
try {
    if (!type || !details || !price || !from || !to || !number ) {
        const err = new Error("fill in all required fields")
        err.status = 400
        return next(err)
    }
    const createOrder = await Orders.create({type,price,from,to,number,customer:customerName})
    if (createOrder) {
        res.status(200).json("order created")
    }
} catch (error) {
    const err = new Error(error.message)
    return next(err)
}

}

const acceptOrder=async(req,res,next)=>{
 
}