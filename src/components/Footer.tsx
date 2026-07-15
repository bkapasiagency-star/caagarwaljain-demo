import { ArrowUp, Mail, Phone, MapPin, Globe, ChevronUp } from "lucide-react";
import { FIRM_DETAILS } from "../data";
import caLogo from "../assets/ca-logo.png";

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToView: (viewName: "home" | "privacy" | "terms") => void;
}

export default function Footer({ onNavigateToSection, onNavigateToView }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary-navy text-slate-300 pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => onNavigateToView("home")}
              className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-premium-sm">
                <img src={caLogo} alt={`${FIRM_DETAILS.name} logo`} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block font-bold text-white tracking-tight text-base sm:text-lg">
                  {FIRM_DETAILS.name}
                </span>
                <span className="block text-[10px] text-accent-gold uppercase tracking-widest font-semibold mt-0.5">
                  {FIRM_DETAILS.suffix}
                </span>
              </div>
            </button>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Established on 20 January 2015 in Surat, Gujarat. We provide premium statutory audits, taxation advisory, and corporate compliance services under absolute professional standards.
            </p>

            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
              Reg Registration No: {FIRM_DETAILS.registrationNoPlaceholder}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {["about", "services", "partners", "insights", "faqs", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      onNavigateToView("home");
                      // Delay slightly to allow view transition to home if needed
                      setTimeout(() => onNavigateToSection(section), 50);
                    }}
                    className="hover:text-accent-gold capitalize transition-colors cursor-pointer focus:outline-none"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practices index (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-sans">Practice Focus</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Statutory & Internal Audit</li>
              <li>Direct Taxation & Planning</li>
              <li>GST Return Filing & Litigation</li>
              <li>FEMA & Outbound Investments</li>
              <li>Virtual CFO Systems</li>
              <li>ROC Corporate Compliances</li>
            </ul>
          </div>

          {/* Column 4: Office Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Office Coordinates</h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Office No. 420, 4th Floor, Avadh Arena, Above Croma, VIP Road, Vesu, Surat - 395007</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <a href={`tel:${FIRM_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {FIRM_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-white transition-colors break-all">
                  {FIRM_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory ICAI Compliance Disclaimer Section */}
        <div className="py-10 border-b border-white/10 text-left text-[11px] text-slate-500 leading-relaxed space-y-3 font-sans">
          <span className="font-bold text-slate-400 block tracking-wider uppercase text-xs">MANDATORY ICAI COMPLIANCE DISCLAIMER</span>
          <p>
            The website design, content structures, and firm listings are organized in absolute compliance with the guidelines laid down by the Institute of Chartered Accountants of India (ICAI) and provisions under the Chartered Accountants Act, 1949.
          </p>
          <p>
            This website represents a factual presentation of Agarwal & Jain&apos;s professional credentials, certifications, years of establishment, and registered areas of practice. Any publication, circular analysis, or compliance updates rendered in the Knowledge Centre represents general academic research.
          </p>
          <p>
            This website does not solicit work, advertise services, or carry out promotional comparisons. Visitors requesting consultation schedules do so voluntarily to obtain specific professional guidelines for statutory matters.
          </p>
        </div>

        {/* Footer Base bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <div>
            <span>© {new Date().getFullYear()} Agarwal & Jain. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigateToView("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigateToView("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            
            {/* Scroll Top Button */}
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-accent-gold border border-white/10 text-slate-400 hover:text-primary-navy transition-all cursor-pointer flex items-center justify-center"
              aria-label="Scroll back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
