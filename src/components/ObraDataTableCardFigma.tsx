import * as React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ArrowUpDown, CircleDashed, Pencil, SquareDashed, ChevronLeft, ChevronRight } from "lucide-react";

interface FigmaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "ghost";
  size?: "lg" | "sm";
}

function FigmaButton({ variant = "outline", size = "lg", className, ...props }: FigmaButtonProps) {
  const sizeClasses = size === "lg" ? "h-[40px] gap-[6px] px-[12px]" : "h-[32px] gap-[6px] px-[12px]";
  const variantClasses =
    variant === "outline"
      ? "border border-[#D4D4D4] bg-[#FFFFFF] text-[#0A0A0A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#F5F5F5]"
      : "border border-transparent bg-transparent text-[#111827] hover:bg-[#F9FAFB]";
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-[8px] text-[14px] font-medium transition-colors duration-150 ease-linear focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A0A0A]/10",
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    />
  );
}

export interface ObraDataTableCardFigmaProps {
  rows?: number;
}

/* Figma Source: Obra shadcn/ui — Community (node 658:34764)
 * Layout values taken verbatim to maintain 100% visual fidelity.
 */
export function ObraDataTableCardFigma({ rows = 10 }: ObraDataTableCardFigmaProps) {
  const [activeTab, setActiveTab] = React.useState<"favorited" | "all">("favorited");

  return (
    <section
      aria-label="Products table"
      className="rounded-[9px] border border-[#E5E7EB] bg-[#FFFFFF] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-[24px]"
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-[12px] mb-[24px]">
        <div className="flex items-center gap-[12px]">
          <div className="min-w-[280px] h-[40px]">
            <div className="flex h-full items-center gap-[8px] rounded-[8px] border border-[#E5E7EB] px-[16px]">
              <CircleDashed className="h-[16px] w-[16px] text-[#6B7280] opacity-50" aria-hidden="true" />
              <Input
                aria-label="Search by name or email"
                placeholder="Search by name or email"
                className="h-[20px] border-0 p-0 text-[14px] placeholder-[#6B7280] focus-visible:ring-0"
              />
            </div>
          </div>

          <div role="tablist" aria-label="Filter tabs" className="flex items-center gap-[8px] rounded-[10px] bg-[#F3F4F6] p-[4px]">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "favorited"}
              onClick={() => setActiveTab("favorited")}
              className={`rounded-[10px] px-[16px] py-[8px] text-[14px] font-medium transition-shadow ${
                activeTab === "favorited" ? "bg-[#FFFFFF] text-[#0A0A0A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]" : "text-[#0A0A0A]"
              }`}
            >
              Favorited
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              className={`rounded-[10px] px-[16px] py-[8px] text-[14px] font-medium transition-shadow ${
                activeTab === "all" ? "bg-[#FFFFFF] text-[#0A0A0A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]" : "text-[#0A0A0A]"
              }`}
            >
              All
            </button>
            <FigmaButton>
              <SquareDashed className="h-[16px] w-[16px]" />
              Filters
            </FigmaButton>
          </div>
        </div>

        <FigmaButton>
          <SquareDashed className="h-[16px] w-[16px]" />
          Download CSV
        </FigmaButton>
      </div>

      <div className="overflow-hidden rounded-[8px] border border-[#E5E7EB]">
        <table className="w-full text-[14px]" role="table" aria-label="Products">
          <colgroup>
            <col style={{ width: 48 }} />
            <col />
            <col />
            <col style={{ width: 120 }} />
            <col style={{ width: 120 }} />
            <col style={{ width: 80 }} />
          </colgroup>
          <thead className="bg-[#F9FAFB] text-[#111827]">
            <tr className="h-[48px] border-b border-[#E5E7EB]">
              <th className="pl-[16px] text-left">
                <Checkbox aria-label="Select all rows" />
              </th>
              <SortableHeader label="Table heading" />
              <SortableHeader label="Table heading" />
              <th className="px-[16px] text-right">Table heading</th>
              <th className="px-[16px] text-right">Table heading</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, index) => (
              <TableRow key={index} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-[12px] flex items-center justify-between text-[14px] text-[#6B7280]">
        <div>Showing 1-10 of 100 products</div>
        <div className="flex items-center gap-[8px]">
          <FigmaButton variant="ghost" size="sm" className="text-[#404040]">
            <ChevronLeft className="h-[16px] w-[16px]" /> Previous
          </FigmaButton>
          <FigmaButton size="sm" className="border border-[#E5E7EB] bg-[#FFFFFF] text-[#0A0A0A]">1</FigmaButton>
          <FigmaButton variant="ghost" size="sm">2</FigmaButton>
          <FigmaButton variant="ghost" size="sm">3</FigmaButton>
          <FigmaButton variant="ghost" size="sm">4</FigmaButton>
          <FigmaButton variant="ghost" size="sm">…</FigmaButton>
          <FigmaButton variant="ghost" size="sm">10</FigmaButton>
          <FigmaButton variant="ghost" size="sm" className="text-[#404040]">
            Next <ChevronRight className="h-[16px] w-[16px]" />
          </FigmaButton>
        </div>
      </div>
    </section>
  );
}

function SortableHeader({ label }: { label: string }) {
  return (
    <th scope="col" aria-sort="none" className="px-[16px] text-left">
      <span className="inline-flex items-center gap-[8px]">
        {label}
        <ArrowUpDown className="h-[16px] w-[16px] opacity-50" aria-hidden="true" />
      </span>
    </th>
  );
}

function TableRow() {
  const [checked, setChecked] = React.useState(false);
  return (
    <tr
      className={`h-[56px] border-b border-[#E5E7EB] transition-colors duration-150 ease-linear ${
        checked ? "bg-[#F3F4F6]" : "bg-[#FFFFFF] hover:bg-[#F9FAFB]"
      }`}
    >
      <td className="pl-[16px]">
        <Checkbox checked={checked} onCheckedChange={() => setChecked((prev) => !prev)} aria-label="Select row" />
      </td>
      <td className="px-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[9999px] bg-[#F3F4F6] text-[14px] font-medium text-[#111827]">
            CN
          </div>
          <span className="text-[#111827]">Name</span>
        </div>
      </td>
      <td className="px-[16px] text-[#111827]">Table cell</td>
      <td className="px-[16px] text-right text-[#111827]">Table cell</td>
      <td className="px-[16px] text-right text-[#111827]">Table cell</td>
      <td className="pr-[8px]">
        <FigmaButton
          variant="ghost"
          size="sm"
          className="text-[#111827]"
          aria-label="Edit row"
        >
          <Pencil className="h-[14px] w-[14px]" /> Edit
        </FigmaButton>
      </td>
    </tr>
  );
}

export default ObraDataTableCardFigma;

export { FigmaButton };


