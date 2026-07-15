import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import caLogo from "../assets/ca-logo.png";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          id="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center max-w-md px-6 text-center">
            {/* Elegant Monogram */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-premium-md p-2.5 border border-border-light"
            >
              <img src={caLogo} alt="Agarwal & Jain logo" className="w-full h-full object-contain" />
            </motion.div>

            {/* Firm Name */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-bold text-primary-navy tracking-tight"
            >
              AGARWAL & JAIN
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs text-accent-gold uppercase tracking-widest mt-1 font-semibold"
            >
              Chartered Accountants
            </motion.p>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[2px] bg-slate-100 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                className="h-full bg-accent-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            
            {/* Integrity Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[10px] text-muted-text uppercase tracking-widest mt-4"
            >
              Est. 2015 • Surat, India
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
