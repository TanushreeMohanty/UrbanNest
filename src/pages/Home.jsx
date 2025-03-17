import { Link } from "react-router-dom";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import "./Home.css"; // Import CSS for styling
import propImg from '../assets/prop.webp';
const featuredProperties = [
  { id: 1, title: "Modern Apartment", price: "$350,000", img: propImg },
  { id: 2, title: "Luxury Villa", price: "$750,000", img: propImg },
  { id: 3, title: "Beachfront House", price: "$1,200,000", img:propImg },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content text-center">
          <h1 className="hero-title">Find Your Dream Home 🏠</h1>
          <p className="hero-subtitle">Explore top-rated properties in your area.</p>
          {/* Search Bar */}
          <Button as={Link} to="/listings" variant="primary">Browse Listings</Button>
        </div>
      </div>

      {/* Featured Properties */}
      <Container className="featured-section">
        <h2>🏡 Featured Properties</h2>
        <Row>
          {featuredProperties.map((property) => (
            <Col md={4} key={property.id}>
              <Card className="property-card">
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
    </div>
  );
};

export default Home;

