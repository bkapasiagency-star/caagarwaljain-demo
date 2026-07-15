import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, User, Clock, ArrowRight, X, ChevronRight, Share2, HelpCircle } from "lucide-react";
import { KNOWLEDGE_CENTRE, FIRM_DETAILS } from "../data";
import { Article } from "../types";

export default function KnowledgeCentre() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Knowledge Centre</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
              Statutory Research, Updates & Financial Insights
            </h2>
            <div className="h-1 w-20 bg-accent-gold mt-6 rounded-full" />
          </div>
          <div className="text-left">
            <p className="text-sm md:text-base text-text-secondary max-w-sm leading-relaxed">
              We compile regular analyses of recent statutory amendments under Income Tax, Goods & Services Tax (GST), and MCA rules for educational awareness.
            </p>
          </div>
        </div>

        {/* Featured Article & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main List Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {KNOWLEDGE_CENTRE.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-slate-50 border border-border-light rounded-[24px] p-6 hover:shadow-premium-lg hover:bg-white hover:border-secondary-blue/15 transition-all duration-300 flex flex-col justify-between clickable-card cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent-gold font-bold bg-amber-50 border border-amber-200/50 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[11px] font-mono text-muted-text flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary-navy tracking-tight leading-snug mb-3 group-hover:text-secondary-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between text-xs text-muted-text mt-auto">
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-accent-gold" />
                    {article.author}
                  </span>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-secondary-blue uppercase tracking-wider group-hover:text-accent-gold transition-colors">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar compliance panel (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-border-light rounded-[28px] p-8 relative overflow-hidden self-start">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl" />
            
            <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center mb-6 text-accent-gold shadow-premium-sm">
              <BookOpen className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold text-primary-navy tracking-tight mb-3">Statutory Alerts & circulars</h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-6">
              Our firm actively monitors the official notifications published by the Central Board of Direct Taxes (CBDT), Central Board of Indirect Taxes and Customs (CBIC), and the Ministry of Corporate Affairs (MCA).
            </p>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                <ChevronRight className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>GST e-Invoicing applicability thresholds updates tracking.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                <ChevronRight className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Income Tax Form 10A / 10AB registration deadlines updates.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                <ChevronRight className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>ROC Annual Return filing schedules under MCA-V3 system.</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200 text-[10px] text-muted-text">
              Disclaimer: All publications in this Knowledge Centre are strictly for educational and awareness purposes. They do not constitute formal legal or professional financial advice.
            </div>
          </div>

        </div>

      </div>

      {/* Dynamic Detailed Article Modal Reader */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-primary-navy/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-premium-xl overflow-hidden z-10 border border-border-light max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-light bg-slate-50">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent-gold font-bold bg-amber-50 border border-amber-200/50 px-2.5 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-muted-text">• {selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-muted-text hover:text-text-primary transition-colors cursor-pointer"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-navy tracking-tight leading-tight">
                  {selectedArticle.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-text border-y border-slate-100 py-3">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-accent-gold" />
                    <span>Authored by: <strong>{selectedArticle.author}</strong></span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Published: {selectedArticle.publishDate}</span>
                  </span>
                </div>

                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-semibold">
                  {selectedArticle.summary}
                </p>

                <div className="space-y-4 text-sm md:text-base text-text-secondary leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-border-light text-xs text-muted-text space-y-2">
                  <p className="font-semibold text-primary-navy">ICAI Professional Disclaimer:</p>
                  <p>
                    As mandated by the Council of the Institute of Chartered Accountants of India, this article represents general statutory research and personal academic opinions of the author. It should not be treated as a formal advisory, tax legal position, or solicitation of any nature. Please obtain specific, formal, written professional advice before executing transactional structures based on these contents.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border-light bg-slate-50 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-text">Agarwal & Jain Chartered Accountants</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-primary-navy hover:bg-secondary-blue text-white font-medium rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
