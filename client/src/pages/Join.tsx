import Navbar from "@/components/layout/Navbar";
import { Check } from "lucide-react";

export default function Join() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Join MRISA Club</h1>
          <p className="text-muted-foreground">
            Ready to level up? Become an official member today.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl font-bold text-foreground mb-6">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Access to private Discord channels",
              "Exclusive workshop materials",
              "Eligibility for CTF teams",
              "Voting rights in elections",
              "Resume review sessions",
              "Industry mentorship program"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground">
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
                <label className="text-sm font-medium text-muted-foreground">First Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="first" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="last" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Student Email</label>
              <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="student@gmail.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Major</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                <option>Computer Science</option>
                <option>Cybersecurity</option>
                <option>Information Technology</option>
                <option>Data Science</option>
                <option>Other</option>
              </select>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md">
              Submit Application
            </button>
            <p className="text-xs text-center text-muted-foreground">
              By joining, you agree to our Code of Conduct and Ethics Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
