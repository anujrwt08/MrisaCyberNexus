import CyberCard from "@/components/ui/CyberCard";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <CyberCard className="w-full max-w-md mx-4">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-destructive" />
          <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
      </CyberCard>
    </div>
  );
}
