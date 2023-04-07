import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | My App</title>
      </Head>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <h1 className="text-center mb-4">Login</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;