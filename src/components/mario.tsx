"use client";
import React, { useState } from "react";

export default function Mario() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [marioPos, setMarioPos] = useState<number>(0);

  return (
    <div>
      <img
        src="https://assets.stickpng.com/images/584df3ad6a5ae41a83ddee08.png"
        alt=""
        width={200}
      />
    </div>
  );
}
