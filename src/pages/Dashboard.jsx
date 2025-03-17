import { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const Dashboard = () => {
  const [properties, setProperties] = useState([
    { id: 1, title: "Luxury Villa", price: "$500,000", status: "Available" },
    { id: 2, title: "Cozy Apartment", price: "$200,000", status: "Sold" },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, name: "John Doe", message: "I'm interested in the villa!" },
    { id: 2, name: "Jane Smith", message: "Can I schedule a visit?" },
  ]);

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light p-3">
          <h4>Dashboard</h4>
          <ListGroup>
            <ListGroup.Item action>Manage Listings</ListGroup.Item>
            <ListGroup.Item action>View Messages</ListGroup.Item>
            <ListGroup.Item action>Profile Settings</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-4">
          <h2>Welcome to Your Dashboard</h2>

          {/* Property Listings Section */}
          <Card className="mb-4">
            <Card.Header>Manage Listings</Card.Header>
            <Card.Body>
              {properties.map((property) => (
                <Card key={property.id} className="mb-2">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Card.Title>{property.title}</Card.Title>
                        <Card.Text>Price: {property.price}</Card.Text>
                        <Card.Text>Status: {property.status}</Card.Text>
                      </Col>
                      <Col md={6} className="text-end">
                        <Button variant="info" className="me-2">Edit</Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteProperty(property.id)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>

          {/* Messages Section */}
          <Card>
            <Card.Header>User Messages</Card.Header>
            <Card.Body>
              {messages.map((msg) => (
                <Card key={msg.id} className="mb-2">
                  <Card.Body>
                    <Card.Title>{msg.name}</Card.Title>
                    <Card.Text>{msg.message}</Card.Text>
                    <Button variant="primary">Reply</Button>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
