import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopDetail from './components/ShopDetail'; // หรือ path ของ ShopDetail
import ReccomendShop from './components/ReccomendShop';
import Product from './components/Product'; // หรือ path ของ Product
import Header from './components/Header';
import Navbar from './components/Navbar';
import AutoScrollingBanner from './components/AutoScrollingBanner';
import Footer from './components/Footer';
import Reccomend from './components/Reccomend'; 
import Watson from './components/Watson';
import Boots from './components/Boots';
import Product2 from './components/Product2';
import ProductList from './components/ProductList';


function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <AutoScrollingBanner/>
      <Reccomend/>
      <ReccomendShop />
      <Footer/>
    </Router>
  );
}

export default App;
