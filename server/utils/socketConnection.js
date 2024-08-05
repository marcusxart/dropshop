const {Server} = require("socket.io")
const {haversineDistance}= require("../utils/haversine")
let io


const onlineCustomers=[]

const addUser=(email,socketId)=>{
   !onlineCustomers.some((user)=>user.email===email) && onlineCustomers.push({email,socketId})
}
const getCustomer =(name)=>{
  return onlineCustomers.find((customer)=>customer.name===name)
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
 const pickup = {latitude:9.0819688, longitude: 7.3920866}
   io.on("connection", (socket)=>{
    console.log("connected")
    socket.on("userLogin",({email})=>{
     addUser(email,socket.id)
    })
     //socket.on("rider-update",)
     socket.on("location",(data)=>{
      const {totalDistance, currentlocation,customerName,destination}= data
      //get total distance from data
      //calculate distance covered by rider using google distance api
      //convert to percentage
      //emit percentage to specific customer
      const distanceCovered = haversineDistance(currentlocation,destination)
      const percentage = distanceCovered/totalDistance * 100
      //check if customer is online before emitting
      //check of percentage is greater or equal to 100
        console.log(percentage)
     })

       socket.on("disconnect",()=>{
        console.log(`${socket.id} disconnected`)
     })
 })

}

 return io
}

module.exports={initSocket}