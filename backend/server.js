const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const customErrorHandler = require("./middlewares/error/customErrorHandler");
const connectDatabase = require("./utils/database/connectDatabase");

dotenv.config({
  path: "./config/config.env",
});
connectDatabase();
const app = express();

app.use(express.json());
app.use(cors());

//Here should be routes

app.use(customErrorHandler);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT} : ${process.env.NODE_ENV}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error : ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
