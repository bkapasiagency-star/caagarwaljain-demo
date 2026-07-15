import { motion } from "motion/react";
import { HelpCircle, Search, Compass, Cpu, CheckCircle2, HeartHandshake, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Understand primary business operations, corporate structure, and compliance objectives in an initial secure brief.",
      icon: <HelpCircle className="w-5 h-5 text-accent-gold" />
    },
    {
      step: "02",
      title: "Assessment",
      desc: "Conduct thorough, compliant evaluations of historic files, taxation filings, and systemic compliance pipelines.",
      icon: <Search className="w-5 h-5 text-accent-gold" />
    },
    {
      step: "03",
      title: "Planning",
      desc: "Develop legal, practical statutory structures and planning models to optimize taxation under applicable laws.",
      icon: <Compass className="w-5 h-5 text-accent-gold" />
    },
    {
      step: "04",
      title: "Execution",
      desc: "Execute precise bookkeeping audit trails, ROC reporting parameters, and direct/indirect tax filings.",
      icon: <Cpu className="w-5 h-5 text-accent-gold" />
    },
    {
      step: "05",
      title: "Compliance",
      desc: "Guarantee bulletproof filing validation, secure statutory portals submissions, and final assessments tracking.",
      icon: <CheckCircle2 className="w-5 h-5 text-accent-gold" />
    },
    {
      step: "06",
      title: "Ongoing Support",
      desc: "Provide proactive alerts on statutory amendments, regular MIS check-ins, and ongoing executive liaison advisory.",
      icon: <HeartHandshake className="w-5 h-5 text-accent-gold" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden no-print">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Our Work Ethic</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
            The 6-Step Engagement Workflow
          </h2>
          <p className="text-sm md:text-base text-text-secondary mt-4 max-w-xl mx-auto">
            A precise, systematic pipeline ensuring zero missed deadlines, complete documentation accuracy, and absolute statutory compliance.
          </p>
          <div className="h-1 w-20 bg-accent-gold mt-6 mx-auto rounded-full" />
        </div>

        {/* Process Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-border-light rounded-[24px] p-8 hover:shadow-premium-xl transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1 clickable-card"
            >
              {/* Step number block */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-border-light flex items-center justify-center group-hover:scale-105 duration-300">
                  {item.icon}
                </div>
                
                <span className="text-2xl font-serif font-extrabold text-accent-gold/25 group-hover:text-accent-gold transition-colors duration-300">
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-navy tracking-tight mb-2 group-hover:text-secondary-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connecting indicators on desktop */}
              {index < 5 && (
                <div className="hidden lg:group-hover:flex absolute top-1/2 -right-4 translate-y-[-50%] w-8 h-8 rounded-full bg-white border border-border-light shadow-premium-sm items-center justify-center text-accent-gold z-10 animate-pulse">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
