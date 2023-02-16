import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookList from "../components/BookList";
import { axiosGetBooks } from "../components/helpers/axiosHelper";
import DashboardLayout from "../components/layout/DashboardLayout";

const Books = () => {
  const [books, setBooks] = useState([]);
  const fetchAllBooks = async () => {
    const response = await axiosGetBooks();
    setBooks(response.books);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);
  console.log(books);
  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookList books={books} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
