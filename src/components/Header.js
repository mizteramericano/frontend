import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Container className="d-flex justify-content-between py-3">
                {/* ส่วน logo ร้าน และชื่อร้าน */}
                <div className="d-flex align-items-center">
                    <img
                        src="/images/chinchan.jpg" // ใช้ path ของโลโก้ร้าน Beautrium ที่นี่
                        alt="Beautrium Logo"
                        className="store-logo"
                    />
                    <h2 className="store-name ms-3">NameShop</h2>
                </div>

                {/* ปุ่ม log-in */}
                <Button variant="primary" className="shadow-btn">
                    Log-in
                </Button>
            </Container>
        </header>
    );
};

export default Header;
