import { cn } from "@/lib/utils";

type Orientation = "horizontal" | "vertical";

interface SeparatorProps {
  className?: string;
  orientation?: Orientation;
}

const Separator = ({ className, orientation = "horizontal" }: SeparatorProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-[hsl(var(--border))]",
        orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        className
      )}
    />
  );
};

export { Separator };
