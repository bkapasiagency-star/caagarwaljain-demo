import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function CustomCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // Slow trail effect
    let frameId: number;
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      frameId = requestAnimationFrame(updateTrail);
    };
    frameId = requestAnimationFrame(updateTrail);

    // Event listeners to detect interactive hover
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, input, select, textarea, [role='button'], .clickable-card"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial setup and observer for dynamic elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [position, isTouchDevice]);

  if (isTouchDevice || isHidden || prefersReducedMotion) return null;

  return (
    <>
      <div
        className="custom-cursor no-print"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: isHovered ? "var(--color-secondary-blue)" : "var(--color-accent-gold)",
        }}
      />
      <div
        className="custom-cursor-ring no-print"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
          borderColor: isHovered ? "var(--color-accent-gold)" : "rgba(200, 165, 72, 0.35)",
          borderWidth: isHovered ? "2px" : "1px",
        }}
      />
    </>
  );
}
