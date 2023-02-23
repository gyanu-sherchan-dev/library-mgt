import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { CustomInput } from "../customInput/CustomInput";
import { axiosCreateUser } from "../helpers/AxiosHelper";
import { MainLayout } from "../mainLayout/MainLayout";

const Register = () => {
  const input = [
    {
      label: "First Name",
      type: "text",
      name: "fname",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lname",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "4 Kings street",
      required: true,
    },
    {
      label: "Phone",
      type: "number",
      name: "phone",
      placeholder: "04********",
      required: true,
    },
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
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "****",
      required: true,
    },
  ];

  const [regData, setRegData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData({
      ...regData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(regData);
    const { status, message } = await axiosCreateUser(regData);
    status === "success" ? toast[status](message) : toast[status](message);
  };
  return (
    <MainLayout>
      <Container>
        <Row className="d-flex justify-content-center gap-3 mt-5">
          <Col className="reg-heading reg-main ">
            <h3>Welcome to Library Management System. Register here !</h3>
            <hr />
          </Col>
          <Col className="reg-main">
            <Form onSubmit={handleSubmit}>
              {input.map((item) => {
                return (
                  <CustomInput
                    {...item}
                    key={item.name}
                    onChange={handleChange}
                  />
                );
              })}
              <Form.Select
                className="mb-3"
                name="role"
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree T&Cs " required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Register;
