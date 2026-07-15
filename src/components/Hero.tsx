import { motion } from "motion/react";
import { ArrowRight, Shield, Award, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenConsultation, onExploreServices }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-36 pb-16 overflow-hidden mesh-bg"
    >
      {/* Background Decorative Blur Circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-secondary-blue/5 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-accent-gold/3 blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10 my-auto">
        
        {/* Left: Headline & Copy Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Tagline/Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8A548]"></span>
            <span className="text-[11px] font-bold text-[#123C73] uppercase tracking-wider">Established 2015 • Surat, India</span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#0B1F3A] tracking-tight leading-[1.05] mb-6"
          >
            Financial Clarity.<br />
            <span className="text-[#C8A548]">Strategic</span> Growth.<br />
            Trusted Advice.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 font-normal leading-relaxed mb-8 max-w-xl"
          >
            Empowering Surat's leading enterprises, manufacturers, and growing startups since 2015. We navigate complex audits, taxation, and corporate governance compliance with absolute professional integrity and surgical precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#0B1F3A] text-white font-bold text-base rounded-[14px] shadow-lg shadow-blue-900/10 hover:bg-[#123C73] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-accent-gold" />
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-[#0B1F3A] font-bold text-base rounded-[14px] border border-gray-200 hover:border-[#0B1F3A] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Services</span>
            </button>
          </motion.div>

          {/* Quick trust bullet list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs font-medium text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ethical ICAI Standards</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Surat Corporate Sector Leaders</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Confidentiality Assured</span>
            </span>
          </motion.div>
        </div>

        {/* Right: Immersive Premium Graphical Column (5 cols) */}
        <div className="lg:col-span-5 relative h-auto flex items-center justify-center lg:justify-end">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C8A548] opacity-[0.03] rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white p-8 rounded-[28px] shadow-2xl border border-gray-100 w-full max-w-md"
          >
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-[#F8FAFC] rounded-[24px] border border-gray-100 flex items-start gap-4 shadow-sm transition-transform cursor-default">
                <div className="bg-[#0B1F3A] p-3 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F3A] text-lg">Audit & Assurance</h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Statutory & Internal Audits</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white rounded-[24px] border border-gray-100 flex items-start gap-4 shadow-sm transition-transform cursor-default ring-1 ring-[#C8A548]/30">
                <div className="bg-[#C8A548] p-3 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F3A] text-lg">Taxation & Compliance</h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Direct Tax & GST Strategic Planning</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] text-muted-text uppercase tracking-widest font-semibold pointer-events-none no-print">
        <span>Discover Our Firm</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-accent-gold" />
        </motion.div>
      </div>
    </section>
  );
}
