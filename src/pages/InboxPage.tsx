import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  Archive,
  Bell,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  FileEdit,
  FolderOpen,
  Inbox,
  MessageSquare,
  MoreHorizontal,
  Send,
  ShoppingBag,
  Tag,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";

const primaryFolders = [
  { label: "Inbox", count: "128", icon: Inbox, variant: "active" as const },
  { label: "Drafts", count: "9", icon: FileEdit, variant: "notification" as const },
  { label: "Sent", icon: Send, variant: "default" as const },
  { label: "Junk", count: "23", icon: Bell, variant: "notification" as const },
  { label: "Trash", icon: Trash2, variant: "default" as const },
  { label: "Archive", icon: Archive, variant: "default" as const }
];

const categories = [
  { label: "Social", count: "972", icon: MessageSquare },
  { label: "Updates", count: "342", icon: Bell },
  { label: "Forums", count: "128", icon: FolderOpen },
  { label: "Shopping", count: "8", icon: ShoppingBag },
  { label: "Promotions", count: "21", icon: Tag }
];

const inboxThreads = [
  {
    sender: "Alice Smith",
    time: "1 min ago",
    subject: "Re: Project Update",
    preview:
      "A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet...",
    labels: [
      { text: "Project", tone: "solid" as const },
      { text: "Work", tone: "subtle" as const }
    ],
    active: true
  },
  {
    sender: "William Smith",
    time: "2 days ago",
    subject: "Meeting Tomorrow",
    preview:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details...",
    labels: [
      { text: "Meeting", tone: "solid" as const },
      { text: "Work", tone: "subtle" as const }
    ]
  },
  {
    sender: "Bob Johnson",
    time: "2 days ago",
    subject: "Weekend Plans",
    preview: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains...",
    labels: [
      { text: "Weekend", tone: "subtle" as const },
      { text: "Work", tone: "outline" as const }
    ]
  },
  {
    sender: "Emily Davis",
    time: "3 days ago",
    subject: "Re: Question about Budget",
    preview: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy...",
    labels: [
      { text: "Budget", tone: "solid" as const },
      { text: "About", tone: "subtle" as const },
      { text: "Work", tone: "outline" as const }
    ]
  },
  {
    sender: "David Lee",
    time: "3 days ago",
    subject: "New Project Idea",
    preview: "I have an exciting new project idea to discuss with you. It involves expanding our services...",
    labels: [
      { text: "Label", tone: "solid" as const },
      { text: "Label", tone: "subtle" as const }
    ]
  }
];

const detailBody = `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Thanks,
Emily`;

interface InboxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: "outline" | "ghost";
  size?: "lg" | "sm";
  emphasis?: "default" | "primary";
}

function InboxButton({ tone = "outline", size = "lg", emphasis = "default", className, ...props }: InboxButtonProps) {
  const sizeClasses = size === "lg" ? "h-[40px] px-[12px] gap-[6px]" : "h-[32px] px-[12px] gap-[6px]";
  const toneClasses =
    tone === "outline"
      ? "border border-[#E4E4E7] bg-[#FFFFFF] text-[#18181B] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#F5F5F5]"
      : "border border-transparent bg-transparent text-[#52525B] hover:bg-[#F4F4F5]";
  const emphasisClasses =
    emphasis === "primary"
      ? "border border-transparent bg-[#18181B] text-white shadow-[0px_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#101014]"
      : "";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-[8px] text-[14px] font-medium leading-[1.43] tracking-[0.01em] transition-colors duration-150 ease-linear focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#18181B]/10",
        sizeClasses,
        toneClasses,
        emphasisClasses,
        className
      )}
      {...props}
    />
  );
}

