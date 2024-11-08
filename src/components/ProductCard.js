import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ฿{product.price.toLocaleString()}</p>
                <p className="product-quantity">Stock: {product.quantity}</p>
                <button className="view-button">View Product</button>
            </div>
        </div>
    );
};

export default ProductCard;
