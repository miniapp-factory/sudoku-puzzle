import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import Sudoku from "@/components/sudoku";
import Timer from "@/components/timer";
import Leaderboard from "@/components/leaderboard";
import PauseButton from "@/components/pause-button";
import { GameProvider } from "@/components/context/game-context";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <GameProvider>
      <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
        <span className="text-2xl">{title}</span>
        <span className="text-muted-foreground">{description}</span>
        <Sudoku />
        <Timer />
        <PauseButton />
        <Leaderboard />
      </main>
    </GameProvider>
  );
}
