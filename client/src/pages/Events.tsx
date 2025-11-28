import Navbar from "@/components/layout/Navbar";
import { Calendar } from "lucide-react";

export default function Events() {
  const events = [
    { date: "Oct 15", title: "Intro to Linux & Bash", type: "Workshop", loc: "Room 304" },
    { date: "Oct 22", title: "Web Exploitation 101", type: "Workshop", loc: "Room 304" },
    { date: "Oct 29", title: "Halloween CTF", type: "Competition", loc: "Main Lab" },
    { date: "Nov 05", title: "Guest Speaker: CISO of TechCorp", type: "Talk", loc: "Auditorium B" },
    { date: "Nov 12", title: "Wireshark Traffic Analysis", type: "Workshop", loc: "Room 304" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-display font-bold text-white mb-8">Upcoming Events</h1>
        
        <div className="space-y-4">
          {events.map((ev, i) => (
            <div key={i} className="bg-card border border-white/5 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-primary/30 transition-colors group">
              <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Calendar size={20} className="mb-1" />
                <span className="text-xs font-bold">{ev.date}</span>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-white">{ev.type}</span>
                  <span className="text-xs text-slate-500">{ev.loc}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{ev.title}</h3>
              </div>

              <button className="px-4 py-2 text-sm font-medium text-primary border border-primary/20 rounded hover:bg-primary/10 transition-colors">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
