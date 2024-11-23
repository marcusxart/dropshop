require("dotenv").config();
const http = require("http");
// const { initSocket } = require("./utils/socketConnection");
const { Server } = require("socket.io");
const socketConnection = require("./utils/socketConnection");
const app = require("./app");
const db = require("./database");
const Logger = require("./utils/logger");
const { AlLOWED_ORIGINS } = require("./configs/constants");

const PORT = process.env.PORT;
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: AlLOWED_ORIGINS } });

socketConnection(io);
app.set("socketIo", io);
db.sequelize.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    // initSocket(server);
    console.log(`Server is running on port ${PORT}`);
  });
});

// process.on("unhandledRejection", (reason, promise) => {
//   Logger.error(`Unhandled Rejection at: ${promise} reason: ${reason}`);
// });

module.exports = { io };
