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

export const getBookById = (_id) => {
  return BookSchema.findById(_id);
};

export const findBookAndUpdate = (_id, obj) => {
  return BookSchema.findByIdAndUpdate(_id, obj, { new: true });
};

export const findBookAndDelete = (_id) => {
  return BookSchema.findByIdAndDelete(_id);
};
