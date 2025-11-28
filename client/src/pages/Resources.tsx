import Navbar from "@/components/layout/Navbar";
import CyberCard from "@/components/ui/CyberCard";
import { BookOpen, Video, Link as LinkIcon, Download } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-display font-bold text-white mb-8">Learning Resources</h1>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Curated guides, tools, and links to help you start your cybersecurity journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-primary" /> Guides & Cheatsheets
            </h2>
            <div className="space-y-4">
              {["Linux Command Line Basics", "Nmap Cheat Sheet", "Common Ports & Protocols", "OWASP Top 10 Explained"].map((item, i) => (
                <a key={i} href="#" className="block bg-card p-4 rounded border border-white/5 hover:border-primary/50 transition-colors text-slate-300 hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <LinkIcon size={24} className="text-primary" /> External Platforms
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {["TryHackMe", "HackTheBox", "OverTheWire", "PortSwigger Academy"].map((item, i) => (
                <CyberCard key={i} className="flex items-center justify-center h-24 text-center font-bold hover:text-primary cursor-pointer">
                  {item}
                </CyberCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
