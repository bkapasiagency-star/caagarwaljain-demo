import { Scale, CheckCircle2 } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <article className="min-h-screen bg-white py-24 md:py-32 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-left border-b border-border-light pb-10 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Statutory Document</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-muted-text mt-3">
            Last updated: July 14, 2026 • Governing Terms under Indian Regulatory Laws
          </p>
        </div>

        {/* Content body */}
        <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">1. Acceptance of Terms</h2>
            <p>
              By accessing and browsing the official website of Agarwal & Jain, Chartered Accountants (<a href="https://caagarwaljain.com" className="text-secondary-blue font-semibold">caagarwaljain.com</a>), you acknowledge that you have voluntarily initiated communication to review the firm&apos;s factual credentials. You agree to comply with applicable statutory laws, regulatory procedures, and the terms of service described herein.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">2. No Solicitation or Advertisement</h2>
            <p>
              The contents of this website represent a factual indexing of registered areas of practice, qualifications, partners biography, and years of establishment. In accordance with the guidelines prescribed under Clause (6) of Part I of the First Schedule to the Chartered Accountants Act, 1949, this website does not solicit professional work or advertise services. No element of this website should be treated as an advertisement or marketing campaign.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">3. General Informational Nature</h2>
            <p>
              All write-ups, statutory briefs, tax calculators, or compliance updates made available in the Knowledge Centre are strictly for general educational purposes. They do not constitute formal professional financial, tax, or legal advice. No transaction or corporate structure should be executed solely based on these publications without obtaining a formal, signed professional consultation from a senior partner.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">4. Proprietary Information</h2>
            <p>
              The structural layout, typography pairings, color systems, micro-animations, and specific text publications on this website represent intellectual property of Agarwal & Jain. Copying, scraping, or duplicating these elements for commercial gain or comparative marketing is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">5. Jurisdiction</h2>
            <p>
              Any dispute, legal proceedings, or administrative queries arising out of the browse experience or interaction with this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Surat, Gujarat.
            </p>
          </section>

          {/* Compliance Badge */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-border-light flex items-start gap-4 mt-12">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div className="text-xs leading-relaxed">
              <span className="font-bold text-primary-navy block">ICAI Professional Decorum Vetted</span>
              This document ensures compliance with Section 22 of the Chartered Accountants Act, 1949, and related notifications on professional advertising.
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}
