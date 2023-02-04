import React, { useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { CustomInput } from "../components/CustomInput";
import { registerUser } from "../helpers/AxiosHelper";

export const Register = () => {
  const [registerDetail, setRegisterDetail] = useState({});
  const inputFields = [
    {
      label: "email",
      placeholder: "youremail@gmail.com",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "First Name",
      placeholder: "John",
      name: "fName",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      placeholder: "Smith",
      name: "lName",
      type: "text",
      required: true,
    },

    {
      label: "Pin",
      placeholder: "****",
      name: "pin",
      type: "pin",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setRegisterDetail({
      ...registerDetail,
      [name]: value,
    });
  };
  console.log(registerDetail);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(registerDetail);
    console.log(result);
  };
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col className="bg-warning">
            <h2>Welcome to the Library management system</h2>
            <p>Please use the register form to register</p>
          </Col>
          <Col>
            <Form onSubmit={handleOnSubmit}>
              {inputFields.map((item, i) => {
                return (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                );
              })}
              <Form.Select
                name="role"
                required
                className="mt-2 mb-2"
                onChange={handleOnChange}
              >
                <option value="">Select</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </Form.Select>
              <div>
                <Button type="submit">Register</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
