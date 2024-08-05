"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { RotateCw } from "lucide-react";
import { sqrt, complex, Complex } from "mathjs";

export default function AbcCalc() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [c, setC] = useState<string>("");
  const [answer, setAnswer] = useState<string>("ingen svar");

  const handleReset = () => {
    setA("");
    setB("");
    setC("");
    setAnswer("feil svar");
  };

  const handleSolve = () => {};

  return (
    <div className="flex flex-col items-center bg-muted rounded-lg p-5">
      <h1 className="text-2xl font-bold">ABC Calculator</h1>
      <p>fungerer ikkje endå, komplekse drittall</p>
      <div className="font-serif my-5">
        p(x) =
        <input
          type="text"
          placeholder="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-8 text-right p-1 bg-muted"
        />
        x^2 +
        <input
          type="text"
          placeholder="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="w-8 text-right p-1 bg-muted"
        />
        x +
        <input
          type="text"
          placeholder="c"
          value={c}
          onChange={(e) => setC(e.target.value)}
          className="w-8 text-right p-1 bg-muted"
        />
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-gradient-to-tl from-blue-500 to-green-500"
          size="icon"
          onClick={() => {
            handleReset();
          }}
        >
          <RotateCw className="scale-75" />
        </Button>
        <Button
          className="bg-gradient-to-tl from-blue-500 to-green-500"
          onClick={() => handleSolve()}
        >
          Rekn ut
        </Button>
      </div>
      <div className="mt-5">{answer}</div>
    </div>
  );
}
