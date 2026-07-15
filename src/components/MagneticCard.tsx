import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";

interface MagneticCardProps {
  className?: string;
  children: ReactNode;
  glowColor?: string; // "r, g, b" string
  tiltStrength?: number; // max degrees of tilt
  key?: string | number;
}

/**
 * Wraps card content with a subtle magnetic tilt + cursor-following
 * spotlight glow. Designed to layer on top of existing card styling
 * (pass the card's existing className straight through).
 */
export default function MagneticCard({
  className = "",
  children,
  glowColor = "200, 165, 72",
  tiltStrength = 5,
}: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 250, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 250, damping: 22 });

  const translateY = useSpring(useMotionValue(0), { stiffness: 250, damping: 22 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    mouseX.set(px);
    mouseY.set(py);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rawRotateY.set(((px - centerX) / centerX) * tiltStrength);
    rawRotateX.set(-((py - centerY) / centerY) * tiltStrength);
    translateY.set(-4);
  };

  const handleMouseEnter = () => setHovering(true);

  const handleMouseLeave = () => {
    setHovering(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    translateY.set(0);
  };

  const glowBackground = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(${glowColor}, 0.14), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        y: translateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* Cursor-following spotlight glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-0 transition-opacity duration-300"
        style={{ background: glowBackground, opacity: hovering ? 1 : 0 }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
