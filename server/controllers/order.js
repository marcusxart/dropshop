const {Orders} = require("../database")
const {getIo,onlineCustomers}=  require("../utils/socketConnection")
const {Op} = require("sequelize")

const createOrder=async(req,res,next)=>{

const {type,price,from,to,number,details}= req.body
const customerName = req.user.name
try {
    if (!type || !details || !price || !from || !to || !number ) {
        const err = new Error("fill in all required fields")
        err.status = 400
        return next(err)
    }
    const createOrder = await Orders.create({type,price,from,to,details,number,customer:customerName})
    if (createOrder) {
        res.status(200).json("order created")
    }
} catch (error) {
    const err = new Error(error.message)
    return next(err)
}

}


const acceptOrder=async(req,res,next)=>{

 const {id} = req.params
 const riderName = req.user.name
 const riderNumber = req.user.riderNumber
 
 try {
  const findOrder = await Orders.findByPk(id)

    if (!findOrder) {
        const err = new Error("order not found")
        err.status= 404
        return next(err)
    }
    findOrder.rider = riderName
    findOrder.status = "in-progress"
    findOrder.riderNumber=riderNumber
    findOrder.stage=1
    await findOrder.save()
    //emit io
   res.status(200).json("Order accepted") 

 } catch (error) {
   const err = new Error(error.message)
   return next(err) 
 }

} 

const getAllOrders =async(req,res,next)=>{
  const status = req.query.status
  queryOptions = {}
  if (status) {
    sequelizeOptions.where=  {status:{[Op.eq]:status}}
  }
try {
   const getOrders = await Orders.findAll(queryOptions) 
   if (!getOrders) {
    return res.status(404).json("No orders yet")
  }
  res.status(200).json(getOrders)
} catch (error) {
    const err = new Error(error.message)
    return next(err)  
}
}
const getPendingOrders=async(req,res,next)=>{
try {
  const pending= await findAll({where:{status: "pending"}})
  if (!pending) {
    return res.status(404).json("No pending order")
  }
  res.status(200).json(pending)
} catch (error) {
  const err = new Error(error.message)
  return next(err) 
}
}
const getOrderById =async(req,res,next) =>{
    const {id} = req.params
 try {
    const order = await Orders.findByPk(id)

    if (!order) {
        return res.status(404).json("Order not found")
      }
      res.status(200).json(order)

 } catch (error) {
    const err = new Error(error.message)
    return next(err)
 }
}


let orderUpdate


const updateOrder =async(req,res,next)=>{
    const {id} = req.params
    try {
        const order= await Orders.update(req.body,{where:{id}})
        if (order.stage ===2) {
        //emit io
        }
       res.status(201).json("stage updated")
    } catch (error) {
      const err = new Error(error.message)
      return next(err)   
    }
}

const riderOrderHistory = async(req,res,next)=>{
  const riderName = req.user.name
  try {
    const getOrderHistory= await Orders.findAll({where:{status:{[Op.ne]:"in-progress"},rider:riderName}})

    if (!getOrderHistory) {
      const err = new Error("No orders yet")
      err.status= 404
      return next(err)
    }
    res.status(200).json(getOrderHistory)
  } catch (error) {
    const err = new Error(error.message)
    return next(err) 
  }
}


const riderOngoingOrder = async(req,res,next)=>{
  const riderName = req.user.name
  try {
    const ongoingOrder= await Orders.findOne({where:{status:"in-progress",rider:riderName}})

    if (!ongoingOrder) {
      const err = new Error("No orders yet")
      err.status= 404
      return next(err)
    }
    res.status(200).json(ongoingOrder)
  } catch (error) {
    const err = new Error(error.message)
    return next(err) 
  }
}

const customerOngoingOrder = async(req,res,next)=>{
  const customerName = req.user.name
  try {
    const ongoingOrder= await Orders.findOne({where:{status:"in-progress",rider:customerName}})

    if (!ongoingOrder) {
      const err = new Error("No orders yet")
      err.status= 404
      return next(err)
    }
    res.status(200).json(ongoingOrder)
  } catch (error) {
    const err = new Error(error.message)
    return next(err) 
  }
}
module.exports={
  getAllOrders
  ,getOrderById,
  getPendingOrders,
  createOrder,
  acceptOrder,
  updateOrder,
  riderOrderHistory,
  riderOngoingOrder,
  customerOngoingOrder
}