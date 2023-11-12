"use client";
import React, { useState } from "react";

export default function Mario() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [marioPos, setMarioPos] = useState<number>(0);

  const startGame = () => {
    setGameStarted(true);
  };
  const stopGame = () => {
    setGameStarted(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "up") {
    }
  };

  return (
    <div>
      <img src="https://pngimg.com/d/mario_PNG79.png" alt="" width={200} />
    </div>
  );
}
