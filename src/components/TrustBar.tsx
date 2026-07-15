import { ShieldCheck, Landmark, Scale, GraduationCap, Compass } from "lucide-react";

export default function TrustBar() {
  const indicators = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent-gold" />,
      text: "ICAI Registered Firm"
    },
    {
      icon: <Landmark className="w-5 h-5 text-accent-gold" />,
      text: "Established Since 2015"
    },
    {
      icon: <Scale className="w-5 h-5 text-accent-gold" />,
      text: "Ethical Professional Practice"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-accent-gold" />,
      text: "Experienced Fellow Members (FCA)"
    },
    {
      icon: <Compass className="w-5 h-5 text-accent-gold" />,
      text: "Strategic Business Advisory"
    }
  ];

  return (
    <section className="relative bg-slate-50 border-y border-border-light py-8 no-print">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-center">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center md:justify-start group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-premium-sm group-hover:scale-105 duration-300 border border-border-light">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-primary-navy tracking-tight text-left">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
