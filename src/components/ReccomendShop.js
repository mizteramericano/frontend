// ReccomendShop.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReccomendShop.css';

const ReccomendShop = () => {
    const navigate = useNavigate();

    // ฟังก์ชันสำหรับไปยังหน้า ShopDetail ของ Beautrium
    const navigateToBeautrium = () => {
        navigate('/shopdetail'); // นำทางไปยัง ShopDetail.js
    };

    // ฟังก์ชันสำหรับไปยังหน้า Watson
    const navigateToWatson = () => {
        navigate('/watson'); // นำทางไปยัง Watson.js
    };

    const navigateToBoots = () => {
        navigate('/boots'); // นำทางไปยัง Boots.js
    };

    return (
        <div className="reccomend-shop-section">
            <h2 className="reccomend-shop-title">ร้านค้าแนะนำ</h2>
            <div className="reccomend-shop-container">
                {/* ปุ่มสำหรับร้าน Beautrium */}
                <button
                    className="reccomend-shop-button"
                    onClick={navigateToBeautrium}
                >
                    <img src="\images\logo.jpg" alt="Beautrium" className="shop-logo" />
                    <h3 className="shop-name">Beautrium</h3>
                </button>

                {/* ปุ่มสำหรับร้าน Watson */}
                <button
                    className="reccomend-shop-button"
                    onClick={navigateToWatson}
                >
                    <img src="\images\watsonlogo.jpg" alt="Watson" className="shop-logo" />
                    <h3 className="shop-name">Watson</h3>
                </button>

                {/* ปุ่มสำหรับร้าน Boots */}
                <button className="reccomend-shop-button" onClick={navigateToBoots}>
                    <img src="\images\bootslogo.jpg" alt="Boots" className="shop-logo" />
                    <h3 className="shop-name">Boots</h3>
                </button>
                
            </div>
        </div>
    );
};

export default ReccomendShop;
