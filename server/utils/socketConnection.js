const { Server } = require("socket.io");
const { orderUpdate } = require("../controllers/order");

let io;

const id = []
const initSocket = (instant) => {
  if (!io) {
    io = new Server(instant, {
      cors: {
        origin: "http://localhost:5173",
        methods: [" GET", "POST"],
        allowedHeaders: ["content-type"],
        credentials: true,
      },
    });
    io.on("connection", (socket) => {
      console.log("connected");

      //join room
      socket.on("join_room", (data) => {
        socket.join(data.room);
        id.push(data.role)
        console.log(`customer joined room ${data.room}`);
        if (data.role === "rider") {
          socket.to(data.room).emit("to_customer", data);
          console.log(id)
          console.log(data);
        }
      });

      socket.on("from_rider", (data) => {
        socket.to(data.room).emit("to_customer", data);
        console.log("rider sent to customer");
      });

      socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected`);
      });
    });
  }

  return io;
};

const getIo = () => {
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
     })
 })

}

 return io
}


const getIo=()=>{
  if (!io) {
    throw new Error("socket io not initialized");
  }
  return io;
};

module.exports = { initSocket, getIo, onlineCustomers, getCustomer };
