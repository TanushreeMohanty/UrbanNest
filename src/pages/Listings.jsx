import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { FaThLarge, FaList } from "react-icons/fa";
import "./Listings.css";  // Import CSS file
import propImg from '../assets/prop.webp';

const sampleProperties = [
  { id: 1, title: "Luxury Villa", price: "$500,000", location: "New York", img: propImg },
  { id: 2, title: "Cozy Apartment", price: "$200,000", location: "Los Angeles", img: propImg },
  { id: 3, title: "Modern House", price: "$350,000", location: "San Francisco", img: propImg },
];

const Listings = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Available Properties</h2>

        {/* Toggle Button for Grid/List View */}
        <ToggleButtonGroup type="radio" name="viewOptions" value={viewMode} onChange={setViewMode}>
          <ToggleButton id="grid-view" variant="outline-primary" value="grid">
            <FaThLarge /> Grid View
          </ToggleButton>
          <ToggleButton id="list-view" variant="outline-primary" value="list">
            <FaList /> List View
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Property Listings */}
      <div className={`property-listings ${viewMode}-view`}>
        {sampleProperties.map((property) => (
          <div key={property.id} className="property-card">
            <Card>
              <Card.Img src={property.img} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {property.price} <br />
                  <strong>Location:</strong> {property.location}
                </Card.Text>
                <Button as={Link} to={`/property/${property.id}`} variant="primary">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Listings;
