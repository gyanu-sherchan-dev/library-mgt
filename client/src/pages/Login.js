import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputField } from "../components/customInputField/InputField.js";
import { DefaultLayout } from "../components/layout/DefaultLayout.js";

export const Login = () => {
  const [login, setLogin] = useState({});
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "youremail.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "****",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  return (
    <DefaultLayout>
      <Container>
        <Row className="mt-5">
          <Col className=" col-md-6 bg-primary p-5">
            <div className="bg-light p-4 rounded">
              <Form>
                <h2 className="text-center">Login</h2>
                <hr />
                {inputs.map((item, i) => {
                  return (
                    <InputField key={i} {...item} onChange={handleOnChange} />
                  );
                })}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-3">
                Don't have an account ? <Link to="/register">Register Now</Link>
              </div>
            </div>
          </Col>
          <Col className="col-md-6 bg-warning">
            <div>
              <h1>Welcome to Library Mangement System</h1>
              <hr />
              <p>Login to view and start borrowing books</p>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
