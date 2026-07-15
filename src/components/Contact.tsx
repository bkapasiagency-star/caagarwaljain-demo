import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
  MessageSquareCode,
  Compass,
  ArrowUpRight,
  ShieldAlert
} from "lucide-react";
import { FIRM_DETAILS, SERVICES } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: SERVICES[0].title,
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid mobile number";
    }
    if (!formData.message.trim()) tempErrors.message = "Brief description of requirements is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceRequired: SERVICES[0].title,
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-3">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
            Initiate a Confidential Professional Dialogue
          </h2>
          <p className="text-sm md:text-base text-text-secondary mt-4 max-w-xl">
            Our partners can review your business structuring, compliance, or audit requirements with complete professional confidentiality.
          </p>
          <div className="h-1 w-20 bg-accent-gold mt-6 rounded-full" />
        </div>

        {/* Split Screen Grid (12 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Coordinates & Interactive Google Map (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Information Cards Stack */}
            <div className="space-y-6">
              
              {/* Office Location */}
              <div className="flex gap-4 p-5 rounded-[24px] border border-border-light bg-slate-50">
                <div className="w-10 h-10 rounded-[14px] bg-white border border-border-light flex items-center justify-center text-accent-gold flex-shrink-0 shadow-premium-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy tracking-tight uppercase">Surat Head Office</h4>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                    Office No. 420, 4th Floor, Avadh Arena, Above Croma, VIP Road, Vesu, Surat, Gujarat, India - 395007
                  </p>
                  <a
                    href="https://maps.google.com/?q=Avadh+Arena+VIP+Road+Vesu+Surat"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary-blue hover:text-accent-gold uppercase tracking-wider mt-3"
                  >
                    <span>Get Directions via Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone */}
                <div className="flex gap-4 p-5 rounded-[24px] border border-border-light bg-slate-50">
                  <div className="w-10 h-10 rounded-[14px] bg-white border border-border-light flex items-center justify-center text-accent-gold flex-shrink-0 shadow-premium-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary-navy uppercase">Direct Phone</h4>
                    <p className="text-xs font-semibold text-text-secondary mt-1 block">
                      <a href={`tel:${FIRM_DETAILS.phone}`} className="hover:text-secondary-blue">
                        {FIRM_DETAILS.phone}
                      </a>
                    </p>
                    <a
                      href={`https://wa.me/919687559363`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest mt-2"
                    >
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-5 rounded-[24px] border border-border-light bg-slate-50">
                  <div className="w-10 h-10 rounded-[14px] bg-white border border-border-light flex items-center justify-center text-accent-gold flex-shrink-0 shadow-premium-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary-navy uppercase">Official Email</h4>
                    <p className="text-xs font-semibold text-text-secondary mt-1 block break-all">
                      <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-secondary-blue">
                        {FIRM_DETAILS.email}
                      </a>
                    </p>
                    <span className="text-[9px] text-muted-text mt-2 block uppercase tracking-wider">Secure Server</span>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="flex gap-4 p-5 rounded-[24px] border border-border-light bg-slate-50">
                <div className="w-10 h-10 rounded-[14px] bg-white border border-border-light flex items-center justify-center text-accent-gold flex-shrink-0 shadow-premium-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy tracking-tight uppercase">Office Consultation Hours</h4>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                    {FIRM_DETAILS.workingHours} <br />
                    <span className="text-[11px] text-accent-gold mt-1 block font-semibold">Prior appointments highly recommended.</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded interactive styled Google Map */}
            <div className="w-full h-64 rounded-[24px] overflow-hidden border border-border-light shadow-premium-sm relative">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2227181034444!2d72.7845347!3d21.1435212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051d955555555%3A0xc3e9c565d78a9c2a!2sAvadh%20Arena!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Right Column: Premium Inquiry Form with states (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-border-light rounded-[28px] p-8 md:p-10 shadow-premium-sm">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-primary-navy tracking-tight">Dialogue Initiated</h4>
                <p className="text-text-secondary mt-3 max-w-md text-sm leading-relaxed">
                  Thank you for submitting your enquiry. Agarwal & Jain will evaluate your specific requirements in strict accordance with ICAI mandates and initiate a secure contact within 24 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-3 bg-[#0B1F3A] hover:bg-secondary-blue text-white font-bold rounded-[14px] transition-all shadow-premium-sm hover:shadow-premium-md flex items-center gap-2 cursor-pointer text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-[14px] bg-white border ${
                        errors.name ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                      } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@company.com"
                      className={`w-full px-4 py-3 rounded-[14px] bg-white border ${
                        errors.email ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                      } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-4 py-3 rounded-[14px] bg-white border ${
                        errors.phone ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                      } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Industries Ltd"
                      className="w-full px-4 py-3 rounded-[14px] bg-white border border-border-light focus:border-[#0B1F3A] focus:ring-4 focus:ring-secondary-blue/20 focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                    Professional Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-[14px] bg-white border border-border-light focus:border-[#0B1F3A] focus:ring-4 focus:ring-secondary-blue/20 focus:outline-none transition-all text-sm"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                    Details of Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide brief details regarding your specific statutory, audit, or taxation matters."
                    className={`w-full px-4 py-3 rounded-[14px] bg-white border ${
                      errors.message ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                    } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit button with micro-loading spinner */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-200">
                  <span className="flex items-center gap-1.5 text-xs text-muted-text">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>ICAI Compliance Safeguard</span>
                  </span>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-6 py-3 bg-[#0B1F3A] hover:bg-secondary-blue disabled:bg-slate-400 text-white font-bold rounded-[14px] transition-all shadow-premium-sm hover:shadow-premium-md flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-accent-gold" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
