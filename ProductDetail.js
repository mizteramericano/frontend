import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const skincareProducts = [
  { id: 1, image: "https://prodenbcdn.azureedge.net/products/8850029040882/main/640/65796ce5af84302dd56c24c9.webp", title: "EUCERIN Pro Acne Solution Sos Serum 40 ML ฿743", category: "skincare" },
  { id: 2, image: "https://prodenbcdn.azureedge.net/products/717334257801/main/640/667e9399bddbe8f57bc59e3a.webp", title: "ORIGINS Dr.Weil Mega Mushroom Treatment Lotion 200 ML ฿1,710", category: "skincare" },
  { id: 3, image: "https://prodenbcdn.azureedge.net/products/887167485488/main/640/62f9f769f389bd3ce71ca4af.webp", title: "ESTEE LAUDER Advanced Night Repair Synchronized Multi-Recovery Complex 50 ML ฿4,590", category: "skincare" },
  { id: 4, image: "https://prodenbcdn.azureedge.net/products/3700194711719/main/640/664f13209f54224895b88a3f.webp", title: "KIEHL'S Calendula Herbal Extract Alcohol-Free Toner 500 ML ฿2,871", category: "skincare" },
  { id: 5, image: "https://prodenbcdn.azureedge.net/products/6917246006502/main/640/62d0dfcce837d154b9bd6de7.webp", title: "HADALABO Super Hyaluronic Acid Moisturizing Lotion 170 ML ฿520", category: "skincare" },
  { id: 6, image: "https://prodenbcdn.azureedge.net/products/8809803584852/main/640/645b5fd1b2d31c77b7a1b250.webp", title: "SULWHASOO First Care Activating Serum VI 90 ML ฿3,485", category: "skincare" },
  { id: 7, image: "https://prodenbcdn.azureedge.net/products/8809576261462/main/640/63313f54caa22564756ac87a.webp", title: "SKIN1004 Madagascar Centella Poreminizing Fresh Ampoule 100 ml ฿599", category: "skincare" },
  { id: 8, image: "https://prodenbcdn.azureedge.net/products/3337875597449/main/640/645b5fede224dc1b9d8b2a55.webp", title: "CERAVE PM Facial Moist Lotion 52 ML ฿655", category: "skincare" },
  { id: 9, image: "https://prodenbcdn.azureedge.net/products/3337875863377/main/640/664ef02766fc3b42390ffd3e.webp", title: "LA ROCHE POSAY Efflaclar Duo+M 40 ML ฿1,035", category: "skincare" },
  { id: 10, image: "https://prodenbcdn.azureedge.net/products/8858229093349/main/640/66a349c4ec090e7c2793c39e.webp", title: "INGU Lotus Cleansing Micellar Milk 100 ML ฿450", category: "skincare" },
];

const makeupProducts = [
  { id: 11, image: "https://prodenbcdn.azureedge.net/products/716170027456/main/640/664ef29ad7c33eb61a9b1cb0.webp", title: "BOBBI BROWN Vitamin Enriched Face Base 50 ML ฿2,700", category: "makeup" },
  { id: 12, image: "https://prodenbcdn.azureedge.net/products/6923492584206/main/640/6653f83e3cd3403b0d0ac3b9.webp", title: "MAYBELLINE Hyper Curl Volume Express Mascara 9.2 ML ฿99", category: "makeup" },
  { id: 13, image: "https://prodenbcdn.azureedge.net/products/773602522057/main/640/6105871c94ef1cb8f4b8e171.webp", title: "MAC Powder Kiss Lipstick 3 G ฿1,035", category: "makeup" },
  { id: 14, image: "https://prodenbcdn.azureedge.net/products/716170186283/main/640/63b7c9fd6a3a1a220991ceda.webp", title: "BOBBI BROWN Crushed Lip Color 3.4 G ฿1,350", category: "makeup" },
  { id: 15, image: "https://prodenbcdn.azureedge.net/products/8859575110599/main/640/649bc59d180f9a5af57ce1bd.webp", title: "4U2 For You Too Eyeshadow 15 1.8 G ฿159", category: "makeup" },
  { id: 16, image: "https://prodenbcdn.azureedge.net/products/773602050796/main/640/664ef487d7c33e9e2c9b4dac.webp", title: "MAC Studio Fix Powder Plus Foundation 15 G ฿1,800", category: "makeup" },
  { id: 17, image: "https://prodenbcdn.azureedge.net/products/027131977902/main/640/664f0c3a18a3d9514a85bae3.webp", title: "ESTEE LAUDER Double Wear Stay-In-Place Makeup SPF10 PA++ 30 ML ฿2,250", category: "makeup" },
  { id: 18, image: "https://prodenbcdn.azureedge.net/products/716170308708/main/640/642bab8e5d403e561eb3fe1f.webp", title: "BOBBI BROWN Extra Lip Tint-Bare Onyx 2.3 G ฿1,485", category: "makeup" },
  { id: 19, image: "https://prodenbcdn.azureedge.net/products/309974700030/main/640/6551e727bb1c837817992e11.webp", title: "REVLON Color Stay Makeup Foundation 30 ML ฿399", category: "makeup" },
  { id: 20, image: "https://prodenbcdn.azureedge.net/products/8858072045069/main/640/campaign/671b257657ede642eb293806.webp", title: "LIFEFORD Extreme Super Black Eyeliner 0.5 G ฿129", category: "makeup" },
];

const ProductDetail = () => {
  return (
    <div className="container mt-4">
      <h2>Skincare Products</h2>
      <Row>
        {skincareProducts.map((product) => (
          <Col xs={6} md={2} className="mb-4" key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <h2>Makeup Products</h2>
      <Row>
        {makeupProducts.map((product) => (
          <Col xs={6} md={2} className="mb-4" key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductDetail;
