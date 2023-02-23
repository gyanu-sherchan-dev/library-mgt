import React, { useState } from "react";

import { Alert, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { CustomInput } from "../customInput/CustomInput";
import { axiosLoginUser } from "../helpers/AxiosHelper";
import { MainLayout } from "../mainLayout/MainLayout";
import { toast } from "react-toastify";

const Login = () => {
  const input = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "youremail@email.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "****",
      required: true,
    },
  ];

  const [formData, setFormData] = useState();

  //handleOnChange
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message, result } = await axiosLoginUser(formData);
    if (status === "success") {
      toast[status](message);
      sessionStorage.setItem("user", JSON.stringify(result));
    } else {
      toast[status](message);
    }

    // status === "success" ? toast[status](message) : toast[status](message);
  };
  return (
    <div>
      <MainLayout>
        <Container>
          <Row className="d-flex justify-content-center gap-3 mt-5">
            <Col className="reg-main">
              <Form className="m-auto" onSubmit={handleSubmit}>
                {input.map((item) => {
                  return (
                    <CustomInput
                      {...item}
                      key={item.name}
                      onChange={handleOnChange}
                    />
                  );
                })}

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <div className="text-center mt-3">
                Don't have a account? <Link to="/register">Register Now</Link>
              </div>
            </Col>
            <Col className="reg-heading reg-main ">
              <h3>Welcome to Library Management System. Register here !</h3>
              <hr />
            </Col>
          </Row>
        </Container>
      </MainLayout>
    </div>
  );
};

export default Login;
