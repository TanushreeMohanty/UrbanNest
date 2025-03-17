import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        &copy; {new Date().getFullYear()} Real Estate Website | All Rights Reserved
      </Container>
    </footer>
  );
};

export default Footer;
