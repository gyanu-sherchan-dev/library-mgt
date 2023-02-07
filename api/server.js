import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ERROR } from "./src/Constant.js";
import { dbconnection } from "./src/config/dbConfig.js";

const app = express();

const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//dbconnection
dbconnection();

//uncaught EP handler
app.use("*", (req, res, next) => {
  res.json({
    status: "404",
    message: "page not found ",
  });
});

//global handler
app.use((error, req, res, next) => {
  const errorCode = error.code || 500;
  res.status(errorCode).json({
    status: ERROR,
    message: error.message,
  });
});

//server running
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
