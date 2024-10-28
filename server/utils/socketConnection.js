const {Server} = require("socket.io")
const {orderUpdate} = require("../controllers/order")


let io

const onlineCustomers=[]

const addUser=(name,socketId)=>{
   !onlineCustomers.some((user)=>user.name===name) && onlineCustomers.push({name,socketId})
}
const getCustomer =(name)=>{
  return onlineCustomers.find((customer)=>customer.name===name)
}
const disconnect =(id)=>{
  onlineCustomers =  onlineCustomers.filter((customer)=>customer.socketId !==id)
}
const initSocket =(instant)=>{

    if (!io) {
       
      io = new Server(instant, {
    cors: {
        origin: "http://localhost:5173",
        methods :[" GET", "POST"],
        allowedHeaders:["content-type"],
        credentials:true
    }, 
 })
   io.on("connection", (socket)=>{
    console.log("connected")

    //login customer
    socket.on("userLogin",({name})=>{
     addUser(name,socket.id)
     console.log(onlineCustomers)
    })
    //accepted  order from rider
    socket.on("acceptedOrder",(data)=>{
      const findCustomer = getCustomer(data.customer)
      io.to(findCustomer.socketId).emit("customerUpdate",{rider:data.rider.name})
    })
    //from rider
   socket.on("riderUpdate",({stage,customerName})=>{

    //to customer
     const findCustomer = getCustomer(customerName)
     io.to(findCustomer.socketId).emit("customerUpdate",{stage})
   })
       socket.on("disconnect",()=>{
        console.log(`${socket.id} disconnected`)
        disconnect(socket.id)
     })
 })

}

 return io
}


const getIo=()=>{
  if (!io) {
    throw new Error("socket io not initialized")
  }
  return io
}

module.exports={initSocket,getIo,onlineCustomers,getCustomer}