import React from 'react';
import Head from 'next/head';
import { Container, Table, Button } from 'react-bootstrap';

const Admin = () => {
  const data = [
    { id: 1, name: 'John Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', email: 'johndoe@example.com', phone: '(123) 456-7890', address: '123 Main St, Anytown USA' },
    { id: 2, name: 'Jane Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', email: 'janedoe@example.com', phone: '(123) 456-7890', address: '123 Main St, Anytown USA' },
    { id: 3, name: 'Bob Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', email: 'bobsmith@example.com', phone: '(123) 456-7890', address: '123 Main St, Anytown USA' },
    { id: 4, name: 'Mary Johnson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', email: 'maryjohnson@example.com', phone: '(123) 456-7890', address: '123 Main St, Anytown USA' },
  ];

  return (
    <>
      <Head>
        <title>Admin | My App</title>
      </Head>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mt-5 mb-4">Employee Data</h1>
          <Button variant="success">Add Data</Button>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <Button variant="info">Edit</Button>{' '}
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Admin;
