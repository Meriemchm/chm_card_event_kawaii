"use client";
import { createContext, useContext, useRef, useEffect } from "react";

const MusicContext = createContext<{ play: () => void } | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {
        console.log("Autoplay bloqué 🚫");
      });
    }
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

  return (
    <MusicContext.Provider value={{ play }}>
      {children}
      <audio ref={audioRef} loop>
        <source src="/music/confess.wav.mp3" type="audio/mpeg" />
      </audio>
    </MusicContext.Provider>
  );
}

export const useMusic = () => {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
};
