"use client";
import { useRef, useState } from "react";

interface CardProps {
  src: string;
  handleClick: () => void;
  text: string;
}

const Card: React.FC<CardProps> = ({ src, handleClick, text }) => {
  return (
    <>
      <img
        src={src}
        alt="Cute animation"
        className="w-32 h-32 object-contain"
      />
      <button
        onClick={handleClick}
        className="rounded-full bg-[#F092B9] text-white px-6 py-3 font-semibold shadow-md hover:bg-[#e07aa5] transition"
      >
        {text}
      </button>
    </>
  );
};

export default Card;
