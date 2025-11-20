"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface GameContextProps {
  isPaused: boolean;
  togglePause: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [isPaused, setIsPaused] = useState(false);
  const togglePause = () => setIsPaused(prev => !prev);
  return <GameContext.Provider value={{ isPaused, togglePause }}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
};
