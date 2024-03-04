import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-btn";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center from-primary to-secondary bg-gradient-to-b">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Auth System
        </h1>
        <p className="text-white text-lg">A robust authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
