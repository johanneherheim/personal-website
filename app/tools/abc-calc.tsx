"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RotateCw } from "lucide-react";

export default function AbcCalc() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [c, setC] = useState<string>("");

  const [answer, setAnswer] = useState<string>("");

  const handleReset = () => {
    setA("");
    setB("");
    setC("");
    setAnswer("");
  };

  const handleSolve = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    if (A === 0) {
      setAnswer("a kan ikkje vere 0");
      return;
    }
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setAnswer("berre heiltal");
      return;
    }

    const discriminant = B ** 2 - 4 * A * C;

    if (discriminant > 0) {
      const x1 = (-B + Math.sqrt(discriminant)) / (2 * A);
      const x2 = (-B - Math.sqrt(discriminant)) / (2 * A);
      setAnswer(`x = ${x1} og x = ${x2}`);
    } else if (discriminant === 0) {
      setAnswer(`x = ${-B / (2 * A)}`);
    } else {
      const realPart = -B / (2 * A);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * A)).toFixed(3);
      setAnswer(
        `x = ${realPart} + ${imaginaryPart}𝑖 og x = ${realPart} – ${imaginaryPart}𝑖`
      );
    }
  };

  return (
    <div className="flex flex-col items-center bg-muted rounded-lg m-5 p-5 sm:w-1/4 text-center">
      <h1 className="text-2xl font-bold">ABC Kalkulator</h1>
      <div className="font-serif my-5">
        𝑓(x) =
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
      <div className="mt-5 font-serif">{answer}</div>
    </div>
  );
}
