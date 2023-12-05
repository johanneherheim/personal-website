import React from "react";
import AbcCalc from "./abc-calc";

export default function ToolPage() {
  return (
    <div className="grid w-screen grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-10">
      <AbcCalc />
    </div>
  );
}
