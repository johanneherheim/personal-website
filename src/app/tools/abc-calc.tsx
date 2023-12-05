"use client";
import React, { useState } from "react";

export default function AbcCalc() {
  const calc = (a: number, b: number, c: number): number[] | null => {
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
      return null;
    } else if (delta === 0) {
      return [-b / (2 * a)];
    } else {
      return [
        (-b + Math.sqrt(delta)) / (2 * a),
        (-b - Math.sqrt(delta)) / (2 * a),
      ];
    }
  };

  const [answer, setAnswer] = useState<number>(0);
  const [A, setA] = useState<number>(0);
  const [B, setB] = useState<number>(0);
  const [C, setC] = useState<number>(0);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      null;
    }
  };

  return (
    <div className="flex justify-center font-semibold">
      <input className="mb-3 px-2 w-12 border" type="number" placeholder="a" />
      <input className="mb-3 px-2 w-12 border" type="number" placeholder="b" />
      <input className="mb-3 px-2 w-12 border" type="number" placeholder="c" />
      <p>{answer}</p>
    </div>
  );
}
