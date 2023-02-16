import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ERROR } from "./src/Constant.js";
import { dbconnection } from "./src/config/dbConfig.js";

const app = express();

const PORT = process.env.PORT || 8000;

//dbconnection
dbconnection();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//api routers
import userRouter from "./src/routers/UserRouter.js";
import bookRouter from "./src/routers/BookRouter.js";
import { isAuth } from "./src/middlewares/authMiddleware.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/book", isAuth, bookRouter);

//uncaught EP handler
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "page not found",
  };
  next(error);
});

//global handler
app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;
    res.status(errorCode).json({
      status: ERROR,
      message: error.message,
    });
  } catch (error) {
    res.json({
      status: ERROR,
      message: error.message,
    });
  }
});

//server running
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
