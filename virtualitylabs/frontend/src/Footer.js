import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logoImage from './images/Virtuality Labs Logo Icon Dark.png'; // The correct path to your logo image file
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} md={4} className="mb-3 mb-md-0">
          <p>Luomme parempaa tulevaisuutta virtuaalisesti</p>
          </Col>
         
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <img src={logoImage} alt="Virtuality Labs Logo" className="footer-logo mx-auto" />
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h4>Seuraa meitä</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/virtualitylabs/" className="social-link"><FaInstagram /></a>
              <a href="https://fi.linkedin.com/company/virtuality-labs-oy?trk=similar-pages" className="social-link"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

