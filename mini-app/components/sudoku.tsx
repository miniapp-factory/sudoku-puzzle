"use client";

import { useState, useEffect } from "react";
import { useGame } from "@/components/context/game-context";
import { Button } from "@/components/ui/button";

export default function Sudoku() {
  const { isPaused } = useGame();
  const [level, setLevel] = useState("Easy");
  const [grid, setGrid] = useState<string[][]>(Array.from({ length: 9 }, () => Array(9).fill("")));

  useEffect(() => {
    const newGrid = Array.from({ length: 9 }, () => Array(9).fill(""));
    newGrid[0] = ["1","2","3","4","5","6","7","8","9"];
    setGrid(newGrid);
  }, [level]);

  return (
    <div className="relative">
      <div className="mb-4">
        <label className="mr-2">Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-9 gap-1">
        {grid.map((row, rIdx) =>
          row.map((cell, cIdx) => (
            <input
              key={`${rIdx}-${cIdx}`}
              type="text"
              maxLength={1}
              value={cell}
              onChange={(e) => {
                const val = e.target.value.replace(/[^1-9]/g, "");
                setGrid(prev => {
                  const newGrid = prev.map(row => [...row]);
                  newGrid[rIdx][cIdx] = val;
                  return newGrid;
                });
              }}
              className="border rounded text-center w-8 h-8"
            />
          ))
        )}
      </div>
      {isPaused && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Button variant="outline" disabled>
            Paused
          </Button>
        </div>
      )}
    </div>
  );
}
