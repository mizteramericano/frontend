// ReccomendShop.js
import React from 'react';

import { reccomShop } from '../data/reccomShop'; // import ข้อมูลร้านค้าแนะนำ
import './ReccomendShop.css'; // ใช้สไตล์ที่เราจะสร้าง

const ReccomendShop = () => {
    return (
        <div className="reccomend-shop-section">
            <h2 className="reccomend-shop-title">ร้านค้าแนะนำ</h2>
            <div className="reccomend-shop-container">
                {reccomShop.map((shop) => (
                    <div key={shop.id} className="reccomend-shop-card">
                        <img 
                            src={shop.logo} 
                            alt={shop.name} 
                            className="shop-logo" 
                        />
                        <h3 className="shop-name">{shop.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReccomendShop;
