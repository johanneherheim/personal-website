"use client";
import React, { useEffect, useState } from "react";

export default function Mario() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event: { key: any; }) => {
      switch (event.key) {
        case 'ArrowUp':
          setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
          break;
        case 'ArrowDown':
          setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
          break;
        case 'ArrowLeft':
          setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
          break;
        case 'ArrowRight':
          setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="absolute" style={{ top: `${position.y}px`, left: `${position.x}px` }}>
      <img src="https://pngimg.com/d/mario_PNG79.png" alt="" width={200} />
    </div>
  );
}
