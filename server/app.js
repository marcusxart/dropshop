// const express = require("express");
// const cors = require("cors");

// const errorMiddleware = require("./middlewares/error.middleware");
// const { AlLOWED_ORIGINS } = require("./configs/constants");

// const app = express();

// app.set("view engine", "ejs");

// // Enable CORS
// app.use(
//   cors({
//     origin: AlLOWED_ORIGINS,
//     optionsSuccessStatus: 200,
//   })
// );

// // use json
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // root route
// app.use("/api", require("./routes"));

// // error middleware
// app.use(errorMiddleware);

// module.exports = app;

const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error.middleware");
const { AlLOWED_ORIGINS } = require("./configs/constants");
const http = require("http");
const app = express();

// const server = http.createServer(app);
app.use(cors(AlLOWED_ORIGINS));
app.set("view engine", "ejs");

// Enable CORS

// use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root route
app.use("/api", require("./routes"));

// error middleware
app.use(errorMiddleware);

module.exports = app;
