import { motion } from "motion/react";
import { FIRM_DETAILS } from "../data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${FIRM_DETAILS.name}, I would like to enquire about your services.`
  );
  const href = `https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 no-print w-14 h-14 rounded-full bg-[#25D366] shadow-premium-lg flex items-center justify-center cursor-pointer"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10" fill="white" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.4.7 4.6 1.9 6.5L4 29l7.66-2.01c1.8 1 3.9 1.55 6.36 1.55 6.62 0 12.02-5.4 12.02-12.02C30.04 8.4 24.64 3 16.02 3zm0 21.9c-2.1 0-4.1-.55-5.83-1.6l-.42-.25-4.55 1.19 1.22-4.44-.27-.46a9.86 9.86 0 0 1-1.5-5.32c0-5.46 4.44-9.9 9.92-9.9 5.46 0 9.9 4.44 9.9 9.9-.02 5.46-4.46 9.88-9.47 9.88zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.47-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </motion.a>
  );
}
