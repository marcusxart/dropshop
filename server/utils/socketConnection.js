// const { Server } = require("socket.io");
// const { orderUpdate } = require("../controllers/order");

// let io;

// let onlineCustomers = [];

// const addUser = (name, socketId) => {
//   !onlineCustomers.some((user) => user.name === name) &&
//     onlineCustomers.push({ name, socketId });
// };
// const getCustomer = (name) => {
//   return onlineCustomers.find((customer) => customer.name === name);
// };
// const disconnect = (id) => {
//   onlineCustomers = onlineCustomers.filter(
//     (customer) => customer.socketId !== id
//   );
// };
// const initSocket = (instant) => {
//   if (!io) {
//     io = new Server(instant, {
//       cors: {
//         origin: "http://localhost:5173",
//         methods: [" GET", "POST"],
//         allowedHeaders: ["content-type"],
//         credentials: true,
//       },
//     });
//     io.on("connection", (socket) => {
//       console.log("connected");

//       //join room
//       socket.on("join_room", (data) => {
//         socket.join(data.room);
//         console.log(`customer joined room ${data.room}`);
//         if (data.role === "rider") {
//           socket.to(data.room).emit("to_customer", data);
//           console.log(data);
//         }
//       });

//       socket.on("from_rider", (data) => {
//         socket.to(data.room).emit("to_customer", data);
//         console.log("rider sent to customer");
//       });

//       socket.on("disconnect", () => {
//         console.log(`${socket.id} disconnected`);
//         disconnect(socket.id);
//       });
//     });
//   }

//   return io;
// };

// const getIo = () => {
//   if (!io) {
//     throw new Error("socket io not initialized");
//   }
//   return io;
// };

// module.exports = { initSocket, getIo, onlineCustomers, getCustomer };

/* UPDATED CODES */

const socketConnection = (io) => {
  io.on("connection", (conn) => {
    console.log("User connected with socket ID:", conn.id);
    conn.on("joinRoom", (payload) => {
      if (!payload) {
        conn.emit("error", "Invalid payload: Payload is undefined");
        console.error("Received undefined payload in joinRoom event");
        return;
      }

      const { customerName, role } = payload;
      const missingFields = [];

      if (!customerName) missingFields.push("customerName");
      if (!role) missingFields.push("role");

      if (missingFields.length > 0) {
        conn.emit(
          "joinRoom",
          `Invalid payload: Missing fields - ${missingFields.join(", ")}`
        );
        console.error(
          `joinRoom payload is missing fields: ${missingFields.join(", ")}`
        );
        return;
      }

      conn.join(customerName);
      console.log(
        `${role} with Name ${customerName} joined room: ${customerName}`
      );
      conn.emit("joinRoom", `Joined ${role} room with Name: ${customerName}`);
    });

    conn.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

module.exports = socketConnection;

/*  */
