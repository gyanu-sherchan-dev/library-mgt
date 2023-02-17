import express from "express";
import { ERROR, SUCCESS } from "../Constant.js";
import {
  addBook,
  findBookAndDelete,
  findBookAndUpdate,
  getAllBooks,
  getBookById,
  getBookByIsbn,
} from "../models/bookModels/BookModel.js";
import { getUserById } from "../models/userModel/userModel.js";

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

//borrow book
router.post("/borrow", async (req, res, next) => {
  try {
    const bookId = req.body.bookId;
    const { authorization } = req.headers;

    const book = await getBookById(bookId);
    const user = await getUserById(authorization);

    if (book?._id && user?._id) {
      if (book?.borrowedBy.length) {
        return res.json({
          status: ERROR,
          message:
            "This book has already been borrowed and will be available once it has been return",
        });
      }
      const updateBook = await findBookAndUpdate(bookId, {
        $push: { borrowedBy: user._id },
      });
      return updateBook
        ? res.json({
            status: SUCCESS,
            message: "You have borrowed this book",
          })
        : res.json({
            status: ERROR,
            message: "Something went wrong please try again later",
          });
    }
  } catch (error) {
    next(error);
  }
});

//delete book

router.delete("/", async (req, res, next) => {
  try {
    const bookId = req.body.bookId;
    console.log(bookId);
    const del = await findBookAndDelete(bookId);
    console.log("hey" + req.body);
    del?._id
      ? res.json({
          status: SUCCESS,
          message: "Book deleted successfully",
        })
      : res.json({
          status: ERROR,
          message: "Unable to delete book !",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
