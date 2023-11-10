import React, { useContext } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import logo from "../../Image/Group 80.png";
import { userContext } from "../Context/context";

export default function Register() {
  const {
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    validator,
  } = useContext(userContext);
  return (
    <div className="form-parent">
      <div className="my-form">
        <Form
          className="mb-3 col-4 form-group"
          onSubmit={(e) => {
            handleRegister(e);
          }}
        >
          <Form.Group className="mb-3 form-group" controlId="Email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
              }}
            />
            {validator.current.message("email", email, "required|email")}
          </Form.Group>

          <Form.Group className="mb-3 form-group" controlId="phoneNumber">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="phoneNumber"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validator.current.showMessageFor("phoneNumber");
              }}
            />
            {validator.current.message(
              "phoneNumber",
              phoneNumber,
              "required|phoneNumber"
            )}
          </Form.Group>

          <Form.Group className="mb-3 form-group" controlId="firstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type=""
              text
              placeholder="Enter Your First Name:"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                validator.current.showMessageFor("firstName");
              }}
            />
            {validator.current.message(
              "firstName",
              firstName,
              "required|min:3"
            )}
          </Form.Group>

          <Form.Group className="mb-3 form-group" controlId="lastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Last Name:"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validator.current.showMessageFor("lastName");
              }}
            />
            {validator.current.message("lastName", lastName, "required|min:3")}
          </Form.Group>

          <Form.Group className="mb-3 form-group">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => {
                setPassword(e.target.value);
                validator.current.showMessageFor("password");
              }}
            />
            {validator.current.message(
              "password",
              password,
              "required|password"
            )}
          </Form.Group>

          <Form.Group className="mb-3 form-group">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Confirm Password"
              value={confirmPassword}
              autoComplete="new-password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validator.current.showMessageFor("confirmPassword");
              }}
            />
            {validator.current.message(
              "confirmPassword",
              confirmPassword,
              `required|in:${password}`
            )}
          </Form.Group>
          <Stack className="col-4">
            <Button type="submit">Sign up</Button>
          </Stack>
        </Form>

        <div>
          <img src={logo} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}
