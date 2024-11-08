import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // อัปเดตใช้ Routes แทน Switch
import Header from './components/Header';
import Navbar from './components/Navbar';
import AutoScrollingBanner from './components/AutoScrollingBanner';
import Reccomend from './components/Reccomend';
import ReccomendShop from './components/ReccomendShop';
import ShopDetail from './components/ShopDetail'; // นำเข้า ShopDetail
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <AutoScrollingBanner/>
      <ReccomendShop/>
      <Footer/>
    </Router>
  );
}

export default App;
