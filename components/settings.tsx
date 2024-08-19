import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SettingsIcon } from "lucide-react";
import { ModeToggle } from "./togge-theme";

export function SettingsMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <SettingsIcon className="size-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center space-x-8 p-2">
          <p>Fargemodus:</p>
          <ModeToggle />
        </div>
      </PopoverContent>
    </Popover>
  );
}
