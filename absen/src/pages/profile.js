import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Link from 'next/link';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile | My App</title>
      </Head>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Email: johndoe@example.com</ListGroupItem>
                <ListGroupItem>Phone: (123) 456-7890</ListGroupItem>
                <ListGroupItem>Address: 123 Main St, Anytown USA</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                <Link href="/attendance">
                  <Button variant="primary">Insert Attendance</Button>
                </Link>
                <Link href="/edit-profile">
                  <Button className="ms-2" variant="secondary">Edit Profile</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
