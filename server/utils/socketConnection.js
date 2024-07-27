const {Server} = require("socket.io")

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
   io.on("connection", (socket)=>{
    console.log("connected")
     socket.on("location",(data)=>{
        console.log(data)
     })

       socket.on("disconnect",()=>{
        console.log(`${socket.id} disconnected`)
     })
 })

}

 return io
}

module.exports={initSocket}