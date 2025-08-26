"use client";
import { useRef, useState } from "react";
import Card from "./card";
import RandomGif from "./random-gif";

export const CardContainer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [step, setStep] = useState(0); // 0 = ready, 1 = run, 2 = last gif

  const handleClick = () => {
    if (step === 0 && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
    setStep(step + 1);
  };

  return (
    <div className="z-10 bg-white border-4 border-black rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[300px] h-96 w-96">
      <div className="border-3 border-[#F092B9] rounded-xl flex flex-col items-center justify-center space-y-4 min-h-[300px] h-full w-full">
        {step === 0 && (
          <>
            <Card src="/gifs/Sticker by Sanrio.gif" handleClick={handleClick} text="Are you ready ?" />
          </>
        )}

        {step === 1 && (
          <>
            <Card src="/gifs/Girl Run Sticker by HappyKawaiiFriends.gif" handleClick={handleClick} text="Run to me !" />
          </>
        )}

        {step === 2 && <RandomGif />}
      </div>

      {/* lecteur audio caché */}
      <audio ref={audioRef} loop>
        <source src="/music/confess.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};
