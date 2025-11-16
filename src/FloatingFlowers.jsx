import { useEffect, useState } from "react";

export default function FloatingFlowers() {
  const flowers = ["🌸", "🌼", "🌺", "🌻", "💐"];
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();

      setItems(prev => [
        ...prev,
        {
          id,
          flower: flowers[Math.floor(Math.random() * flowers.length)],
          left: Math.random() * 100,
          duration: 5 + Math.random() * 5
        }
      ]);

      setTimeout(() => {
        setItems(prev => prev.filter(item => item.id !== id));
      }, 10000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`@keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }`}
      </style>

      {items.map(item => (
        <span
          key={item.id}
          style={{
            position: "absolute",
            left: `${item.left}vw`,
            bottom: "-50px",
            fontSize: "2.5rem",
            animation: `floatUp ${item.duration}s linear forwards`,
            pointerEvents: "none"
          }}
        >
          {item.flower}
        </span>
      ))}
    </>
  );
}