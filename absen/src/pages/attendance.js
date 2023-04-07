import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Attendance = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    status: 'in',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Attendance | My App</title>
      </Head>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <h1 className="text-center mb-4">Attendance</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Enter time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="in">In</option>
                  <option value="out">Out</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Attendance;