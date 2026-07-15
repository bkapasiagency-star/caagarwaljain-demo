import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Check, Sparkles, Sun, Moon } from "lucide-react";
import { useColorPalette, ColorPaletteType, COLOR_PALETTES } from "../hooks/useColorPalette";

export default function PaletteSwitcher() {
  const { palette, setPalette, isDark, toggleDark, availablePalettes } = useColorPalette();
  const [isOpen, setIsOpen] = useState(false);

  const paletteNames: Record<ColorPaletteType, { name: string; desc: string; colors: string[] }> = {
    midnight: {
      name: "Midnight Royal",
      desc: "Corporate Navy & Gold",
      colors: ["#0B1F3A", "#123C73", "#C8A548"]
    },
    emerald: {
      name: "Deep Emerald",
      desc: "Private Wealth Jade & Brass",
      colors: ["#0A2E24", "#125444", "#D4AF37"]
    },
    plum: {
      name: "Imperial Plum",
      desc: "Editorial Orchid & Champagne",
      colors: ["#2B1435", "#4D275E", "#D2A654"]
    },
    slate: {
      name: "Slate Tech",
      desc: "Modern Minimalist & Platinum",
      colors: ["#1E293B", "#334155", "#94A3B8"]
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 no-print">
      <div className="relative flex items-end">
        {/* Expanded Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -10, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10, y: 10 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="absolute bottom-16 left-0 bg-white/95 backdrop-blur-md border border-border-light rounded-[24px] p-4 shadow-premium-lg w-72 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  <span className="text-xs font-bold font-mono tracking-wider text-primary-navy uppercase">
                    Interface Theme
                  </span>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono">
                  Sleek CSS
                </span>
              </div>

              <button
                onClick={toggleDark}
                className="w-full flex items-center justify-between p-2.5 rounded-[16px] border border-border-light bg-slate-50/60 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-accent-gold shrink-0">
                    {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-text-primary">
                      {isDark ? "Dark Mode" : "Light Mode"}
                    </span>
                    <span className="block text-[10px] text-text-secondary">Tap to switch appearance</span>
                  </div>
                </div>
                <div
                  className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors duration-300 shrink-0 ${
                    isDark ? "bg-secondary-blue justify-end" : "bg-slate-200 justify-start"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-sm block" />
                </div>
              </button>

              <div className="flex flex-col gap-2">
                {availablePalettes.map((pType) => {
                  const isActive = palette === pType;
                  const item = paletteNames[pType];
                  return (
                    <button
                      key={pType}
                      onClick={() => setPalette(pType)}
                      className={`w-full text-left p-2.5 rounded-[16px] border transition-all flex items-center justify-between cursor-pointer group ${
                        isActive
                          ? "bg-slate-50 border-secondary-blue shadow-premium-sm"
                          : "bg-transparent border-transparent hover:bg-slate-50/60 hover:border-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Swatches dots */}
                        <div className="flex -space-x-1.5">
                          {item.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-full border border-white shadow-sm block shrink-0"
                              style={{ backgroundColor: c, zIndex: 3 - i }}
                            />
                          ))}
                        </div>

                        <div>
                          <span className={`block text-xs font-semibold ${
                            isActive ? "text-primary-navy" : "text-text-primary group-hover:text-primary-navy"
                          }`}>
                            {item.name}
                          </span>
                          <span className="block text-[10px] text-text-secondary">
                            {item.desc}
                          </span>
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                          <Check className="w-3 h-3 stroke-[3px]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating trigger button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-[18px] flex items-center justify-center shadow-premium-md hover:shadow-premium-lg transition-all border cursor-pointer focus:outline-none ${
            isOpen
              ? "bg-[#0B1F3A] text-accent-gold border-secondary-blue"
              : "bg-white text-primary-navy hover:text-secondary-blue border-border-light"
          }`}
          aria-label="Toggle custom theme selection"
        >
          <Palette className="w-5 h-5 animate-pulse" />
        </motion.button>
      </div>
    </div>
  );
}
