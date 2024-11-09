import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>ราคา: {product.price}</p>
          <Link to={`/product/${product.id}`} className="view-more">
            รายละเอียดเพิ่มเติม
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
