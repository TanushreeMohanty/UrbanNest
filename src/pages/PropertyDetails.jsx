import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <Container>
      <h2>Property Details - ID: {id}</h2>
      <p>More information about the property will be displayed here.</p>
    </Container>
  );
};

export default PropertyDetails;
