import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

import { CustomInput } from "../components/CustomInput";
import { MainLayout } from "../components/MainLayout";
import { getUser } from "../helpers/AxiosHelper";

export const Login = () => {
  const inputFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "youremail.com",
    },
    {
      label: "Pin",
      type: "pin",
      name: "pin",
      placeholder: "****",
    },
  ];
  const [loginDetail, setLoginDetail] = useState({});
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLoginDetail({
      ...loginDetail,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await getUser(loginDetail);
    console.log(result);
  };
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col className="bg-primary text-white ">
            <h2>Welcome to the your Personal library Protol</h2>
            <p>Please login with your credential</p>
          </Col>
          <Col>
            <Form onSubmit={handleOnSubmit}>
              {inputFields.map((item, i) => {
                return (
                  <CustomInput key={i} onChange={handleOnChange} {...item} />
                );
              })}
              <div>
                <Button type="submit">Login</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
