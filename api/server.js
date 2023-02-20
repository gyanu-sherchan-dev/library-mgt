import express, { Router } from "express";
import morgan from "morgan";
import cors from "cors";
import { dbConnect } from "./src/dbConfig/dbConfig.js";

const app = express();
const PORT = 8000;

//db connection
dbConnect();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routers
import userRouter from "./src/router/userRouter.js";
app.use("/api/v1/user", userRouter);

//uncaught error handler
app.use("*", (req, res, next) => {
  try {
    const statusCode = 404;
    res.status(statusCode).json({
      status: "error",
      message: "Page not found",
    });
  } catch (error) {
    next(error);
  }
});

//global error handler
app.use((error, req, res, next) => {
  try {
    error = error.statusCode || 500;
    res.status(error).json({
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

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at:http://localhost:${PORT}`);
});
