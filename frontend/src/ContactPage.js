import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle form submission, e.g., via an API call
        alert('Form submitted. Replace this with your logic.');
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h2>Contact Us</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your message" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
