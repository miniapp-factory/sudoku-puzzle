"use client";

import { Button } from "@/components/ui/button";
import { useGame } from "@/components/context/game-context";

export default function PauseButton() {
  const { isPaused, togglePause } = useGame();

  return (
    <Button onClick={togglePause} variant={isPaused ? "outline" : "default"}>
      {isPaused ? "Resume" : "Pause"}
    </Button>
  );
}
