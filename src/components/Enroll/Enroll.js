import React from "react";
import { Button, Form, Row, Col, Table } from "react-bootstrap";

const Enroll = () => {
  return (
    <div className="container">
      <img
        className="img-fluid mt-5 mb-4"
        src="https://smartdata.tonytemplates.com/dricub-driving-school/wp-content/uploads/2017/10/img-02.png"
        alt=""
      />

      <div className=" row mt-4 mb-4  ">
        <div className="col-md-6">
          <h3>Fill the form first to get enroll </h3>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control type="phone" placeholder="Enter phone number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Our training schedule</h2>
          <Table striped bordered hover className="table-dark">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sat</td>
                <td>11am - 7pm</td>
              </tr>
              <tr>
                <td>Sun</td>
                <td>10am - 8pm</td>
              </tr>
              <tr>
                <td>Mon</td>
                <td>12am - 9pm</td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>11am - 8pm</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>10am - 8pm</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
