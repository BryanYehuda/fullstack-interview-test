import React from 'react';
import Head from 'next/head';
import { Container, Form, Button } from 'react-bootstrap';

const EditEmployee = () => {
  return (
    <>
      <Head>
        <title>Edit Employee | My App</title>
      </Head>
      <Container>
        <h1 className="mt-5 mb-4">Edit Employee Data</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditEmployee;