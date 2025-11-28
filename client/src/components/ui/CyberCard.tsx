import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

export default function CyberCard({ children, className, title, icon }: CyberCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 243, 255, 0.15)" }}
      className={cn(
        "relative bg-card/50 backdrop-blur-sm border border-primary/20 p-6 overflow-hidden group",
        "clip-path-tech", // Custom CSS class for angled corners
        className
      )}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary transition-all group-hover:w-full group-hover:h-full group-hover:opacity-20" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary transition-all group-hover:w-full group-hover:h-full group-hover:opacity-20" />
      
      {/* Header if provided */}
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
          {icon && <div className="text-primary">{icon}</div>}
          {title && <h3 className="font-display text-lg font-bold text-white">{title}</h3>}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-gray-300 font-sans">
        {children}
      </div>

      {/* Scanning line effect on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
    </motion.div>
  );
}
