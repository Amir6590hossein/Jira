import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import Image from "./../../Image/Group 80.png";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Row className="mt-2">
        <Col lg={2}></Col>
        <Col lg={3} className="">
          <h1 className="Train">Train 2.0</h1>
          <h4 className="text-primary">reach your desired station</h4>
          <p className="text-white-50">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Stack>
            <Button
              onClick={(e) => {
                navigate("/register");
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Col>
        <Col lg={2}></Col>

        <Col lg={3}>
          <img src={Image} className="image" alt="jaaa" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}></Col>
        <Col lg={2}>
          <h1 className="text-white">see how Train works</h1>
          <h6 className="text-white-50">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </h6>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
}
