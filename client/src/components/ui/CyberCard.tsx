import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export default function CyberCard({ children, className, title, subtitle, icon }: CyberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-md border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group",
        className
      )}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header if provided */}
      {(title || icon) && (
        <div className="relative z-10 mb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              {title && <h3 className="font-display text-xl font-semibold text-card-foreground tracking-tight">{title}</h3>}
              {subtitle && <p className="text-sm text-muted-foreground font-sans">{subtitle}</p>}
            </div>
            {icon && (
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {icon}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-muted-foreground font-sans leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
