import * as React from "react"
// Adapted for Vite React: replace Next.js Link/Image

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [keepSignedIn, setKeepSignedIn] = React.useState(true);

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center p-6">
        <div className="mx-auto flex w-[360px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-[hsl(var(--card-foreground))]">Sign in</h1>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Log in to unlock tailored content and stay connected with your community.
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[hsl(var(--foreground))]">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email or username"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-[hsl(var(--foreground))]">Password</Label>
              <Input id="password" type="password" placeholder="Password" required />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember-me"
                  checked={keepSignedIn}
                  onCheckedChange={(checked) => setKeepSignedIn(!!checked)}
                />
                <Label
                  htmlFor="remember-me"
                  className="text-sm font-medium text-[hsl(var(--foreground))]"
                >
                  Keep me signed in
                </Label>
              </div>
              <a href="#" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">Forgot password?</a>
            </div>
             <Button type="submit" className="w-full" onClick={(e) => e.preventDefault()}>
              Sign in
            </Button>
          </form>
          <div className="text-center text-sm">
            <span className="text-[hsl(var(--muted-foreground))]">Don’t have an account? </span>
            <a href="#" className="underline text-[hsl(var(--primary))]">Sign up</a>
          </div>
        </div>
      </div>
      <div className="hidden bg-[hsl(var(--muted))] lg:block">
        <img
          src="https://ui.shadcn.com/placeholder.svg"
          alt="Sign In Illustration"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
