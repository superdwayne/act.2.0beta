import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, Command, SquareArrowOutUpRight } from "lucide-react";

export default function AuthenticationPage() {
  return (
    <div className="w-[1334px] mx-auto p-14 space-y-10 rounded-3xl border border-[hsl(var(--border))]">
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1">
          <h1 className="text-4xl leading-10 font-semibold text-[hsl(var(--foreground))]">Authentication</h1>
        </div>
        <a
          className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-3 text-sm text-[hsl(var(--foreground))]"
          href="https://ui.shadcn.com/examples/authentication"
          target="_blank"
          rel="noreferrer"
        >
          <span>View in Shadcn</span>
          <SquareArrowOutUpRight className="h-4 w-4" />
        </a>
      </div>

      <Card className="rounded-xl">
        <div className="flex rounded-xl overflow-hidden">
          {/* Left column */}
          <div className="flex-1 bg-[hsl(var(--secondary))] p-10 flex flex-col justify-between h-[800px]">
            <div className="w-[586px] max-w-full flex items-center gap-2">
              <Command className="h-6 w-6 text-[hsl(var(--primary))]" />
              <div className="text-lg font-medium text-[hsl(var(--primary))]">Acme Inc</div>
            </div>

            <div className="w-[586px] max-w-full">
              <p className="text-base text-[hsl(var(--primary))]">
                “This library has saved me countless hours of work and helped me deliver
                stunning designs to my clients faster than ever before.” - Sofia Davis
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 bg-[hsl(var(--background))] p-8 h-[800px] flex flex-col items-center">
            <div className="w-[586px] flex justify-end">
              <Button className="h-9 px-4 text-sm rounded-lg bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]">Login</Button>
            </div>

            <div className="flex-1 w-full flex items-center justify-center">
              <div className="w-[586px] px-[126.5px]">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl leading-8 font-semibold text-[hsl(var(--foreground))]">Create an account</h2>
                    <p className="text-sm leading-5 text-[hsl(var(--muted-foreground))]">Enter your email below to create your account</p>
                </div>

                <div className="space-y-2">
                    <Input placeholder="name@example.com" className="h-9" />
                  <Button className="w-full h-9 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]">Sign In with Email</Button>
                </div>

                <div className="flex items-center w-full">
                  <Separator />
                  <span className="px-2 text-[10px] uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Or continue with</span>
                  <Separator />
                </div>

                <Button className="w-full h-9 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>Github</span>
                  </div>
                </Button>

                <p className="text-center text-sm text-zinc-400">
                  By clicking continue, you agree to our <a className="underline" href="https://ui.shadcn.com/terms">Terms of Service</a> and <a className="underline" href="https://ui.shadcn.com/privacy">Privacy Policy</a>.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
