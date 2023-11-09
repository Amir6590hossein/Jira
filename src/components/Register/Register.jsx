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
              placeholder="Enter Your Email:"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
              }}
            />
            {validator.current.message("email", email, "required|email")}
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="Email">
            <Form.Label>Phone_Number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your phonNumber:"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validator.current.showMessageFor("phoneNumber");
              }}
            />
            {validator.current.message("email", email, "required|number")}
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="Email">
            <Form.Label>firstName:</Form.Label>
            <Form.Control
              type=""
              text
              placeholder="Enter Your firstname:"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                validator.current.showMessageFor("firstname");
              }}
            />
            {validator.current.message(
              "firstname",
              firstName,
              "required|min:3"
            )}
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="Email">
            <Form.Label>lastname:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your LastName:"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validator.current.showMessageFor("lastname");
              }}
            />
            {validator.current.message("lastname", lastName, "required|min:3")}
          </Form.Group>
          <Form.Group className="mb-3 form-group">
            <Form.Label>Passsword:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              value={password}
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
            <Form.Label>Confirm Passsword:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Confirm Password"
              value={confirmPassword}
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
