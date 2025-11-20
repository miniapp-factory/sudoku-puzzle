"use client";

import { useEffect, useState } from "react";

interface BestTimes {
  Easy?: number;
  Medium?: number;
  Hard?: number;
}

export default function Leaderboard() {
  const [bestTimes, setBestTimes] = useState<BestTimes>({});

  useEffect(() => {
    const stored = localStorage.getItem("sudoku-best-times");
    if (stored) setBestTimes(JSON.parse(stored));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Leaderboard (Best Times)</h2>
      <ul className="list-disc pl-5">
        {["Easy", "Medium", "Hard"].map(level => (
          <li key={level}>
            {level}: {bestTimes[level as keyof BestTimes] !== undefined
              ? `${Math.floor((bestTimes[level as keyof BestTimes] ?? 0) / 60)}m ${(bestTimes[level as keyof BestTimes] ?? 0) % 60}s`
              : "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
}
