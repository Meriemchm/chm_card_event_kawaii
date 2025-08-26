"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

type HeartData = {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: number;
};

export default function HeartsAnimation() {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 5 + 5}s`,
      delay: `${Math.random() * 10}s`,
      size: Math.random() * 100 + 50, // tailles variées
    }));
    setHearts(arr);
  }, []);

  const removeHeart = (id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-[#F092B9] animate-float cursor-pointer"
          style={{
            left: h.left,
            bottom: "-150px",
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
          onClick={() => removeHeart(h.id)}
        >
          <Heart size={h.size} fill="currentColor" />
        </span>
      ))}
    </div>
  );
}
