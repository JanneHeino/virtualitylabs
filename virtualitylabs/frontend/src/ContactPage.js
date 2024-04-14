import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const baseUrl = "http://localhost:3001";
  //const baseUrl = "https://virtualitylabs-server.vercel.app";

  const handleSubmit = async(e) => {
    e.preventDefault();

    
    
    //alert('Form submitted. Implement form submission logic here.');
    try {
      console.log("try handlesubmit");
      const response = await fetch(`${baseUrl}/api/sendEmail`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
        },
      })

      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        throw new Error('Email sending failed');
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  



 

  // Style for larger icons
  const iconStyle = { fontSize: '2rem', display: 'block', margin: '0 auto', color: '#69A9FF' };

  // Style for larger text
  const textStyle = { fontSize: '1.25rem', display: 'block'};

  return (
    <Container>
      <h1>Ota yhteyttä</h1>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nimi</Form.Label>
          <Form.Control type="text" placeholder="Syötä nimi" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sähköposti</Form.Label>
          <Form.Control type="email" placeholder="Syötä sähköposti" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Puhelinnumero</Form.Label>
          <Form.Control type="tel" placeholder="Syötä puhelinnumero" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Viestisi</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Kirjoita viestisi" name="message" value={formData.message} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type='submit'>
          Lähetä
        </Button>
      </Form>
      <Row className="mt-4">
        <Col xs={12} md={6} className="text-center mb-3">
          <TelephoneFill style={iconStyle} />
          <span style={textStyle}>+358 40 966 0104</span>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <EnvelopeFill style={iconStyle} />
          <span style={textStyle}>service.virtualitylabs@gmail.com</span>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
