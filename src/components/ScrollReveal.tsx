import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number; // Vertical translation offset in pixels
}

/**
 * ScrollReveal Component
 * Leverages GSAP and ScrollTrigger to orchestrate smooth, high-end scroll-based
 * reveals (opacity fade + upward slide). Fully respects accessibility guidelines
 * by bypassing animations when prefers-reduced-motion is active.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  yOffset = 30,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (prefersReducedMotion) {
      // Instantly reveal and set to default coordinates for absolute accessibility
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    // Set initial hidden state: shifted slightly down and invisible
    gsap.set(el, {
      opacity: 0,
      y: yOffset,
    });

    // Create ScrollTrigger instance
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%", // triggers slightly before entering the active viewport area
        once: true, // only animate once per page load for professional feel
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    }, el);

    return () => {
      ctx.revert(); // clean up GSAP contexts and triggers on unmount
    };
  }, [delay, duration, yOffset, prefersReducedMotion]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