export default function InboxPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4F4F5] py-[48px]">
      <section className="flex h-[864px] w-[1440px] overflow-hidden rounded-[12px] border border-[#E4E4E7] bg-[#FFFFFF] shadow-[0px_20px_50px_-10px_rgba(15,23,42,0.08)]">
        <Sidebar />
        <InboxColumn />
        <DetailsColumn />
      </section>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-[288px] flex-col gap-[18px] border-r border-[#E4E4E7] px-[16px] py-[12px]">
      <AccountCard name="Alicia Koch" email="alicia@example.com" />
      <nav className="flex flex-col gap-[18px]">
        <SidebarSection title="Folders" items={primaryFolders} />
        <SidebarSection title="Categories" items={categories} />
      </nav>
    </aside>
  );
}

function AccountCard({ name, email }: { name: string; email: string }) {
  return (
    <div className="flex items-center justify-between rounded-[8px] border border-[#E4E4E7] px-[12px] py-[8px]">
      <div className="flex items-center gap-[10px]">
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#18181B] text-[13px] font-semibold text-white">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[16px] font-medium text-[#18181B]">{name}</span>
          <span className="text-[14px] text-[#71717A]">{email}</span>
        </div>
      </div>
      <MoreHorizontal className="h-[18px] w-[18px] text-[#71717A]" />
    </div>
  );
}

type SidebarItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  count?: string;
  variant?: "active" | "notification" | "default";
};

