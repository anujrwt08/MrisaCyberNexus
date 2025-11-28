import Navbar from "@/components/layout/Navbar";
import CyberCard from "@/components/ui/CyberCard";
import { motion } from "framer-motion";
import { Shield, Terminal, Users, Lock, ChevronRight, Globe, Cpu, Server } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/enterprise_cybersecurity_data_center_abstract.png";

export default function Home() {
  const features = [
    {
      title: "Offensive Security",
      desc: "Master the art of ethical hacking, penetration testing, and vulnerability assessment in our state-of-the-art labs.",
      icon: <Terminal size={24} />
    },
    {
      title: "Defensive Operations",
      desc: "Learn enterprise-grade blue team tactics, threat hunting, and incident response protocols.",
      icon: <Shield size={24} />
    },
    {
      title: "Research & Analysis",
      desc: "Contribute to open-source security tools and publish research on emerging threats and zero-day vulnerabilities.",
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                RECRUITING FOR FALL 2025
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
                Securing the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Digital Frontier.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                MRISA is the premier student-led cybersecurity organization. We bridge the gap between academic theory and industry reality through hands-on training and competition.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/join">
                  <a className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Become a Member <ChevronRight size={18} />
                  </a>
                </Link>
                <Link href="/about">
                  <a className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
                    Learn More
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Domain Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our curriculum covers the full spectrum of information security domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <CyberCard key={i} title={feature.title} icon={feature.icon}>
                {feature.desc}
              </CyberCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">500+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">1st</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Regional CTF</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">50+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Workshops/Year</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Passion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-display font-bold text-2xl text-white mb-4">MRISA</h3>
              <p className="text-slate-400 max-w-sm">
                Empowering the next generation of cybersecurity professionals through education, community, and competition.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
                <li><Link href="/team"><a className="hover:text-primary transition-colors">Our Team</a></Link></li>
                <li><Link href="/events"><a className="hover:text-primary transition-colors">Events</a></Link></li>
                <li><Link href="/join"><a className="hover:text-primary transition-colors">Join Now</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-sm">
            &copy; 2025 MRISA Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
