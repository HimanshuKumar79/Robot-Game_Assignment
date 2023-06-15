import React from "react";
import Instructions from "../components/Instructions";
import GamePanel from "../components/GamePanel";

const GamePage = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <Instructions />
      <GamePanel />
    </div>
  );
};

export default GamePage;
