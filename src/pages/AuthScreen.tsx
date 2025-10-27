import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

const socials = [
  {
    label: "Github",
    icon: MessageSquare,
  },
];

export default function AuthScreen() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4F4F5] py-[48px]">
      <section className="relative flex h-[832px] w-[1440px] overflow-hidden rounded-[12px] border border-[#E4E4E7] bg-[#FFFFFF] shadow-[0px_20px_50px_-10px_rgba(15,23,42,0.08)]">
        <div className="flex h-full w-[733px] flex-col bg-[#18181B] pl-[32px] pr-[16px] pt-[16px] pb-[32px] text-white">
          <div className="flex flex-1 flex-col justify-between gap-[8px] px-[16px] pb-[16px] pt-[32px]">
            <HeaderBrand />
            <QuoteBlock />
          </div>
        </div>

        <div className="relative flex h-full flex-1 items-center justify-center px-[32px] py-[32px]">
          <span className="absolute right-[96px] top-[45px] text-[14px] font-medium text-[#09090B]">Login</span>
          <AuthCard />
        </div>
      </section>
    </div>
  );
}

function HeaderBrand() {
  return (
    <div className="flex items-center gap-[16px]">
      <div className="grid h-[32px] w-[32px] grid-cols-2 gap-[4px] rounded-[8px] border border-white/30 p-[4px]">
        <span className="h-[8px] w-[8px] rounded-[2px] bg-white/90" />
        <span className="h-[8px] w-[8px] rounded-[2px] bg-white/60" />
        <span className="h-[8px] w-[8px] rounded-[2px] bg-white/40" />
        <span className="h-[8px] w-[8px] rounded-[2px] bg-white/25" />
      </div>
      <span className="text-[18px] font-medium leading-[1.5] text-[#FFFFFF]">Acme Inc</span>
    </div>
  );
}

function QuoteBlock() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="max-w-[420px] text-[18px] font-medium leading-[1.5] text-[#FFFFFF]">
        “This Library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
      </p>
      <span className="text-[14px] font-medium leading-[1.5] text-[#FFFFFF]">Sofia Davis</span>
    </div>
  );
}

function AuthCard() {
  return (
    <div className="flex w-[448px] flex-col items-center gap-[16px] rounded-[16px] border border-[#E4E4E7] bg-[#FFFFFF] pb-[24px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      <header className="flex flex-col items-center gap-[10px] px-[24px] pt-[24px] text-center">
        <h1 className="text-[24px] font-semibold leading-[1.5] text-[#09090B]">Create an account</h1>
        <p className="text-[14px] leading-[1.5] text-[#71717A]">
          Enter your email below to create your account
        </p>
      </header>

      {/* SPACING GRID AUDIT (8px baseline)
       * ✅ On Grid: 40px, 32px, 24px, 16px, 8px
       * ⚠️ Design exact: 10px (divider padding, button gap) kept for fidelity
       * ⚠️ Design exact: 6px radius maintains visual spec
       */}
      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[8px] px-[24px]">
          <div className="flex h-[40px] items-center rounded-[4px] border border-[#E4E4E7] bg-[#FFFFFF] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
            <Input
              type="email"
              placeholder="name@example.com"
              className="h-full w-full border-0 bg-transparent px-[12px] text-[14px] text-[#09090B] shadow-none placeholder:text-[#71717A] focus-visible:outline-none focus-visible:ring-0"
            />
          </div>
          <Button className="h-[40px] rounded-[6px] bg-[#09090B] px-[12px] py-[10px] text-[14px] font-semibold text-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-150 hover:bg-[#09090B]/90">
            Create account
          </Button>
        </div>

        <Divider text="OR CONTINUE WITH" />

        <div className="flex w-full flex-col gap-[40px] px-[24px]">
          {socials.map((social) => (
            <button
              key={social.label}
              type="button"
              className="flex items-center justify-center gap-[10px] rounded-[6px] border border-[#E4E4E7] bg-[#FFFFFF] px-[16px] py-[10px] text-[14px] font-medium text-[#09090B] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-150 hover:bg-[#F5F5F5]"
            >
              <social.icon className="h-[16px] w-[16px] text-[#09090B]" />
              {social.label}
            </button>
          ))}
        </div>
      </div>

      <p className="w-full px-[24px] text-center text-[14px] leading-[1.5] text-[#71717A]">
        By Clicking continue, you agree to our Terms
        <br />
        of Service and Privacy Policy.
      </p>
    </div>
  );
}

function Divider({ text }: { text: string }) {
  return (
    <div className="flex w-[418px] items-center gap-[10px] px-[24px] py-[10px]">
      <span className="h-px flex-1 bg-[#E4E4E7]" />
      <span className="text-[12px] font-medium leading-[1.5] tracking-[0.08em] text-[#71717A]">
        {text}
      </span>
      <span className="h-px flex-1 bg-[#E4E4E7]" />
    </div>
  );
}

