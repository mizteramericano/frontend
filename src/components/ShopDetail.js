import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // ใช้ react-router-dom สำหรับการนำทาง
import { shopdata } from '../data/shopdata';
import { allPro } from '../data/allPro'; // เรียกใช้ข้อมูลสินค้าจาก allPro.js
import './ShopDetail.css';

const ShopDetail = () => {
    const navigate = useNavigate(); // สร้างตัวแปรสำหรับใช้ navigate
    const shop = shopdata[0];

    // ฟังก์ชันที่ใช้สำหรับไปยังหน้ารายละเอียดสินค้า
    const handleProductDetail = (product) => {
        navigate('/product', { state: { product } }); // ส่งข้อมูลสินค้าผ่าน state ไปยัง Product.js
    };

    return (
        <Container className="mt-4">
            {/* ส่วนข้อมูลร้านค้า */}
            <Card className="mb-4 p-3" 
            style={{
                backgroundColor: 'black',
                color: 'white',
                boxShadow: '0 10px 5px rgba(0, 0, 0, 0.3)', // เพิ่มเงาให้กับ Card
                borderRadius: '20px' // เพิ่มความโค้งมนเล็กน้อยให้มุม Card
            }}>
                <Row>
                    <Col md={3} className="d-flex align-items-center justify-content-center">
                        <Card.Img variant="top" src={shop.image} alt="logo" style={{ width: '80%' }} />
                    </Col>
                    <Col md={9}>
                        <Card.Body>
                            <Card.Title as="h1">{shop.name}</Card.Title>
                            <Card.Text className="thai-text">{shop.description}</Card.Text>
                            <Card.Text><strong>Phone:</strong> {shop.phone}</Card.Text>
                            <Card.Text className="thai-text"><strong>Address:</strong> {shop.address}</Card.Text>
                            <Card.Text className="thai-text">
                                <strong>Contact:</strong> <a href="https://www.facebook.com/BEAUTRIUM/">{shop.contact}</a>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            {/* ส่วนสินค้า */}
            <h2>All Products</h2>
            <Row>
                {/* แสดงสินค้าจาก allPro.js */}
                {allPro.map((product) => (
                    <Col lg={2} md={3} sm={4} xs={6} key={product.id} className="my-3">
                        <Card style={{ width: '100%', minHeight: '250px' }}>
                            <Card.Img variant="top" src={product.image} style={{ height: '180px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '1rem', minHeight: '50px' }}>{product.name}</Card.Title>
                                <Button className="btn-red" onClick={() => handleProductDetail(product)}>รายละเอียดเพิ่มเติม</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ShopDetail;
