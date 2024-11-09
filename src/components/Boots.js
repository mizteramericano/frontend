import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaStore, FaUser, FaCommentDots, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

const Boots = () => {
    const navigate = useNavigate();

    // Navigate to Product2.js with product data
    const navigateToProductDetails = (product) => {
        navigate('/product2', { state: { product } }); // Pass product data to Product2.js
    };

    return (
        <div className="container mt-4 store-profile-container">
            <Card className="store-profile-card">
                <Card.Header className="store-header">
                    <Row className="align-items-center">
                        <Col xs={4} md={3} className="d-flex justify-content-center position-relative">
                            <Badge
                                style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '-10px',
                                    backgroundColor: '#FF0030',
                                    color: 'white',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                }}
                            >
                                Shopee Mall
                            </Badge>

                            <img
                                src="https://down-th.img.susercontent.com/file/e59ab10ebe81ff1b98a0ccf8fa4622d2"
                                alt="Store Logo"
                                className="img-fluid store-logo"
                                style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                            />
                        </Col>
                        <Col xs={8} md={9} className="d-flex flex-column">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h2 className="store-name" style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Boots</h2>
                                <p style={{ fontSize: '0.9rem', color: 'gray' }}>เข้าระบบล่าสุดเมื่อ 1 นาที ที่ผ่านมา</p>
                            </div>

                            <div className="d-flex" style={{ gap: '10px', marginTop: '10px' }}>
                                <button
                                    style={{
                                        padding: '5px 15px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #ccc',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ติดตาม
                                </button>
                                <button
                                    style={{
                                        padding: '5px 15px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #ccc',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    พูดคุย
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>
                    <Row style={{ color: '#FF6347', fontSize: '0.9rem' }}>
                        <Col xs={12} md={6}>
                            <p style={{ cursor: 'pointer' }} onClick={() => alert("รายการสินค้า clicked")}>
                                <FaStore /> รายการสินค้า: <span style={{ color: '#d9534f' }}>4.8พัน</span>
                            </p>
                            <p style={{ cursor: 'pointer' }} onClick={() => alert("กำลังติดตาม clicked")}>
                                <FaUser /> กำลังติดตาม: <span style={{ color: '#d9534f' }}>5</span>
                            </p>
                            <p style={{ cursor: 'pointer' }} onClick={() => alert("ประสิทธิภาพการแชท clicked")}>
                                <FaCommentDots /> ประสิทธิภาพการแชท: <span style={{ color: '#d9534f' }}>97% (ภายในไม่กี่นาที)</span>
                            </p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p style={{ cursor: 'pointer' }} onClick={() => alert("ผู้ติดตาม clicked")}>
                                <FaUser /> ผู้ติดตาม: <span style={{ color: '#d9534f' }}>848.4พัน</span>
                            </p>
                            <p style={{ cursor: 'pointer' }} onClick={() => alert("คะแนน clicked")}>
                                <FaStar /> คะแนน: <span style={{ color: '#d9534f' }}>4.9 (การให้คะแนนทั้งหมด 659.1พัน)</span>
                            </p>
                            <p style={{ cursor: 'pointer' }} onClick={() => alert("เข้าร่วมเมื่อ clicked")}>
                                <FaUser /> เข้าร่วมเมื่อ: <span style={{ color: '#d9534f' }}>4 ปี ที่ผ่านมา</span>
                            </p>
                        </Col>
                    </Row>
                </Card.Body>

                <Card.Footer>
                    <h5>ข้อมูลติดต่อ</h5>
                    <p>ที่อยู่: 123 ถนนสยาม, กรุงเทพฯ</p>
                    <p>โทรศัพท์: 123-456-7890</p>
                    <p>อีเมล: store@example.com</p>
                </Card.Footer>
            </Card>

            {/* ส่วนที่เพิ่ม ProductList */}
            <div className="mt-4">
                <h3>สินค้าในร้าน</h3>
                <ProductList navigateToProductDetails={navigateToProductDetails} />
            </div>
        </div>
    );
};

export default Boots;
