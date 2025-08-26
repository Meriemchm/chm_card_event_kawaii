"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const gifs = [
  "/gifs/Dance Bunny Sticker.gif",
  "/gifs/Dance Dancing Sticker by sillynub (1).gif",
  "/gifs/Dance Dancing Sticker by sillynub.gif",
  "/gifs/Happy Dance Sticker by Tonton Friends.gif",
  "/gifs/Happy Dance Sticker by Tonton Friends.gif",
  "/gifs/Shake It Dancing Sticker by Kennysgifs.gif",
];

export default function RandomGif() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gifs.length); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={gifs[current]}
      alt="Random gif"
      className="w-48 h-48 object-contain transition-opacity duration-500"
    />
  );
}