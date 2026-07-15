import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export type ColorPaletteType = "midnight" | "emerald" | "plum" | "slate";

export interface PaletteDefinition {
  primaryNavy: string;
  secondaryBlue: string;
  accentGold: string;
  bgLight: string;
  surfaceWhite: string;
  alternateSurface: string;
  textPrimary: string;
  textSecondary: string;
  mutedText: string;
  borderLight: string;
  hoverBorder: string;
}

interface PaletteModes {
  light: PaletteDefinition;
  dark: PaletteDefinition;
}

export const COLOR_PALETTES: Record<ColorPaletteType, PaletteModes> = {
  midnight: {
    light: {
      primaryNavy: "#0B1F3A",
      secondaryBlue: "#123C73",
      accentGold: "#C8A548",
      bgLight: "#F8FAFC",
      surfaceWhite: "#FFFFFF",
      alternateSurface: "#F2F5F9",
      textPrimary: "#111827",
      textSecondary: "#4B5563",
      mutedText: "#6B7280",
      borderLight: "#E5E7EB",
      hoverBorder: "#CBD5E1",
    },
    dark: {
      primaryNavy: "#050B16",
      secondaryBlue: "#1B4A8C",
      accentGold: "#E0BE6C",
      bgLight: "#0A1526",
      surfaceWhite: "#111E33",
      alternateSurface: "#16233B",
      textPrimary: "#F1F5F9",
      textSecondary: "#B8C2D4",
      mutedText: "#8996AC",
      borderLight: "#243350",
      hoverBorder: "#324566",
    },
  },
  emerald: {
    light: {
      primaryNavy: "#0A2E24",
      secondaryBlue: "#125444",
      accentGold: "#D4AF37",
      bgLight: "#F3F7F5",
      surfaceWhite: "#FFFFFF",
      alternateSurface: "#E7EFEA",
      textPrimary: "#0D1F1A",
      textSecondary: "#3E4D48",
      mutedText: "#637570",
      borderLight: "#D2DFDB",
      hoverBorder: "#B5C7C1",
    },
    dark: {
      primaryNavy: "#04140F",
      secondaryBlue: "#1A6E58",
      accentGold: "#E4C458",
      bgLight: "#081D17",
      surfaceWhite: "#0F2A21",
      alternateSurface: "#123328",
      textPrimary: "#EEF6F2",
      textSecondary: "#B9CBC4",
      mutedText: "#87998F",
      borderLight: "#1E3A2E",
      hoverBorder: "#2B5140",
    },
  },
  plum: {
    light: {
      primaryNavy: "#2B1435",
      secondaryBlue: "#4D275E",
      accentGold: "#D2A654",
      bgLight: "#FAF6FB",
      surfaceWhite: "#FFFFFF",
      alternateSurface: "#EFE8F3",
      textPrimary: "#1E0C26",
      textSecondary: "#504157",
      mutedText: "#76657F",
      borderLight: "#E4D5EC",
      hoverBorder: "#CDBCD6",
    },
    dark: {
      primaryNavy: "#150A1A",
      secondaryBlue: "#6B3A81",
      accentGold: "#E2BC72",
      bgLight: "#180D1E",
      surfaceWhite: "#241230",
      alternateSurface: "#2B1638",
      textPrimary: "#F5EEF8",
      textSecondary: "#CBB9D2",
      mutedText: "#9A87A3",
      borderLight: "#38203F",
      hoverBorder: "#4C2C56",
    },
  },
  slate: {
    light: {
      primaryNavy: "#1E293B",
      secondaryBlue: "#334155",
      accentGold: "#94A3B8",
      bgLight: "#F8FAFC",
      surfaceWhite: "#FFFFFF",
      alternateSurface: "#E2E8F0",
      textPrimary: "#0F172A",
      textSecondary: "#475569",
      mutedText: "#64748B",
      borderLight: "#E2E8F0",
      hoverBorder: "#CBD5E1",
    },
    dark: {
      primaryNavy: "#080D16",
      secondaryBlue: "#475569",
      accentGold: "#B9C4D3",
      bgLight: "#0C1220",
      surfaceWhite: "#141B2C",
      alternateSurface: "#1A2236",
      textPrimary: "#F1F5F9",
      textSecondary: "#B6C0D1",
      mutedText: "#8592A8",
      borderLight: "#242E45",
      hoverBorder: "#333F5C",
    },
  },
};

export function useColorPalette() {
  const isFirstRender = useRef(true);

  const [palette, setPalette] = useState<ColorPaletteType>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ca-color-palette");
      if (saved === "midnight" || saved === "emerald" || saved === "plum" || saved === "slate") {
        return saved;
      }
    }
    return "midnight";
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ca-dark-mode");
      if (saved === "true") return true;
      if (saved === "false") return false;
    }
    return false;
  });

  const applyTheme = (type: ColorPaletteType, dark: boolean, animate: boolean = true) => {
    if (typeof window === "undefined") return;

    const values = dark ? COLOR_PALETTES[type].dark : COLOR_PALETTES[type].light;
    const root = document.documentElement;

    const props = {
      "--primary-navy": values.primaryNavy,
      "--secondary-blue": values.secondaryBlue,
      "--accent-gold": values.accentGold,
      "--bg-light": values.bgLight,
      "--surface-white": values.surfaceWhite,
      "--alternate-surface": values.alternateSurface,
      "--text-primary": values.textPrimary,
      "--text-secondary": values.textSecondary,
      "--muted-text": values.mutedText,
      "--border-light": values.borderLight,
      "--hover-border": values.hoverBorder,
    };

    if (animate) {
      gsap.to(root, {
        ...props,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      Object.entries(props).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }

    // Save preferences
    localStorage.setItem("ca-color-palette", type);
    localStorage.setItem("ca-dark-mode", String(dark));

    // Set theme classes for potential conditional css
    Object.keys(COLOR_PALETTES).forEach((p) => {
      if (p === type) {
        root.classList.add(`theme-${p}`);
      } else {
        root.classList.remove(`theme-${p}`);
      }
    });

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      applyTheme(palette, isDark, false);
      isFirstRender.current = false;
    } else {
      applyTheme(palette, isDark, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [palette, isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return {
    palette,
    setPalette,
    isDark,
    setIsDark,
    toggleDark,
    availablePalettes: Object.keys(COLOR_PALETTES) as ColorPaletteType[],
  };
}
