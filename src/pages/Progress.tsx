import { SquareArrowOutUpRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ProgressPage() {
  return (
    <div className="w-full max-w-[560px] rounded-3xl border border-[hsl(var(--border))] p-14 bg-[hsl(var(--background))]">
      {/* Grid using layer names from Figma: heading, cta, body, bar */}
      <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto_auto] gap-4 [grid-template-areas:'heading_cta''body_body''bar_bar']">
        {/* heading */}
        <div className="space-y-2 [grid-area:heading]">
          <h1 className="text-4xl font-semibold leading-10 text-[hsl(var(--foreground))]">Progress</h1>
          <p className="text-base leading-6 text-[hsl(var(--muted-foreground))]">
            Displays an indicator showing the completion progress of a task,
            typically displayed as a progress bar.
          </p>
        </div>
        {/* cta */}
        <a
          href="https://ui.shadcn.com/docs/components/progress"
          target="_blank"
          rel="noreferrer"
          className="[grid-area:cta] inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-3 text-sm text-[hsl(var(--foreground))]"
        >
          <span>View in Shadcn</span>
          <SquareArrowOutUpRight className="h-4 w-4" />
        </a>
        {/* bar */}
        <div className="[grid-area:bar]">
          <Progress value={44} className="w-[430px] h-2" />
        </div>
      </div>
    </div>
  );
}
