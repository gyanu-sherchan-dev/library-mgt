import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./dbconfig/dbconfig.js";

const app = express();

const PORT = 8000;

//db connection
dbConnect();

//uncaught router handeler
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Page not found",
  };
  next(error);
});

//global error handling
app.use((error, req, res, next) => {
  try {
    const statusCode = error.errorCode || 500;

    res.status(statusCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error, req, res, next) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://locathost:${PORT}`);
});
