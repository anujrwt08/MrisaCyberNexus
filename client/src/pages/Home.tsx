import Navbar from "@/components/layout/Navbar";
import CyberCard from "@/components/ui/CyberCard";
import { motion } from "framer-motion";
import { Shield, Terminal, Globe, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@/assets/images/enterprise_cybersecurity_data_center_abstract.png";

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-30 mix-blend-overlay dark:mix-blend-luminosity transition-opacity duration-300"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          {/* Light mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:hidden" />
          {/* Dark mode gradient */}
          <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-background via-background/90 to-transparent" />
          
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

              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-[1.1]">
                Securing the <br />
                <span className="text-gradient-primary">Digital Frontier.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                MRISA is the premier student-led cybersecurity organization. We bridge the gap between academic theory and industry reality through hands-on training and competition.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/join">
                  <a className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
                    Become a Member <ChevronRight size={18} />
                  </a>
                </Link>
                <Link href="/about">
                  <a className="px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-lg hover:bg-foreground/5 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Domain Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-20 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">1st</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Regional CTF</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Workshops/Year</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Passion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">MRISA</h3>
              <p className="text-muted-foreground max-w-sm">
                Empowering the next generation of cybersecurity professionals through education, community, and competition.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
                <li><Link href="/team"><a className="hover:text-primary transition-colors">Our Team</a></Link></li>
                <li><Link href="/events"><a className="hover:text-primary transition-colors">Events</a></Link></li>
                <li><Link href="/join"><a className="hover:text-primary transition-colors">Join Now</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="https://www.linkedin.com/in/anujrawat08/" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/in/anujrawat08/" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/anujrwt08" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
            &copy; 2025 MRISA Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
