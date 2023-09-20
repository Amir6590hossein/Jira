import React from "react";
import {
  Button,
  Col,
  DropdownButton,
  Form,
  FormLabel,
  Row,
  Stack,
} from "react-bootstrap";

export default function NewProject() {
  return (
    <div className="NewProject">
      <div>
        <Form>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="projectName">
                <Form.Label className="formLable ">Project name:</Form.Label>
                <Form.Control type="text" placeholder="Choose a name" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Stack className="" gap={1}>
                <FormLabel className="formLable">
                  {" "}
                  Chosse board picture
                </FormLabel>
                <Button>browse</Button>
                <Button>choose from gallery</Button>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="formLable col-3">
                  Description:
                </Form.Label>
                <Form.Control
                  as={"textarea"}
                  rows={5}
                  placeholder="Describe your project"
                />
              </Form.Group>
            </Col>

            <Col lg={4}>
              <Stack gap={1}>
                <Form.Group>
                  <Form.Label className="formLable">Add tags:</Form.Label>
                  <Form.Control type="text" placeholder="Tag's name:" />
                </Form.Group>
                <DropdownButton
                  id="choose icon"
                  title="choose icone"
                  variant="secondary"
                ></DropdownButton>
              </Stack>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
