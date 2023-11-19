import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function NavBurger() {
  return (
    <div>
      <Button size="icon" variant="secondary">
        <Menu/>
      </Button>
    </div>
  );
}
