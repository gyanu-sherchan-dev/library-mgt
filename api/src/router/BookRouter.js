import express from "express";
import { addBook, getBook } from "../models/bookModel/bookModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addBook(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "book added",
        })
      : res.json({
          status: "error",
          message: "book added unsuccessful",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      return res.json({
        status: "error",
        message: "Please enter new book details",
      });
    }
    console.log(error.message);
    next(error);
  }
});

//get book
router.get("/", async (req, res, next) => {
  try {
    const result = await getBook();
    result
      ? res.json(result)
      : res.json({
          status: "error",
          message: "book could not be retrived",
        });
  } catch (error) {
    next(error);
  }
});
export default router;
