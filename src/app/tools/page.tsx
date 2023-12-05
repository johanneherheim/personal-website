import React from "react";
import AbcCalc from "./abc-calc";

export default function ToolPage() {
  return (
    <div className="grid w-screen mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <AbcCalc />
    </div>
  );
}
