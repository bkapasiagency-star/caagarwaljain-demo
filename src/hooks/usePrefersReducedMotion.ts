import { useEffect, useState } from "react";
import { gsap } from "gsap";

/**
 * Hook to detect 'prefers-reduced-motion' media query and globally disable GSAP animations.
 * Also returns the current status of the user preference for use with other animation systems like Framer Motion.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Use addEventListener with fallback support for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // @ts-ignore - support older matchMedia api
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // @ts-ignore - support older matchMedia api
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // 1. Configure GSAP defaults to render instantaneously
      gsap.defaults({
        duration: 0,
        delay: 0,
        stagger: 0,
        ease: "none"
      });

      // 2. Set global timeline scale to a very large number so currently running/scheduled transitions finish instantly
      gsap.globalTimeline.timeScale(9999);
      
      console.log("Accessibility Mode: 'prefers-reduced-motion' is active. GSAP animations have been globally disabled (forced to 0s duration).");
    } else {
      // Restore standard GSAP defaults
      gsap.defaults({
        duration: 0.5,
        delay: 0,
        stagger: 0,
        ease: "power1.out"
      });

      gsap.globalTimeline.timeScale(1);
    }
  }, [prefersReducedMotion]);

  return prefersReducedMotion;
}
