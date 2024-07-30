const {Server} = require("socket.io")
const {haversineDistance}= require("../utils/haversine")
let io
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
     socket.on("location",(data)=>{
      const distanceCovered = haversineDistance(pickup, data)
        console.log(distanceCovered)
     })

       socket.on("disconnect",()=>{
        console.log(`${socket.id} disconnected`)
     })
 })

}

 return io
}

module.exports={initSocket}