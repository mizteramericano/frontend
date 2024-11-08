// components/brandDetail.js

import React from 'react';

const BrandCard = ({ brand, onViewClick }) => {
    return (
        <div className="brand-card">
            <img src={brand.logoUrl} alt={brand.name} className="brand-logo" />
            <h2>{brand.name}</h2>
            <button onClick={() => onViewClick(brand.website)} className="view-button">View</button>
        </div>
    );
};

export default BrandCard;
