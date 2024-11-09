import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product'; 
import ProductDetail from './components/ProductDetail'; 
import StoreProfile from './components/StoreProfile'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {}
          <Route path="/" element={<StoreProfile />} />

          {}
          <Route path="/products" element={<ProductDetail />} />

          {}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
