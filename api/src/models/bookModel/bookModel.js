import bookSchema from "./bookSchema.js";

//add book
export const addBook = (obj) => {
  return bookSchema(obj).save();
};

//get books
export const getBook = () => {
  return bookSchema.find();
};
