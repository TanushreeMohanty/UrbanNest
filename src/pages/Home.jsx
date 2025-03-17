import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="mb-4">Find Your Dream Home 🏠</h1>
      <p>Discover the best properties in your area with ease.</p>
      <Button as={Link} to="/listings" variant="primary">Browse Listings</Button>
    </Container>
  );
};

export default Home;
