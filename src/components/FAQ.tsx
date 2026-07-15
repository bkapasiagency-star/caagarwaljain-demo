import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Clear Answers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-3">
            Review critical answers regarding our operational codes, compliance processes, and advisory setups.
          </p>
          <div className="h-1 w-20 bg-accent-gold mt-6 mx-auto rounded-full" />
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white border rounded-[20px] transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-secondary-blue/30 shadow-premium-md" : "border-border-light hover:border-secondary-blue/15 shadow-premium-sm"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-accent-gold border border-border-light flex-shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-primary-navy tracking-tight text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-accent-gold" : ""
                    }`}
                  />
                </button>

                {/* Answer Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-text-secondary leading-relaxed">
                        <p>{faq.answer}</p>
                        
                        <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] text-muted-text flex items-center gap-1.5 justify-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Factual and compliant under professional guidance guidelines.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Help Notice */}
        <div className="mt-12 text-center p-6 bg-white border border-border-light rounded-[24px] shadow-premium-sm max-w-xl mx-auto">
          <p className="text-xs text-text-secondary leading-relaxed">
            Have a specific statutory enquiry not answered here? <br />
            Our partners can review your proprietary requirements under full confidentiality.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 text-xs font-bold text-secondary-blue hover:text-accent-gold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Enquire directly with our experts &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
