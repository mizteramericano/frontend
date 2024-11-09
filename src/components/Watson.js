// Watson.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Watson = () => {
    const location = useLocation();
    const shop = location.state?.shop || {}; // รับข้อมูลร้านจาก state

    return (
        <Container className="mt-4">
            <Card className="mb-4 p-3" style={{ backgroundColor: 'white', color: 'black' }}>
                <Row>
                    <Col md={3} className="d-flex align-items-center justify-content-center">
                        <Card.Img variant="top" src={shop.logo} alt="logo" style={{ width: '80%' }} />
                    </Col>
                    <Col md={9}>
                        <Card.Body>
                            <Card.Title as="h1">{shop.name}</Card.Title>
                            <Card.Text>{shop.description}</Card.Text>
                            <Card.Text><strong>Phone:</strong> {shop.phone}</Card.Text>
                            <Card.Text><strong>Address:</strong> {shop.address}</Card.Text>
                            <Card.Text><strong>Contact:</strong> <a href={shop.contact}>{shop.contact}</a></Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Watson;
