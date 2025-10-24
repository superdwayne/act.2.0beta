import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { SquareArrowOutUpRight } from "lucide-react";

export interface ProgressCardProps {
  value?: number; // controlled 0..100
  defaultValue?: number; // uncontrolled initial value
  onValueChange?: (v: number) => void;
}

export function ProgressCard({ value: controlled, defaultValue = 44, onValueChange }: ProgressCardProps) {
  const [uncontrolled, setUncontrolled] = React.useState<number>(defaultValue);
  const value = controlled ?? uncontrolled;
  const setValue = (v: number) => {
    onValueChange?.(v);
    if (controlled === undefined) setUncontrolled(v);
  };

  return (
    /* SPACING AUDIT - STRICT 8px GRID (rounded where needed)
     * Container width: 559px → 560px (rounded up)
     * Container padding: 56px → 56px
     * Section gap: 40px → 40px
     * Title/desc gap: 8px → 8px
     * Button height: 32px → 32px
     * Button gap: 6px → 8px (rounded up)
     * Button px: 12px → 16px (rounded up)
     * Button radius: 6px → 8px (rounded up)
     * Progress width: 430px → 432px (rounded up)
     * Progress height: 8px → 8px
     */
    <div className="w-[560px] rounded-[24px] border border-[#E5E5E5] bg-[#FFFFFF] p-[56px] flex flex-col gap-[40px]">
      {/* Container: title/desc and button */}
      <div className="flex items-start justify-between gap-[16px]">
        {/* Title + Description (gap-2) */}
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[36px] font-semibold leading-[1.11] font-['Inter'] text-[#0A0A0A]">Progress</h1>
          <p className="text-[16px] font-normal leading-[1.5] font-['Inter'] text-[#737373]">
            Displays an indicator showing the completion progress of a task,
            typically displayed as a progress bar.
          </p>
        </div>
        {/* View in Shadcn button */}
        <a
          href="https://ui.shadcn.com/docs/components/progress"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-[32px] items-center justify-center gap-[8px] px-[16px] py-[0px] rounded-[8px] bg-[#F5F5F5] text-[#0A0A0A] border border-[#E5E5E5] text-[14px] font-medium leading-[1.43] font-['Inter'] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]"
        >
          <span>View in Shadcn</span>
          <SquareArrowOutUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Progress background + foreground (432×8, rounded-full) */}
      <ProgressPrimitive.Root
        className="relative h-[8px] w-[432px] overflow-hidden rounded-[9999px] bg-[#171717]/20"
        value={value}
      >
        <ProgressPrimitive.Indicator
          className="h-[8px] w-full bg-[#171717] transition-transform"
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </ProgressPrimitive.Root>

      {/* Optional: hidden slider for quick manual testing */}
      <div className="sr-only">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Set progress"
        />
      </div>
    </div>
  );
}
