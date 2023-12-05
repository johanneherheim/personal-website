"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function AbcCalc() {
  const calc = (a: number, b: number, c: number): any => {
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

  const [answer, setAnswer] = useState<number[]>([]);
  const [A, setA] = useState<string>("");
  const [B, setB] = useState<string>("");
  const [C, setC] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      calculate();
    }
  };

  const calculate = () => {
    // Call calc function and set the result to the answer state
    setAnswer(calc(Number(A), Number(B), Number(C)));
  };

  return (
    <div className="flex font-semibold w-80 items-center flex-col">
      <h2 className="tracking-wide">ABC-formel kalkulator</h2>
      <div>
        <input
          className="m-3 px-2 w-12 border bg-secondary rounded"
          type="text"
          value={A}
          onChange={(e) => setA(e.target.value)}
          placeholder="a"
        />
        <input
          className="m-3 px-2 w-12 border bg-secondary rounded"
          type="text"
          value={B}
          onChange={(e) => setB(e.target.value)}
          placeholder="b"
        />
        <input
          className="m-3 px-2 w-12 border bg-secondary rounded"
          type="text"
          value={C}
          onChange={(e) => setC(e.target.value)}
          placeholder="c"
          onKeyPress={handleKeyPress}
        />
      </div>
      <Button onClick={calculate} variant="defaultsec" className="m-2 p-2">
        Rekn ut
      </Button>
      <p>
        {answer.length > 0
          ? `Røttene er: ${answer.join(", ")}`
          : answer === null
          ? "No real roots"
          : ""}
      </p>
    </div>
  );
}
