import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const productData = {
  1: { 
    name: "EUCERIN Pro Acne Solution Sos Serum 40 ML",
    price: "฿743",
    
    image: "https://prodenbcdn.azureedge.net/products/8850029040882/main/640/65796ce5af84302dd56c24c9.webp",
    description: "EUCERIN Pro Acne Solution Sos Serum ผลิตภัณฑ์ เหมาะสำหรับผิวเป็นสิว ด้วย 3 ประสิทธิภาพในการลดปัญหาสิว",
  },
  2: { 
    name: "ORIGINS Dr.Weil Mega Mushroom Treatment Lotion 200 ML",
    price: "฿1710",
   
    image: "https://prodenbcdn.azureedge.net/products/717334257801/main/640/667e9399bddbe8f57bc59e3a.webp",
    description: "ORIGINS Dr. Weil Mega Mushroom Treatment Lotion ขนาด 200 ml. ทรีตเมนต์โลชั่นเนื้อบางเบา ที่ซึมซาบสู่ผิวอย่างล้ำลึก เพิ่มความชุ่มชื้นให้กับผิว และช่วยให้ผิวสงบลงอย่างรวดเร็ว ช่วยบรรเทารอยแดงและอาการระคายเคืองเมื่อเวลาผ่านไป ทำให้รูขุมขนแลดูกระชับอย่างเห็นได้ชัด ผิวเรียบเนียนขึ้นและลดเลือนความหมองคล้ำ",
  },
  3: { 
    name: "ESTEE LAUDER Advanced Night Repair Synchronized Multi-Recovery Complex 50 ML",
    price: "฿4590",
   
    image: "https://prodenbcdn.azureedge.net/products/887167485488/main/640/62f9f769f389bd3ce71ca4af.webp",
    description: "ESTEE LAUDER Advanced Night Repair Synchronized Multi-Recovery Complex เซรั่มที่ช่วยฟื้นบำรุงเส้นริ้วรอยให้แลดูจางลง เพิ่มประสิทธิภาพเพื่อผิวที่รู้สึกเต่งตึงกว่าที่เคย",
  },
  4: { 
    name: "KIEHL'S Calendula Herbal Extract Alcohol-Free Toner 500 ML",
    price: "฿2871",
    
    image: "https://prodenbcdn.azureedge.net/products/3700194711719/main/640/664f13209f54224895b88a3f.webp",
    description: "KIEHL'S Calendula Herbal Extract Alcohol-Free Toner ขนาด 500 ml. โทนเนอร์ดอกคาเลนดูล่า สูตรไร้แอลกอฮอล์ ปลอบประโลมและทำความสะอาดผิวอย่างอ่อนโยน เหมาะสำหรับผิวธรรมดาถึงผิวมัน",
  },
  5: { 
    name: "HADALABO Super Hyaluronic Acid Moisturizing Lotion 170 ML",
    price: "฿520",
    
    image: "https://prodenbcdn.azureedge.net/products/6917246006502/main/640/62d0dfcce837d154b9bd6de7.webp",
    description: "HADA LABO Hydrating Lotion Rich ขนาด 170 ml. โลชั่นน้ำตบบำรุงผิวหน้า ช่วยเพิ่มการบำรุงด้วยปริมาณ Hyaluronic Acid ที่มากขึ้นและผสมผสานอย่างลงตัว เนื้อบางเบา แต่ให้ความชุ่มชื่นล้ำลึกได้ดี",
  },
  6: { 
    name: "SULWHASOO First Care Activating Serum VI 90 ML",
    price: "฿3485",
   
    image: "https://prodenbcdn.azureedge.net/products/8809803584852/main/640/645b5fd1b2d31c77b7a1b250.webp",
    description: "SULWHASOO First Care Activating Serum VI เซรั่มบำรุงผิวในขั้นตอนแรก เพิ่มพลังให้ผิวด้วยเทคโนโลยีจากโสม มอบประสิทธิภาพให้ผิวแข็งแรงมากยิ่งขึ้น",
  },
  7: { 
    name: "SKIN1004 Madagascar Centella Poreminizing Fresh Ampoule 100 ml ",
    price: "฿599",
    
    image: "https://prodenbcdn.azureedge.net/products/8809576261462/main/640/63313f54caa22564756ac87a.webp",
    description: "SKIN1004 Madagascar Centella Poreminizing Fresh Ampoule 100 ml. พอร์ไมซิ่ง เฟรช แอมพูล สูตรกระชับรูขุมขน ที่ผสานคุณค่าของ Centella Asiatica สารสกัดบริสุทธิ์จากมาดากัสการ์และ เปปไทด์คอมแพลกซ์ถึง 9 ชนิด",
  },
  8: { 
    name: "CERAVE PM Facial Moist Lotion 52 ML",
    price: "฿655",
    
    image: "https://prodenbcdn.azureedge.net/products/3337875597449/main/640/645b5fede224dc1b9d8b2a55.webp",
    description: "CERAVE PM Facial Moist Lotion ขนาด 52 ml. ครีมบำรุงกลางคืนที่มีส่วนผสมของไนอาซินาไมด์เหมาะสำหรับปลอบประโลมผิวขณะนอนหลับ เพื่อความชุ่มชื้นสูงสุดและฟื้นบำรุงปราการปกป้องผิวซึ่งช่วยรักษาความชุ่มชื้นของผิวไว้ ควรเลือกผลิตภัณฑ์ที่มีส่วนผสมของไฮยาลูโรนิค แอซิด และเซราไมด์ เราขอแนะนำครีมบำรุงกลางคืนที่ไม่ก่อให้เกิดการอุดตันอย่างเซราวี พีเอ็ม เฟเชียล มอยสเจอร์ไรซิง โลชั่น (CeraVe PM Facial Moisturizing Lotion) ซึ่งมีส่วนผสมที่ไม่อุดตันรูขุมขนหรือก่อให้เกิดสิว",
  },
  9: { 
    name: "LA ROCHE POSAY Efflaclar Duo+M 40 ML",
    price: "฿1035",
    
    image: "https://prodenbcdn.azureedge.net/products/3337875863377/main/640/664ef02766fc3b42390ffd3e.webp",
    description: "LA ROCHE POSAY Efflaclar Duo+M ลา โรช-โพเซย์ เอฟฟาคลาร์ ดูโอ+เอ็ม ผลิตภัณฑ์บำรุงผิวหน้า สำหรับผิวที่เป็นสิว มอยส์เจอไรเซอร์บำรุงผิว ช่วยลดปัญหาสิว พร้อม 3 ปฏิบัติการเพื่อการดูแลปัญหาสิวลดปัญหาสิว ลดเลือนรอยสิว ลดสิวเกิดซ้ำแม้หลังหยุดใช้ 1 สัปดาห์ ผสานศาสตร์แห่งไมโครไบโอม เพื่อรับมือปัญหาสิว",
  },
  10: { 
    name: "INGU Lotus Cleansing Micellar Milk 100 ML",
    price: "฿450",
    
    image: "https://prodenbcdn.azureedge.net/products/8858229093349/main/640/66a349c4ec090e7c2793c39e.webp",
    description: "คลีนซิ่ง ไมเซล่า เนื้อน้ํานม (Micellar Milk Make-up Remover) สําหรับล้างเครื่องสําอางและทําความสะอาดผิวหน้าในขั้นตอนแรกของการ Double Cleanse ช่วยขจัดสิ่งสกปรก และคราบไขมันบนใบหน้าได้อย่างหมดจด ด้วย Super Micellar Blend สารกลุ่ม Mild Surfactant (Glycerox HE, Glycerox 767, Olivem 400) ทําหน้าที่ดูดจับสิ่งสกปรกและคราบไขมันบนใบหน้าอย่างอ่อนโยน ลดโอกาสการอุดตันของรูขุมขน และยังคงความสมดุลของน้ํามันบนผิว โดยไม่รบกวนเกราะป้องกันผิว และไม่ทําให้ผิวแห้งตึงหลังล้าง ",
  },
  11: { 
    name: "BOBBI BROWN Vitamin Enriched Face Base 50 ML",
    price: "฿2700",
    
    image: "https://prodenbcdn.azureedge.net/products/716170027456/main/640/664ef29ad7c33eb61a9b1cb0.webp",
    description: " BOBBI BROWN Vitamin Enriched Face Base มอยส์เจอไรเซอร์ที่อุดมด้วยคุณค่าจากเชียร์บัตเตอร์และวิตามินบี ซี และ อี พร้อมช่วยปรับสภาพผิวให้ดูเปล่งปลั่งจากภายใน อีกทั้งยังทำหน้าที่ของไพรเมอร์ที่ช่วยให้เกลี่ยเครื่องสำอางได้ง่ายขึ้น มาในสูตรปราศจากน้ำมัน (Oil-Free) ใช้ได้ทุกสภาพผิว และสามารถใช้ได้ทั้งตอนเช้าและก่อนนอนโดยไม่ทำให้ผิวอุดตัน",
  },
  12: { 
    name: "MAYBELLINE Hyper Curl Volume Express Mascara 9.2 ML",
    price: "฿99",
   
    image: "https://prodenbcdn.azureedge.net/products/6923492584206/main/640/6653f83e3cd3403b0d0ac3b9.webp",
    description: "MAYBELLINE Hypercurl Volume Express Mascara สีดำ ขนตาหนา งอน เด้งนานกว่าเดิม ด้วยพอลีเมอร์พิเศษล็อคขนตา งอนไม่มีตกถึง 36 ชม. กันน้ำ กันเหงื่อ ไม่เลอะเปื้อน ทนทุกสภาพอากาศ ให้ขนตางอน หนาโดดเด่น ชัดกว่าที่เคย หัวแปรงพิเศษ ไม่มีเลอะ แปรงโค้งเรียว ปัดแล้วขนตาไม่จับตัวเป็นก้อน",
  },
  13: { 
    name: "MAC Powder Kiss Lipstick 3 G",
    price: "฿1035",
    image: "https://prodenbcdn.azureedge.net/products/773602522057/main/640/6105871c94ef1cb8f4b8e171.webp",
    description: "MAC Powder Kiss Lipstick สี Mull It Over ขนาด 3 g. ลิปสติกเนื้อแมตต์รูปแบบใหม่ใช้ง่าย ให้สีนุ่มฟุ้ง ติดทน ช่วยเคลือบริมฝีปากด้วยเนื้อสีที่ให้ความรู้สึกโรแมนติก ให้ลุคซอฟโฟกัสราวกับมีฟิลเตอร์ที่นุ่มนวล",
    discountCode: "SALE10%",
    discountPercent: 115,
  },
  14: { 
    name: "BOBBI BROWN Crushed Lip Color สีCranberry 3.4 G",
    price: "฿1350",
    image: "https://prodenbcdn.azureedge.net/products/716170186283/main/640/63b7c9fd6a3a1a220991ceda.webp",
    description: "BOBBI BROWN Crushed Lip Color สี #Cranberry ขนาด 3.4 g ลิปสติกรุ่นใหม่ที่จะช่วยแต่งแต้มริมฝีปากให้ดูราวกับเพิ่งผ่านการจุมพิต (The Just-Kissed Stain Effect) สร้างสรรค์ขึ้นด้วยแรงบันดาลใจจากสีสันในชีวิตประจำวันของหญิงสาวรุ่นใหม่ ที่ทั้งเก๋และใช้ง่าย แต่โดดเด่นสะดุดตา มาพร้อมเม็ดสีในแบบ Soft Matte สุดงดงาม มอบความชุ่มชื้นและคุณค่า และขี้ผึ้งคุณภาพสูงบำรุงจากวิตามิน E, C ติดทนนานได้สูงสุดถึง 8 ชั่วโมง โดยไม่เป็นคราบหรือจืดจางระหว่างวัน สามารถกลมกลืนไปกับริมฝีปากได้ อย่างเนียนแนบและเบาสบาย เพื่อเรียวปากเอิบอิ่ม ชุ่มชื้น ชวนสัมผัส",
    discountCode: "SALE10%",
    discountPercent: 150,
  },
  15: { 
    name: "4U2 For You Too Eyeshadow 14 1.8 G",
    price: "฿159",
    image: "https://prodenbcdn.azureedge.net/products/8859575110605/main/640/649bc5c81b1d3387c529df85.webp",
    description: "4U2 FOR YOU TOO EYESHADOW No.14 ขนาด 1.8 g ตาสวย วิ้งค์ประกาย ด้วยอายแชโดว์จากโฟร์ยูทู สองสีที่ดูเข้ากันในพาเลทเดียว เนรมิตรดวงตาสวยน่ามอง ให้ทุกลุคในทุกวันของคุณมีความแตกต่าง สวย น่าหลงไหล",
  },
  16: { 
    name: "MAC Studio Fix Powder Plus Foundation 15 G",
    price: "฿1800",
   
    image: "https://prodenbcdn.azureedge.net/products/773602050796/main/640/664ef487d7c33e9e2c9b4dac.webp",
    description: " MAC Studio Fix Powder Plus Foundation #NC25 ขนาด 15 g. แป้งผสมรองพื้นสรรสร้างผิวสวยไร้ที่ติในขั้นตอนเดียว จากแมค ให้ลุคผิวที่เรียบเนียน อำพรางริ้วรอยและรูขุมขน ติดทนนาน",
  },
  17: { 
    name: "ESTEE LAUDER Double Wear Stay-In-Place Makeup SPF10 PA++ 30 ML",
    price: "฿2250 ",
    
    image: "https://prodenbcdn.azureedge.net/products/027131977902/main/640/664f0c3a18a3d9514a85bae3.webp",
    description: "ESTEE LAUDER Double Wear Stay-In-Place Makeup SPF10 PA++ สี 3W2 Cashew ขนาด 30 ml. รองพื้นที่ขายดีอันดับ 1 ของ Estee Lauder ที่ติดทนนานโดยไม่สร้างความกังวลใจใดใดนี้ทำให้ดูสดชื่นและดูเป็นธรรมชาติแม้จะอยู่ท่ามกลางความร้อน ความชื้นหรือมีกิจกรรมต่อเนื่องตลอดวัน รู้สึกได้ถึงความเบาบางและความสบาย ด้วยผลิตภัณฑ์นี้ลุคที่คุณเห็นในตอนเช้าจะเป็นลุคที่อยู่กับคุณไปตลอดวัน คุณประโยชน์ ไม่มีส่วนผสมของน้ำมัน ผ่านการทดสอบโดยแพทย์ผิวหนัง ไม่ก่อให้เกิดสิว",
  },
  18: { 
    name: "BOBBI BROWN Extra Lip Tint-Bare Onyx 2.3 G",
    price: "฿1485",
    
    image: "https://prodenbcdn.azureedge.net/products/716170308708/main/640/642bab8e5d403e561eb3fe1f.webp",
    description: "BOBBI BROWN Extra Lip Tint สี Bare Onyx ลิปบาล์มสูตรใหม่ล่าสุดอัดแน่นด้วยคุณค่าบำรุงจากน้ำมันสกัดของพืชพรรณธรรมชาติถึง 6 ชนิด ซึ่งรวมถึงน้ำมันมะกอก โจโจ้บาร์ และอโวคาโด ผลิตภัณฑ์นี้จึงมอบทั้งสีสันและบำรุงริมฝีปากไปด้วยในตัว สามารถเพิ่มความชุ่มชื้นให้ริมฝีปากแลดูเอิบอิ่มในทันทีที่ใช้ ทั้งยังมอบสีสันบางระเรื่อดูสุขภาพดี",
  },
  19: { 
    name: "REVLON Color Stay Makeup Foundation 30 ML",
    price: "฿399",
    
    image: "https://prodenbcdn.azureedge.net/products/309974700030/main/640/6551e727bb1c837817992e11.webp",
    description: "REVLON Color Stay Makeup Foundation #180 Sand Beige ขนาด 30 ml. ผิวหน้าสวยไม่มีดรอปตั้งแต่เช้าจรดเย็น ด้วยรองพื้นยอดขายอันดับ 1 ตลอดการ จากเรฟลอน ปกปิดเรียบเนียนไร้ที่ติ คุมมัน กันเหงื่อ ติดทนยาวนาน 24 ชั่วโมง",
  },
  20: { 
    name: "LIFEFORD Extreme Super Black Eyeliner 0.5 G",
    price: "฿295",
   
    image: "https://prodenbcdn.azureedge.net/products/8858072045069/main/640/campaign/671b257657ede642eb293806.webp",
    description: "LIFEFORD Extreme Super Black Eyeliner สีดำ ขนาด 0.5 g. อายไลน์เนอร์ตัวแม่รุ่นใหม่ กรีดลื่น ตาเรียวสวยเส้นสวยคมชัด ดำสนิท กันน้ำกันเหงื่อ ตลอดวัน",
  },
};

