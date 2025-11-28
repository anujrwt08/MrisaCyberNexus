import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About MRISA</h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-12">
            The MRISA (Information Security Association) Club is dedicated to fostering a community of students passionate about cybersecurity. We believe in practical, hands-on learning that goes beyond the classroom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 mb-6">
                To provide students with the skills, resources, and network needed to succeed in the cybersecurity industry. We aim to create a collaborative environment where members can learn from each other and grow together.
              </p>
              <ul className="space-y-3">
                {["Industry-standard training", "Networking with professionals", "Ethical hacking ethics", "Career development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card/30 border border-white/5 rounded-xl p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">History</h2>
              <p className="text-slate-400">
                Founded in 2018 by a group of computer science students who recognized the need for specialized security training. Since then, MRISA has grown from a small study group to one of the most active technical organizations on campus, consistently placing in national Capture The Flag competitions.
              </p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12">
            <h2 className="text-2xl font-display font-bold text-white mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { h: "Workshops", t: "Weekly hands-on sessions covering topics from Linux basics to advanced binary exploitation." },
                { h: "Competitions", t: "Regular internal CTFs and teams sent to major collegiate cyber defense competitions." },
                { h: "Guest Speakers", t: "Talks from industry experts, alumni, and researchers sharing real-world insights." }
              ].map((item, i) => (
                <div key={i} className="bg-background border border-white/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-2">{item.h}</h3>
                  <p className="text-slate-400 text-sm">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
