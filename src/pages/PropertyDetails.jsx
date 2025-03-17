import { useParams } from "react-router-dom";
import { Container, Carousel, Card, ListGroup, Button } from "react-bootstrap";
import './PropertyDetails.css';
import propImg from '../assets/prop.webp';

const sampleProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    price: "$500,000",
    description: "A beautiful villa with ocean views and modern interiors.",
    images: [
      propImg,
      propImg,
      
    ],
    location: "Los Angeles, CA",
    bedrooms: 4,
    bathrooms: 3,
    area: "3500 sqft",
    agent: {
      name: "John Doe",
      phone: "+1 555 1234",
      email: "johndoe@email.com",
    },
  },
  {
    id: 2,
    title: "Cozy Apartment",
    price: "$200,000",
    description: "A cozy apartment in the heart of the city with all amenities.",
    images: [
      propImg,
      propImg,
    ],
    location: "New York, NY",
    bedrooms: 2,
    bathrooms: 1,
    area: "1200 sqft",
    agent: {
      name: "Sarah Lee",
      phone: "+1 555 5678",
      email: "sarahlee@email.com",
    },
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = sampleProperties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <Container><h2>Property Not Found</h2></Container>;
  }

  return (
    <Container className="property-container">
      <h2 className="property-title">{property.title}</h2>

      {/* Image Carousel */}
      <Carousel>
        {property.images.map((img, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Property Info */}
      <Card className="property-card my-4">
        <Card.Body>
          <Card.Title>Property Details</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Price:</strong> {property.price}</ListGroup.Item>
            <ListGroup.Item><strong>Location:</strong> {property.location}</ListGroup.Item>
            <ListGroup.Item><strong>Bedrooms:</strong> {property.bedrooms}</ListGroup.Item>
            <ListGroup.Item><strong>Bathrooms:</strong> {property.bathrooms}</ListGroup.Item>
            <ListGroup.Item><strong>Area:</strong> {property.area}</ListGroup.Item>
            <ListGroup.Item><strong>Description:</strong> {property.description}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Agent Contact Section */}
      <Card className="agent-card my-4">
        <Card.Body>
          <Card.Title>Contact Agent</Card.Title>
          <p><strong>{property.agent.name}</strong></p>
          <p>📞 {property.agent.phone}</p>
          <p>📧 {property.agent.email}</p>
          <Button className="contact-btn" href={`mailto:${property.agent.email}`}>
            Send Email
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PropertyDetails;