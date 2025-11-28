import Navbar from "@/components/layout/Navbar";
import { Calendar, Clock, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Events() {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    { 
      date: { day: "15", month: "NOV" }, 
      title: "Advanced Linux Kernel Exploitation", 
      type: "Workshop", 
      time: "6:00 PM - 8:00 PM",
      loc: "Room 304",
      desc: "Deep dive into kernel space. Prerequisites: C programming and basic Linux knowledge."
    },
    { 
      date: { day: "22", month: "NOV" }, 
      title: "Red Team vs Blue Team Simulation", 
      type: "Competition", 
      time: "10:00 AM - 6:00 PM",
      loc: "Main Cyber Lab",
      desc: "Full day attack-defense CTF. Pizza and drinks provided."
    },
    { 
      date: { day: "29", month: "NOV" }, 
      title: "Guest Speaker: NSA Analyst", 
      type: "Talk", 
      time: "5:00 PM - 6:30 PM",
      loc: "Auditorium B",
      desc: "Insights into federal cybersecurity careers and mission sets."
    },
  ];

  const pastEvents = [
    { 
      date: { day: "10", month: "OCT" }, 
      title: "Intro to Wireshark", 
      type: "Workshop", 
      time: "Completed",
      loc: "Room 304",
      desc: "Analyzing packet captures for malware signatures."
    },
    { 
      date: { day: "25", month: "SEP" }, 
      title: "Fall Kickoff Social", 
      type: "Social", 
      time: "Completed",
      loc: "Student Union",
      desc: "Meet and greet for new members."
    }
  ];

  const displayedEvents = filter === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">Event Calendar</h1>
            <p className="text-slate-400">Join us for workshops, competitions, and networking.</p>
          </div>
          
          <div className="flex bg-card border border-white/10 rounded-lg p-1">
            <button 
              onClick={() => setFilter('upcoming')}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                filter === 'upcoming' ? "bg-primary text-black shadow-lg" : "text-slate-400 hover:text-white"
              )}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setFilter('past')}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                filter === 'past' ? "bg-primary text-black shadow-lg" : "text-slate-400 hover:text-white"
              )}
            >
              Past Events
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          {displayedEvents.map((ev, i) => (
            <div key={i} className="bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-primary/30 transition-all group relative overflow-hidden">
              
              {/* Date Badge */}
              <div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-24 bg-white/5 rounded-lg md:aspect-square p-4 border border-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <span className="text-3xl md:text-4xl font-bold tracking-tighter">{ev.date.day}</span>
                <span className="text-sm font-mono uppercase tracking-widest">{ev.date.month}</span>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded bg-secondary/50 text-xs font-mono text-white border border-white/10 uppercase tracking-wide">
                    {ev.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {ev.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {ev.desc}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-2">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary/70" />
                    {ev.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary/70" />
                    {ev.loc}
                  </div>
                </div>
              </div>

              {/* Action */}
              {filter === 'upcoming' && (
                <div className="flex md:flex-col justify-center md:pl-6 md:border-l border-white/5">
                  <button className="w-full md:w-auto px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-primary hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                    RSVP Now <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
