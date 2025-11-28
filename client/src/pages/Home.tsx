import Navbar from "@/components/layout/Navbar";
import CyberCard from "@/components/ui/CyberCard";
import GlitchText from "@/components/ui/GlitchText";
import { motion } from "framer-motion";
import { Shield, Terminal, Lock, Users, Trophy, ChevronRight, Code, Cpu } from "lucide-react";
import heroBg from "@assets/generated_images/cybersecurity_network_background_with_glowing_nodes.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-0" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-primary/50 bg-primary/10 backdrop-blur-sm px-4 py-1 rounded mb-6 text-primary font-mono text-sm">
              <span className="animate-pulse mr-2">●</span> SYSTEM ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 tracking-tighter">
              MRISA<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">CYBER</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
              Securing the digital frontier. Join the elite student organization dedicated to 
              <span className="text-primary font-mono mx-2">Ethical Hacking</span>, 
              <span className="text-accent font-mono mx-2">Defense</span>, and 
              <span className="text-secondary font-mono mx-2">Cyber Warfare</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-black font-bold font-display text-lg rounded clip-path-slant hover:bg-white transition-colors flex items-center gap-2"
              >
                INITIALIZE PROTOCOL <ChevronRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary/50 text-primary font-bold font-display text-lg rounded clip-path-slant hover:bg-primary/10 transition-colors"
              >
                VIEW MISSIONS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-white/10 bg-black/50 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-center">
          {[
            { label: "Active Members", value: "128", color: "text-primary" },
            { label: "CTFs Conquered", value: "42", color: "text-accent" },
            { label: "Workshops Hosted", value: "15", color: "text-secondary" },
            { label: "Vulnerabilities Patched", value: "892", color: "text-destructive" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className={`text-4xl font-display font-bold ${stat.color} text-glow`}>{stat.value}</span>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About / Features Section */}
      <section className="py-24 relative" id="about">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              <span className="text-primary">/</span> MISSION OBJECTIVES
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CyberCard title="Ethical Hacking" icon={<Terminal size={24} />}>
              Learn the art of penetration testing. We simulate real-world attacks to understand how to defend against them. From SQL injection to XSS, master the offensive tools.
            </CyberCard>

            <CyberCard title="Network Defense" icon={<Shield size={24} />}>
              Blue Teaming is our core. Learn to harden systems, configure firewalls, and analyze traffic patterns to detect intruders before they breach the perimeter.
            </CyberCard>

            <CyberCard title="Cryptography" icon={<Lock size={24} />}>
              Dive deep into the math that secures the world. Understanding encryption, hashing, and digital signatures is fundamental to modern security.
            </CyberCard>
            
             <CyberCard title="CTF Competitions" icon={<Trophy size={24} />}>
              Join our competitive team. We participate in global Capture The Flag events, solving puzzles in binary exploitation, forensics, and web security.
            </CyberCard>

            <CyberCard title="Secure Coding" icon={<Code size={24} />}>
              Developers are the first line of defense. Learn to write code that is resilient to attacks and understand the OWASP Top 10 vulnerabilities.
            </CyberCard>

            <CyberCard title="Hardware Hacking" icon={<Cpu size={24} />}>
              Explore the physical side of security. BadUSB, RFID cloning, and analyzing IoT devices. Understand the risks at the hardware level.
            </CyberCard>
          </div>
        </div>
      </section>

      {/* Terminal / Code Section */}
      <section className="py-20 bg-black relative border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl shadow-primary/10">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-gray-400">user@mrisa-cyber:~</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base bg-black/90 min-h-[300px] text-gray-300">
              <div className="mb-4">
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">./init_club_protocol.sh</span>
              </div>
              <div className="mb-2 text-gray-400">
                [INFO] Initializing connection...<br/>
                [INFO] Establishing secure handshake...<br/>
                [SUCCESS] Connection established.
              </div>
              <div className="mb-4">
                <span className="text-primary">Welcome to MRISA Cyber Security Club.</span><br/>
                We are a community of students passionate about information security.<br/>
                Our goal is to foster the next generation of cyber professionals.
              </div>
              <div className="mb-4">
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">cat upcoming_events.txt</span>
              </div>
               <div className="mb-2 grid grid-cols-1 gap-2">
                 <div className="flex gap-4">
                   <span className="text-primary min-w-[100px]">28 NOV</span>
                   <span>Intro to Linux & Bash Scripting</span>
                 </div>
                 <div className="flex gap-4">
                   <span className="text-primary min-w-[100px]">05 DEC</span>
                   <span>Wireshark Traffic Analysis Workshop</span>
                 </div>
                 <div className="flex gap-4">
                   <span className="text-primary min-w-[100px]">12 DEC</span>
                   <span>End of Semester CTF Challenge</span>
                 </div>
               </div>
               <div className="mt-4 animate-pulse">
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2 h-4 bg-gray-400 align-middle ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center" id="join">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl font-display font-bold text-white mb-6">READY TO <span className="text-primary">BREACH?</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join us every Thursday at 6:00 PM in the Computer Science Lab.
            No prior experience required. Curiosity is mandatory.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-black font-bold font-display text-xl rounded shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] transition-shadow"
          >
            JOIN THE DISCORD
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="text-primary" size={32} />
            <span className="font-display font-bold text-xl text-white tracking-wider">
              MRISA<span className="text-primary">CYBER</span>
            </span>
          </div>
          
          <div className="text-gray-500 font-mono text-sm text-center md:text-right">
            <p>&copy; 2024 MRISA Cyber Security Club.</p>
            <p>Designed for the future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
