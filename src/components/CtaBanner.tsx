import { motion } from "motion/react";
import { Calendar, Phone, ArrowUpRight, ShieldAlert } from "lucide-react";
import { FIRM_DETAILS } from "../data";

interface CtaBannerProps {
  onOpenConsultation: () => void;
  onNavigateToContact: () => void;
}

export default function CtaBanner({ onOpenConsultation, onNavigateToContact }: CtaBannerProps) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Luxury Banner Layout with gradient border effect */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-tr from-primary-navy via-secondary-blue to-primary-navy p-8 md:p-16 text-center text-white shadow-premium-xl border border-white/10">
          
          {/* Subtle Graphic background effects */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none animate-float-medium" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Minimal Icon badge */}
            <div className="w-12 h-12 rounded-[14px] bg-white/10 border border-white/15 flex items-center justify-center text-accent-gold mb-6 shadow-premium-sm">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Let&apos;s Build a Stronger Financial Future Together
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
              Partner with Surat&apos;s expert Chartered Accountants to streamline your statutory audits, direct & indirect taxation planning, ROC corporate compliances, and virtual CFO systems.
            </p>

            {/* Direct CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-white text-primary-navy hover:bg-slate-50 font-bold rounded-[14px] shadow-premium-md hover:shadow-premium-lg scale-100 hover:scale-103 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-accent-gold" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={onNavigateToContact}
                className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold rounded-[14px] border border-white/25 hover:border-white/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Our Team</span>
                <ArrowUpRight className="w-4 h-4 text-accent-gold" />
              </button>
            </div>

            {/* Sub text notice */}
            <p className="text-[11px] text-slate-400 mt-8 tracking-wide font-sans flex items-center gap-1.5 uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Strict Professional Confidentiality Mandated By ICAI</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
