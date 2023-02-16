import express from "express";
import { ERROR, SUCCESS } from "../Constant.js";
import {
  addBook,
  getAllBooks,
  getBookByIsbn,
} from "../models/bookModels/BookModel.js";

const router = express();

// add a book
router.post("/", async (req, res, next) => {
  const { isbn } = req.body;
  try {
    const bookExists = await getBookByIsbn(isbn);
    if (bookExists?._id) {
      return res.json({
        status: ERROR,
        message: "Book already exists!",
      });
    }

    const book = await addBook(req.body);
    return book?._id
      ? res.json({
          status: SUCCESS,
          message: "Book added successfully",
        })
      : res.json({
          status: ERROR,
          message: "Unable to add book, please try again",
        });
  } catch (error) {
    next(error);
  }
});

//get books
router.get("/", async (req, res, next) => {
  try {
    const books = await getAllBooks();
    if (books) {
      return res.json({ books });
    }
    return;
  } catch (error) {
    next(error);
  }
});
export default router;
