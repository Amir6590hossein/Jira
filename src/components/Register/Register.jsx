import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../../Image/Group 80.png";

export default function Register() {
  return (
    <div className="form-parent">
      <div className="my-form">
        <Form className="mb-3 col-4 form-group">
          <Form.Group className="mb-3 form-group" controlId="Email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Password" />
          </Form.Group>

          <Form.Group className="mb-3 form-group">
            <Form.Label>Passsword:</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>

          <Form.Group className="mb-3 form-group">
            <Form.Label>Confirm Passsword:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Confirm Password"
            />
          </Form.Group>

          <Button type="submit" className="col-4">
            Sign up
          </Button>
        </Form>

        <div>
          <img src={logo} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}
