import {
  Factory,
  Ship,
  Activity,
  Home,
  ShoppingBag,
  Utensils,
  Terminal,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { INDUSTRIES } from "../data";

export default function Industries() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory":
        return <Factory className="w-6 h-6 text-accent-gold" />;
      case "Ship":
        return <Ship className="w-6 h-6 text-accent-gold" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-accent-gold" />;
      case "Home":
        return <Home className="w-6 h-6 text-accent-gold" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-accent-gold" />;
      case "Utensils":
        return <Utensils className="w-6 h-6 text-accent-gold" />;
      case "Terminal":
        return <Terminal className="w-6 h-6 text-accent-gold" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-accent-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-accent-gold" />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary-blue/3 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Sectors We Assist</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
            Diversified Practical Experience Across Multiple Industries
          </h2>
          <p className="text-sm md:text-base text-text-secondary mt-4 max-w-xl mx-auto">
            From Surat's world-class textile and diamond manufacturing clusters to cross-border exporters, tech startups, and healthcare networks.
          </p>
          <div className="h-1 w-20 bg-accent-gold mt-6 mx-auto rounded-full" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INDUSTRIES.map((ind, index) => (
            <div
              key={index}
              className="group bg-white border border-border-light rounded-[24px] p-6 hover:shadow-premium-md hover:border-secondary-blue/15 transition-all duration-300 flex flex-col clickable-card"
            >
              <div>
                {/* Icon block */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-border-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(ind.iconName)}
                </div>
                
                <h3 className="text-lg font-bold text-primary-navy tracking-tight mb-2 group-hover:text-secondary-blue transition-colors">
                  {ind.title}
                </h3>
                
                <p className="text-xs text-text-secondary leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
