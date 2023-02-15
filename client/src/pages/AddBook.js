import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import DashboardLayout from "../components/layout/DashboardLayout";
import img from "../assests/reg-bg.jpg";

const AddBook = () => {
  return (
    <DashboardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add Book</h1>
        </div>
        <div className="add-bottom">
          <Col md={7} className="d-sm-block">
            <img src={img} alt="img" style={{ width: "90%" }} />
          </Col>
          <Col md={5} sm={12}>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title "
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Author"
                  required
                  type="text"
                  name="author"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  placeholder="ISBN"
                  required
                  type="text"
                  name="isbn"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="Year"
                  required
                  type="number"
                  name="year"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  placeholder="Book Image URL"
                  required
                  type="text"
                  name="thumbnail"
                />
              </Form.Group>
              <Button variant="info" type="submit">
                ADD BOOK
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddBook;
