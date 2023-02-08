import React, { useState } from "react";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { InputField } from "../components/customInputField/InputField";
import { axisoPostNewUser } from "../components/helpers/axiosHelper.js";

const Register = () => {
  const [form, setForm] = useState({});
  const inputes = [
    {
      label: "First Name",
      type: "text",
      placeholder: "John",
      name: "fName",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Doe",
      name: "lName",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "john@gmail.com",
      name: "email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "****",
      name: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "Password",
      placeholder: "****",
      name: "confirmedpassword",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmedpassword, ...rest } = form;
    if (confirmedpassword !== form.password) {
      return alert("password do not match");
    }

    const result = await axisoPostNewUser(rest);
    const { status, message } = result;
    toast[status](message);
  };
  return (
    <DefaultLayout>
      Registration
      <Container>
        <Row className="mt-5">
          <Col className=" md-6 p-5 reg-info  d-none d-md-block">
            <div>
              <h1>Welcome to our system</h1>
              <hr />
              <p>
                Register with us and access our library management system. You
                can view and borrow the books.
              </p>
            </div>
          </Col>
          <Col className="md-6 bg-info p-4 rounded-3">
            <div className=" bg-light p-4 rounded-3">
              <Form onSubmit={handleOnSubmit}>
                <h2>Register Now</h2>
                <hr />
                {inputes.map((item, i) => (
                  <InputField key={i} {...item} onChange={handleOnChange} />
                ))}

                <Form.Select
                  className="mb-3"
                  name="role"
                  onChange={handleOnChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I agree T&Cs " required />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
              <div className="text-end mt-3">
                Already have an account <a href="/">Login Now</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Register;
