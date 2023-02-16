import BookSchema from "./BookSchema.js";

export const getBookByIsbn = (isbn) => {
  return BookSchema.findOne({ isbn });
};

//add book
export const addBook = (bookInfo) => {
  return BookSchema(bookInfo).save();
};

//get all books
export const getAllBooks = () => {
  return BookSchema.find();
};
