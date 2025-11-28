import Navbar from "@/components/layout/Navbar";
import { BookOpen, Video, Link as LinkIcon, Download, Shield, Terminal, Monitor, FileText, ExternalLink, PlayCircle } from "lucide-react";

const ResourceCard = ({ title, desc, icon, link, tags }: any) => (
  <a href={link} className="group block bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all h-full">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string, i: number) => (
        <span key={i} className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-muted text-muted-foreground border border-border">
          {tag}
        </span>
      ))}
    </div>
  </a>
);

export default function Resources() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-16">
          <h1 className="text-4xl font-display font-bold text-foreground mb-6">Learning Hub</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A curated collection of tools, platforms, and documentation to accelerate your cybersecurity journey.
            Access workshop slides, recommended reading, and practice environments.
          </p>
        </div>

        {/* Section 1: Practice Platforms */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <Terminal className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Training Grounds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCard 
              title="TryHackMe" 
              desc="Gamified cyber security training with guided learning paths for beginners."
              icon={<Monitor size={24} />}
              link="#"
              tags={["Beginner", "Guided", "Web"]}
            />
            <ResourceCard 
              title="HackTheBox" 
              desc="Advanced penetration testing labs and competitive CTF challenges."
              icon={<Shield size={24} />}
              link="#"
              tags={["Advanced", "Labs", "Network"]}
            />
            <ResourceCard 
              title="OverTheWire" 
              desc="Wargames to learn Linux command line and security concepts."
              icon={<Terminal size={24} />}
              link="#"
              tags={["Linux", "SSH", "Bash"]}
            />
            <ResourceCard 
              title="PortSwigger Academy" 
              desc="The gold standard for web application security training (Burp Suite)."
              icon={<BookOpen size={24} />}
              link="#"
              tags={["Web", "AppSec", "Free"]}
            />
          </div>
        </section>

        {/* Section 2: Club Materials */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <FileText className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Workshop Materials</h2>
          </div>
          <div className="bg-card/40 border border-border rounded-xl overflow-hidden shadow-sm">
            {[
              { title: "Intro to Linux & Bash Scripting", date: "Oct 15, 2025", size: "2.4 MB" },
              { title: "Understanding Network Protocols (TCP/IP)", date: "Oct 22, 2025", size: "5.1 MB" },
              { title: "Web Exploitation: OWASP Top 10", date: "Nov 05, 2025", size: "8.2 MB" },
              { title: "Binary Exploitation Basics", date: "Nov 12, 2025", size: "3.6 MB" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-accent/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-500/10 text-red-500 rounded">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="text-xs text-muted-foreground">{item.date} • PDF</span>
                  </div>
                </div>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/20 rounded-full transition-all">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Video Library */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <Video className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Featured Talks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="group relative aspect-video bg-black rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer shadow-md">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-bold text-sm">DEF CON 32: Hacking Satellites</h3>
                  <span className="text-xs text-slate-400">15:42 • Keynote</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