const recommendedStoreData = {
  name: "ร้านค้าแนะนำ",
  profileImage: "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-beauty-salon-hair-and-cosmetics-logo-design-vector-png-image_9189546.png",
  description: "นี่คือร้านค้าแนะนำที่เราขอแนะนำให้คุณดูสินค้าเพิ่มเติม",
};


function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];
  const [quantity, setQuantity] = useState(1);
  

  if (!product) {
    return <p>ไม่พบข้อมูลสินค้า</p>;
  }

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const handleAddToCart = () => {
    alert(`เพิ่ม ${product.name} จำนวน ${quantity} ชิ้นลงในตะกร้าแล้ว!`);
  };
  const handleViewRecommendedStore = () => {
    navigate('/recommended-store');
  };

  return (
    <div className="product-detail">
       <div className="header-bar">
        <h3>My Store</h3>
      </div>
      {}
      <div className="product-info">
        <div className="product-image">
          <img src={product.image} alt={product.name} style={{ width: '300px' }} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="product-price">
            <span className="original-price">{product.originalPrice}</span>
            <span className="discounted-price">{product.price}</span>
          </p>
          <div className="quantity-controls">
            <button onClick={handleDecrement} className="btn btn-secondary">-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} className="btn btn-secondary">+</button>
          </div>
          <div className="action-buttons">
            <button onClick={handleAddToCart} className="btn btn-success">Add to Cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

{}
<div className="recommended-store" style={{ marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}> {}
  <h4>ร้านค้าแนะนำ</h4>
  <div 
    className="store-profile" 
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={recommendedStoreData.profileImage} 
        alt="Store Profile" 
        style={{ width: '80px', borderRadius: '50%', marginRight: '10px' }}
      />
      <div>
        <h5>{recommendedStoreData.name}</h5>
        <p>{recommendedStoreData.description}</p>
      </div>
    </div>
    <button onClick={handleViewRecommendedStore} className="btn btn-info">ดูร้านค้า</button>
  </div>
</div>


      {}
      <div className="product-description" style={{ marginTop: '30px' }}> {}
        <h4>รายละเอียดสินค้า</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
}


export default Product;
