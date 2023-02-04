import React from "react";
import { Form, Button } from "react-bootstrap";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};
