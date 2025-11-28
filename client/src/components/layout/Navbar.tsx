import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "@assets/generated_images/minimalist_cybersecurity_shield_logo.png";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Join", href: "/join" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-background/0 border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/">
              <a className="flex items-center gap-3 group">
                <div className="relative w-9 h-9 overflow-hidden">
                  <img src={logo} alt="MRISA Logo" className="w-full h-full object-contain dark:filter-none filter invert group-hover:invert-0 transition-all" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-wide text-foreground leading-none group-hover:text-primary transition-colors">
                    MRISA
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest leading-none mt-1">
                    Cyber Security
                  </span>
                </div>
              </a>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      location === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
            
            <div className="h-6 w-px bg-border mx-2" />
            
            <ThemeToggle />

            <Link href="/join">
              <a className="inline-flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded transition-colors shadow-md hover:shadow-lg">
                Join Now <ChevronRight size={16} />
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
