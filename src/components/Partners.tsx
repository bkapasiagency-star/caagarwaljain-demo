import { Award, ShieldCheck, Mail, Phone, Calendar, ArrowRight, UserCheck, Languages, BadgeCheck } from "lucide-react";
import { PARTNERS, FIRM_DETAILS } from "../data";
import sachinJainPhoto from "../assets/sachin-jain.jpg";
import shilpaAgrawalPhoto from "../assets/shilpa-agarwal.jpg";

const PARTNER_PHOTOS: Record<string, string> = {
  sachin_jain: sachinJainPhoto,
  shilpa_agrawal: shilpaAgrawalPhoto,
};

interface PartnersProps {
  onBookConsultation: (partnerName: string) => void;
}

export default function Partners({ onBookConsultation }: PartnersProps) {
  return (
    <section id="partners" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Expert Leadership</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
            Meet Our Senior Partners
          </h2>
          <p className="text-sm md:text-base text-text-secondary mt-4 max-w-xl">
            Led by experienced Chartered Accountants committed to absolute accuracy, professional ethics, and long-term client advisory.
          </p>
          <div className="h-1 w-20 bg-accent-gold mt-6 rounded-full" />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="group bg-slate-50 border border-border-light rounded-[28px] p-8 md:p-10 hover:shadow-premium-xl transition-all duration-300 relative flex flex-col justify-between h-full"
            >
              {/* Highlight Gradient Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-blue/[0.01] to-accent-gold/[0.01] rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header Information: Monogram Icon & Name */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-border-light">
                  <div className="flex items-center gap-4">
                    {/* Partner Portrait */}
                    <div className="w-20 h-20 rounded-2xl bg-primary-navy shadow-premium-md relative overflow-hidden flex-shrink-0">
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-gold z-10" />
                      <img
                        src={PARTNER_PHOTOS[partner.imageUrl]}
                        alt={`Portrait of ${partner.name}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary-navy tracking-tight">{partner.name}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">{partner.designation}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-xs font-mono text-muted-text">M. No: {partner.membershipNo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Active Practicing</span>
                  </div>
                </div>

                {/* Professional Qualifications */}
                <div className="py-6 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-navy">Professional Qualifications</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {partner.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                        <Award className="w-4 h-4 text-accent-gold flex-shrink-0" />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Membership Timeline & Languages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-5 border-y border-border-light">
                  <div className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-secondary-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary-navy">ICAI Membership</p>
                      <p className="text-xs text-text-secondary mt-0.5">{partner.membershipTimeline}</p>
                      <p className="text-xs text-text-secondary">Certificate of Practice since {partner.certificateOfPracticeSince}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Languages className="w-4 h-4 text-secondary-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary-navy">Languages</p>
                      <p className="text-xs text-text-secondary mt-0.5">{partner.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-sm text-text-secondary leading-relaxed italic mt-6 mb-6">
                  &ldquo;{partner.bio}&rdquo;
                </p>

                {/* Areas of Expertise Tags */}
                <div className="space-y-3 pb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-navy">Primary Practice Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.areasOfExpertise.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-secondary-blue bg-white border border-border-light px-3 py-1.5 rounded-xl font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-text">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>ICAI Compliant Record</span>
                  </span>
                </div>

                <button
                  onClick={() => onBookConsultation(`Consultation with ${partner.name}`)}
                  className="px-5 py-3 bg-primary-navy hover:bg-secondary-blue text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-premium-sm hover:shadow-premium-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
