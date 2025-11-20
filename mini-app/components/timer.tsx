"use client";

import { useState, useEffect } from "react";
import { useGame } from "@/components/context/game-context";

export default function Timer() {
  const { isPaused } = useGame();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-xl font-mono">
      Time: {format(seconds)}
    </div>
  );
}
