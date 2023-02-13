import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputField } from "../components/customInputField/InputField.js";
import { axiosLoginUser } from "../components/helpers/axiosHelper.js";
import { DefaultLayout } from "../components/layout/DefaultLayout.js";

export const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message, result } = await axiosLoginUser(login);

    if (status === "success") {
      sessionStorage.setItem("user", JSON.stringify(result));
      navigate("/books");

      toast[status](message);
    } else {
      toast[status](message);
    }
  };
  return (
    <DefaultLayout>
      <Container>
        <Row className="mt-5 gap-2 ">
          <Col className="col-md-5 bg-primary p-5 rounded-2">
            <div className="bg-light p-4 rounded">
              <Form onSubmit={handleOnSubmit}>
                <h2 className="text-center">Login</h2>
                <hr />

                {inputs.map((input, i) => (
                  <InputField key={i} {...input} onChange={handleOnChange} />
                ))}

                <div>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                Don't have an account? <Link to="/register">Register Now!</Link>
              </div>
            </div>
          </Col>

          <Col className="col-md-5 text-center reg-info d-flex align-items-center d-none d-md-flex rounded-2">
            <div>
              <h1>Welcome to Library Management System</h1>
              <hr />
              <p>Login to view and start borrowing books</p>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
