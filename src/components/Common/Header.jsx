import React from "react";
import { Link } from "react-router-dom";
import image from "./../../Image/Train.png";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
export default function Header() {
  return (
    <Row className="Header-parent">
      <Col lg={2}></Col>
      <Col lg={5}>
        <Navbar>
          <Navbar.Brand className="Train">
            <img src={image} alt="" />
            Train2.0
          </Navbar.Brand>
          <Container>
            <Nav>
              <Nav.Link as={Link} to={"/"} className="navLink">
                Home
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/" className="navLink">
                Demo
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Col>
      <Col lg={3} style={{ marginTop: "20px" }}>
        <Button variant="danger">sign in</Button>
      </Col>
    </Row>
  );
}
