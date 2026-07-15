import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES, FIRM_DETAILS } from "../data";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ConsultationModal({ isOpen, onClose, preselectedService }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: preselectedService || SERVICES[0].title,
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) tempErrors.message = "Brief description of requirements is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    
    // Simulate premium backend submission
    setTimeout(() => {
      setStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceRequired: preselectedService || SERVICES[0].title,
        message: ""
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-navy/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-premium-xl overflow-hidden z-10 border border-border-light max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-light bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-secondary-blue/10 flex items-center justify-center text-secondary-blue">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-navy tracking-tight">Schedule Consultation</h3>
                  <p className="text-xs text-muted-text mt-0.5">Professional & Compliant Advisory Setup</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 text-muted-text hover:text-text-primary transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-navy tracking-tight">Request Received</h4>
                  <p className="text-text-secondary mt-3 max-w-md text-sm md:text-base leading-relaxed">
                    Thank you for reaching out to Agarwal & Jain. Our partners will review your requirements and reach back within 24 business hours to confirm your consultation schedule.
                  </p>
                  <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-border-light text-left text-xs text-muted-text max-w-md">
                    <span className="font-semibold text-primary-navy block mb-1">Important Notice:</span>
                    This consultation request is handled in strict compliance with the professional guidelines and confidentiality mandates of the Institute of Chartered Accountants of India (ICAI).
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-8 px-6 py-3 bg-[#0B1F3A] hover:bg-[#123C73] text-white font-bold rounded-[14px] transition-all shadow-premium-md hover:shadow-premium-lg flex items-center gap-2 cursor-pointer text-sm"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two column Grid for Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className={`w-full px-4 py-3 rounded-[14px] border ${
                          errors.name ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                        } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm`}
                      />
                      {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@company.com"
                        className={`w-full px-4 py-3 rounded-[14px] border ${
                          errors.email ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                        } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm`}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary-navy mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-[14px] border ${
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
                        placeholder="e.g. Acme Textiles Ltd"
                        className="w-full px-4 py-3 rounded-[14px] border border-border-light focus:border-[#0B1F3A] focus:ring-4 focus:ring-secondary-blue/20 focus:outline-none transition-all text-sm"
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
                      className="w-full px-4 py-3 rounded-[14px] border border-border-light focus:border-[#0B1F3A] focus:ring-4 focus:ring-secondary-blue/20 focus:outline-none transition-all bg-white text-sm"
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
                      Description of Consultation Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide brief, factual details regarding the statutory matters or corporate advisory assistance you are seeking."
                      className={`w-full px-4 py-3 rounded-[14px] border ${
                        errors.message ? "border-red-500 focus:ring-red-200" : "border-border-light focus:ring-secondary-blue/20"
                      } focus:border-[#0B1F3A] focus:outline-none focus:ring-4 transition-all text-sm resize-none`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-light bg-slate-50 -mx-8 -mb-8 p-6 md:p-8">
                    <div className="flex items-center gap-2 text-xs text-muted-text">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>ICAI Compliant • Guaranteed Confidentiality</span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="px-6 py-3 bg-[#0B1F3A] hover:bg-[#123C73] disabled:bg-slate-400 text-white font-bold rounded-[14px] transition-all shadow-premium-md hover:shadow-premium-lg flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Validating Information...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
