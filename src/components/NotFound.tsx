import { AlertTriangle, Home, Calendar, Phone } from "lucide-react";
import { FIRM_DETAILS } from "../data";

interface NotFoundProps {
  onReturnHome: () => void;
  onOpenConsultation: () => void;
}

export default function NotFound({ onReturnHome, onOpenConsultation }: NotFoundProps) {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center py-24 px-6 text-center font-sans">
      <div className="max-w-md flex flex-col items-center">
        {/* Warning Icon */}
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-accent-gold shadow-premium-md mb-8">
          <AlertTriangle className="w-8 h-8" />
        </div>

        {/* 404 Text */}
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-gold">Error Code: 404</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy tracking-tight mt-2 mb-4">
          Statutory Document Not Found
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed mb-10">
          The regulatory page or statutory directory path you requested does not exist or has been archived under strict documentation guidelines.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full">
          <button
            onClick={onReturnHome}
            className="flex-1 py-3 px-5 bg-primary-navy hover:bg-secondary-blue text-white font-medium rounded-xl shadow-premium-sm hover:shadow-premium-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Home className="w-4 h-4 text-accent-gold" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="flex-1 py-3 px-5 bg-slate-50 hover:bg-slate-100 text-primary-navy font-semibold rounded-xl border border-border-light transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Calendar className="w-4 h-4 text-accent-gold" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Help footer */}
        <div className="mt-12 text-xs text-muted-text border-t border-slate-100 pt-6 w-full">
          Need immediate statutory help? Contact our principal office at <br />
          <a href={`mailto:${FIRM_DETAILS.email}`} className="text-secondary-blue hover:underline font-semibold block mt-1">
            {FIRM_DETAILS.email}
          </a>
        </div>
      </div>
    </section>
  );
}
