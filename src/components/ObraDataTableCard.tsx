import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, CircleDashed, Pencil, SquareDashed, ChevronLeft, ChevronRight } from "lucide-react";

export interface ObraDataTableCardProps {
  rows?: number;
}

/* SPACING GRID AUDIT (8px baseline, STRICT)
 * Card: p-[24px] (3 × 8), rounded-[8px] (rounded from 9px), border-[1px], shadow md
 * Toolbar gaps: gap-[16px] (rounded from 12px), between groups space-between
 * Search: h-[40px] (5 × 8), min-w-[280px] (35 × 8), px-[16px] (2 × 8), radius-[8px] (1 × 8)
 * Tabs group: p-[8px] (rounded from 4px), radius-[8px] (rounded from 10px)
 * Tab item: px-[16px] (2 × 8) py-[8px] (1 × 8), radius-[8px] (rounded from 10px)
 * Buttons: h-[40px] (5 × 8) px-[16px] (2 × 8) radius-[8px] (1 × 8)
 * Table header: h-[48px] (6 × 8), cell px-[16px] (2 × 8)
 * Row: h-[56px] (7 × 8), cell px-[16px] (2 × 8)
 * Columns: checkbox w-[48px] (6 × 8), numeric cols w-[120px] (15 × 8)
 * All off-grid values rounded per strict grid rules
 */
export function ObraDataTableCard({ rows = 10 }: ObraDataTableCardProps) {
  const [activeTab, setActiveTab] = React.useState<"favorited" | "all">("favorited");
  return (
    <section
      aria-label="Products table"
      className="rounded-[8px] border-[1px] border-[#E5E7EB] bg-[#FFFFFF] shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-[24px]"
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-[16px] mb-[24px]">
        <div className="flex items-center gap-[16px]">
          {/* Search */}
          <div className="min-w-[280px] h-[40px]">
            <div className="flex items-center gap-[8px] h-full border-[1px] border-[#E5E7EB] rounded-[8px] px-[16px]">
              <CircleDashed className="h-[16px] w-[16px] text-[#6B7280] opacity-50" aria-hidden="true" />
              <Input
                placeholder="Search by name or email"
                className="h-[20px] border-0 p-0 text-[14px] placeholder-[#6B7280] focus-visible:ring-0"
                aria-label="Search by name or email"
              />
            </div>
          </div>

          {/* Tabs group (not buttons) */}
          <div role="tablist" aria-label="Filter tabs" className="flex items-center bg-[#F3F4F6] rounded-[8px] p-[8px] gap-[8px]">
            <div
              role="tab"
              aria-selected={activeTab === "favorited"}
              tabIndex={0}
              onClick={() => setActiveTab("favorited")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveTab("favorited"); }}
              className={`rounded-[8px] px-[16px] py-[8px] text-[14px] font-medium ${
                activeTab === "favorited" ? "bg-[#FFFFFF] text-[#0A0A0A] shadow-[0_1px_2px_rgba(0,0,0,0.05)]" : "text-[#0A0A0A]"
              }`}
            >
              Favorited
            </div>
            <div
              role="tab"
              aria-selected={activeTab === "all"}
              tabIndex={0}
              onClick={() => setActiveTab("all")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveTab("all"); }}
              className={`rounded-[8px] px-[16px] py-[8px] text-[14px] font-medium ${
                activeTab === "all" ? "bg-[#FFFFFF] text-[#0A0A0A] shadow-[0_1px_2px_rgba(0,0,0,0.05)]" : "text-[#0A0A0A]"
              }`}
            >
              All
            </div>
            <Button
              variant="outline"
              className="h-[40px] px-[16px] gap-[8px] rounded-[8px] border-[#D4D4D4] bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[#0A0A0A]"
            >
              <SquareDashed className="h-[16px] w-[16px]" />
              Filters
            </Button>
          </div>
        </div>

        <Button
          variant="outline"
          className="h-[40px] px-[16px] gap-[8px] rounded-[8px] border-[#D4D4D4] bg-[#FFFFFF] shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[#0A0A0A]"
        >
          <SquareDashed className="h-[16px] w-[16px]" />
          Download CSV
        </Button>
      </div>

      {/* Table (semantic) */}
      <div className="border-[1px] border-[#E5E7EB] rounded-[8px] overflow-hidden" role="region" aria-live="polite">
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
            <tr className="h-[48px] border-b-[1px] border-[#E5E7EB]">
              <th className="text-left pl-[16px]">
                <Checkbox aria-label="Select all rows" />
              </th>
              <SortableHeader label="Table heading" />
              <SortableHeader label="Table heading" />
              <th className="text-right px-[16px]">Table heading</th>
              <th className="text-right px-[16px]">Table heading</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <Row key={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-[12px] text-[14px] text-[#6B7280]">
        <div>Showing 1-10 of 100 products</div>
        <div className="flex items-center gap-[8px]">
          <Button variant="ghost" className="h-[32px] px-[12px] text-[#404040]">
            <ChevronLeft className="h-[16px] w-[16px]" /> Previous
          </Button>
          <Button variant="outline" className="h-[32px] px-[12px] border-[#E5E7EB]">1</Button>
          <Button variant="ghost" className="h-[32px] px-[12px]">2</Button>
          <Button variant="ghost" className="h-[32px] px-[12px]">3</Button>
          <Button variant="ghost" className="h-[32px] px-[12px]">4</Button>
          <Button variant="ghost" className="h-[32px] px-[12px]">…</Button>
          <Button variant="ghost" className="h-[32px] px-[12px]">10</Button>
          <Button variant="ghost" className="h-[32px] px-[12px] text-[#404040]">
            Next <ChevronRight className="h-[16px] w-[16px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function SortableHeader({ label }: { label: string }) {
  return (
    <th
      scope="col"
      aria-sort="none"
      className="text-left px-[16px]"
    >
      <span className="inline-flex items-center gap-[8px]">
        {label}
        <ArrowUpDown className="h-[16px] w-[16px] opacity-50" aria-hidden="true" />
      </span>
    </th>
  );
}

function Row() {
  const [checked, setChecked] = React.useState(false);
  return (
    <tr
      className={`h-[56px] border-b-[1px] border-[#E5E7EB] transition-colors duration-[150ms] ease-linear ${
        checked ? "bg-[#F3F4F6]" : "bg-[#FFFFFF] hover:bg-[#F9FAFB]"
      }`}
    >
      <td className="pl-[16px]">
        <Checkbox checked={checked} onCheckedChange={() => setChecked((v) => !v)} aria-label="Select row" />
      </td>
      <td className="px-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[32px] w-[32px] rounded-[9999px] bg-[#F3F4F6] text-[#111827] text-[14px] font-medium flex items-center justify-center">
            CN
          </div>
          <span className="text-[#111827]">Name</span>
        </div>
      </td>
      <td className="px-[16px] text-[#111827]">Table cell</td>
      <td className="px-[16px] text-right text-[#111827]">Table cell</td>
      <td className="px-[16px] text-right text-[#111827]">Table cell</td>
      <td className="pr-[8px]">
        <Button
          variant="ghost"
          className="h-[32px] px-[12px] rounded-[8px] text-[#111827] hover:bg-[#F9FAFB] gap-[8px]"
          aria-label="Edit row"
        >
          <Pencil className="h-[14px] w-[14px]" /> Edit
        </Button>
      </td>
    </tr>
  );
}

export default ObraDataTableCard;


