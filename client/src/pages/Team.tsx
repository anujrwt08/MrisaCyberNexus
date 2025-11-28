import Navbar from "@/components/layout/Navbar";
import CyberCard from "@/components/ui/CyberCard";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, GraduationCap, UserPlus, Award } from "lucide-react";
import malePlaceholder from "@assets/generated_images/professional_team_member_placeholder_male.png";
import femalePlaceholder from "@assets/generated_images/professional_team_member_placeholder_female.png";
import mentorPlaceholder from "@assets/generated_images/professional_mentor_or_professor_headshot.png";

const faculty = [
  {
    name: "Dr. Robert Vance",
    role: "Faculty Advisor",
    bio: "Professor of Computer Science. Research focus on Post-Quantum Cryptography and Network Protocols.",
    image: mentorPlaceholder
  },
  {
    name: "Prof. Elena Rodriguez",
    role: "Industry Mentor",
    bio: "CISO at CyberTech Solutions. Provides career guidance and industry insights to club members.",
    image: femalePlaceholder
  }
];

const coreTeam = [
  {
    name: "Alex Chen",
    role: "President",
    bio: "Senior CS major specializing in Network Security. Interned at CrowdStrike.",
    image: malePlaceholder
  },
  {
    name: "Sarah Jenkins",
    role: "Vice President",
    bio: "Junior Cybersecurity major. CTF Team Captain and Reverse Engineering enthusiast.",
    image: femalePlaceholder
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    bio: "Full-stack developer and AppSec researcher. Responsible for club infrastructure.",
    image: malePlaceholder
  },
  {
    name: "Jessica Wong",
    role: "Secretary",
    bio: "Keeps the club organized. Documentation wizard and aspiring Security Analyst.",
    image: femalePlaceholder
  }
];

const volunteers = [
  { name: "Michael Chang", role: "Event Volunteer", image: malePlaceholder },
  { name: "Emily Davis", role: "Workshop Helper", image: femalePlaceholder },
  { name: "James Wilson", role: "Lab Maintainer", image: malePlaceholder },
  { name: "Sophia Li", role: "Social Media", image: femalePlaceholder },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our People</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              The dedicated individuals who make MRISA the premier cybersecurity community.
              From industry veterans to student leaders.
            </p>
          </motion.div>
        </div>

        {/* Faculty & Mentors */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-primary/10 rounded-lg text-primary"><GraduationCap size={24} /></div>
            <h2 className="text-3xl font-display font-bold text-white">Faculty & Mentors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-card/30 border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start hover:border-primary/30 transition-all">
                  <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">{member.role}</span>
                    <p className="text-slate-400 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Leadership */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-primary/10 rounded-lg text-primary"><Award size={24} /></div>
            <h2 className="text-3xl font-display font-bold text-white">Core Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CyberCard className="h-full flex flex-col items-center text-center pt-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 mb-4 group-hover:border-primary transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <span className="text-primary text-xs font-mono uppercase mb-3 block">{member.role}</span>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{member.bio}</p>
                  <div className="flex gap-3 text-slate-500 pt-4 border-t border-white/5 w-full justify-center">
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin size={16} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Twitter size={16} /></a>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteers */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-primary/10 rounded-lg text-primary"><UserPlus size={24} /></div>
            <h2 className="text-3xl font-display font-bold text-white">Volunteers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {volunteers.map((vol, i) => (
              <div key={i} className="bg-card/20 border border-white/5 rounded-lg p-4 flex items-center gap-4 hover:bg-card/40 transition-colors">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5">
                  <img src={vol.image} alt={vol.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{vol.name}</div>
                  <div className="text-xs text-slate-500">{vol.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
