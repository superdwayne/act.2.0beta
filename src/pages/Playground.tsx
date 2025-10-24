import { Button } from "@/components/ui/button";
import { Ellipsis, ChevronUp, Save, Share2, Code } from "lucide-react";

export default function PlaygroundPage() {
  return (
    <div className="w-full mx-auto rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-[hsl(var(--border))]">
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] leading-7">Playground</h2>
        <div className="flex items-center gap-2">
          {/* Preset select (stub) */}
          <div className="h-9 w-[300px] rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm flex items-center justify-between">
            <span>Load a preset</span>
            <ChevronUp className="h-4 w-4 rotate-180" />
          </div>
          {/* Header actions */}
          <Button className="h-9 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4"><Save className="h-4 w-4 mr-2"/>Save</Button>
          <Button className="h-9 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4"><Code className="h-4 w-4 mr-2"/>View code</Button>
          <Button className="h-9 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4"><Share2 className="h-4 w-4 mr-2"/>Share</Button>
          <Button className="size-9 rounded-lg bg-[hsl(var(--secondary))] p-0"><Ellipsis className="h-4 w-4"/></Button>
        </div>
      </div>

      {/* Body grid: editor + sidebar */}
      <div className="grid grid-cols-[1fr_200px] gap-6 px-8 py-6">
        {/* Left content area */}
        <div className="flex flex-col gap-4 w-full">
          <div className="h-[700px] w-full rounded-md border border-[hsl(var(--border))] p-4">
            <p className="text-base text-[hsl(var(--muted-foreground))] leading-6">Write a tagline for an ice cream shop</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="h-9 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 shadow-[0px_1px_2px_rgba(0,0,0,0.1)]">Submit</Button>
            <Button className="h-9 w-10 rounded-lg bg-[hsl(var(--muted))] p-0"><Ellipsis className="h-4 w-4"/></Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 w-[200px]">
          {/* Mode */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-[hsl(var(--foreground))] leading-5">Mode</p>
            <div className="bg-[hsl(var(--muted))] p-[3px] rounded-lg flex items-center justify-center gap-2">
              <div className="h-7 w-[64.66px] rounded-md bg-[hsl(var(--background))] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] flex items-center justify-center">
                <div className="h-5 w-5 bg-[hsl(var(--muted))] rounded" />
              </div>
              <div className="h-7 w-[64.66px] rounded-md flex items-center justify-center">
                <div className="h-5 w-5 bg-[hsl(var(--muted))] rounded" />
              </div>
              <div className="h-7 w-[64.66px] rounded-md flex items-center justify-center">
                <div className="h-5 w-5 bg-[hsl(var(--muted))] rounded" />
              </div>
            </div>
          </div>

          {/* Model */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-[hsl(var(--foreground))] leading-5">Model</p>
            <div className="h-9 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm flex items-center justify-between">
              <span>text-curie-001</span>
              <ChevronUp className="h-4 w-4 rotate-180" />
            </div>
          </div>

          {/* Sliders (visual only) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[hsl(var(--foreground))] leading-5">Temperature</p>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">0.56</span>
            </div>
            <div className="h-[6px] w-[200px] rounded-full bg-[hsl(var(--muted))] relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[109px] bg-[hsl(var(--primary))] rounded-l-full" />
              <div className="absolute left-[100px] top-1/2 -translate-y-1/2 size-4 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--primary))]" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[hsl(var(--foreground))] leading-5">Maximum Length</p>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">256</span>
            </div>
            <div className="h-[6px] w-[200px] rounded-full bg-[hsl(var(--muted))] relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[32px] bg-[hsl(var(--primary))] rounded-l-full" />
              <div className="absolute left-[23px] top-1/2 -translate-y-1/2 size-4 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--primary))]" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[hsl(var(--foreground))] leading-5">Top P</p>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">0.9</span>
            </div>
            <div className="h-[6px] w-[200px] rounded-full bg-[hsl(var(--muted))] relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[174px] bg-[hsl(var(--primary))] rounded-l-full" />
              <div className="absolute left-[165px] top-1/2 -translate-y-1/2 size-4 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--primary))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
