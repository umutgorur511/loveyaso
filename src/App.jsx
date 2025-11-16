import { useState, useEffect } from "react";
import FloatingFlowers from "./FloatingFlowers";
import './App.css';

import img1 from "./assets/imgnew1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/imgnew2.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/imgnew4.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/imgnew3.jpg";

export default function App() {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 1800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      <FloatingFlowers />
      <h1 className="title">Seni Seviyorum ASKİM❤️</h1>
      {images.map((img, i) => (
        <div
          key={i}
          className={`bg-image ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
}