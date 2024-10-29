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

    //join room
    socket.on("join_room",(data)=>{
      socket.join(data.room)
      console.log(`customer joined room ${data.room}`)
      if (data.role==="rider") {
        socket.to(data.room).emit("to_customer",data)
        console.log("rider has accepted")
      }
    })

    socket.on("from_rider",(data)=>{
     socket.to(data.room).emit("to_customer",data)
     console.log("rider sent to customer")
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