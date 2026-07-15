import { ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <article className="min-h-screen bg-white py-24 md:py-32 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-left border-b border-border-light pb-10 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Statutory Document</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-text mt-3">
            Last updated: July 14, 2026 • Mandated under Professional Codes of ICAI
          </p>
        </div>

        {/* Content body */}
        <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">1. Professional Confidentiality Mandate</h2>
            <p>
              In accordance with Chapter V of the Chartered Accountants Act, 1949, and the Code of Ethics prescribed by the Institute of Chartered Accountants of India (ICAI), Agarwal & Jain maintains the highest standards of professional confidentiality. All client financial logs, proprietary audits, taxation files, and administrative communications are strictly confidential and protected from unauthorized disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">2. Information Collection and Usage</h2>
            <p>
              When you submit a consultation request or contact us through our website, we collect basic identifiers such as your Name, Email address, Contact Number, and Company details. This information is utilized solely to establish compliant contact and evaluate your advisory requirements. We do not engage in mailing lists, comparative metrics, or transfer data to third-party marketing networks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">3. Secure Digital Infrastructure</h2>
            <p>
              We implement industry-standard secure socket layers (SSL), encrypted firewalls, and strict server access rules to prevent unauthorized breaches or digital data manipulation. Data submitted through our forms is stored securely and handled exclusively by authorized senior partners and designated audit associates under strict confidentiality covenants.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">4. Statutory Disclosures</h2>
            <p>
              We do not disclose proprietary client metrics unless mandated by a competent regulatory tribunal, Income Tax Appellate tribunals, statutory court of law in India, or under direct orders from the Council of the Institute of Chartered Accountants of India (ICAI).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-primary-navy uppercase tracking-wider">5. Contact and Amendments</h2>
            <p>
              This policy is updated in real-time to reflect changes in regulatory compliance guidelines. For questions regarding client records, encryption protocols, or compliance validation, please write to our principal officer at <a href="mailto:caagarwaljain@gmail.com" className="text-secondary-blue underline font-semibold">caagarwaljain@gmail.com</a>.
            </p>
          </section>

          {/* Verification Badge */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-border-light flex items-start gap-4 mt-12">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs leading-relaxed">
              <span className="font-bold text-primary-navy block">ICAI Standards-Aligned Document</span>
              This policy is vetted against the professional confidentiality rules prescribed under Section 15 of the Chartered Accountants Act, 1949.
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}
