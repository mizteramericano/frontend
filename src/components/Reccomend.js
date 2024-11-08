// Reccomend.js
import React from 'react';
import { reccom } from '../data/reccom'; // import ข้อมูลสินค้าแนะนำ
import { Link } from 'react-router-dom'; // import Link สำหรับการนำทาง
import './Reccomend.css';

const Reccomend = () => {
    return (
        <div className="reccomend-section">
            <div className="reccomend-header">
                <h2 className="reccomend-title">สินค้าแนะนำ</h2>
                <div className="reccomend-links">
                    <Link to="/skincare" className="category-link">Skincare</Link> | 
                    <Link to="/makeup" className="category-link">MakeUp</Link>
                </div>
            </div>
            <div className="reccomend-container">
                {reccom.map((product) => (
                    <div key={product.id} className="reccomend-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">฿{product.price.toFixed(2)}</p>
                        <button className="view-more-button">buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reccomend;
