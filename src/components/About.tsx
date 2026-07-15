import React from "react";
import { motion } from "motion/react";
import { Shield, Award, Eye, Briefcase, Cpu, Heart, ChevronRight, Check } from "lucide-react";
import { CORE_VALUES, TIMELINE, FIRM_DETAILS } from "../data";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-6 h-6 text-accent-gold" />,
    Award: <Award className="w-6 h-6 text-accent-gold" />,
    Eye: <Eye className="w-6 h-6 text-accent-gold" />,
    Briefcase: <Briefcase className="w-6 h-6 text-accent-gold" />,
    Cpu: <Cpu className="w-6 h-6 text-accent-gold" />,
    HeartHandshake: <Heart className="w-6 h-6 text-accent-gold" />
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
            An Editorial Pursuit of Excellence in Financial Governance
          </h2>
          <div className="h-1 w-20 bg-accent-gold mt-6 rounded-full" />
        </div>

        {/* Editorial Story Layout: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Vertical Timeline & Corporate Milestones (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-border-light rounded-[28px] p-8 md:p-10 shadow-premium-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-blue/5 rounded-full blur-2xl" />
            
            <h3 className="text-lg font-bold text-primary-navy tracking-tight mb-8">Firm Timeline & Milestones</h3>
            
            <div className="relative border-l-2 border-slate-200 pl-6 ml-2 space-y-8">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-accent-gold flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    <div className="w-2 h-2 rounded-full bg-secondary-blue" />
                  </div>
                  
                  <span className="text-xs font-mono font-bold text-accent-gold block mb-1">{item.year}</span>
                  <h4 className="text-sm font-bold text-primary-navy tracking-tight">{item.title}</h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission, Vision & Strategic Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                Founded on <strong>{FIRM_DETAILS.established}</strong> in Surat, Agarwal & Jain has grown to represent corporate excellence in audit, assurance, and high-end taxation advisory. We prioritize compliance as a competitive advantage for our clients, providing independent, expert advisory with full accountability.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-8 rounded-2xl border border-border-light bg-slate-50 hover:bg-white hover:shadow-premium-md transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-gold block mb-3">Our Mission</span>
                <h4 className="text-lg font-bold text-primary-navy tracking-tight mb-3">Upholding Integrity & Regulatory Precision</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  To deliver unbiased, highly precise professional advisory, helping growing businesses achieve absolute statutory compliance, ethical reporting, and strategic financial structures.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-2xl border border-border-light bg-slate-50 hover:bg-white hover:shadow-premium-md transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-gold block mb-3">Our Vision</span>
                <h4 className="text-lg font-bold text-primary-navy tracking-tight mb-3">Sustaining Long-term Client Partnerships</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  To be the most trusted financial governance partner in Gujarat, empowering MSMEs, exporters, and corporations with timely updates and forward-looking advisory compliance.
                </p>
              </div>
            </div>

            {/* Compliance Note */}
            <div className="p-4 rounded-xl border border-dashed border-accent-gold/40 bg-accent-gold/5 text-xs text-primary-navy flex items-start gap-3">
              <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality Mandate:</strong> In accordance with Chapter 5 of the Chartered Accountants Act, 1949, all proprietary records, audits, and business client correspondences are held under absolute, non-disclosable professional confidentiality.
              </span>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Our Foundations</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-navy tracking-tight">The 6 Core Pillars of Our Practice</h3>
            <p className="text-sm text-muted-text mt-2">Every audit, filing, and advisory workflow is anchored by these values.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-[24px] border border-border-light bg-slate-50 hover:bg-white hover:shadow-premium-lg hover:scale-[1.02] hover:border-secondary-blue/20 transition-all duration-300 flex flex-col items-start text-left group clickable-card"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-premium-sm mb-6 border border-border-light group-hover:scale-105 transition-all duration-300">
                  {iconMap[value.iconName]}
                </div>
                <h4 className="text-lg font-bold text-primary-navy tracking-tight mb-2 group-hover:text-secondary-blue transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
