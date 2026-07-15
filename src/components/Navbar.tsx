import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar, PhoneCall, ArrowUpRight } from "lucide-react";
import { FIRM_DETAILS } from "../data";
import caLogo from "../assets/ca-logo.png";

interface NavbarProps {
  onOpenConsultation: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenConsultation, activeTab, setActiveTab, onNavigateToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Partners", id: "partners" },
    { label: "Insights", id: "insights" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          scrolled
            ? "py-4 bg-white/80 backdrop-blur-md border-b border-border-light shadow-premium-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand left */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-[14px] bg-white flex items-center justify-center shadow-premium-sm border border-border-light transition-transform group-hover:scale-105 duration-300 p-1.5">
              <img src={caLogo} alt={`${FIRM_DETAILS.name} logo`} className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="block font-bold text-primary-navy tracking-tight text-base md:text-lg group-hover:text-secondary-blue transition-colors">
                {FIRM_DETAILS.name}
              </span>
              <span className="block text-[10px] text-accent-gold uppercase tracking-widest font-semibold mt-0.5">
                {FIRM_DETAILS.suffix}
              </span>
            </div>
          </button>

          {/* Nav Menu Center (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-all cursor-pointer focus:outline-none ${
                  activeTab === item.id
                    ? "text-[#0B1F3A] font-semibold"
                    : "text-text-secondary hover:text-[#0B1F3A]"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Controls Right */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="hidden xl:flex items-center gap-2 text-sm font-semibold text-secondary-blue hover:text-primary-navy transition-colors bg-slate-50 border border-border-light px-4 py-2 rounded-[14px]"
            >
              <PhoneCall className="w-4 h-4 text-accent-gold" />
              <span>Call Expert</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#0B1F3A] hover:bg-secondary-blue text-white text-sm font-medium rounded-[14px] shadow-premium-sm hover:shadow-premium-md hover:scale-102 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-accent-gold" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Burger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[14px] border border-border-light text-primary-navy bg-white lg:hidden cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white border-b border-border-light shadow-premium-lg lg:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-2 px-3 text-base font-medium rounded-[14px] transition-all ${
                      activeTab === item.id
                        ? "bg-slate-50 text-primary-navy font-bold border-l-4 border-accent-gold"
                        : "text-text-secondary hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-border-light flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${FIRM_DETAILS.phone}`}
                    className="flex items-center justify-center gap-2 py-3 bg-slate-50 border border-border-light text-primary-navy font-medium rounded-[14px] text-sm"
                  >
                    <PhoneCall className="w-4 h-4 text-accent-gold" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="flex items-center justify-center gap-2 py-3 bg-[#0B1F3A] hover:bg-secondary-blue text-white font-medium rounded-[14px] text-sm shadow-premium-md"
                  >
                    <Calendar className="w-4 h-4 text-accent-gold" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
