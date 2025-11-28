import Navbar from "@/components/layout/Navbar";
import CyberCard from "@/components/ui/CyberCard";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import malePlaceholder from "@assets/generated_images/professional_team_member_placeholder_male.png";
import femalePlaceholder from "@assets/generated_images/professional_team_member_placeholder_female.png";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "President",
    bio: "Senior CS major specializing in Network Security and Threat Intelligence. Interned at CrowdStrike.",
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
    bio: "Full-stack developer and AppSec researcher. Responsible for club infrastructure and labs.",
    image: malePlaceholder
  },
  {
    name: "Emily Rodriguez",
    role: "Events Coordinator",
    bio: "Sophomore focused on community building and organizing hackathons. Passionate about OSINT.",
    image: femalePlaceholder
  },
  {
    name: "Michael Chang",
    role: "Treasurer",
    bio: "Managing club finances and sponsorships. Interested in FinTech security and compliance.",
    image: malePlaceholder
  },
  {
    name: "Jessica Wong",
    role: "Secretary",
    bio: "Keeps the club organized. Documentation wizard and aspiring Security Analyst.",
    image: femalePlaceholder
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Leadership Team</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Meet the dedicated students working behind the scenes to make MRISA the best community for aspiring security professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CyberCard className="h-full flex flex-col items-center text-center pt-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                  {member.role}
                </span>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {member.bio}
                </p>
                <div className="flex gap-4 text-slate-500">
                  <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
