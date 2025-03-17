import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const sampleProperties = [
  { id: 1, title: "Luxury Villa", price: "$500,000", img: "https://via.placeholder.com/300" },
  { id: 2, title: "Cozy Apartment", price: "$200,000", img: "https://via.placeholder.com/300" },
];

const Listings = () => {
  return (
    <Container>
      <h2 className="mb-4">Available Properties</h2>
      <Row>
        {sampleProperties.map((property) => (
          <Col md={4} key={property.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={property.img} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>Price: {property.price}</Card.Text>
                <Button as={Link} to={`/property/${property.id}`} variant="primary">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listings;
