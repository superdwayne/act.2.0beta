import * as React from "react";
import { Input } from "@/components/ui/input";
import { CircleDashed, Columns2, SquareDashed, Plus, ChevronDown } from "lucide-react";
import ObraDataTableCardFigma, { FigmaButton } from "@/components/ObraDataTableCardFigma";

const sidebarGroups = [
  {
    label: "Sidebar label",
    items: [
      { name: "Home", active: true },
      { name: "Label", active: false },
      { name: "Label", active: false }
    ]
  },
  {
    label: "Sidebar label",
    items: [
      { name: "Home", active: false },
      { name: "Label", active: false },
      { name: "Label", active: false }
    ]
  }
];

export default function ObraWebAppExample() {
  return (
    <div className="flex h-[800px] w-[1280px] bg-[#FFFFFF]">
      <aside className="flex h-full w-[216px] flex-col border-r border-[#E5E5E5] px-[16px] py-[12px] gap-[24px]">
        {sidebarGroups.map((group, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
            <span className="px-[12px] py-[7px] text-[12px] font-medium text-[#737373]">{group.label}</span>
            <nav className="flex flex-col gap-[4px]">
              {group.items.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`flex items-center gap-[8px] rounded-[6px] px-[12px] py-[8px] text-[14px] text-[#404040] ${
                    item.active ? "bg-[#F5F5F5] text-[#0A0A0A]" : "hover:bg-[#F9FAFB]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </aside>

      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[#E5E5E5] px-[16px] py-[12px]">
          <div className="flex items-center gap-[8px] text-[14px] text-[#737373]">
            <a href="#">Home</a>
            <span>›</span>
            <a href="#">Components</a>
            <span>›</span>
            <span className="text-[#0A0A0A]">Breadcrumb</span>
          </div>
          <div className="flex h-[32px] items-center gap-[8px] rounded-[8px] border border-[#E5E5E5] px-[12px]">
            <CircleDashed className="h-[16px] w-[16px] text-[#737373] opacity-50" />
            <Input
              placeholder="Search for something..."
              className="h-[20px] border-0 p-0 text-[14px] placeholder-[#737373] focus-visible:ring-0"
            />
          </div>
        </header>

        <div className="flex items-center justify-between px-[16px] py-[12px]">
          <div className="flex items-center gap-[12px]">
            <FigmaButton>
              <Columns2 className="h-[16px] w-[16px]" />
              Customize Columns
              <ChevronDown className="h-[16px] w-[16px]" />
            </FigmaButton>
            <FigmaButton>
              <Plus className="h-[16px] w-[16px]" />
              Add Section
            </FigmaButton>
          </div>
          <FigmaButton>
            <SquareDashed className="h-[16px] w-[16px]" />
            Filters
          </FigmaButton>
        </div>

        <div className="px-[16px] pb-[24px]">
          <ObraDataTableCardFigma rows={10} />
        </div>
      </main>
    </div>
  );
}

// (legacy Row component removed; table now provided by ObraDataTableCard)
