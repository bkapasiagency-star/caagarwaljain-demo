import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Partners from "./components/Partners";
import Process from "./components/Process";
import KnowledgeCentre from "./components/KnowledgeCentre";
import GoogleReviews from "./components/GoogleReviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ConsultationModal from "./components/ConsultationModal";
import NotFound from "./components/NotFound";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { MotionConfig } from "motion/react";
import StructuredData from "./components/StructuredData";
import PaletteSwitcher from "./components/PaletteSwitcher";
import ScrollReveal from "./components/ScrollReveal";
import ScrollProgressBar from "./components/ScrollProgressBar";
import HeadSEO from "./components/HeadSEO";

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [appLoading, setAppLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [activeView, setActiveView] = useState<"home" | "privacy" | "terms" | "notFound">("home");
  const [activeSection, setActiveSection] = useState("home");

  // Determine dynamic head metadata based on active view and section
  let pageTitle = "Agarwal & Jain | Chartered Accountants & Financial Advisors, Surat";
  let pageDescription = "Agarwal & Jain is a premium Chartered Accountants firm in Surat, Gujarat. We navigate complex audits, direct & indirect taxation, and corporate compliance with absolute professional integrity.";
  let pageRobots = "index, follow";

  if (activeView === "home") {
    switch (activeSection) {
      case "about":
        pageTitle = "About Agarwal & Jain | Corporate Excellence in Surat";
        pageDescription = "Learn about the foundation, history, and partners of Agarwal & Jain. Since 2015, delivering premier statutory audits, corporate finance, and direct/indirect taxation.";
        break;
      case "services":
        pageTitle = "Services | Audit, Taxation & Advisory | Agarwal & Jain";
        pageDescription = "Explore our expert services: Statutory Audits, Direct & Indirect Tax, ROC Corporate Compliance, Project Finance and Virtual CFO solutions in Surat.";
        break;
      case "partners":
        pageTitle = "Leadership & Partners | Agarwal & Jain";
        pageDescription = "Meet the senior partners and fellowship members behind Agarwal & Jain. Our experienced registered CAs provide direct representation and legal submissions.";
        break;
      case "insights":
        pageTitle = "Knowledge Centre & Financial Insights | Agarwal & Jain";
        pageDescription = "Access critical statutory briefs, taxation changes, GST updates, and academic publications drafted by expert Chartered Accountants in Surat.";
        break;
      case "faqs":
        pageTitle = "Frequently Asked Questions | Agarwal & Jain";
        pageDescription = "Get factual and compliant answers regarding our audit methodologies, professional guidelines, business onboarding, and ICAI standards.";
        break;
      case "contact":
        pageTitle = "Secure Consultation Briefing | Contact Agarwal & Jain";
        pageDescription = "Arrange a highly confidential statutory consultation in Surat. Our principal officers are available to review audits, corporate tax structures, or ROC compliances.";
        break;
      default:
        // Default home
        break;
    }
  } else if (activeView === "privacy") {
    pageTitle = "Privacy Policy & Client Data Protection | Agarwal & Jain";
    pageDescription = "Our privacy protocols are fully standards-aligned with Section 15 of the Chartered Accountants Act, 1949, ensuring complete client data protection.";
  } else if (activeView === "terms") {
    pageTitle = "Terms & Conditions & Regulatory Compliance | Agarwal & Jain";
    pageDescription = "Review our professional engagement engagement terms aligned with Section 22 of the Chartered Accountants Act, 1949, and regulations on professional advertising.";
  } else if (activeView === "notFound") {
    pageTitle = "Page Not Found (404) | Agarwal & Jain";
    pageDescription = "The requested document or section could not be located. Browse the homepage of Agarwal & Jain, Chartered Accountants, Surat.";
    pageRobots = "noindex, nofollow";
  }

  // Manage screen-reader screen announcements on route/section change
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (appLoading) return;
    
    let routeName = "Home page";
    if (activeView === "privacy") routeName = "Privacy Policy page";
    else if (activeView === "terms") routeName = "Terms and Conditions page";
    else if (activeView === "notFound") routeName = "Page Not Found";
    else if (activeSection && activeSection !== "home") {
      routeName = `Home page, ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} section`;
    }
    
    setAnnouncement(`Navigated to ${routeName} - ${pageTitle}`);
  }, [activeView, activeSection, appLoading, pageTitle]);

  // Observer to track scrolling and highlight matching navbar link in real-time
  useEffect(() => {
    if (activeView !== "home" || appLoading) return;

    const sections = ["home", "about", "services", "partners", "insights", "faqs", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeView, appLoading]);

  // Navigate to specific scroll sections with header offsets
  const handleScrollToSection = (sectionId: string) => {
    setActiveView("home");
    setActiveSection(sectionId);
    
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        const offset = 90; // sticky header buffer
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = target.getBoundingClientRect().top;
        const targetPosition = targetRect - bodyRect;
        const offsetPosition = targetPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      {/* 1. App Entry Loader with high-end scale transitions */}
      {appLoading && <Loader onComplete={() => setAppLoading(false)} />}

      {!appLoading && (
        <div className="relative min-h-screen bg-bg-light text-text-primary selection:bg-accent-gold/25 selection:text-primary-navy">
          {/* SEO Dynamic Structured Data (JSON-LD) */}
          <StructuredData />

          {/* Dynamic SEO Head Management */}
          <HeadSEO 
            title={pageTitle}
            description={pageDescription}
            robots={pageRobots}
          />

          {/* SR live announcement of route changes */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement}
          </div>

          {/* Thin scroll progress indicator */}
          <ScrollProgressBar />

          {/* Interactive Custom Theme / Color Palette Switcher */}
          <PaletteSwitcher />

          {/* Floating WhatsApp click-to-chat button */}
          <WhatsAppButton />

          {/* 2. Interactive Custom Cursor (Desktop Only) */}
          <CustomCursor />

          {/* 3. Sticky Glass Navigation bar */}
          <Navbar
            onOpenConsultation={() => handleOpenConsultation()}
            activeTab={activeView === "home" ? activeSection : activeView}
            setActiveTab={(tab) => {
              if (tab === "privacy" || tab === "terms") {
                setActiveView(tab);
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                setActiveView("home");
              }
            }}
            onNavigateToSection={handleScrollToSection}
          />

          {/* 4. Active View Routing */}
          <main className="relative z-10 transition-all duration-500">
            {activeView === "home" && (
              <>
                {/* Home View Sections */}
                <Hero
                  onOpenConsultation={() => handleOpenConsultation()}
                  onExploreServices={() => handleScrollToSection("services")}
                />
                
                <ScrollReveal>
                  <TrustBar />
                </ScrollReveal>
                
                <ScrollReveal>
                  <About />
                </ScrollReveal>
                
                <ScrollReveal>
                  <WhyChooseUs />
                </ScrollReveal>
                
                <ScrollReveal>
                  <Services
                    onBookConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
                  />
                </ScrollReveal>
                
                <ScrollReveal>
                  <Industries />
                </ScrollReveal>
                
                <ScrollReveal>
                  <Partners
                    onBookConsultation={(partnerName) => handleOpenConsultation(partnerName)}
                  />
                </ScrollReveal>
                
                <ScrollReveal>
                  <Process />
                </ScrollReveal>
                
                <ScrollReveal>
                  <GoogleReviews />
                </ScrollReveal>
                
                <ScrollReveal>
                  <KnowledgeCentre />
                </ScrollReveal>
                
                <ScrollReveal>
                  <FAQ />
                </ScrollReveal>
                
                <ScrollReveal>
                  <Contact />
                </ScrollReveal>
                
                <ScrollReveal>
                  <CtaBanner
                    onOpenConsultation={() => handleOpenConsultation()}
                    onNavigateToContact={() => handleScrollToSection("contact")}
                  />
                </ScrollReveal>
              </>
            )}

            {activeView === "privacy" && (
              <PrivacyPolicy />
            )}

            {activeView === "terms" && (
              <TermsAndConditions />
            )}

            {activeView === "notFound" && (
              <NotFound
                onReturnHome={() => handleScrollToSection("home")}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            )}
          </main>

          {/* 5. Deep Corporate compliance Dark Footer */}
          <Footer
            onNavigateToSection={handleScrollToSection}
            onNavigateToView={(view) => {
              if (view === "home") {
                setActiveView("home");
                handleScrollToSection("home");
              } else {
                setActiveView(view as "privacy" | "terms");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          />

          {/* 6. Consultation Booking Dialog Form */}
          <ConsultationModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            preselectedService={preselectedService}
          />
        </div>
      )}
    </MotionConfig>
  );
}

