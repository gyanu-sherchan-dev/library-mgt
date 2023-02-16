import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
      {books.map((item) => {
        return <BookCard key={item?._id} book={item} />;
      })}
    </div>
  );
};

export default BookList;
