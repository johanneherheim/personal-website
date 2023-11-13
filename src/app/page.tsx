"use client";
import React, { useState } from "react";
import MarioPage from "../components/mario-page";
import NightPage from "@/components/night-page";
import { MoonStar } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { Sun } from "lucide-react";
import DayPage from "@/components/day-page";

export default function HomePage() {
  const [dayMode, setDayMode] = useState(true);
  const [nightMode, setNightMode] = useState(false);
  const [marioMode, setMarioMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prev) => !prev);
    setMarioMode(false);
    setDayMode((prev) => !prev);
  };
  const toggleMarioMode = () => {
    setMarioMode((prev) => !prev);
    setDayMode((prev) => !prev);
    setNightMode(false);
  };

  return (
    <div>
      <div>
        <div className="absolute right-0">
          <button
            className="p-2 m-3 border border-black rounded-md"
            onClick={toggleNightMode}
          >
            <MoonStar />
          </button>
          <button
            className="p-2 m-3 border border-black rounded-md"
            onClick={toggleMarioMode}
          >
            <Gamepad2 />
          </button>
        </div>
        {marioMode && <MarioPage />} {nightMode && <NightPage />}{!marioMode && !nightMode && <DayPage />}
      </div>
    </div>
  );
}
