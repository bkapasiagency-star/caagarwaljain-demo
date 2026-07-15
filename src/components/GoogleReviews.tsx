import { motion } from "motion/react";
import { Star, ExternalLink, MessageSquarePlus } from "lucide-react";
import { FIRM_DETAILS } from "../data";

export default function GoogleReviews() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden no-print">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border-light rounded-[28px] shadow-premium-lg px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center gap-10"
        >
          {/* Google "G" mark */}
          <div className="shrink-0 w-20 h-20 rounded-2xl bg-slate-50 border border-border-light flex items-center justify-center shadow-premium-sm">
            <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.3C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.1-11.3-7.6l-6.5 5C9.6 39.6 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.5l6.2 5.3C40.9 36.4 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"/>
            </svg>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-navy tracking-tight mb-2">
              Trusted by Clients on Google
            </h3>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
              See what businesses and individuals across Surat say about working with {FIRM_DETAILS.name}, or share your own experience with our firm.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={FIRM_DETAILS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0B1F3A] hover:bg-secondary-blue text-white text-sm font-bold rounded-[14px] shadow-premium-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Read Our Reviews</span>
              <ExternalLink className="w-4 h-4 text-accent-gold" />
            </a>
            <a
              href={FIRM_DETAILS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-primary-navy text-sm font-bold rounded-[14px] border border-border-light hover:border-secondary-blue transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4 text-accent-gold" />
              <span>Leave a Review</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
