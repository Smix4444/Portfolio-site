"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        borderWidth,
        borderStyle: "solid",
        borderColor: "transparent",
        WebkitMask:
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        backgroundImage: `conic-gradient(from calc(var(--border-beam-angle, 0) * 1deg), transparent 0%, ${colorFrom} 10%, ${colorTo} 20%, transparent 30%)`,
        backgroundOrigin: "border-box",
        backgroundClip: "border-box",
        animation: `border-beam-spin ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
