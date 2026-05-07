"use client";

import {
  BookOpenIcon,
  BrainIcon,
  Code2Icon,
  FlaskConicalIcon,
  GlobeIcon,
  PaperclipIcon,
  PlusIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const menuItems = [
  { id: "file", label: "Choose a file", icon: PaperclipIcon },
  { id: "code", label: "Coding", icon: Code2Icon },
  { id: "research", label: "Deep Research", icon: FlaskConicalIcon },
  { id: "reasoning", label: "Reasoning", icon: BrainIcon },
  { id: "course", label: "Course", icon: BookOpenIcon },
  { id: "search", label: "Search", icon: GlobeIcon },
] as const;

export type ModeType = (typeof menuItems)[number]["id"];

type PlusMenuProps = {
  onModeSelect?: (mode: ModeType) => void;
  activeMode?: ModeType | null;
  fileInputRef?: React.RefObject<HTMLInputElement | null>;
};

const modeLabels: Record<ModeType, string> = {
  file: "Choose a file",
  code: "Agent · Coding",
  research: "Agent · Research",
  reasoning: "Agent · Reasoning",
  course: "Agent · Course",
  search: "Agent · Search",
};

export function PlusMenu({
  onModeSelect,
  activeMode,
  fileInputRef,
}: PlusMenuProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (id: ModeType) => {
    if (id === "file") {
      fileInputRef?.current?.click();
    } else {
      onModeSelect?.(id);
    }
    setOpen(false);
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          className="h-7 w-7 rounded-full border border-border/40 p-1 transition-colors hover:border-border hover:text-foreground"
          data-testid="plus-menu"
          variant="ghost"
        >
          <PlusIcon size={14} style={{ width: 14, height: 14 }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-48 rounded-xl border border-border/50 bg-card p-1.5 shadow-[var(--shadow-float)]"
        side="top"
        sideOffset={8}
      >
        <div className="flex flex-col gap-0.5">
          {menuItems.map((item) => (
            <button
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors hover:bg-muted/60 ${
                activeMode === item.id
                  ? "text-foreground bg-muted/40"
                  : "text-muted-foreground"
              }`}
              key={item.id}
              onClick={() => handleSelect(item.id)}
              type="button"
            >
              <item.icon className="size-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function getModeLabel(mode: ModeType | null): string {
  if (!mode) return "Agent";
  return modeLabels[mode];
}