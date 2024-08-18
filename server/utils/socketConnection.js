const {Server} = require("socket.io")
const {orderUpdate} = require("../controllers/order")


let io

const onlineCustomers=[]

const addUser=(email,socketId)=>{
   !onlineCustomers.some((user)=>user.email===email) && onlineCustomers.push({email,socketId})
}
const getCustomer =(name,customers)=>{
  return customers.find((customer)=>customer.name===name)
}
const disconnect =(id)=>{
  onlineCustomers =  customers.filter((customer)=>customer.id !==id)
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
    
    socket.on("userLogin",({email})=>{
     addUser(email,socket.id,onlineCustomers)
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