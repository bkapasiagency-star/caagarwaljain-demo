import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollProgressBar component
 * Displays a sleek, thin fixed progress bar at the very top of the viewport.
 * Automatically synchronizes its horizontal scale with the page's current scroll percentage.
 */
export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Initially scale horizontal (X) axis to 0
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    // Build the ScrollTrigger animation to scale the bar based on overall document scrolling
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3, // Adds a slight, luxurious lag/smoothing effect during rapid scrolls
      onUpdate: (self) => {
        gsap.to(bar, {
          scaleX: self.progress,
          duration: 0.1,
          overwrite: "auto",
          ease: "none",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none no-print">
      <div
        ref={barRef}
        className="w-full h-full bg-gradient-to-r from-secondary-blue via-accent-gold to-accent-gold"
        style={{ transformOrigin: "left center" }}
      />
    </div>
  );
}
