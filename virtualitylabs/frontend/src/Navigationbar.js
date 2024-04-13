import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import logoImage from './images/Virtuality Labs Logo Icon Dark.png'; 
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';


import './Navigationbar.css';

const Navigationbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between">
            <Container fluid> {/* Lisätty fluid määrite, jos tarvitaan koko sivun leveyttä */}

                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src={logoImage} 
                            alt="Logo"
                            style={{ maxHeight: '75px' }} 
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Pääsivu</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/services">
                            <Nav.Link>Palvelut</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/aboutus">
                            <Nav.Link>Tietoa meistä</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Ota yhteyttä</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://www.instagram.com/virtualitylabs/"><FaInstagram /></Nav.Link>
                        <Nav.Link href="https://fi.linkedin.com/company/virtuality-labs-oy?trk=similar-pages"><FaLinkedinIn /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
