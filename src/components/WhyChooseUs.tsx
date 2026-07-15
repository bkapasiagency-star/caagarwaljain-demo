import { motion } from "motion/react";
import { Check, Star, Award, ShieldAlert, Cpu, Sparkles, Scale } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Award className="w-5 h-5 text-accent-gold" />;
      case 1: return <Sparkles className="w-5 h-5 text-accent-gold" />;
      case 2: return <ShieldAlert className="w-5 h-5 text-accent-gold" />;
      case 3: return <Star className="w-5 h-5 text-accent-gold" />;
      case 4: return <Cpu className="w-5 h-5 text-accent-gold" />;
      case 5: return <Scale className="w-5 h-5 text-accent-gold" />;
      default: return <Check className="w-5 h-5 text-accent-gold" />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Grid Art background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Our Competitive Distinction</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
              A Modern Firm Built on Meticulous Attention to Detail
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-md ml-auto">
              We replace standard corporate boilerplate with strategic compliance frameworks designed specifically to support organizational growth and minimize financial exposure.
            </p>
          </div>
        </div>

        {/* Editorial Responsive Layout Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-border-light rounded-[24px] p-8 hover:shadow-premium-xl transition-all duration-300 hover:scale-[1.02] hover:border-secondary-blue/15 clickable-card flex flex-col"
            >
              {/* Highlight gradient bar */}
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-slate-100 rounded-full group-hover:bg-accent-gold transition-colors duration-300" />
              
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-border-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(index)}
                </div>
                
                <h3 className="text-lg font-bold text-primary-navy tracking-tight mb-3 group-hover:text-secondary-blue transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