function SidebarSection({ title, items }: { title: string; items: SidebarItem[] }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="px-[12px] text-[12px] font-medium uppercase tracking-[0.1em] text-[#71717A]">
        {title}
      </span>
      <div className="flex flex-col gap-[4px]">
        {items.map((item) => (
          <SidebarRow key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarRow({ item }: { item: SidebarItem }) {
  const Icon = item.icon;
  const baseClasses =
    "flex items-center justify-between rounded-[8px] px-[12px] py-[8px] text-[14px] transition-colors";
  const tone =
    item.variant === "active"
      ? "bg-[#F4F4F5] text-[#18181B] font-medium"
      : item.variant === "notification"
      ? "bg-[#FFFFFF] text-[#18181B]"
      : "bg-[#FFFFFF] text-[#18181B] hover:bg-[#F9FAFB]";

  return (
    <div className={`${baseClasses} ${tone}`}>
      <div className="flex items-center gap-[12px]">
        <Icon className="h-[18px] w-[18px] text-[#71717A]" />
        <span>{item.label}</span>
      </div>
      {item.count && (
        <span className="rounded-full bg-[#F4F4F5] px-[8px] py-[2px] text-[12px] font-medium text-[#52525B]">
          {item.count}
        </span>
      )}
    </div>
  );
}

function InboxColumn() {
  return (
    <section className="flex w-[486px] flex-col border-r border-[#E4E4E7]">
      <header className="flex items-center justify-between border-b border-[#E4E4E7] px-[16px] py-[12px]">
        <div className="flex items-center gap-[12px]">
          <h1 className="text-[22px] font-semibold text-[#18181B]">Inbox</h1>
          <div className="flex items-center gap-[3px] rounded-[9px] bg-[#F3F3F4] p-[4px]">
            <InboxButton
              tone="outline"
              size="sm"
              className="gap-[10px] rounded-[8px] px-[16px] py-[6px] text-[14px] font-medium shadow-[0px_2px_4px_rgba(0,0,0,0.06)]"
            >
              All mail
            </InboxButton>
            <InboxButton tone="ghost" size="sm" className="gap-[10px] px-[16px] py-[6px] text-[14px] font-medium text-[#52525B]">
              Unread
            </InboxButton>
          </div>
        </div>
        <InboxButton tone="outline" size="sm" className="h-[38px] gap-[8px] text-[#52525B]">
          <CircleDashed className="h-[16px] w-[16px] text-[#71717A]" />
          Search
        </InboxButton>
      </header>

      <div className="flex-1 overflow-y-auto px-[16px] py-[16px]">
        <div className="flex flex-col gap-[12px]">
          {inboxThreads.map((thread) => (
            <InboxCard key={thread.sender + thread.subject} thread={thread} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Thread = (typeof inboxThreads)[number];

function InboxCard({ thread }: { thread: Thread }) {
  return (
    <article
      className={cn(
        "flex flex-col gap-[8px] rounded-[8px] border border-[#E4E4E7] px-[16px] py-[16px]",
        thread.active ? "bg-[#F4F4F5]" : "bg-[#FFFFFF] hover:bg-[#F9FAFB]"
      )}
    >
      <div className="flex items-center justify-between text-[14px] text-[#71717A]">
        <span className="text-[16px] font-medium text-[#18181B]">{thread.sender}</span>
        <span>{thread.time}</span>
      </div>
      <h3 className="text-[16px] font-medium text-[#18181B]">{thread.subject}</h3>
      <p className="text-[14px] text-[#71717A] line-clamp-2">{thread.preview}</p>
      <div className="flex flex-wrap items-center gap-[8px]">
        {thread.labels.map((label) => (
          <ThreadLabel key={label.text} tone={label.tone}>
            {label.text}
          </ThreadLabel>
        ))}
      </div>
    </article>
  );
}

function ThreadLabel({ children, tone }: { children: React.ReactNode; tone: "solid" | "subtle" | "outline" }) {
  const base = "rounded-[8px] px-[12px] py-[2px] text-[14px] font-medium";
  const styles =
    tone === "solid"
      ? "bg-[#18181B] text-white"
      : tone === "subtle"
      ? "bg-[#F4F4F5] text-[#18181B]"
      : "border border-[#E4E4E7] bg-[#FFFFFF] text-[#18181B]";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

function DetailsColumn() {
  return (
    <section className="flex flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-[#E4E4E7] px-[16px] py-[8px]">
        <div className="flex items-center gap-[8px]">
          <IconButton icon={ChevronLeft} label="Previous conversation" />
          <IconButton icon={ChevronRight} label="Next conversation" />
        </div>
        <div className="flex items-center gap-[8px]">
          <IconButton icon={Trash2} label="Delete" />
          <IconButton icon={Tag} label="Tag" />
          <IconButton icon={Archive} label="Archive" />
          <IconButton icon={MoreHorizontal} label="More" />
        </div>
      </div>

      <header className="flex items-center justify-between border-b border-[#E4E4E7] px-[16px] py-[16px]">
        <div className="flex items-center gap-[16px]">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F4F4F5] text-[16px] font-semibold text-[#18181B]">
            AS
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[16px] font-semibold text-[#18181B]">Alice Smith</span>
            <span className="text-[14px] text-[#18181B]">Re: Project Update</span>
            <span className="text-[14px] text-[#18181B]">alicesmith@example.com</span>
          </div>
        </div>
        <span className="text-[12px] text-[#71717A]">Mar 25, 2025, 1:15:00 PM</span>
      </header>

      <div className="flex-1 space-y-[20px] overflow-y-auto px-[16px] py-[16px] text-[16px] leading-[1.45] text-[#18181B]">
        {detailBody.split("\n\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <footer className="flex flex-col gap-[20px] border-t border-[#E4E4E7] px-[16px] py-[16px]">
        <div className="rounded-[8px] border border-[#E4E4E7] px-[16px] py-[20px] text-[14px] text-[#18181B]">
          Reply Emily Davis...
        </div>
        <div className="flex items-center justify-between">
          <InboxButton tone="ghost" size="sm" className="gap-[10px] text-[#18181B]">
            <MoreHorizontal className="h-[16px] w-[16px] text-[#71717A]" />
            Mute this thread
          </InboxButton>
          <InboxButton emphasis="primary" size="lg">
            Send
          </InboxButton>
        </div>
      </footer>
    </section>
  );
}

function IconButton({ icon: Icon, label }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B] transition-colors hover:bg-[#F4F4F5]"
    >
      <Icon className="h-[18px] w-[18px]" />
    </button>
  );
}

