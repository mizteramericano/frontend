import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaStore, FaUser, FaCommentDots, FaStar } from 'react-icons/fa';
import ProductDetail from './ProductDetail'; 

const StoreProfile = () => {
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
                Eveanboy Mall
              </Badge>

              <img
                src="https://www.thpromotion.com/wp-content/uploads/2023/10/eveandboy-logo-400x400-1.webp" 
                alt="Store Logo"
                className="img-fluid store-logo"
                style={{ borderRadius: '50%', width: '100px', height: '100px' }}
              />
            </Col>
            <Col xs={8} md={9} className="d-flex flex-column">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 className="store-name" style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Eveanboy</h2>
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
          <p style={{ fontStyle: 'italic', color: '#666', marginTop: '10px' }}>
            ร้านขายเครื่องสำอางค์และน้ำหอมแท้ 100% ที่มีรายการสินค้ามากที่สุด ทั้งสินค้าเคาน์เตอร์แบรนด์ เครื่องสำอางค์เกาหลีนำเข้า ที่ทุกคนตามหา ไม่ว่าจะเป็นสกินแคร์ เมคอัพ น้ำหอม พร้อมโปรโมชั่นพิเศษเพียบ
          </p>
          <Row style={{ color: '#FF6347', fontSize: '0.9rem' }}>
            <Col xs={12} md={6}>
              <p style={{ cursor: 'pointer' }} onClick={() => alert("รายการสินค้า clicked")}>
                <FaStore /> รายการสินค้า: <span style={{ color: '#d9534f' }}>14.6พัน</span>
              </p>
              <p style={{ cursor: 'pointer' }} onClick={() => alert("กำลังติดตาม clicked")}>
                <FaUser /> กำลังติดตาม: <span style={{ color: '#d9534f' }}>2</span>
              </p>
              <p style={{ cursor: 'pointer' }} onClick={() => alert("ประสิทธิภาพการแชท clicked")}>
                <FaCommentDots /> ประสิทธิภาพการแชท: <span style={{ color: '#d9534f' }}>100% (ภายในไม่กี่นาที)</span>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p style={{ cursor: 'pointer' }} onClick={() => alert("ผู้ติดตาม clicked")}>
                <FaUser /> ผู้ติดตาม: <span style={{ color: '#d9534f' }}>970.4พัน</span>
              </p>
              <p style={{ cursor: 'pointer' }} onClick={() => alert("คะแนน clicked")}>
                <FaStar /> คะแนน: <span style={{ color: '#d9534f' }}>4.9 (การให้คะแนนทั้งหมด 1.1 ล้าน)</span>
              </p>
              <p style={{ cursor: 'pointer' }} onClick={() => alert("เข้าร่วมเมื่อ clicked")}>
                <FaUser /> เข้าร่วมเมื่อ: <span style={{ color: '#d9534f' }}>3 ปี ที่ผ่านมา</span>
              </p>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer>
          <h5>ข้อมูลติดต่อ</h5>
          <p>ที่อยู่: 456 เขตปทุมวัน, กรุงเทพฯ</p>
          <p>โทรศัพท์: 123-456-7890</p>
          <p>ลิงค์ร้านค้า: www.eveandboy.com</p>
        </Card.Footer>
      </Card>

      <div className="mt-4">
        <h3>สินค้าในร้าน</h3>
        <ProductDetail />
      </div>
    </div>
  );
};

export default StoreProfile;
