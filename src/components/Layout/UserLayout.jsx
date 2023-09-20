import React, { Fragment } from "react";
import UserMenu from "../User/UserMenu";
import { Col, Row } from "react-bootstrap";

export default function UserLayout({ children }) {
  return (
    <Fragment>
      <div className="UserLayout">
        <Row>
          <Col lg={3}>
            <UserMenu />
          </Col>
          <Col lg={9}>
            <div>{children}</div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
