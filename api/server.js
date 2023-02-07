import dotenv from "dotenv";
dotenv.config(); // to load environment variable from dotenv file.
import express from "express";
import { connectDB } from "./src/config/dbConfig.js";
import { ERROR } from "./src/Constant.js";

const app = express();

const PORT = process.env.PORT || 8000;

//mongodb connection
connectDB();

//all uncaught request
app.use("*", (req, res, next) => {
  res.json({
    status: "404",
    message: "Request not found",
  });
});

//global error handling
app.use((error, req, res, next) => {
  const errorCode = error.code || 500;
  res.status(errorCode).json({
    status: ERROR,
    message: error.message,
  });
});

//run the server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
