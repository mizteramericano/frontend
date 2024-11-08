import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Product.css';
import { brand } from '../data/brand';

const Product = () => {
    const location = useLocation();
    const product = location.state?.product; // รับข้อมูลสินค้า

    if (!product) {
        return <div>Product not found</div>;
    }

    const brandData = brand.find(b => b.name === product.brand);

    return (
        <Container className="mt-4">
            <Row className="product-card shadow-card">
                <Col md={6} className="product-image-col">
                    <Image src={product.image} fluid className="product-image" />
                </Col>
                <Col md={6} className="product-details-col">
                    <div className="product-details">
                        <h2>{product.name}</h2>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p className="status-new-product"><strong>Status:</strong> {product.status}</p>
                        <Button variant="primary" className="my-2 shadow-btn">Add to Cart</Button>
                        <Button variant="success" className="my-2 shadow-btn">Buy Now</Button>
                    </div>
                </Col>
            </Row>

            {brandData && (
                <div className="brand-details mt-4">
                    <Image src={brandData.image} alt={brandData.name} className="brand-logo" />
                    <div className="brand-info">
                        <h5>{brandData.name}</h5>
                        <Button variant="outline-secondary" href={brandData.website} target="_blank">
                            View
                        </Button>
                    </div>
                </div>
            )}

            <Col md={20} className="product-details-col">
                <div className="product-details">
                    <h5>{product.name}</h5>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                    <p><strong>Created Date:</strong> {product.date}</p>
                    <p><strong>Updated Date:</strong> {product.update}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Shop:</strong> {product.shop}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                </div>
            </Col>
        </Container>
    );
};

export default Product;
