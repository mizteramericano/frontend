import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="navbar-custom py-3">
            <Container>
                {/* เมนูด้านซ้าย */}
                <Nav className="me-auto">
                    {/* Skincare Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="skincare-dropdown">
                            Skincare
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#skincare-clearNose">ClearNose</Dropdown.Item>
                            <Dropdown.Item href="#skincare-anua">Anua</Dropdown.Item>
                            <Dropdown.Item href="#skincare-cerave">CeraVe</Dropdown.Item>
                            <Dropdown.Item href="#skincare-eucerin">Eucerin</Dropdown.Item>
                            <Dropdown.Item href="#skincare-innisfree">Innisfree</Dropdown.Item>
                            {/* Add more brands as needed */}
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* MakeUp Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="makeup-dropdown">
                            MakeUp
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#makeup-3ce">3ce</Dropdown.Item>
                            <Dropdown.Item href="#makeup-4u2">4U2</Dropdown.Item>
                            <Dropdown.Item href="#makeup-espoir">espoir</Dropdown.Item>
                            <Dropdown.Item href="#makeup-etude">Etude</Dropdown.Item>
                            <Dropdown.Item href="#makeup-fwee">Fwee</Dropdown.Item>
                            {/* Add more brands as needed */}
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Brand Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="brand-dropdown">
                            Brand
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#brand-clearNose">ClearNose</Dropdown.Item>
                            <Dropdown.Item href="#brand-anua">Anua</Dropdown.Item>
                            <Dropdown.Item href="#brand-cerave">CeraVe</Dropdown.Item>
                            <Dropdown.Item href="#brand-eucerin">Eucerin</Dropdown.Item>
                            <Dropdown.Item href="#brand-innisfree">Innisfree</Dropdown.Item>
                            <Dropdown.Item href="#makeup-3ce">3ce</Dropdown.Item>
                            <Dropdown.Item href="#makeup-4u2">4U2</Dropdown.Item>
                            <Dropdown.Item href="#makeup-espoir">espoir</Dropdown.Item>
                            <Dropdown.Item href="#makeup-etude">Etude</Dropdown.Item>
                            <Dropdown.Item href="#makeup-fwee">Fwee</Dropdown.Item>
                            {/* Add more brands as needed */}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

                {/* ช่องค้นหาด้านขวา */}
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
