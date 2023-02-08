import React from "react";
import { Form } from "react-bootstrap";

export const InputField = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};
