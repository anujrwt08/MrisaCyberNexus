import Navbar from "@/components/layout/Navbar";
import { Check } from "lucide-react";

export default function Join() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Join MRISA Club</h1>
          <p className="text-slate-400">
            Ready to level up? Become an official member today.
          </p>
        </div>

        <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Access to private Discord channels",
              "Exclusive workshop materials",
              "Eligibility for CTF teams",
              "Voting rights in elections",
              "Resume review sessions",
              "Industry mentorship program"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Check size={12} />
                </div>
                {benefit}
              </div>
            ))}
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">First Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Last Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Student Email</label>
              <input type="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="jane.doe@university.edu" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Major</label>
              <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Computer Science</option>
                <option>Cybersecurity</option>
                <option>Information Technology</option>
                <option>Data Science</option>
                <option>Other</option>
              </select>
            </div>

            <button className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Submit Application
            </button>
            <p className="text-xs text-center text-slate-500">
              By joining, you agree to our Code of Conduct and Ethics Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
