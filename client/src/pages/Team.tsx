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
  },
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
    name: "Anuj Rawat ",
    role: "President",
    bio: "Senior CS major specializing in Network Security. Interned at CrowdStrike.",
    image: malePlaceholder
  },
  {
    name: "Harsh  ",
    role: "Vice President",
    bio: "Junior Cybersecurity major. CTF Team Captain and Reverse Engineering enthusiast.",
    image: femalePlaceholder
  },
  {
    name: "aditya ",
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
  { name: "Michael Chang", role: "Event Volunteer", image: malePlaceholder },
  { name: "Emily Davis", role: "Workshop Helper", image: femalePlaceholder },
  { name: "James Wilson", role: "Lab Maintainer", image: malePlaceholder },
  { name: "Sophia Li", role: "Social Media", image: femalePlaceholder },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our People</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The dedicated individuals who make MRISA the premier cybersecurity community.
              From industry veterans to student leaders.
            </p>
          </motion.div>
        </div>

        {/* Faculty & Mentors */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-primary/10 rounded-lg text-primary"><GraduationCap size={24} /></div>
            <h2 className="text-3xl font-display font-bold text-foreground">Faculty & Mentors</h2>
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
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start hover:border-primary/30 transition-all shadow-sm">
                  <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-border">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                    <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">{member.role}</span>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
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
            <h2 className="text-3xl font-display font-bold text-foreground">Core Leadership</h2>
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
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border mb-4 group-hover:border-primary transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <span className="text-primary text-xs font-mono uppercase mb-3 block">{member.role}</span>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{member.bio}</p>
                  <div className="flex gap-3 text-muted-foreground pt-4 border-t border-border w-full justify-center">
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
            <h2 className="text-3xl font-display font-bold text-foreground">Volunteers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {volunteers.map((vol, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4 hover:bg-accent/10 transition-colors">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                  <img src={vol.image} alt={vol.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{vol.name}</div>
                  <div className="text-xs text-muted-foreground">{vol.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
