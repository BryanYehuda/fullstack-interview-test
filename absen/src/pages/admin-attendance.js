import React from 'react';
import Head from 'next/head';
import { Container, Table } from 'react-bootstrap';

const Admin = () => {
  const data = [
    { id: 1, name: 'John Doe', date: '2022-04-07', time: '08:00:00', status: 'In' },
    { id: 2, name: 'Jane Doe', date: '2022-04-07', time: '08:15:00', status: 'In' },
    { id: 3, name: 'Bob Smith', date: '2022-04-07', time: '08:30:00', status: 'In' },
    { id: 4, name: 'Mary Johnson', date: '2022-04-07', time: '08:45:00', status: 'In' },
  ];

  return (
    <>
      <Head>
        <title>Admin | My App</title>
      </Head>
      <Container>
        <h1 className="mt-5 mb-4">Attendance Data</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Admin;
