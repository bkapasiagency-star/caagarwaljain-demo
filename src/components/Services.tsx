import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ClipboardCheck,
  ShieldAlert,
  Coins,
  Scale,
  FileSpreadsheet,
  TrendingUp,
  Landmark,
  Globe,
  Gavel,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Calendar
} from "lucide-react";
import { SERVICES } from "../data";
import MagneticCard from "./MagneticCard";

interface ServicesProps {
  onBookConsultation: (serviceTitle: string) => void;
}

export default function Services({ onBookConsultation }: ServicesProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "audit-assurance":
        return <ClipboardCheck className="w-6 h-6 text-accent-gold" />;
      case "direct-taxation":
        return <ShieldAlert className="w-6 h-6 text-accent-gold" />;
      case "indirect-taxation":
        return <Coins className="w-6 h-6 text-accent-gold" />;
      case "corporate-compliance":
        return <Scale className="w-6 h-6 text-accent-gold" />;
      case "accounting-services":
        return <FileSpreadsheet className="w-6 h-6 text-accent-gold" />;
      case "business-advisory":
        return <TrendingUp className="w-6 h-6 text-accent-gold" />;
      case "project-finance":
        return <Landmark className="w-6 h-6 text-accent-gold" />;
      case "fema-advisory":
        return <Globe className="w-6 h-6 text-accent-gold" />;
      case "representation":
        return <Gavel className="w-6 h-6 text-accent-gold" />;
      case "virtual-cfo":
        return <Briefcase className="w-6 h-6 text-accent-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-accent-gold" />;
    }
  };

  const handleCardToggle = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Our Core Practice</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
              Comprehensive Financial, Audit & Compliance Solutions
            </h2>
            <div className="h-1 w-20 bg-accent-gold mt-6 rounded-full" />
          </div>
          <div className="text-left">
            <p className="text-sm md:text-base text-text-secondary max-w-sm leading-relaxed">
              We provide structured statutory audits, comprehensive tax planning, and strategic advisory solutions designed to secure operations and streamline business expansions.
            </p>
          </div>
        </div>

        {/* Dynamic Service Bento-style Grid (3-columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const isExpanded = expandedCard === service.id;

            return (
              <MagneticCard
                key={service.id}
                glowColor="200, 165, 72"
                className={`relative bg-slate-50 border rounded-[28px] p-8 hover:shadow-premium-lg transition-all duration-300 clickable-card flex flex-col justify-between overflow-hidden ${
                  isExpanded ? "border-secondary-blue/30 shadow-premium-md bg-white" : "border-border-light hover:border-secondary-blue/15"
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-premium-sm border border-border-light">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-text font-semibold bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-primary-navy tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Toggle Button for Sub-capabilities */}
                  <button
                    onClick={() => handleCardToggle(service.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-secondary-blue hover:text-primary-navy uppercase tracking-wider transition-colors focus:outline-none mb-6 cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Specific Areas" : "View Specific Areas"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-accent-gold" : "text-secondary-blue"
                      }`}
                    />
                  </button>

                  {/* Accordion Expand Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2.5 border-t border-border-light pt-4 mb-6">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0 mt-1.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card footer CTA buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                  <button
                    onClick={() => onBookConsultation(service.title)}
                    className="flex items-center gap-1.5 text-xs font-bold text-primary-navy hover:text-accent-gold uppercase tracking-wider transition-colors cursor-pointer group"
                  >
                    <span>Request Advice</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onBookConsultation(service.title)}
                    className="p-2.5 bg-white hover:bg-primary-navy hover:text-white rounded-xl border border-border-light transition-all cursor-pointer text-muted-text"
                    aria-label={`Book consultation for ${service.title}`}
                  >
                    <Calendar className="w-4 h-4 text-accent-gold" />
                  </button>
                </div>
              </MagneticCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
